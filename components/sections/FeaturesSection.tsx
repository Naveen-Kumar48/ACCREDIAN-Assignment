import { cn } from '@/lib/utils';
import { domainExpertiseItems } from '@/lib/site-data';

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="font-display text-[2rem] font-bold tracking-tight text-slate-950 sm:text-[2.5rem]">
            Our <span className="text-[#1a73e8]">Domain Expertise</span>
          </h2>
          <p className="text-[0.95rem] font-medium text-slate-500 sm:text-[17px]">
            <span className="text-[#1a73e8]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domainExpertiseItems.map((item, index) => (
            <div 
              key={item.title} 
              className={cn(
                "flex flex-col items-center justify-center rounded-[16px] bg-white px-6 py-6 border border-slate-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:translate-y-[-4px]",
                index === 6 && "lg:col-start-2"
              )}
            >
              <div className="mb-4 flex h-14 items-center justify-center">
                <img 
                  src={item.iconPath} 
                  alt={item.title}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-center font-display text-[16px] font-bold text-slate-950">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}