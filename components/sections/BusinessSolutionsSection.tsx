'use client';

import Image from 'next/image';

const solutions = [
  {
    title: 'Program Design',
    description: 'We build high-impact learning paths tailored for your team.',
    image: '/Accredian/project-management-v2.webp',
  },
  {
    title: 'Skills Audit',
    description: 'Identify skill gaps and prioritize development for better outcomes.',
    image: '/Accredian/data-science-v2.webp',
  },
  {
    title: 'L&D Strategy',
    description: 'Aligned your learning initiatives with your business goals.',
    image: '/Accredian/senior-management-v2.webp',
  },
  {
    title: 'Custom Content',
    description: 'Proprietary content designed specifically for your organization.',
    image: '/Accredian/digital-transformation-v2.webp',
  },
];

export function BusinessSolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            Tailored <span className="text-[#1a73e8]">Business Solutions</span>
          </h2>
          <p className="text-[1rem] font-medium text-slate-500 sm:text-[18px]">
            Delivering <span className="text-[#1a73e8]">End-to-End Excellence</span> for your Enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {solutions.map((item) => (
            <div 
              key={item.title}
              className="group overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 font-display text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
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
