import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ServiceCard({ slug, title, description, icon, index }: ServiceCardProps) {
  const prefersReduced = useReducedMotion();
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] || LucideIcons.Circle;

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${slug}`}
        className="focus-ring group block relative bg-brand-navy/50 border border-white/5 rounded-2xl p-8 lg:p-10 card-hover overflow-hidden"
      >
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors duration-300">
            <IconComponent className="w-6 h-6 text-brand-cyan" />
          </div>

          <h3 className="font-display font-bold text-xl text-brand-offwhite mb-3 group-hover:text-brand-cyan transition-colors duration-300">
            {title}
          </h3>

          <p className="text-sm text-brand-grey leading-relaxed mb-6">
            {description}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan group-hover:gap-3 transition-all duration-300">
            Explore Service
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
