import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/sections/FinalCTA';

export function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-brand-navy to-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Projects & Case Studies
              </span>
              <h1 className="font-display font-bold text-display-lg text-brand-offwhite mb-6 max-w-3xl">
                Real challenges.{' '}
                <span className="text-gradient-cyan">Aerial solutions.</span>
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed max-w-2xl">
                Explore how Lotusmirk helps clients across industries capture better data and make better decisions. These are placeholder case studies — real projects will be added as they are completed and approved for publication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Detail Cards */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container space-y-16">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                id={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-12 rounded-2xl bg-brand-navy/30 border border-white/5"
              >
                {/* Image placeholder */}
                <div className="relative h-64 lg:h-full min-h-[300px] rounded-xl bg-gradient-to-br from-brand-slate to-brand-navy flex items-center justify-center border border-white/5">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-display font-bold text-brand-cyan">{index + 1}</span>
                    </div>
                    <p className="text-sm text-brand-grey">Project Image Gallery Placeholder</p>
                  </div>
                  {project.isPlaceholder && (
                    <span className="absolute top-4 right-4 placeholder-tag">Placeholder Project</span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-brand-cyan/10 text-brand-cyan rounded-full">
                      {project.industry}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-grey">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-brand-offwhite mb-6">{project.title}</h2>

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-cyan mb-2">Client Challenge</h3>
                      <p className="text-sm text-brand-grey leading-relaxed">{project.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-cyan mb-2">Lotusmirk Approach</h3>
                      <p className="text-sm text-brand-grey leading-relaxed">{project.approach}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-cyan mb-2">Deliverables</h3>
                      <ul className="space-y-2">
                        {project.deliverables.map((d, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                            <span className="text-sm text-brand-offwhite">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-cyan mb-2">Outcome</h3>
                      <p className="text-sm text-brand-grey leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
