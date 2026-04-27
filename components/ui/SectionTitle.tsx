'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  children,
}: SectionTitleProps) {
  return (
    <div className={cn('space-y-4', align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">{eyebrow}</p>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
        ) : null}
      </div>
      {children ? <div>{children}</div> : null}
    </div>
  );
}