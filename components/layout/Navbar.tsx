'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { brandAssets } from '@/lib/site-data';
import { navLinks } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 py-2 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <a href="#hero" className="flex items-center">
            <Image
              src={brandAssets.logo}
              alt="Accredian"
              width={180}
              height={50}
              priority
              className="h-10 w-auto object-contain sm:h-12"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors hover:text-[#1a73e8]",
                  link.label === "Home" 
                    ? "text-[#1a73e8] border-b-2 border-[#1a73e8] pb-1" 
                    : "text-slate-700"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-600 transition-hover lg:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Floating Menu Card */}
      <div className="lg:hidden">
        {/* Overlay */}
        <div 
          className={cn(
            "fixed inset-0 z-[100] bg-slate-900/10 backdrop-blur-[2px] transition-opacity duration-300",
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Card */}
        <div
          className={cn(
            "fixed right-4 top-4 z-[110] w-[260px] origin-top-right rounded-[24px] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out",
            isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          )}
        >
          <div className="flex justify-end p-2">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-900 hover:bg-slate-50 rounded-lg"
            >
              <X className="h-8 w-8" strokeWidth={3} />
            </button>
          </div>

          <nav className="flex flex-col py-2 px-6 pb-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-[19px] font-semibold transition-all text-left tracking-tight",
                    link.label === "Stats" 
                      ? "text-[#1a73e8] border-b-4 border-[#1a73e8] w-fit pb-0.5" 
                      : "text-slate-900"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full rounded-[16px] bg-[#1a73e8] py-4 text-center text-[15px] font-bold text-white shadow-xl shadow-blue-100 active:scale-95 transition-transform"
              >
                Enquire Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}