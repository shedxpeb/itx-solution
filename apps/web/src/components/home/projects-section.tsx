'use client';

import { Container, Heading2, BodyLarge, Caption } from '@itx/ui';

export function ProjectsSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  return (
    <section data-navbar-theme={navbarTheme} className="py-36 md:py-48 bg-white w-full relative overflow-hidden">
      <Container className="relative max-w-7xl mx-auto w-full min-w-0">
        
        {/* Section header */}
        <div className="mb-24">
          <Caption className="tracking-[0.35em] text-[#1687E8] mb-8 text-xs uppercase w-full max-w-full font-semibold">
            03 — PROJECTS
          </Caption>
          
          <Heading2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#091118] mb-8">
            SOFTWARE BUILT FOR
            <br />
            REAL OPERATIONAL PROBLEMS.
          </Heading2>
        </div>

        {/* Large project showcase */}
        <div className="relative">
          
          {/* Main project - Larger screenshot with depth */}
          <div className="relative h-[600px] lg:h-[700px] bg-[#F5F8FC] rounded-2xl overflow-hidden border border-[#DCE6EE] mb-10 shadow-2xl">
            
            {/* Browser window mockup */}
            <div className="h-12 bg-[#091118] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
              <div className="w-3 h-3 rounded-full bg-[#45B8FF]" />
              <div className="w-3 h-3 rounded-full bg-[#A7DFFF]" />
              <div className="flex-1 h-2 bg-[#1687E8]/20 rounded ml-4" />
            </div>
            
            {/* Main content area */}
            <div className="p-8 h-full bg-[#091118]">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#1687E8]/20">
                  <div className="h-4 w-40 bg-[#1687E8]/40 rounded" />
                  <div className="flex gap-3">
                    <div className="h-9 w-28 bg-[#45B8FF]/40 rounded" />
                    <div className="h-9 w-28 bg-[#A7DFFF]/40 rounded" />
                  </div>
                </div>
                
                {/* Main dashboard area */}
                <div className="flex-1 grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#101C26] rounded-xl p-6">
                    <div className="h-3 w-28 bg-[#1687E8]/50 rounded mb-5" />
                    <div className="h-32 bg-[#1687E8]/30 rounded" />
                    <div className="h-2 w-24 bg-[#45B8FF]/40 rounded mt-5" />
                  </div>
                  <div className="bg-[#101C26] rounded-xl p-6">
                    <div className="h-3 w-28 bg-[#45B8FF]/50 rounded mb-5" />
                    <div className="h-32 bg-[#45B8FF]/30 rounded" />
                    <div className="h-2 w-24 bg-[#A7DFFF]/40 rounded mt-5" />
                  </div>
                  <div className="bg-[#101C26] rounded-xl p-6">
                    <div className="h-3 w-28 bg-[#A7DFFF]/50 rounded mb-5" />
                    <div className="h-32 bg-[#A7DFFF]/30 rounded" />
                    <div className="h-2 w-24 bg-[#1687E8]/40 rounded mt-5" />
                  </div>
                </div>
                
                {/* Bottom metrics */}
                <div className="grid grid-cols-4 gap-6">
                  <div className="bg-[#101C26] rounded-xl p-5">
                    <div className="h-2 w-full bg-[#1687E8]/40 rounded mb-4" />
                    <div className="h-4 w-20 bg-[#1687E8]/50 rounded" />
                  </div>
                  <div className="bg-[#101C26] rounded-xl p-5">
                    <div className="h-2 w-full bg-[#45B8FF]/40 rounded mb-4" />
                    <div className="h-4 w-20 bg-[#45B8FF]/50 rounded" />
                  </div>
                  <div className="bg-[#101C26] rounded-xl p-5">
                    <div className="h-2 w-full bg-[#A7DFFF]/40 rounded mb-4" />
                    <div className="h-4 w-20 bg-[#A7DFFF]/50 rounded" />
                  </div>
                  <div className="bg-[#101C26] rounded-xl p-5">
                    <div className="h-2 w-full bg-[#1687E8]/40 rounded mb-4" />
                    <div className="h-4 w-20 bg-[#1687E8]/50 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary panel behind */}
            <div className="absolute top-16 right-12 w-[320px] h-[220px] bg-[#101C26] rounded-xl shadow-xl overflow-hidden border border-[#1687E8]/20" style={{ transform: 'translateZ(-40px) rotateY(-8deg)' }}>
              <div className="h-6 bg-[#091118] flex items-center px-3">
                <div className="h-2 w-2 rounded-full bg-[#45B8FF]" />
                <span className="text-xs text-white ml-2">Analytics</span>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div className="h-2 w-full bg-[#45B8FF]/30 rounded" />
                  <div className="h-2 w-3/4 bg-[#A7DFFF]/30 rounded" />
                  <div className="h-2 w-1/2 bg-[#1687E8]/30 rounded" />
                </div>
              </div>
            </div>

            {/* Floating mobile screen */}
            <div className="absolute bottom-12 right-16 w-[220px] h-[360px] bg-[#091118] rounded-xl shadow-2xl overflow-hidden border border-[#1687E8]/30">
              <div className="h-8 bg-[#101C26] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#1687E8]" />
              </div>
              <div className="p-6">
                <div className="h-3 w-full bg-[#1687E8]/40 rounded mb-5" />
                <div className="h-28 bg-[#1687E8]/30 rounded mb-5" />
                <div className="h-2 w-5/6 bg-[#45B8FF]/40 rounded" />
              </div>
            </div>

          </div>

          {/* Project info */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="mb-6">
                <Caption className="text-[#1687E8] text-xs uppercase tracking-wider font-semibold">
                  FEATURED PROJECT
                </Caption>
                <h3 className="text-2xl md:text-3xl font-bold text-[#091118] mt-3">
                  ShedX PEB
                </h3>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs text-[#5F7080]">Business Systems</span>
                  <span className="text-xs text-[#DCE6EE]">•</span>
                  <span className="text-xs text-[#5F7080]">Dashboard</span>
                </div>
              </div>
              <BodyLarge className="text-[#5F7080] text-base md:text-lg leading-[1.6] mb-8">
                Industrial manufacturing platform for pre-engineered buildings. Real-time production tracking, inventory management, and quality control workflows.
              </BodyLarge>
              <div className="flex gap-3 flex-wrap">
                <span className="px-4 py-2 bg-[#1687E8]/10 text-[#1687E8] rounded-full text-sm font-semibold">
                  Manufacturing
                </span>
                <span className="px-4 py-2 bg-[#45B8FF]/10 text-[#45B8FF] rounded-full text-sm font-semibold">
                  Enterprise
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <a href="/projects" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all bg-[#1687E8] text-white hover:bg-[#0F5CB8] hover:shadow-xl hover:-translate-y-0.5">
                View All Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
