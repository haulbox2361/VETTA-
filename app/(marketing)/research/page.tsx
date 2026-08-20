import React from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { researchArticles } from './data';
import Link from 'next/link';

export const metadata = {
  title: 'Research & Insights | VETTA Intelligence',
  description: 'Technical research, intelligence briefs, and analysis from the VETTA engineering team.',
};

export default function ResearchPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Research & Insights"
        description="Technical research, intelligence briefs, and architectural analysis from our engineering team."
        tagline="Intelligence"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 150}>
                <Link href={`/research/${article.slug}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl relative z-20">
                  <Card className="flex flex-col h-full border-neutral-200 hover:border-brand-blue/30 transition-all p-8 shadow-sm hover:shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-sm">
                        {article.category}
                      </span>
                      <span className="text-xs font-medium text-neutral-400">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-brand-blue transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-body text-neutral-600 mb-6 flex-1">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                      <span className="text-sm font-medium text-neutral-500">
                        {article.date}
                      </span>
                      <span className="text-brand-blue text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Read Article <span className="ml-1">→</span>
                      </span>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
