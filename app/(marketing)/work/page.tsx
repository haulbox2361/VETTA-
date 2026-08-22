import React from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { projects } from './data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our Work | VETTA Intelligence',
  description: 'Explore our portfolio of successful AI implementations, data pipelines, and custom software.',
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Featured Work"
        description="See how we've helped enterprises transform their operations through intelligent engineering."
        tagline="Portfolio"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/work/${project.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white relative z-20 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <div className="bg-gradient-to-br from-neutral-900 via-[#111F3C] to-[#1E3A8A] aspect-video flex items-center justify-center p-8 text-center text-white border-b border-neutral-200 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:16px_16px]" />
                  <div className="relative z-10 max-w-xs">
                    <div className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-blue-hover text-blue-200 mb-2">Architecture Blueprint</div>
                    <div className="text-base md:text-lg font-bold text-white tracking-tight">
                      {project.imagePlaceholder}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue px-2 py-1 bg-brand-blue/10 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-neutral-600 mb-8 flex-1">
                    {project.tagline}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-brand-blue mt-auto">
                    View Case Study
                    <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
