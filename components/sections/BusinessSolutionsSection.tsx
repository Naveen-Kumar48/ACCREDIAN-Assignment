'use client';

import Image from 'next/image';

const solutions = [
  {
    title: 'Program Specific',
    description: 'Certificate, Executive, Post Graduate Certificate',
    image: '/Accredian/project-management-v2.webp',
  },
  {
    title: 'Industry Specific',
    description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
    image: '/Accredian/data-science-v2.webp',
  },
  {
    title: 'Topic Specific',
    description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
    image: '/Accredian/senior-management-v2.webp',
  },
  {
    title: 'Level Specific',
    description: 'Senior Leadership, Mid-Career Professionals, Freshers',
    image: '/Accredian/digital-transformation-v2.webp',
  },
];

export function BusinessSolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 space-y-3 text-center">
          <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-slate-950 sm:text-[2.8rem]">
            Tailored <span className="text-[#1a73e8]">Course Segmentation</span>
          </h2>
          <p className="text-[1rem] font-medium text-slate-600 sm:text-[1.1rem]">
            Explore <span className="text-[#1a73e8]">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <div 
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition-all hover:translate-y-[-4px] hover:shadow-[0_8px_35px_rgba(0,0,0,0.1)] border border-slate-50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <h3 className="mb-2 font-display text-[1.25rem] font-bold text-[#1a73e8]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-500 font-medium whitespace-pre-line">
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
