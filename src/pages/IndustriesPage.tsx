import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IndustryCard } from '../components/ui/IndustryCard';
import { industries } from '../data/industries';
import { FinalCTA } from '../components/sections/FinalCTA';

export function IndustriesPage() {
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
                Industries
              </span>
              <h1 className="font-display font-bold text-display-lg text-brand-offwhite mb-6 max-w-3xl">
                Aerial intelligence for the industries that{' '}
                <span className="text-gradient-cyan">build, power and sustain.</span>
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed max-w-2xl">
                Every sector faces unique operational challenges. Lotusmirk tailors aerial data capture
                and processing to deliver the specific insights each industry needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
