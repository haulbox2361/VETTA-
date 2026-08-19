import React from 'react';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  tagline?: string;
}

export function PageHeader({ title, description, tagline }: PageHeaderProps) {
  return (
    <div className="relative bg-white py-16 md:py-24 border-b border-slate-200 overflow-hidden">
      {/* Very subtle background pattern to add texture without being heavy */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {tagline && (
            <span className="text-brand-blue font-bold tracking-[0.15em] text-xs uppercase mb-4 block">
              {tagline}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-[#0F172A] mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
