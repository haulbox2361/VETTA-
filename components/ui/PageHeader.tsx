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
  ShieldCheck,
  FileText,
  Sparkles,
} from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  tagline?: string;
}

function getTaglineIcon(tagline?: string, title?: string): React.ElementType {
  const text = (tagline || title || '').toLowerCase().trim();

  if (text.includes('portfolio') || text.includes('work') || text.includes('case study')) {
    return Briefcase;
  }
  if (text.includes('service') || text.includes('expertise') || text.includes('software') || text.includes('code')) {
    return BrainCircuit;
  }
  if (text.includes('research') || text.includes('intelligence') || text.includes('insight') || text.includes('lab')) {
    return FlaskConical;
  }
  if (text.includes('contact') || text.includes('touch') || text.includes('mail') || text.includes('inquiry')) {
    return Mail;
  }
  if (text.includes('story') || text.includes('about') || text.includes('team') || text.includes('company')) {
    return Users;
  }
  if (text.includes('data') || text.includes('analytics') || text.includes('pipeline')) {
    return LayoutDashboard;
  }
  if (text.includes('legal') || text.includes('privacy') || text.includes('terms') || text.includes('policy')) {
    return ShieldCheck;
  }

  return BrainCircuit;
}

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

  const IconComponent = getTaglineIcon(tagline, title);
  const displayText = tagline || title || 'VETTA';

  return (
    <div className="relative bg-gradient-to-br from-[#111F3C] via-[#162C58] to-[#1E3A8A] py-20 md:py-28 border-b border-white/15 overflow-hidden">

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
        className="absolute inset-0 bg-gradient-to-br from-[#111F3C]/95 via-[#162C58]/90 to-[#1E3A8A]/70"
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

      {/* Wallpaper watermark logo embedded in the background */}
      <div
        className="absolute right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-center"
        style={{ zIndex: 2 }}
      >
        {/* Soft ambient radial glow */}
        <div
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,160,255,0.20) 0%, rgba(30,58,138,0.10) 50%, transparent 70%)',
            width: '420px',
            height: '420px',
          }}
        />

        {/* Wallpaper watermark emblem - smooth slow rotation, blended inside the blue */}
        <div
          style={{
            animation: 'spin3d 35s linear infinite',
          }}
        >
          <IconComponent
            size={300}
            strokeWidth={1.5}
            className="text-white"
            style={{ opacity: 0.16 }}
          />
        </div>
      </div>

      <Container className="relative" style={{ zIndex: 10 }}>
        <div className="max-w-3xl">
          {tagline && (
            <span className="inline-flex items-center gap-2 text-white font-bold tracking-[0.15em] text-xs uppercase mb-5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm backdrop-blur-sm">
              <IconComponent size={13} className="text-white" />
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
