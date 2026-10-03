'use client';

import { useEffect, useRef, Children, cloneElement, ReactElement } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  threshold?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
}

export function StaggerReveal({
  children,
  className = '',
  delay = 0,
  stagger = motionConfig.stagger.normal,
  threshold = motionConfig.scroll.triggerStart,
  direction = 'up',
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const items = Array.from(container.children);
      const distance = motionConfig.distance.small;

      const fromConfig = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        scale: { scale: 0.9 },
        fade: {},
      };

      gsap.set(items, fromConfig[direction]);

      gsap.to(items, {
        x: 0,
        y: 0,
        scale: 1,
        duration: motionConfig.duration.medium,
        delay,
        stagger,
        ease: motionConfig.easing.standard,
        scrollTrigger: {
          trigger: container,
          start: threshold,
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay, stagger, threshold, direction]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
