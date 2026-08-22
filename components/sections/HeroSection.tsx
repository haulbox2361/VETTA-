import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

const heroImages = [
  '/images/about/about-1.jpg',
  '/images/about/about-2.jpg',
  '/images/about/about-3.jpg',
  '/images/about/about-4.jpg',
  '/images/about/about-5.jpg',
  '/images/about/about-6.jpg',
  '/images/about/about-7.jpg',
];

export default function HeroSection() {
  return (
    <section className="pt-4 md:pt-8 lg:pt-10 pb-12 md:pb-16 overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left order-1 lg:order-1">
          <span
            className="inline-block mb-3.5 text-xs font-bold tracking-[0.18em] uppercase text-brand-blue bg-brand-blue/8 px-3.5 py-1.5 rounded-full border border-brand-blue/15 opacity-0 animate-slide-up"
            style={{ animationDelay: '0ms' }}
          >
            Premium Technology Consultancy
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] font-extrabold tracking-tight max-w-3xl text-brand-black mb-4 opacity-0 animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            Intelligent Engineering for Forward-Thinking Companies
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl text-neutral-600 mb-7 opacity-0 animate-slide-up"
            style={{ animationDelay: '250ms' }}
          >
            We build intelligent systems — from AI automation to robust software — that solve complex business problems. The result: faster decisions, operational efficiency, and a competitive edge.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto opacity-0 animate-slide-up"
            style={{ animationDelay: '400ms' }}
          >
            <Link href="/contact">
              <Button className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform shadow-md">Start a Project</Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform">Explore Our Work</Button>
            </Link>
          </div>

          {/* Trust stat badges */}
          <div
            className="mt-8 pt-6 border-t border-neutral-200/70 w-full flex flex-wrap gap-6 sm:gap-10 opacity-0 animate-slide-up"
            style={{ animationDelay: '550ms' }}
          >
            {[
              { label: '24h', sub: 'Response Guarantee' },
              { label: '100%', sub: 'Senior Engineers' },
              { label: 'Zero', sub: 'Technical Debt' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold text-brand-black tracking-tight">{stat.label}</span>
                <span className="text-xs text-neutral-500 font-medium">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image Showcase */}
        <div
          className="flex-shrink-0 w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] order-2 lg:order-2 opacity-0 animate-slide-up"
          style={{ animationDelay: '200ms' }}
        >
          <div className="relative">
            {/* Ambient glow behind the frame */}
            <div className="absolute -inset-3 bg-brand-blue/8 rounded-3xl blur-xl" />

            {/* Main image frame */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-[0_16px_50px_rgba(30,58,138,0.10)] aspect-[4/5]">
              <ImageCarousel images={heroImages} interval={4500} />

              {/* Overlay gradient at bottom for depth */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none z-20" />

              {/* Floating badge on the image */}
              <div className="absolute bottom-4 left-4 z-30 bg-white/95 backdrop-blur-sm rounded-xl px-3.5 py-2.5 shadow-md border border-white/80">
                <div className="text-[11px] font-bold text-brand-blue uppercase tracking-wider mb-0.5">Intelligent Systems</div>
                <div className="text-xs font-semibold text-brand-black">AI · Data · Software</div>
              </div>
            </div>

            {/* Corner accent — top right */}
            <div className="absolute -top-2.5 -right-2.5 w-12 h-12 border-t-2 border-r-2 border-brand-blue/30 rounded-tr-xl pointer-events-none" />
            {/* Corner accent — bottom left */}
            <div className="absolute -bottom-2.5 -left-2.5 w-12 h-12 border-b-2 border-l-2 border-brand-blue/30 rounded-bl-xl pointer-events-none" />
          </div>
        </div>

      </Container>
    </section>
  );
}
