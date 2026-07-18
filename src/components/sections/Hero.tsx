import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background — gradient placeholder for cinematic video/image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-navy to-brand-slate" />
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(70,213,232,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(70,213,232,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="section-container text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mb-6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-cyan border border-brand-cyan/20 rounded-full bg-brand-cyan/5">
              Professional Drone Services
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold text-display-xl text-brand-offwhite mb-6"
          >
            Hello{' '}
            <span className="text-gradient-cyan">Gaurav</span>
          </motion.h1>

          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-brand-grey leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Lotusmirk transforms aerial data into precise, actionable insights
            for infrastructure, industry and land management.
          </motion.p>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button to="/services" variant="primary" size="lg" showArrow>
              Explore Our Capabilities
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-grey/60 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-brand-cyan/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
