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
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 py-2 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center">
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
          {navLinks.map((link, index) => (
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

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-surface md:hidden',
          isOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-[12px] px-4 py-3 text-sm font-semibold text-charcoal transition hover:bg-whisper hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <Button href="#lead-form" fullWidth onClick={() => setIsOpen(false)}>
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
}