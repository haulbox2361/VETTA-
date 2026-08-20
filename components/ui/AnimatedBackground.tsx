"use client";

import React, { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Layer */}
      <div className="absolute inset-0 bg-[#F8FAFC]"></div>

      {/* Subtle Grid - Fades out towards bottom */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
        }}
      />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-brand-blue/5 blur-[100px] animate-blob" />
      
      <div 
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-600/5 blur-[100px] animate-blob" 
        style={{ animationDelay: '2s', animationDuration: '25s' }} 
      />
      
      <div 
        className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-cyan-600/5 blur-[100px] animate-blob" 
        style={{ animationDelay: '4s', animationDuration: '30s' }} 
      />

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-brand-blue/20 rounded-full animate-float opacity-0"
            style={{
              width: Math.random() * 3 + 2 + 'px',
              height: Math.random() * 3 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 15 + 's',
              animationDelay: Math.random() * 8 + 's',
            }}
          />
        ))}
      </div>
    </div>
  );
}
