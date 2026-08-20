import React from 'react';
import { notFound } from 'next/navigation';
import { services } from '../data';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);
  if (!service) return { title: 'Not Found' };
  
  return {
    title: `${service.title} | VETTA Intelligence`,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex-1">
      <PageHeader
        title={service.title}
        description={service.valueProposition}
        tagline="Service"
      />

      {/* Challenge & Approach */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-h2 mb-6">The Challenge</h2>
              <p className="text-body text-neutral-600 leading-relaxed">{service.challenge}</p>
            </div>
            <div>
              <h2 className="text-h2 mb-6">Our Approach</h2>
              <p className="text-body text-neutral-600 leading-relaxed">{service.approach}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-h2 mb-4">Core Capabilities</h2>
            <p className="text-neutral-600">Technical expertise tailored to your operational needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {service.capabilities.map((cap, i) => (
              <div key={i} className="bg-white relative z-20 p-6 rounded-lg border border-neutral-200 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <span className="font-semibold text-sm">{i + 1}</span>
                </div>
                <span className="font-medium text-neutral-800">{cap}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process & Use Cases */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-h2 mb-8">How We Work</h2>
              <div className="space-y-8">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-brand-blue font-mono font-bold text-xl pt-1">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-h2 mb-8">Common Use Cases</h2>
              <div className="space-y-6">
                {service.useCases.map((useCase, i) => (
                  <div key={i} className="bg-white relative z-20 p-6 border border-neutral-200 rounded-xl">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{useCase.title}</h3>
                    <p className="text-neutral-600">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#111F3C] via-[#162C58] to-[#1E3A8A] border-t border-white/15 text-white relative z-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to get started?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how our {service.title.toLowerCase()} services can accelerate your business.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-brand-blue hover:bg-neutral-100 hover:text-brand-blue focus-visible:ring-white">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
