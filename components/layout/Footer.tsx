import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {/* Logo and Socials */}
          <div className="space-y-6">
            <Image 
              src="/Accredian/logo.webp" 
              alt="Accredian Logo" 
              width={160} 
              height={48} 
              className="h-auto w-40"
            />
            <div className="flex items-center gap-4">
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (4).svg" alt="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (3).svg" alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (2).svg" alt="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (1).svg" alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default.svg" alt="YouTube" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enquire Button Section */}
          <div className="flex flex-col items-center gap-3 sm:items-end w-full lg:w-auto">
            <Button 
              href="#lead-form" 
              className="h-12 w-full rounded-full border-none bg-[#1a73e8] px-10 text-[15px] font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-[#1557b0] hover:shadow-blue-200 active:scale-95 sm:w-auto"
            >
              Enquire Now
            </Button>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-10 h-[1px] w-full bg-slate-300" />

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-950">Accredian</h3>
            <ul className="space-y-4 text-[15px]">
              <li><a href="#" className="hover:text-[#1a73e8]">About</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Blog</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Why Accredian</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-950">Contact Us</h3>
            <div className="space-y-4 text-[15px] leading-relaxed">
              <p>Email us: <a href="mailto:enterprise@accredian.com" className="text-[#1a73e8] hover:underline">enterprise@accredian.com</a></p>
              <div className="max-w-md">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-[13px] font-medium text-slate-500">
          <p>© {currentYear} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}