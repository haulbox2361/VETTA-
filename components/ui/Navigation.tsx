'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrainCircuit, Code2, FlaskConical, Users, Briefcase } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services',  icon: BrainCircuit },
  { href: '/work',     label: 'Work',      icon: Briefcase     },
  { href: '/research', label: 'Research',  icon: FlaskConical  },
  { href: '/about',    label: 'About',     icon: Users         },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map(({ href, label, icon: Icon }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200',
              active
                ? 'text-brand-blue bg-brand-blue/8'
                : 'text-neutral-600 hover:text-brand-blue hover:bg-brand-blue/5'
            )}
          >
            <Icon
              size={14}
              className={cn(
                'transition-colors duration-200',
                active ? 'text-brand-blue' : 'text-neutral-400 group-hover:text-brand-blue'
              )}
            />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
