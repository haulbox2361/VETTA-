'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  tagline?: string;
}

// Slowly cycling background images for the page header
const bgImages = [
  '/images/about/about-1.jpg',
  '/images/about/about-3.jpg',
  '/images/about/about-5.jpg',
  '/images/about/about-7.jpg',
];

export function PageHeader({ title, description, tagline }: PageHeaderProps) {
  const [currentBg, setCurrentBg] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000); // slow 5s cycle
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-brand-black py-20 md:py-28 border-b border-slate-200 overflow-hidden">

      {/* Slowly cycling background images — very subtle */}
      {mounted && bgImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === currentBg ? 0.12 : 0, zIndex: 0 }}
        >
          <Image src={src} alt="" fill className="object-cover" priority={i === 0} />
        </div>
      ))}

      {/* Dark blue overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black/95 via-brand-black/85 to-brand-blue/60" style={{ zIndex: 1 }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-blue to-transparent" style={{ zIndex: 2 }} />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          zIndex: 1,
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="relative" style={{ zIndex: 10 }}>
        <div className="max-w-3xl">
          {tagline && (
            <span className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-[0.15em] text-xs uppercase mb-5 bg-brand-blue/20 px-3 py-1.5 rounded-full border border-brand-blue/30">
              {tagline}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
