import HeroSection from '@/components/sections/HeroSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyVettaSection from '@/components/sections/WhyVettaSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import WorkPreviewSection from '@/components/sections/WorkPreviewSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <WhyVettaSection />
      <HowWeWorkSection />
      <WorkPreviewSection />
      <CTASection />
    </>
  );
}
