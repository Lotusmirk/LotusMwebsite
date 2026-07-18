import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-white/5 rounded-xl overflow-hidden bg-brand-navy/30"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="focus-ring w-full flex items-center justify-between px-6 py-5 text-left rounded-xl"
            aria-expanded={openIndex === index}
          >
            <span className="font-display font-medium text-brand-offwhite pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-brand-cyan shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-sm text-brand-grey leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
