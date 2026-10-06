'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1, BodyLarge } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

export function PositioningSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Split text animation on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (textRef.current) {
            const words = textRef.current.querySelectorAll('.animate-word');
            words.forEach((word, index) => {
              const wordProgress = Math.max(0, Math.min(1, (progress * words.length) - index));
              const opacity = 0.3 + (wordProgress * 0.7);
              const color = wordProgress > 0.7 ? '#1687E8' : '#FFFFFF';

              gsap.to(word, {
                opacity,
                color,
                duration: 0.1,
              });
            });
          }
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
        <div className="max-w-4xl mx-auto">
          <div ref={textRef} className="text-center">
            <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#091118] mb-8">
              <span className="animate-word inline-block opacity-30 transition-colors">We don&apos;t just build websites.</span>
              <br />
              <span className="animate-word inline-block opacity-30 transition-colors">We build the systems</span>
              <br />
              <span className="animate-word inline-block opacity-30 transition-colors">behind the business.</span>
            </Heading1>
          </div>
        </div>
      </Container>
    </section>
  );
}
