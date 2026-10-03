'use client';

import { useState, useEffect } from 'react';
import { ITXLoadingScreen } from './itx-loading-screen';

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Check if we should show loading (only on initial load)
    // Must be inside useEffect to avoid hydration mismatch
    const hasSeenIntro = typeof window !== 'undefined' ? sessionStorage.getItem('itx-intro-seen') : null;
    
    // If already seen, skip loading screen entirely
    if (hasSeenIntro) {
      setIsLoading(false);
      setShowLoading(false);
      return;
    }

    // Small delay to ensure content is ready, then show loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400); // Allow loading screen to complete

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {showLoading && <ITXLoadingScreen onComplete={handleLoadingComplete} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease' }} className="w-full overflow-x-hidden">
        {children}
      </div>
    </>
  );
}
