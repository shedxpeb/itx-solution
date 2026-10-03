'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: string;
  from?: number;
  to?: number;
}

export function ScaleReveal({
  children,
  className = '',
  delay = 0,
  threshold = motionConfig.scroll.triggerCenter,
  from = 0.8,
  to = 1,
}: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const element = ref.current;
      if (!element) return;

      gsap.set(element, {
        scale: from,
      });

      gsap.to(element, {
        scale: to,
        duration: motionConfig.duration.long,
        delay,
        ease: motionConfig.easing.emphasized,
        scrollTrigger: {
          trigger: element,
          start: threshold,
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, threshold, from, to]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
