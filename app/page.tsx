import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BrandTrustSection } from '@/components/sections/BrandTrustSection';
import { AccredianEdgeSection } from '@/components/sections/AccredianEdgeSection';
import { BusinessSolutionsSection } from '@/components/sections/BusinessSolutionsSection';
import { WhyPartnerSection } from '@/components/sections/WhyPartnerSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CATFrameworkSection } from '@/components/sections/CATFrameworkSection';
import { GrantFundingSection } from '@/components/sections/GrantFundingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { LeadCaptureSection } from '@/components/sections/LeadCaptureSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <BrandTrustSection />
      <AccredianEdgeSection />
      <BusinessSolutionsSection />
      <WhyPartnerSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CATFrameworkSection />
      <GrantFundingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <LeadCaptureSection />
    </main>
  );
}