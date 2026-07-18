import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { industries } from '../data/industries';
import { Button } from '../components/ui/Button';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { FinalCTA } from '../components/sections/FinalCTA';

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-black">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl text-brand-offwhite mb-4">Industry Not Found</h1>
          <Button to="/industries" variant="primary">Back to Industries</Button>
        </div>
      </div>
    );
  }

  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[industry.icon] || LucideIcons.Building;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-brand-navy to-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-cyan/3 to-transparent" />
        <div className="section-padding relative z-10">
          <div className="section-container">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm text-brand-grey hover:text-brand-cyan mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Industries
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                <IconComponent className="w-7 h-7 text-brand-cyan" />
              </div>
              <h1 className="font-display font-bold text-display-lg text-brand-offwhite mb-6 max-w-3xl">
                Drone Services for {industry.title}
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed max-w-2xl">
                {industry.heroDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges & Applications */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Industry Challenges
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  Common Operational Challenges
                </h2>
                <ul className="space-y-4">
                  {industry.challenges.map((ch, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-slate flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-brand-grey">{i + 1}</span>
                      </div>
                      <span className="text-sm text-brand-grey leading-relaxed">{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Applications
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  How Aerial Data Helps
                </h2>
                <ul className="space-y-3">
                  {industry.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-offwhite">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Our Solutions
              </span>
              <h2 className="font-display font-bold text-display-md text-brand-offwhite">
                Relevant Lotusmirk Services
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {industry.relevantServices.map((svc, i) => (
                <span
                  key={i}
                  className="px-5 py-3 text-sm font-medium text-brand-offwhite bg-brand-black/40 border border-white/10 rounded-lg"
                >
                  {svc}
                </span>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button to="/services" variant="outline" size="sm" showArrow>
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Benefits */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Deliverables
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  Typical Outputs
                </h2>
                <div className="space-y-3">
                  {industry.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-brand-navy/30 border border-white/5">
                      <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span className="text-sm text-brand-offwhite">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Benefits
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  Why It Matters
                </h2>
                <ul className="space-y-4">
                  {industry.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-grey leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {industry.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-brand-navy">
          <div className="section-padding">
            <div className="section-container max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  FAQ
                </span>
                <h2 className="font-display font-bold text-display-md text-brand-offwhite">
                  Common Questions
                </h2>
              </div>
              <FAQAccordion items={industry.faqs} />
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
