import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/services';
import { Button } from '../components/ui/Button';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { FinalCTA } from '../components/sections/FinalCTA';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-black">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl text-brand-offwhite mb-4">Service Not Found</h1>
          <Button to="/services" variant="primary">Back to Services</Button>
        </div>
      </div>
    );
  }

  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || LucideIcons.Plane;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-brand-navy to-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/3 to-transparent" />
        <div className="section-padding relative z-10">
          <div className="section-container">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-brand-grey hover:text-brand-cyan mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                <IconComponent className="w-7 h-7 text-brand-cyan" />
              </div>
              <h1 className="font-display font-bold text-display-lg text-brand-offwhite mb-6 max-w-3xl">
                {service.title}
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Addressed */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Challenges
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  Problems This Service Addresses
                </h2>
                <ul className="space-y-4">
                  {service.problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-slate flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-brand-grey">{i + 1}</span>
                      </div>
                      <span className="text-sm text-brand-grey leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Capabilities
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  What We Deliver
                </h2>
                <ul className="space-y-3">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-offwhite">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="section-padding">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Workflow
              </span>
              <h2 className="font-display font-bold text-display-md text-brand-offwhite">
                How We Execute
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.workflow.map((step, i) => (
                <div key={i} className="relative p-6 rounded-xl bg-brand-black/40 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-brand-cyan">{i + 1}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-brand-offwhite mb-2">{step.step}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{step.description}</p>
                  {i < service.workflow.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-brand-cyan/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Deliverables
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  What You Receive
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-brand-navy/30 border border-white/5">
                      <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span className="text-sm text-brand-offwhite">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Industries */}
              <div>
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Industries
                </span>
                <h2 className="font-display font-bold text-display-sm text-brand-offwhite mb-6">
                  Applicable Sectors
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.applicableIndustries.map((ind, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm text-brand-offwhite bg-brand-slate/50 border border-white/10 rounded-lg"
                    >
                      {ind}
                    </span>
                  ))}
                </div>

                {/* Equipment placeholder */}
                <div className="mt-10 p-6 rounded-xl border border-dashed border-white/10 bg-brand-navy/20">
                  <h3 className="font-display font-semibold text-brand-offwhite mb-2">Equipment & Sensors</h3>
                  <p className="text-sm text-brand-grey">
                    Specific drone models, cameras and sensors used for this service will be listed here once confirmed.
                  </p>
                  <span className="placeholder-tag mt-3">To Be Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
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
              <FAQAccordion items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
