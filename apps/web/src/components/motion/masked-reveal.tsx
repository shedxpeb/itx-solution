'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface MaskedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function MaskedReveal({
  children,
  className = '',
  delay = 0,
  threshold = motionConfig.scroll.triggerCenter,
  direction = 'up',
}: MaskedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const element = ref.current;
      const mask = maskRef.current;
      if (!element || !mask) return;

      const directionConfig = {
        up: { from: 'translateY(-100%)', to: 'translateY(0%)' },
        down: { from: 'translateY(100%)', to: 'translateY(0%)' },
        left: { from: 'translateX(-100%)', to: 'translateX(0%)' },
        right: { from: 'translateX(100%)', to: 'translateX(0%)' },
      };

      // Set initial mask position
      gsap.set(mask, { transform: directionConfig[direction].from });

      // Animate mask
      gsap.to(mask, {
        transform: directionConfig[direction].to,
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
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        ref={maskRef}
        className="w-full h-full"
        style={{ willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
}
