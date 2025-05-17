'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 text-white hover:bg-zinc-800',
        primary: 'bg-brass-500 text-white hover:bg-brass-600',
        outline: 'border border-zinc-900 text-zinc-900 hover:bg-zinc-100',
        outlineBrass: 'border border-brass-500 text-brass-700 hover:bg-brass-50',
        ghost: 'text-zinc-900 hover:bg-zinc-100',
        ghostBrass: 'text-brass-700 hover:bg-brass-50',
        white: 'bg-white text-zinc-900 hover:bg-zinc-100',
        link: 'text-brass-600 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-6 py-3',
        sm: 'px-4 py-2 text-sm',
        lg: 'px-8 py-4 text-lg',
        icon: 'w-10 h-10',
      },
      rounded: {
        default: '',
        md: 'rounded-md',
        full: 'rounded-full',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'md',
    },
  }
);

export interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  href?: string;
  children: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  rounded,
  href,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, rounded, className }))}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    >
      {children}
    </button>
  );
} 