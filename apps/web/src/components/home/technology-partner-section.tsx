'use client';

import { Container, Heading2, BodyLarge, Caption } from '@itx/ui';

export function TechnologyPartnerSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  return (
    <section data-navbar-theme={navbarTheme} className="py-24 md:py-32 bg-white w-full relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1687E8] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#45B8FF] rounded-full blur-[120px]" />
      </div>

      <Container className="relative max-w-[1360px] mx-auto w-full min-w-0">
        
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <Caption className="tracking-[0.35em] text-[#1687E8] mb-6 text-xs uppercase w-full max-w-full font-semibold">
            01 — TECHNOLOGY PARTNER
          </Caption>
          
          <div className="mb-8 max-w-4xl">
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#091118] block mb-4">
              ONE PARTNER
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#5F7080] block mb-4">
              FOR THE SYSTEMS
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#091118] block">
              BEHIND YOUR BUSINESS.
            </span>
          </div>
          
          <BodyLarge className="text-[#5F7080] text-base md:text-lg max-w-3xl leading-[1.7]">
            From customer-facing experiences to backend infrastructure, we handle the complete technology stack so you can focus on growing your business.
          </BodyLarge>
        </div>

        {/* Capability composition - Proper 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12">
          
          {/* WEB */}
          <div className="group relative min-w-0">
            <div className="mb-6">
              <div className="text-[clamp(32px,3.2vw,48px)] font-bold text-[#091118] tracking-tight leading-[0.95] mb-4 group-hover:text-[#1687E8] transition-colors">
                WEB
              </div>
              <div className="h-0.5 w-20 bg-[#1687E8] mb-4" />
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#1687E8] font-semibold tracking-wider uppercase mb-3">
                Websites • Apps • Platforms
              </div>
            </div>
            <BodyLarge className="text-[#5F7080] text-sm md:text-base leading-[1.55]">
              High-performance websites, web applications and digital platforms designed around your business goals.
            </BodyLarge>
          </div>

          {/* SYSTEMS */}
          <div className="group relative min-w-0">
            <div className="mb-6">
              <div className="text-[clamp(32px,3.2vw,48px)] font-bold text-[#091118] tracking-tight leading-[0.95] mb-4 group-hover:text-[#45B8FF] transition-colors">
                SYSTEMS
              </div>
              <div className="h-0.5 w-20 bg-[#45B8FF] mb-4" />
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#45B8FF] font-semibold tracking-wider uppercase mb-3">
                CRM • ERP • Workflows
              </div>
            </div>
            <BodyLarge className="text-[#5F7080] text-sm md:text-base leading-[1.55]">
              Connected business systems that bring customers, sales, operations, inventory and workflows into one place.
            </BodyLarge>
          </div>

          {/* AUTOMATION */}
          <div className="group relative min-w-0">
            <div className="mb-6">
              <div className="text-[clamp(32px,3.2vw,48px)] font-bold text-[#091118] tracking-tight leading-[0.95] mb-4 group-hover:text-[#A7DFFF] transition-colors">
                AUTOMATION
              </div>
              <div className="h-0.5 w-20 bg-[#A7DFFF] mb-4" />
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#A7DFFF] font-semibold tracking-wider uppercase mb-3">
                Integrations • Workflows • AI
              </div>
            </div>
            <BodyLarge className="text-[#5F7080] text-sm md:text-base leading-[1.55]">
              Connect the tools you already use and automate repetitive work so your team can focus on high-value activities.
            </BodyLarge>
          </div>

          {/* AI */}
          <div className="group relative min-w-0">
            <div className="mb-6">
              <div className="text-[clamp(32px,3.2vw,48px)] font-bold text-[#091118] tracking-tight leading-[0.95] mb-4 group-hover:text-[#1687E8] transition-colors">
                AI
              </div>
              <div className="h-0.5 w-20 bg-[#1687E8] mb-4" />
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#1687E8] font-semibold tracking-wider uppercase mb-3">
                Intelligence • Analytics • Automation
              </div>
            </div>
            <BodyLarge className="text-[#5F7080] text-sm md:text-base leading-[1.55]">
              Practical AI solutions that help businesses search, analyze, automate and work with information more intelligently.
            </BodyLarge>
          </div>

        </div>

        {/* Visual detail - Bottom */}
        <div className="pt-12 border-t border-[#DCE6EE]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#1687E8]/10 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#1687E8]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#091118] mb-1.5 text-base">End-to-End</h3>
                <p className="text-sm text-[#5F7080] leading-relaxed">We handle the entire technology stack</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#45B8FF]/10 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#45B8FF]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#091118] mb-1.5 text-base">Scalable</h3>
                <p className="text-sm text-[#5F7080] leading-relaxed">Systems that grow with your business</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#A7DFFF]/10 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#A7DFFF]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#091118] mb-1.5 text-base">Integrated</h3>
                <p className="text-sm text-[#5F7080] leading-relaxed">Everything works together seamlessly</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
