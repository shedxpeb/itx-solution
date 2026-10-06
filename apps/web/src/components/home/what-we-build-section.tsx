'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Container, Heading1, BodyLarge } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const services = [
  'Websites & Digital Experiences',
  'Web Applications',
  'CRM & ERP',
  'Custom Software',
  'Mobile Applications',
  'Automation & Integrations',
  'AI & Intelligent Systems',
  'Dashboards & Tools',
];

export function WhatWeBuildSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const serviceListRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Pin the section and create scroll-linked service activation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: false,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const serviceIndex = Math.floor(progress * services.length);
          const clampedIndex = Math.min(serviceIndex, services.length - 1);
          setActiveService(clampedIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate visual transition when active service changes
  useEffect(() => {
    if (!visualRef.current || !shouldAnimate()) return;

    gsap.to(visualRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: motionConfig.duration.short,
      ease: motionConfig.easing.exit,
      onComplete: () => {
        gsap.to(visualRef.current, {
          opacity: 1,
          scale: 1,
          duration: motionConfig.duration.medium,
          ease: motionConfig.easing.emphasized,
        });
      },
    });
  }, [activeService]);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme={navbarTheme}
      className="relative py-24 lg:py-32 bg-[#071017] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="mb-12 lg:mb-16">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#FFFFFF] mb-6">
            What we build for
            <br />
            <span className="text-[#1687E8]">real businesses.</span>
          </Heading1>
          <BodyLarge className="text-[#A7DFFF] text-lg max-w-2xl">
            Each solution is designed to integrate seamlessly with your existing operations and scale with your growth.
          </BodyLarge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Service List */}
          <div ref={serviceListRef} className="space-y-2">
            {services.map((service, index) => (
              <div
                key={service}
                className={`py-4 px-6 rounded-lg transition-all cursor-pointer ${
                  index === activeService
                    ? 'bg-[#1687E8]/20 border border-[#1687E8]/40'
                    : 'bg-transparent border border-transparent hover:bg-[#1687E8]/10'
                }`}
                onClick={() => setActiveService(index)}
              >
                <span
                  className={`text-lg font-medium transition-colors ${
                    index === activeService ? 'text-[#45B8FF]' : 'text-[#A7DFFF]'
                  }`}
                >
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div
            ref={visualRef}
            className="relative h-[500px] bg-white rounded-xl shadow-2xl border border-[#DCE6EE] overflow-hidden"
          >
            <div className="h-10 bg-[#091118] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
              <div className="w-3 h-3 rounded-full bg-[#45B8FF]" />
              <div className="w-3 h-3 rounded-full bg-[#A7DFFF]" />
            </div>
            <div className="p-6 bg-[#F5F8FC] h-full">
              <div className="mb-6">
                <div className="h-3 w-32 bg-[#1687E8]/40 rounded mb-3" />
                <div className="h-2 w-48 bg-[#5F7080]/30 rounded" />
              </div>

              {/* Dynamic visual based on active service */}
              {activeService === 0 && (
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="h-2 w-24 bg-[#1687E8]/30 rounded mb-2" />
                    <div className="h-1.5 w-32 bg-[#5F7080]/30 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white rounded-lg border border-[#DCE6EE] p-4">
                      <div className="h-2 w-16 bg-[#45B8FF]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="h-24 bg-white rounded-lg border border-[#DCE6EE] p-4">
                      <div className="h-2 w-16 bg-[#A7DFFF]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                </div>
              )}

              {activeService === 1 && (
                <div className="space-y-4">
                  <div className="flex gap-4 h-8">
                    <div className="flex-1 bg-[#1687E8]/20 rounded" />
                    <div className="flex-1 bg-[#45B8FF]/20 rounded" />
                    <div className="flex-1 bg-[#A7DFFF]/20 rounded" />
                  </div>
                  <div className="h-40 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="h-8 bg-[#1687E8]/30 rounded" />
                      <div className="h-8 bg-[#45B8FF]/30 rounded" />
                      <div className="h-8 bg-[#A7DFFF]/30 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-5/6 bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-4/6 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                </div>
              )}

              {activeService === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div className="h-16 bg-white rounded-lg border border-[#DCE6EE] p-3">
                      <div className="h-2 w-8 bg-[#1687E8]/40 rounded mb-2" />
                      <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="h-16 bg-white rounded-lg border border-[#DCE6EE] p-3">
                      <div className="h-2 w-8 bg-[#45B8FF]/40 rounded mb-2" />
                      <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="h-16 bg-white rounded-lg border border-[#DCE6EE] p-3">
                      <div className="h-2 w-8 bg-[#A7DFFF]/40 rounded mb-2" />
                      <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="h-16 bg-white rounded-lg border border-[#DCE6EE] p-3">
                      <div className="h-2 w-8 bg-[#1687E8]/40 rounded mb-2" />
                      <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#1687E8]/30" />
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#45B8FF]/30" />
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                </div>
              )}

              {activeService >= 3 && (
                <div className="space-y-4">
                  <div className="h-20 bg-[#1687E8]/10 rounded-lg border border-[#1687E8]/20 p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1687E8]/30" />
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-[#1687E8]/40 rounded mb-2" />
                      <div className="h-1.5 w-32 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white rounded-lg border border-[#DCE6EE] p-4">
                      <div className="h-2 w-16 bg-[#45B8FF]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="h-24 bg-white rounded-lg border border-[#DCE6EE] p-4">
                      <div className="h-2 w-16 bg-[#A7DFFF]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="h-16 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-20 bg-[#1687E8]/30 rounded" />
                      <div className="h-2 w-16 bg-[#45B8FF]/30 rounded" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
