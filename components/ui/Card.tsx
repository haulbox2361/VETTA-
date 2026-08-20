import React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-white/8 bg-white/5 relative z-20 p-8 shadow-sm transition-all hover:shadow-lg hover:border-white/15 hover:bg-white/8',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';
