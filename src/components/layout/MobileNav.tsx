import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <nav
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-brand-navy border-l border-white/10 overflow-y-auto"
        aria-label="Mobile navigation"
      >
        <div className="pt-24 pb-8 px-6">
          {/* Nav Items */}
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className={`focus-ring rounded-md w-full flex items-center justify-between px-4 py-3.5 text-base font-medium transition-colors ${
                        location.pathname.startsWith(item.href)
                          ? 'text-brand-cyan'
                          : 'text-brand-offwhite hover:text-brand-cyan'
                      }`}
                      aria-expanded={expandedItem === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedItem === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedItem === item.label && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-4 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              onClick={onClose}
                              className={`focus-ring rounded-sm block px-3 py-2.5 text-sm transition-colors ${
                                location.pathname === child.href
                                  ? 'text-brand-cyan'
                                  : 'text-brand-grey hover:text-brand-offwhite'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            to={item.href}
                            onClick={onClose}
                            className="focus-ring rounded-sm flex items-center gap-2 px-3 py-2.5 text-sm text-brand-cyan font-medium"
                          >
                            View All <ArrowRight className="w-3 h-3" />
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`focus-ring rounded-md block px-4 py-3.5 text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-brand-cyan'
                        : 'text-brand-offwhite hover:text-brand-cyan'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 px-4">
            <Link
              to="/contact"
              onClick={onClose}
              className="focus-ring flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold bg-brand-cyan text-brand-black rounded-lg hover:bg-cyan-300 transition-all"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-10 px-4 pt-8 border-t border-white/10">
            <p className="text-xs text-brand-grey mb-2">Get in touch</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-brand-offwhite hover:text-brand-cyan transition-colors">
              {siteConfig.contact.email}
            </a>
            <p className="text-sm text-brand-grey mt-1">{siteConfig.contact.phone}</p>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
