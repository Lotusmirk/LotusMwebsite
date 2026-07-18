import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProjectCardProps {
  slug: string;
  title: string;
  industry: string;
  location: string;
  challenge: string;
  isPlaceholder?: boolean;
  index: number;
}

export function ProjectCard({ slug, title, industry, location, challenge, isPlaceholder, index }: ProjectCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link
        to={`/projects#${slug}`}
        className="focus-ring group block relative bg-brand-navy/50 border border-white/5 rounded-2xl overflow-hidden card-hover"
      >
        {/* Image placeholder */}
        <div className="relative h-52 bg-gradient-to-br from-brand-slate to-brand-navy flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl text-brand-cyan font-display font-bold">
                {title.charAt(0)}
              </span>
            </div>
            <span className="text-xs text-brand-grey">Project Image Placeholder</span>
          </div>
          {/* Industry badge */}
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-brand-black/60 backdrop-blur-sm text-brand-cyan rounded-full border border-brand-cyan/20">
            {industry}
          </span>
          {isPlaceholder && (
            <span className="absolute top-4 right-4 placeholder-tag">
              Placeholder Project
            </span>
          )}
        </div>

        <div className="p-6 lg:p-8">
          <h3 className="font-display font-bold text-lg text-brand-offwhite mb-2 group-hover:text-brand-cyan transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-brand-grey mb-3">
            <MapPin className="w-3 h-3" />
            {location}
          </div>

          <p className="text-sm text-brand-grey leading-relaxed mb-4 line-clamp-3">
            {challenge}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan group-hover:gap-3 transition-all">
            View Case Study <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
