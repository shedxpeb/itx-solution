'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1, BodyLarge } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

export function FounderSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      gsap.from(portraitRef.current, {
        x: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      gsap.from(textRef.current, {
        x: 50,
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
      className="relative py-24 lg:py-32 bg-[#071017] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait Area */}
          <div
            ref={portraitRef}
            className="relative aspect-square lg:aspect-[4/5] max-w-md bg-[#091118] rounded-2xl overflow-hidden border border-[#1B2633]"
          >
            {/* Portrait placeholder - to be replaced with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#1687E8]/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#1687E8]">V</span>
                </div>
                <p className="text-[#A7DFFF] text-sm">Portrait Image</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#FFFFFF]">
              VIKASBHAI
            </Heading1>
            <BodyLarge className="text-[#A7DFFF] text-lg leading-relaxed">
              The people behind the system.
            </BodyLarge>
            <p className="text-[#5F7080] leading-relaxed">
              At ITX Solution, we believe that great technology is built by people who understand business.
              Every line of code, every interface, every system we create reflects our commitment to building
              solutions that actually work for the people who use them.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
