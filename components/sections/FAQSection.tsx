'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What types of programs do you offer?',
    answer: 'We offer a wide range of programs across Data Science, AI, Product Management, Digital Transformation, and Leadership development, tailored for all levels from individual contributors to senior executives.',
  },
  {
    question: 'How do we apply for Skill Future grants?',
    answer: 'Our team handles the entire process. We identify eligible programs, prepare the necessary documentation, and coordinate with relevant authorities to ensure your organization receives maximum subsidy benefits.',
  },
  {
    question: 'Can programs be customized for our specific industry?',
    answer: 'Absolutely. We specialize in custom content and curriculum design. We use your industry data, case studies, and business contexts to ensure the learning is immediately applicable to your teams.',
  },
  {
    question: 'What is the typical duration of a corporate program?',
    answer: 'Durations vary based on complexity, ranging from intensive 2-day workshops to comprehensive 3-6 month transformation paths. We design the schedule around your team\'s operational availability.',
  },
  {
    question: 'How do you measure the impact of training?',
    answer: 'We use a multi-layered approach including skill competency audits, capstone project evaluation, and post-program performance tracking to provide a clear ROI on your L&D investment.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            Frequently Asked <span className="text-[#1a73e8]">Questions</span>
          </h2>
          <p className="mt-4 text-[1.1rem] font-medium text-slate-500">
            Find answers to common questions about our corporate solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-[24px] border border-slate-100 bg-white transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-6 w-6 text-[#1a73e8]" />
                ) : (
                  <Plus className="h-6 w-6 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                } px-8`}
              >
                <p className="text-[15px] leading-relaxed text-slate-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
