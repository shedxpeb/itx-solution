import React from 'react';
import { cn } from '../../utils/cn';

export interface TypographyProps {
  variant?:
    | 'display-large'
    | 'display-medium'
    | 'display-small'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body-large'
    | 'body-medium'
    | 'body-small'
    | 'label-medium'
    | 'label-small'
    | 'caption'
    | 'overline';
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  'display-large': 'text-display-large font-bold leading-tight tracking-tight',
  'display-medium': 'text-display-medium font-bold leading-tight tracking-tight',
  'display-small': 'text-display-small font-bold leading-tight tracking-tight',
  h1: 'text-h1 font-bold leading-tight tracking-tight',
  h2: 'text-h2 font-bold leading-tight tracking-tight',
  h3: 'text-h3 font-semibold leading-snug tracking-tight',
  h4: 'text-h4 font-semibold leading-snug tracking-tight',
  h5: 'text-h5 font-medium leading-normal tracking-normal',
  h6: 'text-h6 font-medium leading-normal tracking-normal',
  'body-large': 'text-body-large font-normal leading-relaxed tracking-normal',
  'body-medium': 'text-body-medium font-normal leading-relaxed tracking-normal',
  'body-small': 'text-body-small font-normal leading-relaxed tracking-normal',
  'label-medium': 'text-label-medium font-medium leading-normal tracking-normal',
  'label-small': 'text-label-small font-medium leading-normal tracking-normal',
  caption: 'text-caption font-normal leading-normal tracking-normal',
  overline: 'text-overline font-medium tracking-wider uppercase',
};

const elementMap = {
  'display-large': 'h1',
  'display-medium': 'h1',
  'display-small': 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'body-large': 'p',
  'body-medium': 'p',
  'body-small': 'p',
  'label-medium': 'span',
  'label-small': 'span',
  caption: 'span',
  overline: 'span',
} as const;

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body-medium', className, children, ...props }, ref) => {
    const Element = elementMap[variant] as any;

    return (
      <Element
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

Typography.displayName = 'Typography';

// Convenience components
export const DisplayLarge: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="display-large" {...props} />
);

export const DisplayMedium: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="display-medium" {...props} />
);

export const DisplaySmall: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="display-small" {...props} />
);

export const Heading1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h1" {...props} />
);

export const Heading2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h2" {...props} />
);

export const Heading3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h3" {...props} />
);

export const Heading4: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h4" {...props} />
);

export const Heading5: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h5" {...props} />
);

export const Heading6: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h6" {...props} />
);

export const BodyLarge: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body-large" {...props} />
);

export const BodyMedium: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body-medium" {...props} />
);

export const BodySmall: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body-small" {...props} />
);

export const Label: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="label-medium" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
);

export const Eyebrow: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="overline" {...props} />
);
