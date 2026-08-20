import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const projects = [
  {
    title: 'Enterprise Data Pipeline',
    category: 'Data Analytics',
    description: 'Built a scalable real-time data processing pipeline for a Fortune 500 logistics company, handling 1.2M+ requests/min with 99.8% uptime.',
    image: '/images/work/work-1.jpg',
    metric: '99.8% Uptime',
    hasImage: true,
  },
  {
    title: 'Automated Customer Operations',
    category: 'AI & Automation',
    description: 'Implemented an AI-driven workflow that reduced manual processing time by 75%, handling 247+ support tickets autonomously per day.',
    image: null,
    metric: '75% Efficiency Gain',
    hasImage: false,
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
              <Link href="/work" className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl block h-full">
                <Card className="p-0 overflow-hidden h-full flex flex-col border-transparent hover:border-brand-blue/20 transition-all">
                  {/* Project Image */}
                  <div className="w-full h-64 relative overflow-hidden bg-neutral-100">
                    {project.hasImage ? (
                      <Image
                        src={project.image!}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Stylised placeholder for AI Automation project */
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 to-indigo-700 flex items-center justify-center">
                        <div className="text-center text-white px-8">
                          <div className="text-5xl font-extrabold tracking-tighter mb-2">75%</div>
                          <div className="text-sm font-semibold opacity-80 uppercase tracking-widest">Efficiency Gain</div>
                          <div className="mt-6 grid grid-cols-3 gap-3 opacity-60">
                            {['Tickets/Day', 'Automated', 'Accuracy'].map((label, i) => (
                              <div key={i} className="bg-white/10 rounded-lg px-3 py-2">
                                <div className="text-lg font-bold">{['247+', '94%', '99.1%'][i]}</div>
                                <div className="text-[10px] opacity-70">{label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold bg-brand-blue/8 text-brand-blue px-2.5 py-1 rounded-full border border-brand-blue/15">
                        {project.metric}
                      </span>
                    </div>
                    <h3 className="text-h3 text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body text-neutral-500">
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
