'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1 } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

export function ContinuousBuildSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Parallax effect on background text
      gsap.to(bgTextRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Text reveal
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 40%',
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
      className="relative py-32 lg:py-48 bg-[#071017] overflow-hidden w-full"
    >
      {/* Background typography */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[clamp(120px,20vw,300px)] font-bold text-[#1687E8]/5 tracking-tight whitespace-nowrap">
          CONTINUOUS
        </h2>
      </div>

      <Container className="relative z-10 w-full px-6 md:px-8">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#FFFFFF] mb-8">
            From the first idea to a
            <br />
            <span className="text-[#45B8FF]">living, improving system</span>
            <br />
            — continuous build.
          </Heading1>
        </div>
      </Container>
    </section>
  );
}
