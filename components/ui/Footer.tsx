import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-brand-blue py-16 md:py-24 border-t border-white/20 relative z-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md hover:opacity-90 transition-opacity">
              <Logo className="origin-left" inverted={true} />
            </Link>
            <p className="text-sm text-white leading-relaxed">
              Simple Outside. Intelligent Inside. Professional technology consulting for forward-thinking companies.
            </p>
          </div>
          
          {/* Services Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link href="/services/ai-automation" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">AI & Automation</Link></li>
              <li><Link href="/services/data-analytics" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Data Analysis & Intelligence</Link></li>
              <li><Link href="/services/software-development" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Software Development</Link></li>
              <li><Link href="/services/web-development" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Web Development</Link></li>
              <li><Link href="/services/research-intelligence" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Research & Intelligence</Link></li>
              <li><Link href="/services/technology-consulting" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Technology Consulting</Link></li>
            </ul>
          </div>
          
          {/* Company Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link href="/work" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Work</Link></li>
              <li><Link href="/research" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Research</Link></li>
              <li><Link href="/about" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">About</Link></li>
              <li><Link href="/contact" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link href="/privacy" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-8">
          <p className="text-sm text-white">
            &copy; {currentYear} VETTA Intelligence. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
