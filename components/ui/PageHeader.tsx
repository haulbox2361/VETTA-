'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import {
  BrainCircuit,
  Code2,
  FlaskConical,
  Users,
  Mail,
  Briefcase,
  LayoutDashboard,
} from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  tagline?: string;
}

// Map tagline → lucide icon
const taglineIcons: Record<string, React.ElementType> = {
  'Expertise':    BrainCircuit,
  'Our Work':     Briefcase,
  'Intelligence': FlaskConical,
  'Contact Us':   Mail,
  'Our Story':    Users,
  'Data':         LayoutDashboard,
  'Services':     Code2,
};

// Slowly cycling background images
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const IconComponent = tagline ? taglineIcons[tagline] : null;

  return (
    <div className="relative bg-brand-black py-20 md:py-28 border-b border-white/10 overflow-hidden">

      {/* Slowly cycling background images — ultra subtle */}
      {mounted && bgImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === currentBg ? 0.12 : 0, zIndex: 0 }}
        >
          <Image src={src} alt="" fill className="object-cover" priority={i === 0} />
        </div>
      ))}

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/90 to-brand-blue/50"
        style={{ zIndex: 1 }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-blue to-transparent"
        style={{ zIndex: 2 }}
      />

      {/* Subtle white dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          zIndex: 1,
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Large 3D rotating icon + name — right side decorative */}
      {IconComponent && (
        <div
          className="absolute right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex flex-col items-center gap-4"
          style={{ zIndex: 3 }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(99,160,255,0.25) 0%, transparent 70%)',
              width: '340px',
              height: '340px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Spinning Icon */}
          <div
            style={{
              animation: 'spin3d 6s linear infinite',
              filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.7)) drop-shadow(0 0 6px rgba(99,160,255,0.9))',
            }}
          >
            <IconComponent
              size={240}
              strokeWidth={1.2}
              className="text-white"
              style={{ opacity: 0.75 }}
            />
          </div>
          {/* Spinning Name Text */}
          <div
            style={{
              animation: 'spin3d 6s linear infinite',
              animationDelay: '0.1s',
            }}
          >
            <span
              className="text-white font-extrabold tracking-[0.2em] uppercase text-lg"
              style={{
                opacity: 0.80,
                textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 6px rgba(99,160,255,1)',
              }}
            >
              {tagline}
            </span>
          </div>
        </div>
      )}

      <Container className="relative" style={{ zIndex: 10 }}>
        <div className="max-w-3xl">
          {tagline && (
            <span className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-[0.15em] text-xs uppercase mb-5 bg-brand-blue/20 px-3 py-1.5 rounded-full border border-brand-blue/30">
              {IconComponent && <IconComponent size={12} />}
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
