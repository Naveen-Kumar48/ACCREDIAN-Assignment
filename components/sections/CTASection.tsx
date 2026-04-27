import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section id="cta" className="scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-cyan-500 px-6 py-10 text-white shadow-[0_20px_70px_rgba(37,99,235,0.24)] sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Need a tailored learning plan?</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Want to learn more about our training solutions?
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Get expert guidance for your team’s success with a practical roadmap, clear timelines, and a dedicated
              enterprise contact.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="#lead-form" variant="secondary" className="border-white/10 bg-white text-slate-950 hover:border-white hover:bg-white/95">
              Contact Us
            </Button>
            <Button href="#features" className="bg-white/15 text-white hover:bg-white/25">
              View Solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}