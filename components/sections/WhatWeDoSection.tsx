import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const stats = [
  { value: '40%', label: 'Average Cost Reduction' },
  { value: '75%', label: 'Efficiency Gain Achieved' },
  { value: '5+', label: 'Core Technology Disciplines' },
  { value: '24h', label: 'Response Guarantee' },
];

export default function WhatWeDoSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <Reveal className="md:w-1/3">
            <h2 className="text-h2 text-brand-black mb-4">What VETTA Does</h2>
            <div className="h-1 w-20 bg-brand-blue rounded-full mb-6"></div>
            <p className="text-body text-neutral-500 leading-relaxed">
              VETTA Intelligence is a premium technology consultancy specializing in{' '}
              <strong className="text-brand-black">Artificial Intelligence</strong>,{' '}
              <strong className="text-brand-black">Data Analytics</strong>, and{' '}
              <strong className="text-brand-black">Modern Software Development</strong>.{' '}
              We partner with B2B companies, startups, and enterprises to implement digital
              transformations that deliver measurable operational efficiency.
            </p>
          </Reveal>
          <Reveal className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 bg-neutral-50 border border-neutral-200 rounded-2xl hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-colors duration-300"
                >
                  <span className="text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
