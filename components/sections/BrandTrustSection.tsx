import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { trustPartners } from '@/lib/site-data';

export function BrandTrustSection() {
  return (
    <section id="trust" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionTitle
          eyebrow="Our Proven Partnerships"
          title="Successful collaborations with the industry's best"
          description="A trusted enterprise learning partner for organizations that need clarity, speed, and measurable progress."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPartners.map((partner) => (
            <Card key={partner} className="flex items-center justify-center py-8 text-lg font-semibold text-slate-500">
              {partner}
            </Card>
          ))}
        </div>

        <Card className="grid gap-6 bg-slate-950 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">Why teams trust us</p>
            <h3 className="font-display text-2xl font-semibold">Clear structure, flexible delivery, and measurable outcomes.</h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              We adapt learning programs to business goals, audience maturity, and timelines so enterprise teams can move
              from idea to execution without friction.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[320px]">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center">
              <p className="text-2xl font-semibold text-white">3x</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Faster alignment</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center">
              <p className="text-2xl font-semibold text-white">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Tailored scope</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center">
              <p className="text-2xl font-semibold text-white">1 Team</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Single point of contact</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}