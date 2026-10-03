import React from 'react';
import { cn } from '../../utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'wide' | 'narrow' | 'full';
}

const variantStyles = {
  standard: 'max-w-[1200px] w-full',
  wide: 'max-w-[1400px] w-full',
  narrow: 'max-w-[800px] w-full',
  full: 'max-w-full w-full',
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant = 'standard', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mx-auto px-4 sm:px-6 lg:px-8', variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
