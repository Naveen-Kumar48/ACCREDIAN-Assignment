'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { leadHighlights } from '@/lib/site-data';
import { cn } from '@/lib/utils';

type LeadFormState = {
  fullName: string;
  email: string;
  company: string;
  teamSize: string;
  goal: string;
};

const initialFormState: LeadFormState = {
  fullName: '',
  email: '',
  company: '',
  teamSize: '50-100',
  goal: '',
};

export function LeadCaptureSection() {
  const [formState, setFormState] = useState<LeadFormState>(initialFormState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? 'Something went wrong while submitting the form.');
      }

      setStatus('success');
      setMessage(payload.message ?? 'Thanks for reaching out. We will get back to you soon.');
      setFormState(initialFormState);
    } catch (submitError) {
      setStatus('error');
      setMessage(submitError instanceof Error ? submitError.message : 'Submission failed. Please try again.');
    }
  }

  return (
    <section id="lead-form" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Bonus Lead Capture"
            align="left"
            title="Request a custom enterprise proposal"
            description="Share a few details and our team will shape the next step around your training goals, timeline, and audience."
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {leadHighlights.map((highlight) => (
              <Card key={highlight.title} className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-950">{highlight.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="space-y-6 border-brand-100 bg-white">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Get in touch</p>
            <h3 className="font-display text-2xl font-semibold text-slate-950">Tell us about your team</h3>
            <p className="text-sm leading-7 text-slate-600">
              This mock lead form submits to a local API route and shows loading, success, and error states.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Full name
                <input
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Work email
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  data-1p-ignore="true"
                  data-lpignore="true"
                  data-bwignore="true"
                  suppressHydrationWarning
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  placeholder="name@company.com"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Company
                <input
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  placeholder="Company name"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Team size
                <select
                  name="teamSize"
                  value={formState.teamSize}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                >
                  <option value="1-20">1-20</option>
                  <option value="21-50">21-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100+">100+</option>
                </select>
              </label>
            </div>

            <label className="block space-y-2 text-sm font-medium text-slate-700">
              What would you like to improve?
              <textarea
                name="goal"
                value={formState.goal}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                placeholder="Leadership development, AI fluency, product skills, data literacy, or something else"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={status === 'submitting'}>
                <Send className="h-4 w-4" />
                {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
              <p className="text-xs leading-6 text-slate-500">
                We only use this information to prepare a tailored response for your team.
              </p>
            </div>
          </form>

          {message ? (
            <p
              className={cn(
                'rounded-2xl border px-4 py-3 text-sm leading-6',
                status === 'success' && 'border-emerald-200 bg-emerald-50 text-emerald-700',
                status === 'error' && 'border-rose-200 bg-rose-50 text-rose-700',
              )}
              aria-live="polite"
            >
              {message}
            </p>
          ) : null}
        </Card>
      </div>
    </section>
  );
}