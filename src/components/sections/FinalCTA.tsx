import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="final-cta">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-slate to-brand-navy" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />

      {/* Grid accent */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(70,213,232,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(70,213,232,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="section-container text-center max-w-3xl mx-auto">
          <motion.span
            initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan"
          >
            Get Started
          </motion.span>

          <motion.h2
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-display-lg text-brand-offwhite mb-6"
          >
            See Your Project from a{' '}
            <span className="text-gradient-cyan">Better Perspective.</span>
          </motion.h2>

          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-grey leading-relaxed mb-10"
          >
            Whether you need a one-time survey or an ongoing aerial data programme,
            Lotusmirk is ready to discuss your requirements.
          </motion.p>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Request a Consultation
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Lotusmirk
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
