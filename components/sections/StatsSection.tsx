'use client';

import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { TrackRecordStat } from '@/lib/site-data';

type StatsResponse = {
  headline: string;
  description: string;
  items: TrackRecordStat[];
};

export function StatsSection() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/stats', { signal: controller.signal });

        if (!response.ok) {
          throw new Error('We could not load the track record numbers right now.');
        }

        const payload: StatsResponse = await response.json();
        setStats(payload);
      } catch (fetchError) {
        if ((fetchError as DOMException).name !== 'AbortError') {
          setError(fetchError instanceof Error ? fetchError.message : 'Failed to load stats.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchStats();

    return () => controller.abort();
  }, [refreshKey]);

  return (
    <section id="stats" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionTitle
          eyebrow="Our Track Record"
          title="The numbers behind our success"
          description="A quick snapshot of the scale, consistency, and impact of our enterprise learning delivery."
        />

        {loading ? (
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="space-y-4">
                <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
                <div className="h-10 w-24 animate-pulse rounded-2xl bg-slate-200" />
                <div className="h-4 w-full animate-pulse rounded-full bg-slate-100" />
                <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-100" />
              </Card>
            ))}
          </div>
        ) : error ? (
          <Card className="space-y-4 border-rose-200 bg-rose-50">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Something went wrong</p>
            <p className="text-sm leading-7 text-rose-700">{error}</p>
            <Button type="button" variant="secondary" onClick={() => setRefreshKey((value) => value + 1)}>
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {stats?.items.map((stat) => (
              <Card key={stat.label} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">{stat.label}</p>
                <p className="font-display text-4xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
                <p className="text-sm leading-7 text-slate-600">{stat.description}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}