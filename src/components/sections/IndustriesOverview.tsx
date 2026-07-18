import { SectionHeading } from '../ui/SectionHeading';
import { IndustryCard } from '../ui/IndustryCard';
import { industries } from '../../data/industries';
import { Button } from '../ui/Button';

export function IndustriesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-brand-navy relative" id="industries-overview">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Industries We Serve"
            title="Aerial intelligence for the sectors that build, power and sustain."
            description="Every industry has unique challenges. We tailor our aerial operations to deliver the specific data and insights each sector needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.slug}
                slug={industry.slug}
                title={industry.title}
                description={industry.shortDescription}
                icon={industry.icon}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button to="/industries" variant="outline" showArrow>
              Explore All Industries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
