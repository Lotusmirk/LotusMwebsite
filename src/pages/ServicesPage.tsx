import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceCard } from '../components/ui/ServiceCard';
import { services } from '../data/services';
import { FinalCTA } from '../components/sections/FinalCTA';

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-brand-navy to-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Our Services
              </span>
              <h1 className="font-display font-bold text-display-lg text-brand-offwhite mb-6 max-w-3xl">
                Comprehensive aerial solutions from{' '}
                <span className="text-gradient-cyan">capture to deliverable.</span>
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed max-w-2xl">
                Lotusmirk provides end-to-end drone services — from precision surveying and infrastructure inspection
                to advanced data processing and cinematic aerial content. Every service is designed to deliver
                accurate, usable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
          </div>
        </div>
      </section>

      {/* How We Work summary */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="section-padding">
          <div className="section-container">
            <SectionHeading
              label="Our Approach"
              title="Every service follows a structured methodology."
              description="Whether it is a survey, inspection or creative shoot — we plan meticulously, capture precisely and deliver confidently."
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
