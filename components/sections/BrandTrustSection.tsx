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

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 px-4 opacity-100 sm:gap-x-16 lg:gap-x-20">
          {trustPartners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.logoSrc}
                alt={partner.logoAlt}
                width={160}
                height={50}
                className="h-10 w-auto object-contain sm:h-12 lg:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}