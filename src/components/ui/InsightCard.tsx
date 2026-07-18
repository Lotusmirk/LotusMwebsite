import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface InsightCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  index: number;
}

export function InsightCard({ title, excerpt, category, readTime, date, index }: InsightCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-brand-navy/50 border border-white/5 rounded-2xl overflow-hidden card-hover"
    >
      {/* Top gradient */}
      <div className="h-1 bg-gradient-to-r from-brand-cyan via-cyan-400 to-brand-gold" />

      <div className="p-7">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 text-xs font-medium bg-brand-cyan/10 text-brand-cyan rounded-md">
            {category}
          </span>
          <span className="flex items-center gap-1 text-xs text-brand-grey">
            <Clock className="w-3 h-3" /> {readTime}
          </span>
        </div>

        <h3 className="font-display font-semibold text-lg text-brand-offwhite mb-3 group-hover:text-brand-cyan transition-colors leading-snug">
          {title}
        </h3>

        <p className="text-sm text-brand-grey leading-relaxed mb-5 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-brand-grey">{date}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan group-hover:gap-2.5 transition-all">
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
