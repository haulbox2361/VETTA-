'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'fade';
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  className,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const baseClasses = 'transition-all ease-out will-change-[opacity,transform]';
  const durationStyle = { transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` };
  
  // Initial states before intersection
  const hiddenClasses = direction === 'up' ? 'opacity-0 translate-y-8' : 'opacity-0';
  // Final states after intersection
  const visibleClasses = direction === 'up' ? 'opacity-100 translate-y-0' : 'opacity-100';

  return (
    <div
      ref={ref}
      style={durationStyle}
      className={cn(baseClasses, isVisible ? visibleClasses : hiddenClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
}
