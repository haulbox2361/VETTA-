import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

// Simple rate limit tracking (in-memory for demo, use Redis for production)
const rateLimits = new Map<string, { count: number, resetTime: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    
    // Basic Rate Limiting: 5 requests per minute per IP
    const now = Date.now();
    const windowMs = 60 * 1000;
    const limit = rateLimits.get(ip);
    
    if (limit && limit.resetTime > now) {
      if (limit.count >= 5) {
        return NextResponse.json({ success: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      limit.count++;
    } else {
      rateLimits.set(ip, { count: 1, resetTime: now + windowMs });
    }

    const body = await req.json();
    
    // Strict typing and sanitization
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const serviceInterest = typeof body.serviceInterest === 'string' ? body.serviceInterest.trim() : '';
    const preferredContact = typeof body.preferredContact === 'string' ? body.preferredContact.trim() : '';

    // Validation
    if (!name || name.length > 100) return NextResponse.json({ success: false, error: 'Valid name is required' }, { status: 400 });
    if (!email || email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ success: false, error: 'Valid email is required' }, { status: 400 });
    if (!message || message.length < 10 || message.length > 2000) return NextResponse.json({ success: false, error: 'Message must be between 10 and 2000 characters' }, { status: 400 });

    // 1. Store in Supabase
    // If Supabase isn't configured, we swallow the error for demo purposes
    let submissionId = 'demo-id-' + Date.now();
    
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          name,
          email,
          phone,
          message,
          service_interest: serviceInterest,
          preferred_contact: preferredContact,
        }])
        .select()
        .single();
        
      if (error) {
        console.error('Supabase Error:', error);
        // Continue processing to attempt email even if DB fails
      } else if (data) {
        submissionId = data.id;
      }
    }

    // 2. Send Emails via Resend (Skip if no real API key)
    if (process.env.RESEND_API_KEY) {
      const toEmail = process.env.EMAIL_TO_ADDRESS || 'inquiries@vetta.com';
      const fromEmail = process.env.EMAIL_FROM_ADDRESS || 'hello@vetta.com';

      // Send to VETTA
      await resend.emails.send({
        from: `VETTA Website <${fromEmail}>`,
        to: [toEmail],
        subject: `New Project Inquiry from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Interest: ${serviceInterest || 'Not specified'}
Preferred Contact: ${preferredContact || 'email'}

Message:
${message}
        `,
      });

      // Send Confirmation to User
      await resend.emails.send({
        from: `VETTA Intelligence <${fromEmail}>`,
        to: [email],
        subject: 'We Received Your Inquiry - Thank You',
        text: `
Hi ${name},

Thank you for reaching out to VETTA.

We received your inquiry and will get back to you within 24 hours.
We look forward to discussing your project.

Best regards,
VETTA Intelligence
        `,
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your inquiry',
      id: submissionId
    }, { status: 201 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'An unexpected error occurred' }, { status: 500 });
  }
}
