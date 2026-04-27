import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className="font-sans text-ink antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}