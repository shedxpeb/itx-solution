'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface UseStickySectionOptions {
  endTrigger?: string;
  end?: string;
  scrub?: boolean | number;
  disabled?: boolean;
}

export function useStickySection<T extends HTMLElement = HTMLDivElement>(options: UseStickySectionOptions = {}) {
  const {
    endTrigger,
    end = 'bottom bottom',
    scrub = true,
    disabled = false,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || disabled || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        end: endTrigger ? `${endTrigger} ${end}` : end,
        pin: true,
        scrub,
        anticipatePin: 1,
      });
    }, ref);

    return () => ctx.revert();
  }, [endTrigger, end, scrub, disabled]);

  return ref;
}
