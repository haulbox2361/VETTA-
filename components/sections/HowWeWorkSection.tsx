import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

const steps = [
  {
    num: '01',
    title: 'Discovery & Understanding',
    description: 'We analyze your current operations, identify bottlenecks, and define clear objectives.'
  },
  {
    num: '02',
    title: 'Strategy & Architecture',
    description: 'We design a technical blueprint and strategic roadmap tailored to your specific goals.'
  },
  {
    num: '03',
    title: 'Development & Engineering',
    description: 'Our team builds your solution using modern, scalable, and secure technologies.'
  },
  {
    num: '04',
    title: 'Implementation & Launch',
    description: 'Seamless deployment with comprehensive testing and team onboarding.'
  },
  {
    num: '05',
    title: 'Support & Optimization',
    description: 'Continuous monitoring, maintenance, and refinement to maximize long-term ROI.'
  }
];

export default function HowWeWorkSection() {
  return (
    <Section className="bg-brand-black text-white py-20">
      <Container>
        <div className="mb-16 md:text-center max-w-2xl md:mx-auto">
          <h2 className="text-h2 mb-4 text-white">How We Work</h2>
          <p className="text-lg text-neutral-400">
            A structured, transparent process designed to deliver exceptional results on time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-brand-blue/40 -z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col">
              <div className="flex items-center md:justify-center mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white text-label font-bold border-4 border-brand-black">
                  {step.num}
                </span>
                {/* Mobile connector line */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-12 bottom-[-2rem] w-[1px] bg-neutral-800 -z-10"></div>
                )}
              </div>
              <h3 className="text-h4 mb-3 md:text-center text-white">{step.title}</h3>
              <p className="text-sm text-neutral-400 md:text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
