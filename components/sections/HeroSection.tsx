import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <Section className="bg-neutral-50 pb-20 pt-24 md:pt-32 lg:pt-40">
      <Container className="flex flex-col items-center text-center">
        <h1 className="text-display max-w-4xl text-brand-black mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
          Intelligent Engineering for Forward-Thinking Companies
        </h1>
        <p className="text-lg max-w-2xl text-neutral-700 mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '250ms' }}>
          We build intelligent systems, from AI automation to robust software, that solve complex business problems. The result: faster decisions, operational efficiency, and a competitive edge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <Link href="/contact">
            <Button className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform">Start a Project</Button>
          </Link>
          <Link href="/work">
            <Button variant="secondary" className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform">Explore Our Work</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
