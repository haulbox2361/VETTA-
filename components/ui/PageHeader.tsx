import React from 'react';
import { Container } from './Container';
import { BrainCircuit, Database, Code, Globe, FileSearch, LineChart } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  tagline?: string;
  icon?: React.ReactNode;
}

const iconMap: Record<string, React.ReactNode> = {
  'Expertise': <BrainCircuit size={28} className="text-brand-blue" />,
  'Our Work': <Code size={28} className="text-brand-blue" />,
  'Intelligence': <FileSearch size={28} className="text-brand-blue" />,
  'Contact Us': <Globe size={28} className="text-brand-blue" />,
  'Our Story': <LineChart size={28} className="text-brand-blue" />,
  'Data': <Database size={28} className="text-brand-blue" />,
};

export function PageHeader({ title, description, tagline }: PageHeaderProps) {
  const decorativeIcon = tagline ? iconMap[tagline] : null;

  return (
    <div className="relative bg-white py-16 md:py-24 border-b border-slate-200 overflow-hidden">
      {/* Very subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Decorative right element */}
      {decorativeIcon && (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] hidden md:flex items-center justify-center w-64 h-64 text-brand-blue pointer-events-none">
          <div className="scale-[5]">{decorativeIcon}</div>
        </div>
      )}
      
      {/* Gradient accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {tagline && (
            <span className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-[0.15em] text-xs uppercase mb-5 bg-brand-blue/8 px-3 py-1.5 rounded-full border border-brand-blue/15">
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
