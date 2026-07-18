import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({ label, title, description, align = 'center', light = false }: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}
    >
      {label && (
        <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
          {label}
        </span>
      )}
      <h2
        className={`font-display font-bold text-display-md mb-4 ${
          light ? 'text-brand-black' : 'text-brand-offwhite'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base lg:text-lg leading-relaxed ${light ? 'text-gray-600' : 'text-brand-grey'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
