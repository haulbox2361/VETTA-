import React from 'react';

export function Logo({ className = '', inverted = false }: { className?: string, inverted?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="38" 
        height="38" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`${inverted ? 'text-white' : 'text-brand-blue'} flex-shrink-0`}
      >
        {/* The Dot */}
        <circle cx="8" cy="12" r="4.5" fill="currentColor" />
        
        {/* The Slash */}
        <path 
          d="M24 6 L14 26" 
          stroke="currentColor" 
          strokeWidth="7" 
          strokeLinecap="round" 
        />
      </svg>
      <span className={`text-3xl font-extrabold tracking-widest ml-1 uppercase ${inverted ? 'text-white' : 'text-white'}`}>
        VETTA
      </span>
    </div>
  );
}
