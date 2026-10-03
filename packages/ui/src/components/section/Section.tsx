import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'dark' | 'muted';
  container?: boolean;
}

const variantStyles = {
  default: 'bg-background',
  dark: 'bg-background-dark text-foreground-on-dark',
  muted: 'bg-background-alt',
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', container = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24 lg:py-32', variantStyles[variant], className)}
        {...props}
      >
        {container ? (
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';

export const SectionHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn('mb-12 text-center md:text-left', className)} {...props} />
);

SectionHeader.displayName = 'SectionHeader';

export const SectionTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h2 className={cn('text-h2 font-bold leading-tight tracking-tight mb-4', className)} {...props} />
);

SectionTitle.displayName = 'SectionTitle';

export const SectionDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p className={cn('text-body-large text-foreground-muted max-w-2xl', className)} {...props} />
);

SectionDescription.displayName = 'SectionDescription';

export const SectionActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn('mt-8 flex flex-wrap gap-4', className)} {...props} />
);

SectionActions.displayName = 'SectionActions';
