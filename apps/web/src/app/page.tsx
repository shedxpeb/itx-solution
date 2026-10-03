import { HeroSection } from '@/components/home/hero-section';
import { TechnologyPartnerSection } from '@/components/home/technology-partner-section';
import { ServicesStorySection } from '@/components/home/services-story-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { ProcessSection } from '@/components/home/process-section';
import { TechnologySection } from '@/components/home/technology-section';
import { ConnectedSystemSection } from '@/components/home/connected-system-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection data-navbar-theme="light" />
      <TechnologyPartnerSection data-navbar-theme="light" />
      <ServicesStorySection data-navbar-theme="dark" />
      <ProjectsSection data-navbar-theme="light" />
      <ProcessSection data-navbar-theme="light" />
      <TechnologySection data-navbar-theme="dark" />
      <ConnectedSystemSection data-navbar-theme="dark" />
      <CTASection data-navbar-theme="dark" />
    </>
  );
}