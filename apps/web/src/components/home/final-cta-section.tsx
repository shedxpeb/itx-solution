'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1, BodyLarge, NavLink } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

export function FinalCTASection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Background convergence
      gsap.from(bgRef.current, {
        scale: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      // Text reveal
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 40%',
          scrub: 1,
        },
      });

      // Button reveal
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'top 30%',
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
      {/* Background glow */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1687E8] rounded-full blur-[300px] opacity-[0.15]" />
      </div>

      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={textRef} className="mb-12">
            <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#FFFFFF] mb-8">
              HAVE A BUSINESS
              <br />
              <span className="text-[#45B8FF]">PROBLEM</span>
              <br />
              WORTH SOLVING?
            </Heading1>
            <BodyLarge className="text-[#A7DFFF] text-lg max-w-2xl mx-auto">
              Let&apos;s build something that moves your business forward.
            </BodyLarge>
          </div>

          <div ref={buttonRef}>
            <NavLink
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl font-bold transition-all bg-[#1687E8] text-white hover:bg-[#0F5CB8] hover:shadow-2xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-12 py-5 text-lg"
            >
              Start a Conversation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
