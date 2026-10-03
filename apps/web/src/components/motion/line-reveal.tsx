'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function LineReveal({
  children,
  className = '',
  delay = 0,
  threshold = motionConfig.scroll.triggerCenter,
  direction = 'left',
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const element = ref.current;
      const line = lineRef.current;
      if (!element || !line) return;

      const directionConfig = {
        left: { from: { left: '0%' }, to: { left: '100%' } },
        right: { from: { right: '0%' }, to: { right: '100%' } },
        up: { from: { top: '0%' }, to: { top: '100%' } },
        down: { from: { bottom: '0%' }, to: { bottom: '100%' } },
      };

      // Set initial line position
      gsap.set(line, directionConfig[direction].from);

      // Animate line
      gsap.to(line, {
        ...directionConfig[direction].to,
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
  }, [delay, threshold, direction]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        ref={lineRef}
        className="absolute bg-primary"
        style={{
          width: direction === 'left' || direction === 'right' ? '100%' : '2px',
          height: direction === 'up' || direction === 'down' ? '100%' : '2px',
          ...((direction === 'left' || direction === 'right') && { top: 0, bottom: 0 }),
          ...((direction === 'up' || direction === 'down') && { left: 0, right: 0 }),
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
