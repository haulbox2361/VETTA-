import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-label text-neutral-700">
            {label}
            {props.required && <span className="text-brand-blue ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            'flex min-h-[48px] w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-body transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 shadow-sm',
            error && 'border-error focus-visible:ring-error',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-sm text-error">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';
