"use client";

import React, { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      {/* Very Subtle Technical Pattern (dotted grid) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-brand-blue) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)'
        }}
      />

      {/* Soft Blue Ambient Glows */}
      <div 
        className="absolute top-[-5%] left-[-5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] animate-blob" 
        style={{ backgroundColor: 'var(--color-brand-blue)', opacity: 0.03, animationDuration: '20s' }} 
      />
      <div 
        className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] animate-blob" 
        style={{ backgroundColor: 'var(--color-info)', opacity: 0.03, animationDelay: '5s', animationDuration: '25s' }} 
      />
      
      {/* Subtle Indigo Accent Glow */}
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] animate-blob" 
        style={{ backgroundColor: '#4F46E5', opacity: 0.02, animationDelay: '2s', animationDuration: '22s' }} 
      />

      {/* Subtle Dark-Blue Dots (Sparse, Elegant, Drifting) */}
      <div className="absolute inset-0">
        {[...Array(75)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-0"
            style={{
              backgroundColor: 'var(--color-brand-blue)',
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 8 + 15 + 's',
              animationDelay: Math.random() * 12 + 's',
            }}
          />
        ))}
      </div>
    </div>
  );
}
