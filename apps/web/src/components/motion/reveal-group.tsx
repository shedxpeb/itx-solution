'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: string;
}

export function RevealGroup({
  children,
  className = '',
  stagger = motionConfig.stagger.normal,
  threshold = motionConfig.scroll.triggerStart,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const children = Array.from(ref.current?.children || []);

      // Set initial state - content remains visible
      gsap.set(children, {
        y: motionConfig.distance.small,
      });

      // Animate in with stagger
      gsap.to(children, {
        y: 0,
        duration: motionConfig.duration.short,
        stagger,
        ease: motionConfig.easing.standard,
        scrollTrigger: {
          trigger: ref.current,
          start: threshold,
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
