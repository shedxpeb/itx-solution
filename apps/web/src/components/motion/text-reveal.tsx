'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: string;
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  threshold = motionConfig.scroll.triggerCenter,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const element = ref.current;
      if (!element) return;

      // Get text content and wrap words
      const text = element.textContent || '';
      const words = text.split(' ');
      
      element.innerHTML = words.map((word, i) => 
        `<span class="reveal-word" style="display: inline-block; overflow: hidden; margin-right: 0.25em;"><span style="display: inline-block; transform: translateY(0);">${word}</span></span>`
      ).join(' ');

      const wordSpans = element.querySelectorAll('.reveal-word > span');

      // Animate from normal to slight lift then back
      gsap.fromTo(wordSpans, 
        { y: 0 },
        {
          y: '-10%',
          duration: motionConfig.duration.long,
          delay,
          stagger: 0.05,
          ease: motionConfig.easing.emphasized,
          scrollTrigger: {
            trigger: element,
            start: threshold,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
