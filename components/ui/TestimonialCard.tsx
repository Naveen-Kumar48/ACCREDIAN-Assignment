'use client';

import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

type TestimonialCardProps = {
  company: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  className?: string;
};

export function TestimonialCard({
  company,
  quote,
  author,
  role,
  location,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn('flex h-full flex-col justify-between gap-6', className)}>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg font-bold text-brand-700">
            {company.charAt(0)}
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {company}
          </span>
        </div>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">“{quote}”</p>
      </div>
      <div className="border-t border-slate-200 pt-4">
        <p className="text-sm font-semibold text-slate-950">{author}</p>
        <p className="text-sm text-slate-600">{role}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-600">{location}</p>
      </div>
    </Card>
  );
}