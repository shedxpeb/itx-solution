'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1, BodyLarge } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const reasons = [
  {
    title: 'Business-first thinking',
    description: 'We start with your business goals, not technology choices.',
  },
  {
    title: 'Custom solutions',
    description: 'Every system is tailored to your specific needs and operations.',
  },
  {
    title: 'Connected systems',
    description: 'Everything works together—no silos, no disconnected tools.',
  },
  {
    title: 'Modern interfaces',
    description: 'User experiences that people actually enjoy using.',
  },
  {
    title: 'Scalable architecture',
    description: 'Built to grow with your business, not hold it back.',
  },
  {
    title: 'Clear communication',
    description: 'No jargon, no surprises—just transparent collaboration.',
  },
  {
    title: 'Technology flexibility',
    description: 'We use the right tools for the job, not just the popular ones.',
  },
  {
    title: 'Continuous improvement',
    description: 'Your system evolves as your business does.',
  },
];

export function WhyITXSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
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
      className="relative py-24 lg:py-32 bg-[#F5F8FC] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="mb-12 lg:mb-16">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#091118] mb-6">
            Why ITX Solution?
          </Heading1>
          <BodyLarge className="text-[#5F7080] text-lg max-w-2xl">
            The principles that guide everything we build.
          </BodyLarge>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="bg-white rounded-xl p-6 border border-[#DCE6EE] hover:border-[#1687E8]/40 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-[#091118] mb-3 group-hover:text-[#1687E8] transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-[#5F7080] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
