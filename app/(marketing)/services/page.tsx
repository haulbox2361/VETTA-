import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { services } from './data';
import { BrainCircuit, Database, Code, Globe, FileSearch, LineChart, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services | VETTA Intelligence',
  description: 'Explore our AI automation, data analytics, software development, and technology consulting services.',
};

const iconMap: Record<string, React.ReactNode> = {
  'ai-automation': <BrainCircuit size={28} className="text-brand-blue" />,
  'data-analytics': <Database size={28} className="text-brand-blue" />,
  'software-development': <Code size={28} className="text-brand-blue" />,
  'web-development': <Globe size={28} className="text-brand-blue" />,
  'research-intelligence': <FileSearch size={28} className="text-brand-blue" />,
  'technology-consulting': <LineChart size={28} className="text-brand-blue" />,
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
                className="group flex flex-col h-full bg-white relative z-20 border border-slate-200 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {/* Icon */}
                <div className="mb-6 p-3 bg-brand-blue/10 rounded-xl inline-block w-fit group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.slug]}
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3 group-hover:text-brand-blue transition-colors tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 flex items-center text-sm font-semibold tracking-wide text-brand-blue">
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
