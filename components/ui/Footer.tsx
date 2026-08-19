import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md hover:opacity-90 transition-opacity">
              <Logo className="scale-90 origin-left" />
            </Link>
            <p className="text-sm text-neutral-500">
              Simple Outside. Intelligent Inside. Professional technology consulting for forward-thinking companies.
            </p>
          </div>
          
          {/* Services Col */}
          <div className="flex flex-col gap-3">
            <h3 className="text-label text-neutral-700">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <li><Link href="/services/ai-automation" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">AI & Automation</Link></li>
              <li><Link href="/services/data-analytics" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Data Analysis & Intelligence</Link></li>
              <li><Link href="/services/software-development" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Software Development</Link></li>
              <li><Link href="/services/web-development" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Web Development</Link></li>
              <li><Link href="/services/research-intelligence" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Research & Intelligence</Link></li>
              <li><Link href="/services/technology-consulting" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Technology Consulting</Link></li>
            </ul>
          </div>
          
          {/* Company Col */}
          <div className="flex flex-col gap-3">
            <h3 className="text-label text-neutral-700">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <li><Link href="/work" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Work</Link></li>
              <li><Link href="/research" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Research</Link></li>
              <li><Link href="/about" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal Col */}
          <div className="flex flex-col gap-3">
            <h3 className="text-label text-neutral-700">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <li><Link href="/privacy" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} VETTA Intelligence. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
