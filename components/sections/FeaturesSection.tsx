import { cn } from '@/lib/utils';
import { domainExpertiseItems } from '@/lib/site-data';

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-slate-950 sm:text-[3rem]">
            Our <span className="text-[#1a73e8]">Domain Expertise</span>
          </h2>
          <p className="text-[1rem] font-medium text-slate-500 sm:text-[18px]">
            <span className="text-[#1a73e8]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domainExpertiseItems.map((item, index) => (
            <div 
              key={item.title} 
              className={cn(
                "flex flex-col items-center justify-center rounded-[20px] bg-white px-8 py-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)]",
                index === 6 && "lg:col-start-2"
              )}
            >
              <div className="mb-6 flex h-20 items-center justify-center">
                <img 
                  src={item.iconPath} 
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-center font-display text-[19px] font-bold text-slate-950">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}