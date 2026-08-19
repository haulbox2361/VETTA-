import React from 'react';
import { notFound } from 'next/navigation';
import { researchArticles } from '../data';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = researchArticles.find(a => a.slug === resolvedParams.slug);
  if (!article) return { title: 'Not Found' };
  
  return {
    title: `${article.title} | VETTA Research`,
    description: article.summary,
  };
}

export function generateStaticParams() {
  return researchArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = researchArticles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white">
      {/* Article Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-neutral-50 border-b border-neutral-200">
        <Container>
          <Reveal className="max-w-3xl mx-auto">
            <Link 
              href="/research" 
              className="text-brand-blue font-semibold text-sm mb-8 inline-flex items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm"
            >
              <span className="mr-2">←</span> Back to Research
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-sm">
                {article.category}
              </span>
              <span className="text-sm font-medium text-neutral-500">
                {article.date} • {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-neutral-600 leading-relaxed border-l-4 border-brand-blue pl-4">
              {article.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal delay={200} className="max-w-prose mx-auto prose prose-lg prose-neutral">
            <div className="mb-12 flex items-center gap-4 pb-8 border-b border-neutral-200">
              <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold">
                V
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900 m-0">{article.author}</p>
                <p className="text-xs text-neutral-500 m-0">VETTA Intelligence</p>
              </div>
            </div>

            <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
