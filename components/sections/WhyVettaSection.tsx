import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Cpu, Trophy, Users } from 'lucide-react';

const reasons = [
  {
    title: 'Deep Technical Expertise',
    description: 'We aren\'t just web developers. Our team has deep roots in AI, data science, and complex systems architecture.',
    icon: <Cpu size={28} className="text-brand-blue" />
  },
  {
    title: 'Proven Results',
    description: 'We measure success by business outcomes: reduced costs, increased efficiency, and measurable ROI.',
    icon: <Trophy size={28} className="text-brand-blue" />
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security is built into everything we do, protecting your data and your reputation.',
    icon: <ShieldCheck size={28} className="text-brand-blue" />
  },
  {
    title: 'Transparent Partnership',
    description: 'Clear communication, honest timelines, and a collaborative approach to solving your challenges.',
    icon: <Users size={28} className="text-brand-blue" />
  }
];

export default function WhyVettaSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-h2 text-brand-black mb-6">Why Choose VETTA</h2>
            <p className="text-lg text-neutral-700 mb-8">
              We combine enterprise-level engineering with the agility of a modern consultancy. No gimmicks, just reliable technology that drives growth.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-h4 text-brand-black mb-2">{reason.title}</h3>
                  <p className="text-body text-neutral-500">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
