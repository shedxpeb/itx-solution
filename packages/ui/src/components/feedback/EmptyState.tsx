import React from 'react';
import { cn } from '../../utils/cn';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title = 'No data', description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center justify-center p-8 text-center', className)}
        {...props}
      >
        {icon && <div className="mb-4 text-foreground-muted">{icon}</div>}
        {title && <h3 className="text-h5 font-medium mb-2">{title}</h3>}
        {description && <p className="text-body-medium text-foreground-muted mb-4">{description}</p>}
        {action}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
