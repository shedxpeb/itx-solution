'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Container, Heading1, BodyLarge } from '@itx/ui';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const categories = [
  'Web Development',
  'Web Applications',
  'CRM & ERP Systems',
  'Mobile Applications',
  'Automation & Integrations',
];

export function SolutionExplorerSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
  };

  useEffect(() => {
    if (!visualRef.current || !shouldAnimate()) return;

    gsap.to(visualRef.current, {
      opacity: 0,
      scale: 0.98,
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
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme={navbarTheme}
      className="relative py-24 lg:py-32 bg-[#F5F8FC] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="mb-12 lg:mb-16">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#091118] mb-6">
            Which solution
            <br />
            <span className="text-[#1687E8]">do you need?</span>
          </Heading1>
          <BodyLarge className="text-[#5F7080] text-lg max-w-2xl">
            Explore our tailored solutions for different business needs.
          </BodyLarge>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                index === activeCategory
                  ? 'bg-[#1687E8] text-white shadow-lg'
                  : 'bg-white text-[#091118] border border-[#DCE6EE] hover:border-[#1687E8]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Software Interface */}
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
              {/* Web Development */}
              {activeCategory === 0 && (
                <div className="space-y-4">
                  <div className="h-40 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="flex gap-2 mb-4">
                      <div className="h-2 w-8 bg-[#1687E8]/30 rounded" />
                      <div className="h-2 w-12 bg-[#45B8FF]/30 rounded" />
                      <div className="h-2 w-10 bg-[#A7DFFF]/30 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-5/6 bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-4/6 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white rounded-lg border border-[#DCE6EE] p-3">
                      <div className="h-2 w-8 bg-[#1687E8]/40 rounded mb-2" />
                      <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="h-20 bg-white rounded-lg border border-[#DCE6EE] p-3">
                      <div className="h-2 w-8 bg-[#45B8FF]/40 rounded mb-2" />
                      <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="h-20 bg-white rounded-lg border border-[#DCE6EE] p-3">
                      <div className="h-2 w-8 bg-[#A7DFFF]/40 rounded mb-2" />
                      <div className="h-1.5 w-10 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                </div>
              )}

              {/* Web Applications */}
              {activeCategory === 1 && (
                <div className="space-y-4">
                  <div className="flex gap-2 h-10 mb-4">
                    <div className="flex-1 bg-[#1687E8]/20 rounded flex items-center justify-center">
                      <div className="h-2 w-12 bg-[#1687E8]/40 rounded" />
                    </div>
                    <div className="flex-1 bg-[#45B8FF]/20 rounded flex items-center justify-center">
                      <div className="h-2 w-12 bg-[#45B8FF]/40 rounded" />
                    </div>
                    <div className="flex-1 bg-[#A7DFFF]/20 rounded flex items-center justify-center">
                      <div className="h-2 w-12 bg-[#A7DFFF]/40 rounded" />
                    </div>
                  </div>
                  <div className="h-48 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      <div className="h-12 bg-[#1687E8]/30 rounded" />
                      <div className="h-12 bg-[#45B8FF]/30 rounded" />
                      <div className="h-12 bg-[#A7DFFF]/30 rounded" />
                      <div className="h-12 bg-[#1687E8]/30 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-5/6 bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-4/6 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                </div>
              )}

              {/* CRM & ERP */}
              {activeCategory === 2 && (
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
                  <div className="h-40 bg-white rounded-lg border border-[#DCE6EE] p-4">
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

              {/* Mobile Applications */}
              {activeCategory === 3 && (
                <div className="space-y-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-32 h-56 bg-[#091118] rounded-xl border-4 border-[#101C26] overflow-hidden">
                      <div className="h-8 bg-[#101C26] flex items-center justify-center">
                        <div className="w-10 h-6 bg-[#1687E8] rounded" />
                      </div>
                      <div className="p-4">
                        <div className="h-2 w-full bg-[#1687E8]/30 rounded mb-3" />
                        <div className="h-2 w-20 bg-[#45B8FF]/30 rounded mb-2" />
                        <div className="h-2 w-16 bg-[#A7DFFF]/30 rounded mb-2" />
                        <div className="h-2 w-18 bg-[#1687E8]/20 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Native mobile applications for iOS and Android
                  </div>
                </div>
              )}

              {/* Automation */}
              {activeCategory === 4 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1687E8]/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
                    </div>
                    <div className="h-1 flex-1 bg-[#5F7080]/30 rounded" />
                    <div className="w-10 h-10 rounded-lg bg-[#45B8FF]/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#45B8FF]" />
                    </div>
                    <div className="h-1 flex-1 bg-[#5F7080]/30 rounded" />
                  </div>
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-[#1687E8]/20" />
                        <div className="h-1.5 flex-1 bg-[#5F7080]/30 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-[#45B8FF]/20" />
                        <div className="h-1.5 flex-1 bg-[#5F7080]/30 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-[#A7DFFF]/20" />
                        <div className="h-1.5 flex-1 bg-[#5F7080]/30 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Automated workflows and system integrations
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Block */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#091118]">{categories[activeCategory]}</h3>
            <p className="text-[#5F7080] text-lg leading-relaxed">
              {activeCategory === 0 && 'Modern, responsive websites that convert visitors into customers with optimized performance and seamless user experiences.'}
              {activeCategory === 1 && 'Custom web applications built to handle complex business logic, integrate with existing systems, and scale with your needs.'}
              {activeCategory === 2 && 'Comprehensive CRM and ERP solutions that centralize your data, automate processes, and provide real-time business insights.'}
              {activeCategory === 3 && 'Native and cross-platform mobile applications that extend your business reach and provide seamless experiences on any device.'}
              {activeCategory === 4 && 'Intelligent automation and integrations that connect your systems, eliminate manual work, and streamline operations.'}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
