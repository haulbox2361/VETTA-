import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-br from-[#111F3C] via-[#162C58] to-[#1E3A8A] py-16 md:py-24 border-t border-white/15 relative z-20 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
      
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md hover:opacity-90 transition-opacity">
              <Logo className="origin-left" inverted={true} />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              Simple Outside. Intelligent Inside. Professional technology consulting for forward-thinking companies.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200">
                {/* LinkedIn SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200">
                {/* X/Twitter SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200">
                {/* GitHub SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Services Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link href="/services/ai-automation" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">AI & Automation</Link></li>
              <li><Link href="/services/data-analytics" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Data Analysis & Intelligence</Link></li>
              <li><Link href="/services/software-development" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Software Development</Link></li>
              <li><Link href="/services/web-development" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Web Development</Link></li>
              <li><Link href="/services/research-intelligence" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Research & Intelligence</Link></li>
              <li><Link href="/services/technology-consulting" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Technology Consulting</Link></li>
            </ul>
          </div>
          
          {/* Company Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link href="/work" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Work</Link></li>
              <li><Link href="/research" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Research</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">About</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link href="/privacy" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-8 gap-4">
          <p className="text-sm text-white/80">
            &copy; {currentYear} VETTA Intelligence. All rights reserved.
          </p>
          <p className="text-xs text-white/70">
            Built with precision. Engineered for impact.
          </p>
        </div>
      </Container>
    </footer>
  );
}
