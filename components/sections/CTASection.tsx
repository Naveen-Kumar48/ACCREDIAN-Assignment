import Image from 'next/image';
import { ChevronRight, Headset } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section id="cta" className="scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[20px] bg-[#1a73e8] px-8 py-10 text-white shadow-[0_20px_50px_rgba(26,115,232,0.15)] sm:px-12 lg:px-16 lg:py-14">
        {/* Decorative Background Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Image 
            src="/Accredian/cta-circle.svg" 
            alt="" 
            fill 
            className="object-cover scale-150 rotate-12"
          />
        </div>

        <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:text-left text-center">
            {/* Support Icon Box */}
            <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-white/20 backdrop-blur-sm sm:h-20 sm:w-20">
              <Headset className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} />
            </div>

            <div className="space-y-1">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-[15px] font-medium text-white/90 sm:text-[17px]">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Button 
              href="#lead-form" 
              className="group h-12 border-none bg-white px-8 text-[15px] font-bold text-[#1a73e8] hover:bg-slate-50"
            >
              Contact Us
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}