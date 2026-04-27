'use client';

import { Search, PenTool, Layout, Rocket } from 'lucide-react';

const partners = [
  {
    title: 'Skill-based discovery',
    description: 'We identify essential skills for each role and level.',
    icon: Search,
  },
  {
    title: 'L&D model assessment',
    description: 'We evaluate your current learning culture and metrics.',
    icon: Layout,
  },
  {
    title: 'Designing the Roadmap',
    description: 'We build a prioritized plan for skill development.',
    icon: PenTool,
  },
  {
    title: 'Build & Professionalize',
    description: 'We deliver impact-focused learning that sticks.',
    icon: Rocket,
  },
];

export function WhyPartnerSection() {
  return (
    <section id="why-partner" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#1a73e8] px-8 py-16 text-white sm:px-12 lg:px-16">
        <div className="mb-16 space-y-2">
          <p className="text-sm font-bold uppercase tracking-wider text-white/80">Why Partner With Us?</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Disrupt Skill Deficiencies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {partners.map((item) => (
            <div key={item.title} className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <item.icon className="h-7 w-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
