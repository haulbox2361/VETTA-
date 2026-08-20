import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BrainCircuit, Database, Code, Globe, ShieldCheck, Cpu } from 'lucide-react';

const techIcons = [
  { icon: BrainCircuit, label: 'AI & Automation', color: 'bg-blue-50 text-brand-blue' },
  { icon: Database, label: 'Data Intelligence', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Code, label: 'Software Dev', color: 'bg-sky-50 text-sky-600' },
  { icon: Globe, label: 'Web Development', color: 'bg-blue-50 text-brand-blue' },
  { icon: Cpu, label: 'Tech Consulting', color: 'bg-indigo-50 text-indigo-600' },
  { icon: ShieldCheck, label: 'Security First', color: 'bg-sky-50 text-sky-600' },
];

export default function HeroSection() {
  return (
    <Section className="bg-neutral-50 pb-20 pt-24 md:pt-32 lg:pt-40 overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start text-left">
          <span className="inline-block mb-5 text-xs font-bold tracking-[0.18em] uppercase text-brand-blue bg-brand-blue/8 px-4 py-2 rounded-full border border-brand-blue/15 opacity-0 animate-slide-up" style={{ animationDelay: '0ms' }}>
            Premium Technology Consultancy
          </span>
          <h1 className="text-display max-w-3xl text-brand-black mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Intelligent Engineering for Forward-Thinking Companies
          </h1>
          <p className="text-lg max-w-xl text-neutral-700 mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '250ms' }}>
            We build intelligent systems — from AI automation to robust software — that solve complex business problems. The result: faster decisions, operational efficiency, and a competitive edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link href="/contact">
              <Button className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform">Start a Project</Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform">Explore Our Work</Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 opacity-0 animate-slide-up" style={{ animationDelay: '550ms' }}>
            {[
              { label: '40%', sub: 'Avg. Cost Reduction' },
              { label: '75%', sub: 'Efficiency Gain' },
              { label: '24h', sub: 'Response Time' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-brand-black tracking-tight">{stat.label}</span>
                <span className="text-xs text-neutral-500 font-medium">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual grid of capabilities */}
        <div className="flex-shrink-0 w-full max-w-sm lg:max-w-[380px] opacity-0 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl blur-3xl scale-110" />
            <div className="relative grid grid-cols-2 gap-4">
              {techIcons.map(({ icon: Icon, label, color }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-start gap-3 p-5 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:-translate-y-1 transition-transform duration-300`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className={`p-2.5 rounded-xl ${color}`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-sm font-semibold text-brand-black leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
