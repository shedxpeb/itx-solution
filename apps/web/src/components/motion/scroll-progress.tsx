'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!progressRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Update progress on scroll
      ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (progressRef.current) {
            gsap.set(progressRef.current, {
              scaleX: self.progress,
            });
          }
        },
      });

      // Show progress after initial scroll
      const showTrigger = ScrollTrigger.create({
        start: '50px top',
        onEnter: () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false),
      });
    }, progressRef);

    return () => ctx.revert();
  }, []);

  if (!shouldAnimate()) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 bg-primary/20 z-[100] transition-opacity duration-300 overflow-hidden ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={progressRef}
        className="h-full bg-primary origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
