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

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/work/${project.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-xl border border-neutral-200 transition-all hover:border-brand-blue hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <div className="bg-neutral-100 aspect-video flex items-center justify-center p-8 text-center text-neutral-400 border-b border-neutral-200">
                  {/* Placeholder for real images */}
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {project.imagePlaceholder}
                    <br/>
                    (VETTA Demonstration Project)
                  </span>
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
