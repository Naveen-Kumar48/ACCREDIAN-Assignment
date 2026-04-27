import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { enterpriseFeatures } from '@/lib/site-data';

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionTitle
          eyebrow="Features & Benefits"
          title="The Accredian Edge"
          description="Specialized programs designed to fuel innovation, build capability, and improve team performance."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {enterpriseFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="group h-full transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(37,99,235,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}