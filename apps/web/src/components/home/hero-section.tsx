'use client';

import { useRef, useEffect, useState } from 'react';
import { Container, Heading1, BodyLarge, Caption, NavLink } from '@itx/ui';

export function HeroSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      data-navbar-theme={navbarTheme}
      className="relative min-h-[auto] lg:min-h-screen bg-[#F5F8FC] overflow-hidden w-full"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22, 135, 232, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22, 135, 232, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient glow - Desktop only */}
      <div className="hidden lg:block absolute top-0 right-0 w-[700px] h-[700px] bg-[#1687E8] rounded-full blur-[250px] opacity-[0.10] pointer-events-none" />
      <div className="hidden lg:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#45B8FF] rounded-full blur-[220px] opacity-[0.08] pointer-events-none" />
      
      {/* Mobile ambient glow - simpler */}
      <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1687E8] rounded-full blur-[120px] opacity-[0.08] pointer-events-none" />

      {/* Radial glow behind product visual - Desktop only */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#1687E8]/5 to-[#45B8FF]/5 rounded-full blur-[300px] opacity-[0.4] pointer-events-none" />

      <Container className="relative z-10 w-full min-h-screen py-24 lg:py-32 px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto">
          {/* LEFT - Content */}
          <div className="w-full lg:pr-8 order-1 lg:order-1">
            <Caption className="tracking-[0.35em] text-[#1687E8] mb-6 md:mb-10 text-xs uppercase w-full max-w-full font-semibold">
              ITX SOLUTION • TECHNOLOGY PARTNER
            </Caption>

            <div className="mb-8 md:mb-10">
              <Heading1 className="text-[clamp(42px,11vw,54px)] font-bold tracking-tight leading-[0.95] text-[#091118] mb-6 md:mb-8 max-w-2xl">
                <span className="block">BUILD DIGITAL</span>
                <span className="block text-[#1687E8]">SYSTEMS THAT</span>
                <span className="block">MOVE BUSINESS.</span>
              </Heading1>
            </div>

            <BodyLarge className="text-[#5F7080] text-base md:text-lg leading-[1.55] max-w-[330px] md:max-w-xl mb-8 md:mb-12">
              We design and build websites, custom software, CRM, ERP, mobile applications, automation and AI-powered systems around the way your business actually works.
            </BodyLarge>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
              <NavLink
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl font-bold transition-all bg-[#1687E8] text-white hover:bg-[#0F5CB8] hover:shadow-2xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-8 md:px-10 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto min-h-[46px]"
              >
                Let&apos;s Talk
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NavLink>
              <NavLink
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl font-bold transition-all border-2 border-[#DCE6EE] bg-white hover:border-[#1687E8]/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-8 md:px-10 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto text-[#091118] min-h-[46px]"
              >
                Explore Solutions
              </NavLink>
            </div>
          </div>

          {/* RIGHT - Digital Ecosystem Visual */}
          <div className="relative w-full h-[300px] lg:h-[680px] lg:pl-8 order-2 lg:order-2">
            
            {/* Desktop Visual Stage - Clean zone-based composition */}
            <div className="hidden lg:block relative w-full h-full max-w-[620px] ml-auto">
              
              {/* Visual Stage with fixed dimensions */}
              <div className="relative w-full h-[500px] p-[24px] box-border overflow-hidden">
                
                {/* Connection lines - Layer 1 (BEHIND all cards) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-1">
                  <defs>
                    <linearGradient id="connGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1687E8" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="#45B8FF" stopOpacity="0.14" />
                    </linearGradient>
                  </defs>
                  {/* CRM to Browser */}
                  <line x1="3%" y1="40%" x2="35%" y2="50%" stroke="url(#connGrad1)" strokeWidth="1.5" />
                  {/* Mobile to Browser */}
                  <line x1="97%" y1="38%" x2="65%" y2="50%" stroke="url(#connGrad1)" strokeWidth="1.5" />
                  {/* CRM to Automation */}
                  <line x1="3%" y1="40%" x2="7%" y2="70%" stroke="#A7DFFF" strokeWidth="1.5" opacity="0.18" />
                  {/* Mobile to Database */}
                  <line x1="97%" y1="38%" x2="93%" y2="65%" stroke="#45B8FF" strokeWidth="1.5" opacity="0.18" />
                </svg>

                {/* Browser Anchor - TOP CENTER ZONE */}
                <div className="absolute left-1/2 top-[8%] -translate-x-1/2 z-10">
                  <div className="w-[480px] h-[290px] bg-white rounded-xl shadow-2xl border border-[#DCE6EE] overflow-hidden">
                    <div className="h-10 bg-[#091118] flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
                      <div className="w-3 h-3 rounded-full bg-[#45B8FF]" />
                      <div className="w-3 h-3 rounded-full bg-[#A7DFFF]" />
                    </div>
                    <div className="p-5 bg-[#F5F8FC]">
                      {/* Top bar */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-2 w-24 bg-[#1687E8]/30 rounded" />
                        <div className="h-2 w-16 bg-[#45B8FF]/30 rounded" />
                      </div>
                      {/* Metric cards */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white rounded-lg border border-[#DCE6EE] p-3">
                          <div className="h-2 w-8 bg-[#1687E8]/40 rounded mb-2" />
                          <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                        </div>
                        <div className="bg-white rounded-lg border border-[#DCE6EE] p-3">
                          <div className="h-2 w-8 bg-[#45B8FF]/40 rounded mb-2" />
                          <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                        </div>
                        <div className="bg-white rounded-lg border border-[#DCE6EE] p-3">
                          <div className="h-2 w-8 bg-[#A7DFFF]/40 rounded mb-2" />
                          <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                        </div>
                      </div>
                      {/* Chart area */}
                      <div className="h-16 bg-white rounded-lg border border-[#DCE6EE] p-3 flex items-end gap-2">
                        <div className="h-8 w-6 bg-[#1687E8]/40 rounded mb-1" />
                        <div className="h-12 w-8 bg-[#45B8FF]/40 rounded mb-1" />
                        <div className="h-6 w-8 bg-[#A7DFFF]/40 rounded" />
                      </div>
                      {/* Bottom sections */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-10 bg-white rounded-lg border border-[#DCE6EE] p-2">
                          <div className="h-1.5 w-10 bg-[#1687E8]/30 rounded mb-1" />
                          <div className="h-1.5 w-12 bg-[#5F7080]/30 rounded" />
                        </div>
                        <div className="h-10 bg-white rounded-lg border border-[#DCE6EE] p-2">
                          <div className="h-1.5 w-10 bg-[#45B8FF]/30 rounded mb-1" />
                          <div className="h-1.5 w-12 bg-[#5F7080]/30 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CRM Anchor - LEFT MIDDLE ZONE */}
                <div className="absolute left-[2%] top-[36%] z-15">
                  <div className="w-[200px] h-[145px] bg-white rounded-xl shadow-xl border border-[#DCE6EE] overflow-hidden">
                    <div className="h-8 bg-[#071017] flex items-center px-4">
                      <div className="h-2 w-2 rounded-full bg-[#1687E8]" />
                      <span className="text-xs text-white ml-2">CRM Dashboard</span>
                    </div>
                    <div className="p-4 grid grid-cols-3 gap-3">
                      <div className="bg-[#F5F8FC] rounded-lg p-3">
                        <div className="h-5 w-10 bg-[#1687E8]/40 rounded mb-2" />
                        <div className="h-1.5 w-12 bg-[#5F7080]/30 rounded" />
                      </div>
                      <div className="bg-[#F5F8FC] rounded-lg p-3">
                        <div className="h-5 w-10 bg-[#45B8FF]/40 rounded mb-2" />
                        <div className="h-1.5 w-12 bg-[#5F7080]/30 rounded" />
                      </div>
                      <div className="bg-[#F5F8FC] rounded-lg p-3">
                        <div className="h-5 w-10 bg-[#A7DFFF]/40 rounded mb-2" />
                        <div className="h-1.5 w-12 bg-[#5F7080]/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Anchor - RIGHT MIDDLE ZONE */}
                <div className="absolute right-[2%] top-[30%] z-15">
                  <div className="w-[145px] h-[225px] bg-[#091118] rounded-xl shadow-xl overflow-hidden">
                    <div className="h-8 bg-[#101C26] flex items-center justify-center">
                      <div className="w-10 h-6 bg-[#1687E8] rounded" />
                    </div>
                    <div className="p-4">
                      <div className="h-2.5 w-full bg-[#1687E8]/30 rounded mb-3" />
                      <div className="h-2 w-20 bg-[#45B8FF]/30 rounded mb-2" />
                      <div className="h-2 w-16 bg-[#A7DFFF]/30 rounded mb-2" />
                      <div className="h-2 w-18 bg-[#1687E8]/20 rounded" />
                    </div>
                  </div>
                </div>

                {/* Automation Anchor - LOWER LEFT ZONE */}
                <div className="absolute left-[7%] bottom-[6%] z-12">
                  <div className="w-[210px] h-[145px] bg-white rounded-xl shadow-xl border border-[#DCE6EE] overflow-hidden">
                    <div className="h-7 bg-[#1687E8] flex items-center px-4">
                      <span className="text-xs text-white font-medium">Automation</span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-[#1687E8]/30 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1687E8]" />
                        </div>
                        <div className="h-1.5 flex-1 bg-[#5F7080]/30 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#45B8FF]/30 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#45B8FF]" />
                        </div>
                        <div className="h-1.5 flex-1 bg-[#5F7080]/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database Anchor - LOWER RIGHT ZONE */}
                <div className="absolute right-[7%] bottom-[8%] z-12">
                  <div className="w-[180px] h-[130px] bg-white rounded-xl shadow-xl border border-[#DCE6EE] overflow-hidden">
                    <div className="h-6 bg-[#5F7080] flex items-center px-4">
                      <span className="text-xs text-white">Database</span>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="h-1.5 w-full bg-[#1687E8]/30 rounded" />
                        <div className="h-1.5 w-5/6 bg-[#45B8FF]/30 rounded" />
                        <div className="h-1.5 w-2/3 bg-[#A7DFFF]/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Mobile Visual Stage - Simplified composition */}
            <div className="lg:hidden relative w-full h-[260px] mx-auto">
              {/* Visual stage container */}
              <div className="relative w-full h-full">
                
                {/* Main browser - Centered */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[180px] bg-white rounded-xl shadow-lg border border-[#DCE6EE] overflow-hidden">
                  <div className="h-8 bg-[#091118] flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#1687E8]" />
                    <div className="w-2 h-2 rounded-full bg-[#45B8FF]" />
                    <div className="w-2 h-2 rounded-full bg-[#A7DFFF]" />
                  </div>
                  <div className="p-4 bg-[#F5F8FC]">
                    <div className="h-2 w-20 bg-[#1687E8]/30 rounded mb-3" />
                    <div className="h-1.5 w-32 bg-[#5F7080]/30 rounded" />
                  </div>
                </div>

                {/* CRM - Smaller, left positioned */}
                <div className="absolute top-[28%] left-0 w-[110px] h-[80px] bg-white rounded-lg shadow-md border border-[#DCE6EE] overflow-hidden">
                  <div className="h-6 bg-[#071017] flex items-center px-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1687E8]" />
                    <span className="text-[10px] text-white ml-1.5">CRM</span>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    <div className="bg-[#F5F8FC] rounded-lg p-2">
                      <div className="h-4 w-8 bg-[#1687E8]/40 rounded mb-2" />
                      <div className="h-1 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="bg-[#F5F8FC] rounded-lg p-2">
                      <div className="h-4 w-8 bg-[#45B8FF]/40 rounded mb-2" />
                      <div className="h-1 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                </div>

                {/* Mobile - Smaller, right positioned */}
                <div className="absolute bottom-[8%] right-0 w-[90px] h-[120px] bg-[#091118] rounded-lg shadow-md overflow-hidden">
                  <div className="h-6 bg-[#101C26] flex items-center justify-center">
                    <div className="w-8 h-5 bg-[#1687E8] rounded" />
                  </div>
                  <div className="p-3">
                    <div className="h-2 w-full bg-[#1687E8]/30 rounded mb-3" />
                    <div className="h-1.5 w-16 bg-[#45B8FF]/30 rounded" />
                    <div className="h-1.5 w-14 bg-[#A7DFFF]/30 rounded" />
                  </div>
                </div>

                {/* AI/Automation indicator - Small top right */}
                <div className="absolute top-[20%] right-[5%] w-8 h-8 rounded-full bg-[#1687E8] shadow-lg shadow-[#1687E8]/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Simple connection line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="50%" y1="30%" x2="15%" y2="65%" stroke="#1687E8" strokeWidth="1.5" opacity="0.25" />
                  <line x1="50%" y1="30%" x2="85%" y2="82%" stroke="#45B8FF" strokeWidth="1.5" opacity="0.25" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
