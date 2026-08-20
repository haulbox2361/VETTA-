import React from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/ui/ContactForm';
import { Mail, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact | VETTA Intelligence',
  description: 'Get in touch with our engineering team to discuss your next project, AI integration, or software development needs.',
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Get In Touch"
        description="Ready to transform your operations? Fill out the form below and one of our technical strategists will review your inquiry."
        tagline="Contact Us"
      />

      <section className="py-16 md:py-24 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Col: Contact Info */}
            <div className="lg:col-span-4 lg:pr-8 bg-white relative z-20 p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Let's discuss your project</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email Us</h3>
                    <a href="mailto:inquiries@vetta.com" className="text-brand-blue hover:underline">
                      inquiries@vetta.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Response Time</h3>
                    <p className="text-neutral-600">
                      We aim to respond to all inquiries within 24 business hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Office</h3>
                    <p className="text-neutral-600">
                      Global Remote<br/>
                      Distributed Engineering Team
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
                <h3 className="font-bold text-neutral-900 mb-3">What happens next?</h3>
                <ol className="text-sm text-neutral-600 space-y-3 list-decimal list-inside">
                  <li>We review your project details.</li>
                  <li>We schedule a 30-minute discovery call.</li>
                  <li>We provide a high-level technical assessment.</li>
                  <li>We propose a tailored engagement plan.</li>
                </ol>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl border border-neutral-200 shadow-sm">
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
