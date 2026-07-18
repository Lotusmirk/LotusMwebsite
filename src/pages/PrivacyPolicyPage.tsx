import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-brand-grey mb-4 italic">
              This is placeholder legal content. It should be reviewed by a legal professional and updated with {siteConfig.companyName}'s actual privacy practices before going live.
            </p>
            <span className="placeholder-tag mb-8 inline-flex">Draft — Requires Legal Review</span>
          </motion.div>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-brand-grey">
            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">
                When you use our website or submit an enquiry, we may collect personal information such as your name, email address, phone number, company name and project details. We also collect standard website usage data through cookies and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use your information to respond to enquiries, provide our services, improve our website, and communicate relevant updates. We will not sell or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">3. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">4. Cookies</h2>
              <p className="leading-relaxed">
                Our website may use cookies to enhance your browsing experience and gather usage analytics. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">5. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct or delete your personal data. To exercise these rights, please contact us at {siteConfig.contact.email}.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-xl text-brand-offwhite mt-10 mb-4">6. Contact</h2>
              <p className="leading-relaxed">
                For questions about this privacy policy, please contact {siteConfig.companyName} at {siteConfig.contact.email}.
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
