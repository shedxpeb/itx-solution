'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1 } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

export function BuiltForGrowthSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Expansion animation
      gsap.from(visualRef.current, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme={navbarTheme}
      className="relative py-24 lg:py-32 bg-[#F5F8FC] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="mb-12 lg:mb-16 text-center">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#091118] mb-6">
            Built for
            <br />
            <span className="text-[#1687E8]">growing businesses.</span>
          </Heading1>
        </div>

        {/* System Expansion Visualization */}
        <div
          ref={visualRef}
          className="relative h-[400px] w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-[#DCE6EE] overflow-hidden"
        >
          <div className="h-10 bg-[#091118] flex items-center px-4">
            <span className="text-xs text-white font-medium">System Architecture</span>
          </div>
          <div className="p-6 bg-[#F5F8FC] h-full">
            <div className="grid grid-cols-4 gap-4 h-full">
              {/* Layer 1 */}
              <div className="bg-white rounded-lg border border-[#DCE6EE] p-4">
                <div className="h-2 w-12 bg-[#1687E8]/40 rounded mb-2" />
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-[#5F7080]/30 rounded" />
                  <div className="h-1.5 w-3/4 bg-[#5F7080]/30 rounded" />
                </div>
              </div>

              {/* Layer 2 */}
              <div className="bg-white rounded-lg border border-[#DCE6EE] p-4">
                <div className="h-2 w-12 bg-[#45B8FF]/40 rounded mb-2" />
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-[#5F7080]/30 rounded" />
                  <div className="h-1.5 w-3/4 bg-[#5F7080]/30 rounded" />
                </div>
              </div>

              {/* Layer 3 */}
              <div className="bg-white rounded-lg border border-[#DCE6EE] p-4">
                <div className="h-2 w-12 bg-[#A7DFFF]/40 rounded mb-2" />
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-[#5F7080]/30 rounded" />
                  <div className="h-1.5 w-3/4 bg-[#5F7080]/30 rounded" />
                </div>
              </div>

              {/* Layer 4 */}
              <div className="bg-white rounded-lg border border-[#DCE6EE] p-4">
                <div className="h-2 w-12 bg-[#1687E8]/40 rounded mb-2" />
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-[#5F7080]/30 rounded" />
                  <div className="h-1.5 w-3/4 bg-[#5F7080]/30 rounded" />
                </div>
              </div>
            </div>

            <div className="mt-4 h-24 bg-white rounded-lg border border-[#DCE6EE] p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#1687E8]/30" />
                <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#45B8FF]/30" />
                <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
