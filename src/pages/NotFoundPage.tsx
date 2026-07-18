import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/3 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="section-container text-center max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-brand-navy/50 flex items-center justify-center mx-auto mb-8 border border-white/10">
              <Compass className="w-10 h-10 text-brand-cyan" />
            </div>

            <h1 className="font-display font-bold text-6xl text-brand-offwhite mb-4">404</h1>
            <h2 className="font-display font-semibold text-2xl text-brand-offwhite mb-4">
              Page Not Found
            </h2>
            <p className="text-brand-grey mb-8 leading-relaxed">
              The page you are looking for does not exist or has been moved.
              Let's get you back on course.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/" variant="primary" showArrow>
                Back to Home
              </Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
