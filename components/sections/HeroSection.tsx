import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const heroBullets = [
  'Tailored learning paths for enterprise teams',
  'Industry-aware cohorts and expert facilitation',
  'Smooth execution from discovery to delivery',
];

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
            Enterprise learning, simplified
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Next-Gen Expertise for Your Enterprise
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Cultivate high-performance teams through expert learning, tailored delivery, and measurable outcomes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="#lead-form">Enquire Now</Button>
            <Button href="#features" variant="secondary">
              Explore Solutions
            </Button>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3">
            {heroBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 text-sm leading-6 text-slate-600 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-brand-100/60 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(37,99,235,0.12)]">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                  Enterprise learning dashboard
                </p>
                <h2 className="font-display text-2xl font-semibold text-slate-950">
                  Customized for team growth
                </h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                <ArrowRight className="h-6 w-6 -rotate-45" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="bg-slate-50">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Learning path</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">Strategy to execution</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Programs aligned to business priorities, role maturity, and immediate outcomes.
                </p>
              </Card>

              <Card className="bg-brand-50">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Team impact</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">Faster adoption</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Delivery plans that help employees absorb, apply, and retain what they learn.
                </p>
              </Card>
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-400 p-6 text-white shadow-glow">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/75">
                Ready in 48 hours
              </p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm text-white/80">Custom enterprise proposal</p>
                  <p className="text-4xl font-semibold tracking-tight sm:text-5xl">Fast.</p>
                </div>
                <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  Discovery call + roadmap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}