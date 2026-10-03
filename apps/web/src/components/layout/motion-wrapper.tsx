'use client';

import { MotionProvider } from '@/components/motion/motion-provider';
import { ScrollProgress } from '@/components/motion/scroll-progress';

export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <ScrollProgress />
      <div className="w-full overflow-x-hidden">
        {children}
      </div>
    </MotionProvider>
  );
}
