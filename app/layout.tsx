import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Accredian Enterprise Clone',
    template: '%s | Accredian Enterprise Clone',
  },
  description:
    'A polished Next.js landing page clone inspired by Accredian Enterprise for internship assignment practice.',
  keywords: ['Accredian', 'Next.js', 'Enterprise training', 'Tailwind CSS', 'Landing page clone'],
  authors: [{ name: 'GitHub Copilot' }],
  openGraph: {
    title: 'Accredian Enterprise Clone',
    description:
      'A polished Next.js landing page clone inspired by Accredian Enterprise for internship assignment practice.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accredian Enterprise Clone',
    description:
      'A polished Next.js landing page clone inspired by Accredian Enterprise for internship assignment practice.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}