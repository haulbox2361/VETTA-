'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Label } from './Label';
import { ShieldCheck, Zap, Users } from 'lucide-react';

const serviceSlugMap: Record<string, string> = {
  'ai-automation': 'AI & Automation',
  'data-analytics': 'Data & Analytics',
  'data-intelligence': 'Data & Analytics',
  'software-development': 'Software Development',
  'web-development': 'Web Development',
  'technology-consulting': 'Technology Consulting',
  'research-intelligence': 'Research & Intelligence',
};

const timelines = [
  'Immediate (< 1 mo)',
  '1–3 Months',
  '3–6 Months',
  'Exploratory / Planning',
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('1–3 Months');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service');
      if (serviceParam && serviceSlugMap[serviceParam]) {
        setSelectedService(serviceSlugMap[serviceParam]);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      serviceInterest: selectedService || formData.get('serviceInterest'),
      timeline: selectedTimeline,
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
          We have received your project details and will be in touch within 24 hours with a preliminary technical assessment.
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
          <Label htmlFor="email">Work Email <span className="text-red-500">*</span></Label>
          <Input id="email" name="email" type="email" required placeholder="jane@company.com" disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="serviceInterest">Primary Service Interest</Label>
          <select 
            id="serviceInterest" 
            name="serviceInterest"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="flex h-11 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            <option value="">Select a capability area...</option>
            <option value="AI & Automation">AI & Automation</option>
            <option value="Data & Analytics">Data & Analytics</option>
            <option value="Software Development">Software Development</option>
            <option value="Web Development">Web Development</option>
            <option value="Technology Consulting">Technology Consulting</option>
            <option value="Research & Intelligence">Research & Intelligence</option>
            <option value="Other">Other / Custom Scope</option>
          </select>
        </div>
      </div>

      {/* Target Project Timeline Selector */}
      <div className="space-y-2">
        <Label>Estimated Project Timeline</Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {timelines.map((timeline) => (
            <button
              key={timeline}
              type="button"
              onClick={() => setSelectedTimeline(timeline)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                selectedTimeline === timeline
                  ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                  : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-brand-blue/40 hover:bg-white'
              }`}
            >
              {timeline}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Scope & Technical Goals <span className="text-red-500">*</span></Label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Describe your operational bottleneck, data architecture, or software engineering requirements..."
          className="flex w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
        <Button type="submit" className="w-full sm:w-auto min-w-[220px]" disabled={isSubmitting}>
          {isSubmitting ? 'Transmitting Request...' : 'Initiate Project Assessment'}
        </Button>
      </div>

      {/* Trust & Reassurance Badges */}
      <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-brand-blue shrink-0" />
          <span>Strict NDA Protection</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-brand-blue shrink-0" />
          <span>24h Technical Review</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-brand-blue shrink-0" />
          <span>Senior Engineers Only</span>
        </div>
      </div>
    </form>
  );
}
