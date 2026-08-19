'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'sm' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[48px]',
          {
            'bg-brand-blue text-white hover:bg-brand-blue-hover px-6 py-3 text-sm shadow-sm': variant === 'primary',
            'bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 px-6 py-3 text-sm shadow-sm': variant === 'secondary',
            'bg-transparent text-brand-blue hover:text-brand-blue-hover p-0 min-h-0 underline-offset-4 hover:underline': variant === 'tertiary',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
