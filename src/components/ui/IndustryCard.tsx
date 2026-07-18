import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface IndustryCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function IndustryCard({ slug, title, description, icon, index }: IndustryCardProps) {
  const prefersReduced = useReducedMotion();
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] || LucideIcons.Building;

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/industries/${slug}`}
        className="focus-ring group block relative h-full bg-gradient-to-br from-brand-navy/60 to-brand-slate/30 border border-white/5 rounded-2xl p-7 card-hover overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="w-11 h-11 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
            <IconComponent className="w-5 h-5 text-brand-cyan" />
          </div>

          <h3 className="font-display font-semibold text-lg text-brand-offwhite mb-2 group-hover:text-brand-cyan transition-colors">
            {title}
          </h3>

          <p className="text-sm text-brand-grey leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-cyan uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300">
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
