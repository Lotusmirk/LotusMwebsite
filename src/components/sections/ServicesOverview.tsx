import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';
import { Button } from '../ui/Button';

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-brand-black to-brand-navy" id="services-overview">
      <div className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Our Services"
            title="End-to-end aerial solutions for every project need."
            description="From initial survey flights to processed, decision-ready deliverables — Lotusmirk covers the full aerial data pipeline."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button to="/services" variant="outline" showArrow>
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
