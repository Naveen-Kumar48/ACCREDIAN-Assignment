'use client';

import Image from 'next/image';

export function CATFrameworkSection() {
  return (
    <section id="cat-framework" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-16 space-y-4">
          <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-slate-950 sm:text-[3.5rem]">
            The <span className="text-[#1a73e8]">CAT Framework</span>
          </h2>
          <p className="text-[1.1rem] font-medium text-slate-600 sm:text-[1.2rem]">
            Our Proven Approach to <span className="text-[#1a73e8]">Learning Excellence</span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-6xl aspect-[1933/610]">
          <Image
            src="/Accredian/catV2.svg"
            alt="The CAT Framework: Concept, Application, Tools"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
