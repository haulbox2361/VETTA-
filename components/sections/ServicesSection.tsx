import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { BrainCircuit, Database, Code, Globe, FileSearch, LineChart } from 'lucide-react';

const services = [
  {
    title: 'AI & Automation',
    description: 'Streamlining operations and building smart systems tailored to your unique business logic.',
    icon: <BrainCircuit size={32} className="text-brand-blue" />,
    href: '/services/ai-automation'
  },
  {
    title: 'Data Analysis & Intelligence',
    description: 'Unlocking actionable insights from complex data to drive strategic decision-making.',
    icon: <Database size={32} className="text-brand-blue" />,
    href: '/services/data-intelligence'
  },
  {
    title: 'Software Development',
    description: 'Building robust, scalable applications that solve enterprise-grade problems.',
    icon: <Code size={32} className="text-brand-blue" />,
    href: '/services/software-development'
  },
  {
    title: 'Web Development',
    description: 'Creating high-performance, accessible, and professional web presences.',
    icon: <Globe size={32} className="text-brand-blue" />,
    href: '/services/web-development'
  },
  {
    title: 'Research & Intelligence',
    description: 'Deep-dive technical research to guide your digital transformation strategy.',
    icon: <FileSearch size={32} className="text-brand-blue" />,
    href: '/services/research-intelligence'
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic guidance to ensure your technology stack supports your business goals.',
    icon: <LineChart size={32} className="text-brand-blue" />,
    href: '/services/technology-consulting'
  }
];

export default function ServicesSection() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <Reveal className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-h2 text-brand-black mb-4">Our Services</h2>
          <p className="text-lg text-neutral-700">
            End-to-end technology solutions designed to give your business a competitive advantage.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <Card className="flex flex-col h-full border-transparent hover:border-brand-blue/20 group">
                <div className="mb-6 p-3 bg-brand-blue/10 rounded-lg inline-block w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-h4 text-brand-black mb-3">{service.title}</h3>
                <p className="text-body text-neutral-500 mb-6 flex-1">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="text-brand-blue font-semibold text-label hover:underline inline-flex items-center mt-auto w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm group-hover:translate-x-1 transition-transform"
                >
                  Learn More <span className="ml-1">→</span>
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
