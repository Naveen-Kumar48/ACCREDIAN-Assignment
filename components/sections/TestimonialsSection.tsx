'use client';

import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { Testimonial } from '@/lib/site-data';

type TestimonialsResponse = {
  headline: string;
  description: string;
  items: Testimonial[];
};

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTestimonials() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/testimonials', { signal: controller.signal });

        if (!response.ok) {
          throw new Error('We could not load the testimonials right now.');
        }

        const payload: TestimonialsResponse = await response.json();
        setTestimonials(payload);
      } catch (fetchError) {
        if ((fetchError as DOMException).name !== 'AbortError') {
          setError(fetchError instanceof Error ? fetchError.message : 'Failed to load testimonials.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchTestimonials();

    return () => controller.abort();
  }, [refreshKey]);

  return (
    <section id="testimonials" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionTitle
          eyebrow="Testimonials from Our Partners"
          title="What our clients are saying"
          description="Real feedback from enterprise teams that need thoughtful delivery and reliable support."
        />

        {loading ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 animate-pulse rounded-2xl bg-slate-200" />
                  <div className="space-y-2">
                    <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
                    <div className="h-3 w-32 animate-pulse rounded-full bg-slate-100" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-full animate-pulse rounded-full bg-slate-100" />
                  <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-100" />
                  <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-100" />
                </div>
                <div className="space-y-2 border-t border-slate-200 pt-4">
                  <div className="h-4 w-32 animate-pulse rounded-full bg-slate-200" />
                  <div className="h-3 w-48 animate-pulse rounded-full bg-slate-100" />
                </div>
              </Card>
            ))}
          </div>
        ) : error ? (
          <Card className="space-y-4 border-rose-200 bg-rose-50">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Something went wrong</p>
            <p className="text-sm leading-7 text-rose-700">{error}</p>
            <Button type="button" variant="secondary" onClick={() => setRefreshKey((value) => value + 1)}>
              <RefreshCw className="h-4 w-4" />
              Reload testimonials
            </Button>
          </Card>
        ) : (
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials?.items.map((testimonial) => (
              <TestimonialCard key={`${testimonial.company}-${testimonial.author}`} {...testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}