'use client';

import Image from 'next/image';

export function CATSection() {
  return (
    <section id="cat" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-[#f8fafc] px-8 py-20 text-center sm:px-12 lg:px-16">
          {/* Background Graphic */}
          <div className="absolute inset-0 z-0 opacity-[0.15]">
            <Image
              src="/Accredian/catV2.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
                Accredian <span className="text-[#1a73e8]">Program Test (CAT)</span>
              </h2>
              <p className="mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-slate-600">
                Assess your team's skills and identify the right learning path with our proprietary <span className="font-bold text-[#1a73e8]">Competency Assessment Tool</span>.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-[#1a73e8] px-10 py-4 text-lg font-bold text-white shadow-[0_10px_20px_rgb(26,115,232,0.3)] transition-all hover:scale-105 hover:bg-[#1557b0] active:scale-95">
                Take the Test
              </button>
              <button className="rounded-full border-2 border-slate-200 bg-white px-10 py-4 text-lg font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-95">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
