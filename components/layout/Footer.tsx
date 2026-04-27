import { Mail, MapPin, Phone } from 'lucide-react';
import { navLinks } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold text-white shadow-glow">
              a
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-white">Accredian</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Enterprise</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Enterprise learning programs that blend strategy, execution, and measurable outcomes for modern teams.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            <span>Leadership</span>
            <span>Product</span>
            <span>Data</span>
            <span>AI</span>
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</p>
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact Us</p>
          <div className="space-y-4 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand-400" />
              enterprise@accredian.com
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brand-400" />
              Speak with our advisor
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-400" />
              Gurugram, Haryana, India
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Accredian. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and mock API routes for internship practice.</p>
        </div>
      </div>
    </footer>
  );
}