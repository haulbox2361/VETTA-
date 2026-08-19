import React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-brand-blue/20',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';
