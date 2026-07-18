import { motion } from 'framer-motion';
import { Gauge, ShieldCheck, BarChart3 } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const capabilities = [
  {
    icon: Gauge,
    title: 'Faster Data Capture',
    description:
      'Aerial operations cover ground in hours that would take traditional methods days or weeks — reducing project timelines and getting answers sooner.',
  },
  {
    icon: ShieldCheck,
    title: 'Safer Inspections',
    description:
      'Remove personnel from hazardous heights, confined spaces and active sites. Capture the data you need while keeping your team on the ground.',
  },
  {
    icon: BarChart3,
    title: 'More Informed Decisions',
    description:
      'High-resolution aerial data provides spatial context that spreadsheets and ground observations cannot. See the full picture before you commit.',
  },
];

export function CapabilitiesIntro() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-brand-black relative overflow-hidden" id="capabilities-intro">
      {/* Subtle accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      <div className="section-padding">
        <div className="section-container">
          {/* Editorial heading */}
          <div className="max-w-3xl mb-16 lg:mb-20">
            <motion.span
              initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan"
            >
              Why Aerial Intelligence
            </motion.span>
            <motion.h2
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-display-lg text-brand-offwhite mb-6"
            >
              The perspective that changes{' '}
              <span className="text-gradient-cyan">everything.</span>
            </motion.h2>
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-brand-grey leading-relaxed"
            >
              When you see your project, asset or land from above — with precision sensors and intelligent processing — the data speaks clearly. Lotusmirk delivers the aerial capabilities that turn observation into understanding.
            </motion.p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                    <cap.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-brand-offwhite mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-brand-grey leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
