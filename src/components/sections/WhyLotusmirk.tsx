import { motion } from 'framer-motion';
import { Target, Database, ShieldCheck, Settings, FileCheck, Headphones } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const reasons = [
  { icon: Target, title: 'Mission-Focused Planning', description: 'Every operation is designed around your specific objectives and site conditions.' },
  { icon: Database, title: 'High-Quality Aerial Data', description: 'Professional-grade equipment and experienced pilots deliver reliable, accurate data.' },
  { icon: ShieldCheck, title: 'Safety-Conscious Operations', description: 'Rigorous safety protocols protect our team, your people and the public.' },
  { icon: Settings, title: 'Industry-Specific Workflows', description: 'We understand the standards, formats and requirements your industry demands.' },
  { icon: FileCheck, title: 'Decision-Ready Deliverables', description: 'Processed outputs arrive in formats that integrate with your existing tools and workflows.' },
  { icon: Headphones, title: 'Responsive Project Support', description: 'Clear communication from first brief to final delivery. We are available when you need us.' },
];

export function WhyLotusmirk() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-brand-navy relative" id="why-lotusmirk">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Why Lotusmirk"
            title="A drone services partner you can depend on."
            description="We do not promise the impossible. We deliver what we commit to — on time, on spec and with the quality you expect."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-brand-black/30 hover:border-brand-cyan/20 transition-all duration-300"
              >
                <reason.icon className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="font-display font-semibold text-lg text-brand-offwhite mb-2">{reason.title}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
