import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function WhatWeDoSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-h2 text-brand-black mb-4">What VETTA Does</h2>
            <div className="h-1 w-20 bg-brand-blue rounded-full"></div>
          </div>
          <div className="md:w-2/3">
            <p className="text-h4 text-neutral-700 font-normal leading-relaxed">
              VETTA Intelligence is a premium technology consultancy specializing in <strong className="text-brand-black">Artificial Intelligence</strong>, <strong className="text-brand-black">Data Analytics</strong>, and <strong className="text-brand-black">Modern Software Development</strong>. We partner with B2B companies, startups, and enterprises to implement digital transformations that deliver measurable operational efficiency and robust, scalable solutions.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
