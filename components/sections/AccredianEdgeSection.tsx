'use client';

import Image from 'next/image';

export function AccredianEdgeSection() {
  return (
    <section id="usp" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-4 text-center">
          <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            The <span className="text-[#1a73e8]">Accredian Edge</span>
          </h2>
          <p className="text-[1.1rem] font-medium text-slate-500 sm:text-[20px]">
            Key Aspects of <span className="text-[#1a73e8]">Our Strategic Training</span>
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Desktop/Tablet View */}
          <div className="hidden sm:block">
            <Image
              src="/Accredian/accredian-edge-usp-v3.svg"
              alt="Accredian Edge Strategic Training Flow"
              width={2032}
              height={761}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Mobile View */}
          <div className="block sm:hidden">
            <Image
              src="/Accredian/accredian-edge-usp-mobile.svg"
              alt="Accredian Edge Strategic Training Flow"
              width={600}
              height={1200}
              className="mx-auto h-auto w-[90%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
