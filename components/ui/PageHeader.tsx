import React from 'react';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  tagline?: string;
}

export function PageHeader({ title, description, tagline }: PageHeaderProps) {
  return (
    <div className="bg-neutral-50 py-16 md:py-24 border-b border-neutral-200">
      <Container>
        <div className="max-w-3xl">
          {tagline && (
            <span className="text-brand-blue font-medium tracking-wide text-sm uppercase mb-3 block">
              {tagline}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
