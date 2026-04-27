import Image from 'next/image';
import { trustPartners } from '@/lib/site-data';

export function BrandTrustSection() {
  return (
    <section id="trust" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="space-y-4 text-center">
          <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            Our Proven <span className="text-[#1a73e8]">Partnerships</span>
          </h2>
          <p className="text-[1.1rem] font-medium text-slate-500 sm:text-[20px]">
            Successful Collaborations With the <span className="text-[#1a73e8]">Industry's Best</span>
          </p>
        </div>

        <div className="relative overflow-hidden py-10">
          {/* Marquee Container */}
          <div className="flex animate-marquee items-center gap-x-16 px-4">
            {/* Duplicated set for seamless loop */}
            {[...trustPartners, ...trustPartners, ...trustPartners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex shrink-0 items-center justify-center">
                <Image
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  width={160}
                  height={50}
                  className="h-10 w-auto object-contain transition-all hover:scale-110 sm:h-12 lg:h-14"
                />
              </div>
            ))}
          </div>
          
          {/* Subtle Gradient Overlays for smooth entry/exit */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}