import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export function TermsOfUsePage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
      <div className="section-padding">
        <div className="section-container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              Legal
            </span>
            <h1 className="font-display font-bold text-display-md text-brand-offwhite mb-8">
              Terms of Use
            </h1>
            <p className="text-sm text-brand-grey mb-4 italic">
              This is placeholder legal content. It should be reviewed by a legal professional and updated with {siteConfig.companyName}'s actual terms before going live.
            </p>
            <span className="placeholder-tag mb-8 inline-flex">Draft — Requires Legal Review</span>
          </motion.div>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-brand-grey">
            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the {siteConfig.companyName} website, you agree to be bound by these terms and conditions. If you do not agree, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">2. Use of Website</h2>
              <p className="leading-relaxed">
                This website is provided for informational purposes about {siteConfig.companyName}'s drone services. You may not use this website for any unlawful purpose or in any way that could damage or impair the website.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">3. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this website — including text, images, logos, designs and code — is the property of {siteConfig.companyName} or its licensors and is protected by applicable intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">4. Disclaimer</h2>
              <p className="leading-relaxed">
                The information on this website is provided as-is without warranty of any kind. {siteConfig.companyName} does not guarantee the accuracy, completeness or timeliness of the information presented.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                {siteConfig.companyName} shall not be liable for any direct, indirect, incidental or consequential damages arising from your use of this website.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">6. Governing Law</h2>
              <p className="leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">7. Contact</h2>
              <p className="leading-relaxed">
                For questions about these terms, please contact {siteConfig.companyName} at {siteConfig.contact.email}.
              </p>
            </div>

            <p className="text-xs text-brand-grey/60 mt-12 pt-8 border-t border-white/5">
              Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
