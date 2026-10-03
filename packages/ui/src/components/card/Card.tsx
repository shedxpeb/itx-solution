import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
}

const variantStyles = {
  default: 'border border-border bg-surface',
  elevated: 'border border-border bg-surface shadow-medium',
  outlined: 'border-2 border-border bg-surface',
  interactive: 'border border-border bg-surface shadow-medium hover:shadow-large transition-shadow cursor-pointer',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rounded-lg overflow-hidden', variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn('p-6 space-y-2', className)} {...props} />
);

CardHeader.displayName = 'CardHeader';

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);

CardContent.displayName = 'CardContent';

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn('p-6 pt-0 flex items-center', className)} {...props} />
);

CardFooter.displayName = 'CardFooter';
