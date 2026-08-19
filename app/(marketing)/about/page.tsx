import React from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'About | VETTA Intelligence',
  description: 'Learn about our engineering philosophy, our team, and our mission to solve complex business problems through technology.',
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="About VETTA"
        description="Simple Outside. Intelligent Inside. We are a team of senior engineers and technical strategists dedicated to building systems that matter."
        tagline="Our Story"
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Engineering for Impact
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  VETTA Intelligence was founded on a singular premise: most enterprise software fails not because of technical limitations, but because it doesn't align with how businesses actually operate.
                </p>
                <p>
                  We are not an agency that simply takes orders. We are technical partners. We dig deep into your operational bottlenecks, analyze your data flows, and architect solutions that are brutally efficient and exceptionally resilient.
                </p>
                <p>
                  Whether it's deploying autonomous AI agents to handle tier-1 support, engineering real-time data pipelines, or building bespoke SaaS platforms, our focus remains absolute: creating measurable business value through intelligent engineering.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 flex items-center justify-center p-8">
                <div className="text-center text-neutral-400">
                  <span className="text-sm font-medium uppercase tracking-wider block mb-2">Team Office Placeholder</span>
                  (Demonstration Image)
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-blue/5 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Philosophy</h2>
            <p className="text-lg text-neutral-600">
              We operate on a set of core principles that dictate how we write code, how we design systems, and how we interact with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Radical Candor</h3>
              <p className="text-neutral-600">
                We don't sell vaporware. If a technology isn't ready for your use case, or if off-the-shelf software would serve you better, we will tell you immediately.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Architect for Scale</h3>
              <p className="text-neutral-600">
                We refuse to build technical debt. Every system is designed with a clear upgrade path, robust security, and the ability to scale horizontally.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Simplicity Wins</h3>
              <p className="text-neutral-600">
                Complexity is a liability. We strive for elegant, simple architectures that are easy to maintain, debug, and hand off to internal teams.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto bg-brand-blue rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to work with VETTA?</h2>
              <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
                Let's discuss how our engineering team can help solve your most complex operational challenges.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-brand-blue hover:bg-neutral-100 hover:text-brand-blue text-lg px-8 py-6 h-auto">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
