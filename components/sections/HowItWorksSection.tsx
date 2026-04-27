'use client';

import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Analyse',
    subtitle: 'Context & Objectives',
    color: 'bg-blue-50 text-[#1a73e8]',
    icon: '01',
  },
  {
    title: 'Integrate',
    subtitle: 'Custom & Expert led',
    color: 'bg-[#1a73e8] text-white',
    icon: '02',
  },
  {
    title: 'Advise',
    subtitle: 'Performance & Impact',
    color: 'bg-slate-900 text-white',
    icon: '03',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            Our Comprehensive <span className="text-[#1a73e8]">3 Step Process</span>
          </h2>
          <p className="text-[1rem] font-medium text-slate-500 sm:text-[18px]">
            Execution excellence at <span className="text-[#1a73e8]">every stage</span> of the journey
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-1 flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 lg:w-full">
                <div className={`relative flex h-40 w-40 items-center justify-center rounded-full ${step.color} shadow-xl transition-transform hover:scale-105 sm:h-52 sm:w-52`}>
                  <div className="space-y-1">
                    <span className="text-sm font-bold uppercase tracking-widest opacity-60">{step.icon}</span>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{step.title}</h3>
                    <p className="px-4 text-[13px] font-medium opacity-80 sm:text-[15px]">{step.subtitle}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight className="h-12 w-12 text-slate-200" strokeWidth={1} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
