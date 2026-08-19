import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { Button } from './Button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <Container className="flex h-[60px] md:h-[80px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md p-1 -ml-1">
          {/* Logo placeholder - replace with actual logo.svg */}
          <span className="text-2xl font-bold text-brand-black tracking-tight flex items-center">
            <span className="text-brand-blue mr-1">/</span>VETTA
          </span>
        </Link>
        
        <Navigation />
        
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button>Start a Project</Button>
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
