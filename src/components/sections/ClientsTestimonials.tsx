import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function ClientsTestimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-brand-navy to-brand-black" id="clients-testimonials">
      <div className="section-padding">
        <div className="section-container">
          {/* Client Logos — Placeholder */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              Trusted By
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-32 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center"
                >
                  <span className="text-xs text-brand-grey">Client Logo {i}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-brand-grey italic">
              Client logos will be displayed here once supplied and approved.
            </p>
          </motion.div>

          {/* Testimonials — Placeholder */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto p-10 rounded-2xl border border-white/5 bg-brand-navy/30 border-dashed">
              <p className="text-lg text-brand-grey italic leading-relaxed mb-4">
                "Testimonial content will be added here once client feedback is collected and approved for publication."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center">
                  <span className="text-xs text-brand-grey">?</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-brand-offwhite">[Client Name]</p>
                  <p className="text-xs text-brand-grey">[Title, Company]</p>
                </div>
              </div>
              <span className="placeholder-tag mt-4">Placeholder Testimonial</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
