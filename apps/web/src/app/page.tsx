import { HeroSection } from '@/components/home/hero-section';
import { PositioningSection } from '@/components/home/positioning-section';
import { WhatWeBuildSection } from '@/components/home/what-we-build-section';
import { BusinessProblemsSection } from '@/components/home/business-problems-section';
import { SolutionExplorerSection } from '@/components/home/solution-explorer-section';
import { BuiltForGrowthSection } from '@/components/home/built-for-growth-section';
import { ContinuousBuildSection } from '@/components/home/continuous-build-section';
import { ProcessSection } from '@/components/home/process-section';
import { TechnologyCoreSection } from '@/components/home/technology-core-section';
import { ConnectedBusinessSystemSection } from '@/components/home/connected-business-system-section';
import { WhyITXSection } from '@/components/home/why-itx-section';
import { FounderSection } from '@/components/home/founder-section';
import { FAQSection } from '@/components/home/faq-section';
import { FinalCTASection } from '@/components/home/final-cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection data-navbar-theme="dark" />
      <PositioningSection data-navbar-theme="light" />
      <WhatWeBuildSection data-navbar-theme="dark" />
      <BusinessProblemsSection data-navbar-theme="dark" />
      <SolutionExplorerSection data-navbar-theme="light" />
      <BuiltForGrowthSection data-navbar-theme="light" />
      <ContinuousBuildSection data-navbar-theme="dark" />
      <ProcessSection data-navbar-theme="light" />
      <TechnologyCoreSection data-navbar-theme="dark" />
      <ConnectedBusinessSystemSection data-navbar-theme="dark" />
      <WhyITXSection data-navbar-theme="light" />
      <FounderSection data-navbar-theme="dark" />
      <FAQSection data-navbar-theme="light" />
      <FinalCTASection data-navbar-theme="dark" />
    </>
  );
}