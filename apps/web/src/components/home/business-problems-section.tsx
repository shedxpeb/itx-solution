'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Container, Heading1, BodyLarge } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const problems = [
  'Manual Work',
  'Disconnected Tools',
  'Scattered Data',
  'Slow Approvals',
  'Duplicate Work',
  'No Visibility',
  'Operational Bottlenecks',
  'Spreadsheet-heavy Workflows',
  'Communication Gaps',
];

export function BusinessProblemsSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeProblem, setActiveProblem] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const problemIndex = Math.floor(progress * problems.length);
          const clampedIndex = Math.min(problemIndex, problems.length - 1);
          setActiveProblem(clampedIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme={navbarTheme}
      className="relative py-24 lg:py-32 bg-[#071017] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="mb-12 lg:mb-16">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#FFFFFF] mb-6">
            What&apos;s slowing your
            <br />
            <span className="text-[#1687E8]">business down?</span>
          </Heading1>
          <BodyLarge className="text-[#A7DFFF] text-lg max-w-2xl">
            Common operational challenges that limit growth and efficiency.
          </BodyLarge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Problem List */}
          <div className="space-y-2">
            {problems.map((problem, index) => (
              <div
                key={problem}
                className={`py-4 px-6 rounded-lg transition-all cursor-pointer ${
                  index === activeProblem
                    ? 'bg-[#1687E8]/20 border border-[#1687E8]/40'
                    : 'bg-transparent border border-transparent hover:bg-[#1687E8]/10'
                }`}
                onClick={() => setActiveProblem(index)}
              >
                <span
                  className={`text-lg font-medium transition-colors ${
                    index === activeProblem ? 'text-[#45B8FF]' : 'text-[#A7DFFF]'
                  }`}
                >
                  {problem}
                </span>
              </div>
            ))}
          </div>

          {/* Diagnostic Visual */}
          <div
            ref={visualRef}
            className="relative h-[500px] bg-white rounded-xl shadow-2xl border border-[#DCE6EE] overflow-hidden"
          >
            <div className="h-10 bg-[#091118] flex items-center px-4">
              <span className="text-xs text-white font-medium">Problem Diagnostic</span>
            </div>
            <div className="p-6 bg-[#F5F8FC] h-full">
              {/* Manual Work */}
              {activeProblem === 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#DCE6EE]">
                    <div className="w-8 h-8 rounded-full bg-[#1687E8]/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
                    </div>
                    <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#DCE6EE]">
                    <div className="w-8 h-8 rounded-full bg-[#1687E8]/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
                    </div>
                    <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#DCE6EE]">
                    <div className="w-8 h-8 rounded-full bg-[#1687E8]/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
                    </div>
                    <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                  </div>
                  <div className="text-center text-sm text-[#5F7080] mt-4">
                    Repetitive manual tasks slowing operations
                  </div>
                </div>
              )}

              {/* Disconnected Tools */}
              {activeProblem === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-[#DCE6EE]">
                      <div className="h-2 w-16 bg-[#1687E8]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-[#DCE6EE]">
                      <div className="h-2 w-16 bg-[#45B8FF]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <div className="h-8 w-0.5 bg-[#DCE6EE]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-[#DCE6EE]">
                      <div className="h-2 w-16 bg-[#A7DFFF]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-[#DCE6EE]">
                      <div className="h-2 w-16 bg-[#1687E8]/30 rounded mb-2" />
                      <div className="h-1.5 w-20 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080] mt-4">
                    Systems operating in isolation
                  </div>
                </div>
              )}

              {/* Scattered Data */}
              {activeProblem === 2 && (
                <div className="space-y-4">
                  <div className="relative h-48">
                    <div className="absolute top-4 left-4 w-16 h-12 bg-[#1687E8]/20 rounded border border-[#1687E8]/30" />
                    <div className="absolute top-8 right-8 w-20 h-14 bg-[#45B8FF]/20 rounded border border-[#45B8FF]/30" />
                    <div className="absolute bottom-8 left-1/3 w-14 h-10 bg-[#A7DFFF]/20 rounded border border-[#A7DFFF]/30" />
                    <div className="absolute bottom-4 right-4 w-18 h-12 bg-[#1687E8]/20 rounded border border-[#1687E8]/30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-[#DCE6EE] flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#5F7080]/50" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Data fragmented across multiple sources
                  </div>
                </div>
              )}

              {/* Slow Approvals */}
              {activeProblem === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1687E8]/30 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#1687E8]" />
                    </div>
                    <div className="h-1 flex-1 bg-[#1687E8]/40 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#45B8FF]/30 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#45B8FF]" />
                    </div>
                    <div className="h-1 flex-1 bg-[#45B8FF]/40 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#A7DFFF]/30 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#A7DFFF]" />
                    </div>
                    <div className="h-1 flex-1 bg-[#A7DFFF]/40 rounded" />
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-10 h-10 rounded-full bg-[#DCE6EE] flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#5F7080]" />
                    </div>
                    <div className="h-1 flex-1 bg-[#DCE6EE] rounded" />
                  </div>
                  <div className="text-center text-sm text-[#5F7080] mt-4">
                    Approval workflow bottlenecks
                  </div>
                </div>
              )}

              {/* Default visualization for other problems */}
              {activeProblem >= 4 && (
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#1687E8]/30" />
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-1/2 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#45B8FF]/30" />
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-1/2 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    {problems[activeProblem]}: Impact on operations
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
