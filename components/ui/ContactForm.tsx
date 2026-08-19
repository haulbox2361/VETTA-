'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Label } from './Label';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      serviceInterest: formData.get('serviceInterest'),
      preferredContact: formData.get('preferredContact'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/20 text-brand-blue mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank you for your inquiry</h3>
        <p className="text-neutral-600">
          We have received your message and will be in touch within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input id="name" name="name" required placeholder="Jane Doe" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input id="email" name="email" type="email" required placeholder="jane@company.com" disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="serviceInterest">Primary Interest</Label>
          <select 
            id="serviceInterest" 
            name="serviceInterest"
            className="flex h-11 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            <option value="">Select a service...</option>
            <option value="AI & Automation">AI & Automation</option>
            <option value="Data & Analytics">Data & Analytics</option>
            <option value="Software Development">Software Development</option>
            <option value="Web Development">Web Development</option>
            <option value="Technology Consulting">Technology Consulting</option>
            <option value="Research & Intelligence">Research & Intelligence</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <Label>Preferred Contact Method</Label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="radio" name="preferredContact" value="email" defaultChecked className="text-brand-blue focus:ring-brand-blue" />
            Email
          </label>
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="radio" name="preferredContact" value="phone" className="text-brand-blue focus:ring-brand-blue" />
            Phone
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details <span className="text-red-500">*</span></Label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Please describe your project, goals, and any specific challenges..."
          className="flex w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto min-w-[200px]" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
