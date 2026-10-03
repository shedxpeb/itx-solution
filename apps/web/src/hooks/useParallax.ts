'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'y' | 'x';
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(options: UseParallaxOptions = {}) {
  const {
    speed = 0.5,
    direction = 'y',
    disabled = false,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || disabled || !shouldAnimate()) return;

    const element = ref.current;
    const yPos = direction === 'y' ? speed : 0;
    const xPos = direction === 'x' ? speed : 0;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        yPercent: yPos * -100,
        xPercent: xPos * -100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed, direction, disabled]);

  return ref;
}
