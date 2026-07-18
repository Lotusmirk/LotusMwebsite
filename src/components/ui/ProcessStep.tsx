import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

export function ProcessStep({ number, title, description, isLast = false, index }: ProcessStepProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border-2 border-brand-cyan/30 flex items-center justify-center">
          <span className="font-display font-bold text-lg text-brand-cyan">{number}</span>
        </div>
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-brand-cyan/30 to-transparent mt-2" />}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? '' : ''}`}>
        <h3 className="font-display font-semibold text-xl text-brand-offwhite mb-2">{title}</h3>
        <p className="text-sm text-brand-grey leading-relaxed max-w-md">{description}</p>
      </div>
    </motion.div>
  );
}
