import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '../data';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Not Found' };
  
  return {
    title: `${project.title} | Case Study | VETTA Intelligence`,
    description: project.tagline,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1">
      <PageHeader
        title={project.title}
        description={project.tagline}
        tagline="Case Study"
      />

      {/* Overview Image */}
      <section className="py-12 bg-white">
        <Container>
          <div className="w-full bg-neutral-100 rounded-2xl border border-neutral-200 aspect-[21/9] flex items-center justify-center text-neutral-400">
             <span className="text-lg font-medium tracking-wider">
               {project.imagePlaceholder} (VETTA Demonstration Project)
             </span>
          </div>
        </Container>
      </section>

      {/* Metrics / Results Bar */}
      <section className="pb-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 bg-gradient-to-br from-[#0B132B] via-[#0F172A] to-[#1E293B] border border-white/10 text-white rounded-2xl shadow-xl">
            {project.results.map((result, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold mb-2">{result.metric}</div>
                <div className="text-white/80 font-medium">{result.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Narrative */}
      <section className="py-16 md:py-24 bg-neutral-50 border-t border-neutral-200">
        <Container>
          <div className="max-w-4xl mx-auto space-y-20">
            {/* The Challenge */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">The Challenge</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Objective */}
            <div className="lg:col-span-1">
              <div className="bg-white relative z-20 p-8 rounded-xl border border-neutral-200 shadow-sm border-l-4 border-l-brand-blue">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Project Impact</h3>
                <p className="text-lg text-neutral-800 font-medium italic">
                  "{project.objective}"
                </p>
              </div>
            </div>

            {/* The Approach & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Approach</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {project.approach}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">The Solution</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white relative z-20 border border-neutral-200 text-neutral-700 rounded-full text-sm font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Inspired by this project?</h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-xl">
              We can bring the same level of engineering rigor and strategic thinking to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact">
                <Button className="w-full sm:w-auto">Discuss Your Project</Button>
              </Link>
              <Link href="/work">
                <Button variant="secondary" className="w-full sm:w-auto">View More Work</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
