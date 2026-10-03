'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface UseScrollRevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: string;
  disabled?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: UseScrollRevealOptions = {}) {
  const {
    direction = 'up',
    delay = 0,
    duration = motionConfig.duration.medium,
    threshold = motionConfig.scroll.triggerStart,
    disabled = false,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || disabled || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const element = ref.current;
      if (!element) return;

      const distance = motionConfig.distance.medium;
      const from = {
        up: { y: distance, opacity: 0 },
        down: { y: -distance, opacity: 0 },
        left: { x: distance, opacity: 0 },
        right: { x: -distance, opacity: 0 },
        scale: { scale: 0.9, opacity: 0 },
        fade: { opacity: 0 },
      };

      gsap.set(element, from[direction]);

      gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: motionConfig.easing.standard,
        scrollTrigger: {
          trigger: element,
          start: threshold,
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, duration, threshold, disabled]);

  return ref;
}
