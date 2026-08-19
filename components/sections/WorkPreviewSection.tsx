import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

// Placeholder data for Phase 04
const projects = [
  {
    title: 'Enterprise Data Pipeline',
    category: 'Data Analytics',
    description: 'Built a scalable real-time data processing pipeline for a Fortune 500 logistics company.',
    placeholderColor: 'bg-neutral-200'
  },
  {
    title: 'Automated Customer Operations',
    category: 'AI & Automation',
    description: 'Implemented an AI-driven workflow that reduced manual processing time by 75%.',
    placeholderColor: 'bg-brand-blue/10'
  }
];

export default function WorkPreviewSection() {
  return (
    <Section>
      <Container>
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-h2 text-brand-black mb-4">Featured Work</h2>
            <p className="text-lg text-neutral-700 max-w-xl">
              Explore how we've helped companies transform their operations and build powerful digital products.
            </p>
          </div>
          <Link href="/work">
            <Button variant="secondary" className="hidden md:inline-flex hover:-translate-y-0.5 transition-transform">View All Work</Button>
          </Link>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-0">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 150}>
              <Link href="/work" className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl block">
                <Card className="p-0 overflow-hidden h-full flex flex-col border-transparent hover:border-brand-blue/20 transition-all">
                  <div className={`w-full h-64 ${project.placeholderColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium group-hover:scale-105 transition-transform duration-500">
                      Project Image Placeholder
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-xs font-bold tracking-wider text-brand-blue uppercase mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-h3 text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body text-neutral-500 mb-0">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <Link href="/work">
            <Button variant="secondary" className="w-full">View All Work</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
