import React from 'react';
import Link from 'next/link';
import { cn } from '../../utils/cn';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'default' | 'primary' | 'muted';
  underline?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  default: 'text-foreground hover:text-primary',
  primary: 'text-primary hover:text-primary-dark',
  muted: 'text-foreground-muted hover:text-foreground',
};

export const CustomLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = 'default', underline = false, disabled = false, ...props }, ref) => {
    if (disabled) {
      return (
        <span
          ref={ref}
          className={cn(
            'inline-flex items-center gap-1 opacity-50 cursor-not-allowed',
            underline && 'underline underline-offset-4',
            variantStyles[variant],
            className
          )}
        >
          {props.children}
        </span>
      );
    }

    return (
      <a
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'active:scale-[0.98]',
          underline && 'underline underline-offset-4 hover:underline',
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

CustomLink.displayName = 'CustomLink';

export const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'muted';
  disabled?: boolean;
  onClick?: () => void;
}> = ({ href, children, className, variant = 'default', disabled = false, onClick }) => {
  if (disabled) {
    return (
      <span className={cn(
        'inline-flex items-center gap-1 opacity-50 cursor-not-allowed',
        variantStyles[variant],
        className
      )}>
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-1 transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'active:scale-[0.98]',
        variantStyles[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

NavLink.displayName = 'NavLink';
