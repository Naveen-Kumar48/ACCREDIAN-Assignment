'use client';

import { Target, FileText, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Identify Skill Gaps',
    description: 'Determine your specific needs from our catalog of 500+ specialized programs.',
    icon: Target,
  },
  {
    title: 'Seamless Application',
    description: 'Our team handles the end-to-end grant application and compliance paperwork for you.',
    icon: FileText,
  },
  {
    title: 'Expert Training',
    description: 'Launch expert-led training sessions with up to 90% of costs offset by grants.',
    icon: TrendingUp,
  },
];

export function GrantFundingSection() {
  return (
    <section id="grants" className="scroll-mt-24 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            Get Up to <span className="text-[#1a73e8]">90% in Skill Future Grants</span>
          </h2>
          <p className="mt-4 text-[1.1rem] font-medium text-slate-600">
            Accelerate your transformation and build local capabilities with heavy subsidies.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div 
              key={step.title}
              className="rounded-[32px] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                <step.icon className="h-7 w-7 text-[#1a73e8]" />
              </div>
              <h3 className="mb-4 font-display text-xl font-bold text-slate-950">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="rounded-full bg-slate-950 px-12 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-slate-800 active:scale-95">
            Check Eligibility
          </button>
        </div>
      </div>
    </section>
  );
}
