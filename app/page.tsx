'use client';

import {
  Header,
  Footer,
  HeroSection,
  LogoCarousel,
  FeaturedBooksSection,
  AuthorAchievementsSection,
  TopTierPlatformsSection,
  SelfPublishingPackageSection,
  ServicesSection,
  WhatToExpectSection,
  PortfolioSection,
  PublishingPromotionSection,
  PrintingQualitySection,
  BookFairSection,
  PublishingStatsSection,
  TestimonialsSection,
  DistributionSection,
  ProcessMarketingSection,
  FAQSection,
  CTAFormSection,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoCarousel />
        <FeaturedBooksSection />
        <AuthorAchievementsSection />
        <TopTierPlatformsSection />
        <SelfPublishingPackageSection />
        <ServicesSection />
        <WhatToExpectSection />
        <PortfolioSection />
        <PublishingPromotionSection />
        <PrintingQualitySection />
        <BookFairSection />
        <PublishingStatsSection />
        <TestimonialsSection />
        <DistributionSection />
        <ProcessMarketingSection />
        <FAQSection />
        <CTAFormSection />
      </main>
      <Footer />
    </>
  );
}
