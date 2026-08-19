import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn('w-full py-12 md:py-20 lg:py-24', className)}
      {...props}
    >
      {children}
    </section>
  );
}
