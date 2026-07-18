import { motion } from 'framer-motion';
import { Eye, Heart, Target, Lightbulb, Shield, MapPin, Briefcase, Users } from 'lucide-react';
import { company } from '../data/company';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/sections/FinalCTA';

const valueIcons = [Target, Shield, Lightbulb, Heart, Eye];

export function AboutPage() {
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
                About Us
              </span>
              <h1 className="font-display font-bold text-display-lg text-brand-offwhite mb-6 max-w-3xl">
                Building India's most dependable{' '}
                <span className="text-gradient-cyan">drone services company.</span>
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed max-w-2xl">
                {company.story}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl bg-brand-navy/40 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-brand-cyan" />
                </div>
                <h2 className="font-display font-bold text-2xl text-brand-offwhite mb-4">Our Mission</h2>
                <p className="text-brand-grey leading-relaxed">{company.mission}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-2xl bg-brand-navy/40 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-brand-cyan" />
                </div>
                <h2 className="font-display font-bold text-2xl text-brand-offwhite mb-4">Our Vision</h2>
                <p className="text-brand-grey leading-relaxed">{company.vision}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="section-padding">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Our Values
              </span>
              <h2 className="font-display font-bold text-display-md text-brand-offwhite">
                What Guides Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {company.values.map((value, i) => {
                const Icon = valueIcons[i] || Target;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center p-6 rounded-xl bg-brand-black/30 border border-white/5"
                  >
                    <Icon className="w-8 h-8 text-brand-cyan mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-brand-offwhite mb-2">{value.title}</h3>
                    <p className="text-xs text-brand-grey leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — Placeholder */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Leadership
              </span>
              <h2 className="font-display font-bold text-display-md text-brand-offwhite">
                Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.leadership.map((person, i) => (
                <div key={i} className="text-center p-8 rounded-2xl border border-dashed border-white/10 bg-brand-navy/20">
                  <div className="w-24 h-24 rounded-full bg-brand-slate/50 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-brand-grey/50" />
                  </div>
                  <h3 className="font-display font-semibold text-brand-offwhite mb-1">{person.name}</h3>
                  <p className="text-sm text-brand-cyan mb-2">{person.role}</p>
                  <p className="text-xs text-brand-grey">{person.bio}</p>
                  <span className="placeholder-tag mt-3">Placeholder</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Locations */}
              <div className="p-8 rounded-2xl bg-brand-black/30 border border-white/5">
                <MapPin className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="font-display font-semibold text-xl text-brand-offwhite mb-3">Operating Locations</h3>
                <p className="text-sm text-brand-grey leading-relaxed mb-4">
                  Lotusmirk operates across {company.locations.join(', ')}. Specific cities and regions will be listed once confirmed.
                </p>
                <span className="placeholder-tag">To Be Confirmed</span>
              </div>

              {/* Safety */}
              <div className="p-8 rounded-2xl bg-brand-black/30 border border-white/5">
                <Shield className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="font-display font-semibold text-xl text-brand-offwhite mb-3">Safety & Compliance</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{company.safety}</p>
              </div>

              {/* Equipment */}
              <div className="p-8 rounded-2xl bg-brand-black/30 border border-white/5">
                <Briefcase className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="font-display font-semibold text-xl text-brand-offwhite mb-3">Equipment & Technology</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{company.equipment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container text-center">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              Careers
            </span>
            <h2 className="font-display font-bold text-display-md text-brand-offwhite mb-6">
              Join the Lotusmirk Team
            </h2>
            <p className="text-lg text-brand-grey max-w-xl mx-auto mb-8">
              We are building a team of skilled professionals who are passionate about aerial technology and its potential to transform industries. Opportunities will be posted here.
            </p>
            <Button to="/contact" variant="primary" showArrow>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
