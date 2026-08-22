"use client";

import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      {/* Very Subtle Clean Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-brand-blue) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)'
        }}
      />
    </div>
  );
}
