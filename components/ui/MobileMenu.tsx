'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { usePathname } from 'next/navigation';

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/research', label: 'Research' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className="md:hidden">
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
        className="flex h-11 w-11 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-50 flex flex-col bg-white px-4 py-6">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block py-4 text-h4 transition-colors',
                  pathname === link.href ? 'text-brand-blue' : 'text-neutral-700'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-8">
            <Link href="/contact">
              <Button className="w-full">Start a Project</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
