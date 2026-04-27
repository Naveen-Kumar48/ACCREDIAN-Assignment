import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { BrandTrustSection } from '@/components/sections/BrandTrustSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection';

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BrandTrustSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
}