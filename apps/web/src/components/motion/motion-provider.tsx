'use client';

import { useEffect, useRef } from 'react';
import { initLenis, destroyLenis, startLenis } from '@/lib/motion/lenis';
import { gsap, ScrollTrigger, refreshScrollTrigger, scrollTriggerClear } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { CustomCursor } from './custom-cursor';

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initLenis();

    // Set up GSAP ticker for Lenis integration
    if (lenis && shouldAnimate()) {
      // Sync Lenis with ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const raf = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      cleanupRef.current = () => {
        gsap.ticker.remove(raf);
      };
    }

    // Handle resize
    const handleResize = () => {
      refreshScrollTrigger();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanupRef.current?.();
      scrollTriggerClear();
      destroyLenis();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
