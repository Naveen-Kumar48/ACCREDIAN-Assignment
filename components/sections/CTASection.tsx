import Image from 'next/image';
import { ChevronRight, Headset } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section id="cta" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#1a73e8] px-8 py-12 text-white shadow-[0_24px_60px_rgba(26,115,232,0.2)] sm:px-12 lg:px-16 lg:py-20">
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between text-center lg:text-left">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            {/* Support Icon Box */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-white/20 backdrop-blur-md ring-1 ring-white/30 sm:h-20 sm:w-20">
              <Headset className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-[1.4rem] font-bold leading-tight sm:text-[1.8rem] lg:text-[2rem]">
                Want to Learn More About Our <span className="block sm:inline">Training Solutions?</span>
              </h2>
              <p className="text-[15px] font-medium text-white/80 sm:text-[18px]">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>

          <div className="flex shrink-0 w-full sm:w-auto">
            <Button 
              href="#lead-form" 
              className="group flex flex-row items-center justify-center w-full h-14 rounded-full border-none bg-white px-10 text-[18px] font-bold text-[#1a73e8] shadow-2xl transition-all hover:bg-slate-50 active:scale-95 sm:w-auto sm:min-w-[220px]"
            >
              <span className="whitespace-nowrap">Contact Us</span>
              <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}