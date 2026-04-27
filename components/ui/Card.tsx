'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[12px] border border-border bg-surface p-6 shadow-soft',
        className,
      )}
    >
      {children}
    </div>
  );
}