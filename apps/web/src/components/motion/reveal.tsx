'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: string;
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = motionConfig.duration.medium,
  threshold = motionConfig.scroll.triggerStart,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Set initial state - content remains visible
      const distance = motionConfig.distance.small;
      const directionTransform = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
      };

      gsap.set(ref.current, {
        ...directionTransform[direction],
      });

      // Animate in from offset to normal position
      gsap.to(ref.current, {
        x: 0,
        y: 0,
        duration,
        delay,
        ease: motionConfig.easing.standard,
        scrollTrigger: {
          trigger: ref.current,
          start: threshold,
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, duration, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
