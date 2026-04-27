import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { brandAssets } from '@/lib/site-data';

const heroBullets = [
  'Tailored Solutions',
  'Industry Insights',
  'Expert Guidance',
];

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 px-4 pb-0 pt-8 sm:px-6 lg:px-8 lg:pt-8 bg-gradient-to-r from-blue-50/50 to-white/50">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:px-16 lg:py-20 lg:pb-0">
          <div className="space-y-8 lg:space-y-8 lg:pt-10 lg:pb-24">
            <div className="space-y-4">
              <h1 className="max-w-2xl font-display text-[2.8rem] font-bold tracking-tight text-slate-900 sm:text-[3.8rem] sm:leading-[1.1] lg:text-[4.5rem]">
                Next-Gen <span className="text-brand-600">Expertise</span>
                <br />
                For Your <span className="text-brand-600">Enterprise</span>
              </h1>

              <p className="max-w-xl text-[1.15rem] leading-relaxed text-slate-800 sm:text-[18px] font-medium">
                Cultivate high-performance teams through expert learning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {heroBullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2">
                  <CheckCircle2 strokeWidth={2} className="h-5 w-5 text-green-500" />
                  <span className="text-[15px] font-semibold text-slate-800">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button href="#lead-form" className="bg-brand-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-soft hover:bg-brand-700 transition-all rounded-[8px]">
                Enquire Now
              </Button>
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[450px] lg:h-[600px] w-full self-end">
            <Image
              src={brandAssets.hero}
              alt="Accredian enterprise professionals"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}