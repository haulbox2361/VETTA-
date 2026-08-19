import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function CTASection() {
  return (
    <Section className="bg-brand-blue py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-h1 text-white mb-6 max-w-3xl">
          Ready to transform your technical operations?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl">
          Contact our team today to discuss your challenges. We'll provide a clear assessment of how intelligent engineering can drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/contact">
            <Button className="w-full sm:w-auto bg-white text-brand-blue hover:bg-neutral-100 hover:text-brand-blue focus-visible:ring-white">
              Start a Project
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
