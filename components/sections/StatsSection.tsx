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
    <section id="stats" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            Our <span className="text-[#1a73e8]">Track Record</span>
          </h2>
          <p className="text-[1.1rem] font-medium text-slate-500 sm:text-[20px]">
            The Numbers Behind <span className="text-[#1a73e8]">Our Success</span>
          </p>
        </div>

        {loading ? (
          <div className="grid gap-12 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center space-y-6">
                <div className="h-10 w-24 animate-pulse rounded-full bg-blue-50" />
                <div className="h-4 w-48 animate-pulse rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="mx-auto max-w-md text-center">
            <p className="text-rose-600">{error}</p>
            <Button type="button" variant="ghost" className="mt-4" onClick={() => setRefreshKey((value) => value + 1)}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Try again
            </Button>
          </div>
        ) : (
          <div className="grid divide-y divide-slate-100 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats?.items.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-12 py-8 text-center sm:py-10">
                <div className="mb-8 inline-flex items-center justify-center rounded-[30px] bg-[#dbeafe] px-10 py-3">
                  <span className="text-[28px] font-bold tracking-tight text-[#1a73e8]">
                    {stat.value}
                  </span>
                </div>
                <p className="max-w-[240px] text-[18px] font-semibold leading-relaxed text-slate-800">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}