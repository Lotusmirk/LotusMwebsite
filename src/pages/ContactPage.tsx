import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ContactForm } from '../components/ui/ContactForm';

export function ContactPage() {
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
                Contact Us
              </span>
              <h1 className="font-display font-bold text-display-lg text-brand-offwhite mb-6 max-w-3xl">
                Let's discuss your{' '}
                <span className="text-gradient-cyan">project.</span>
              </h1>
              <p className="text-lg text-brand-grey leading-relaxed max-w-2xl">
                Whether you need a one-off survey or an ongoing aerial data programme, we are ready to help.
                Fill in the form below or reach us directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <h2 className="font-display font-bold text-2xl text-brand-offwhite mb-8">
                  Project Enquiry
                </h2>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-semibold text-lg text-brand-offwhite mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-5">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy/30 border border-white/5 hover:border-brand-cyan/20 transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-brand-cyan mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-brand-offwhite group-hover:text-brand-cyan transition-colors">Email</p>
                        <p className="text-sm text-brand-grey">{siteConfig.contact.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy/30 border border-white/5">
                      <Phone className="w-5 h-5 text-brand-cyan mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-brand-offwhite">Phone</p>
                        <p className="text-sm text-brand-grey">{siteConfig.contact.phone}</p>
                        <span className="placeholder-tag mt-1">Placeholder</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy/30 border border-white/5">
                      <MessageCircle className="w-5 h-5 text-brand-cyan mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-brand-offwhite">WhatsApp</p>
                        <p className="text-sm text-brand-grey">{siteConfig.contact.whatsapp}</p>
                        <span className="placeholder-tag mt-1">Placeholder</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy/30 border border-white/5">
                      <MapPin className="w-5 h-5 text-brand-cyan mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-brand-offwhite">Office</p>
                        <p className="text-sm text-brand-grey">{siteConfig.contact.address}</p>
                        <span className="placeholder-tag mt-1">Placeholder</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy/30 border border-white/5">
                      <Clock className="w-5 h-5 text-brand-cyan mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-brand-offwhite">Business Hours</p>
                        <p className="text-sm text-brand-grey">{siteConfig.contact.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-48 rounded-xl bg-brand-navy/30 border border-dashed border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-brand-grey/30 mx-auto mb-2" />
                    <p className="text-xs text-brand-grey">Map will be embedded here</p>
                    <span className="placeholder-tag mt-2">Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
