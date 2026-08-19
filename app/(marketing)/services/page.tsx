import React from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { services } from './data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services | VETTA Intelligence',
  description: 'Explore our AI automation, data analytics, software development, and technology consulting services.',
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Our Services"
        description="We build intelligent systems that solve complex business problems. Explore our core capabilities below."
        tagline="Expertise"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.slug}`}
                className="group flex flex-col h-full bg-white border border-neutral-200 rounded-xl p-8 transition-all hover:border-brand-blue hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-100 flex items-center text-sm font-medium text-brand-blue">
                  Learn more
                  <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
