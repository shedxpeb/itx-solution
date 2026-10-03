import React from 'react';
import { cn } from '../../utils/cn';

export interface MediaProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'objectFit'> {
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto';
  variant?: 'default' | 'rounded' | 'circle';
  objectFit?: 'cover' | 'contain' | 'fill';
}

const aspectRatioStyles = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[16/9]',
  auto: 'aspect-auto',
};

const variantStyles = {
  default: 'rounded-none',
  rounded: 'rounded-lg',
  circle: 'rounded-full',
};

export const Media = React.forwardRef<HTMLImageElement, MediaProps>(
  ({ className, aspectRatio = 'auto', variant = 'default', objectFit = 'cover', ...props }, ref) => {
    return (
      <div className={cn('overflow-hidden bg-muted', aspectRatioStyles[aspectRatio], className)}>
        <img
          ref={ref}
          className={cn('w-full h-full', variantStyles[variant])}
          style={{ objectFit: objectFit as any }}
          {...props}
        />
      </div>
    );
  }
);

Media.displayName = 'Media';

// NextMedia removed - requires Next.js Image component which is not available in shared package
// Use standard Media component or integrate Next.js Image directly in consuming app
