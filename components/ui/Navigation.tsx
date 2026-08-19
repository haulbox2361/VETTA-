'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const links = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/research', label: 'Research' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-body font-medium transition-colors hover:text-brand-blue',
            pathname.startsWith(link.href) ? 'text-brand-blue' : 'text-neutral-700'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
