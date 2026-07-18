import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { MobileNav } from './MobileNav';

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="section-container flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <Link
              to="/"
              className="focus-ring rounded-sm flex items-center gap-3 shrink-0"
              aria-label={`${siteConfig.companyName} — Home`}
            >
              <img
                src={siteConfig.logos.icon}
                alt=""
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.5))' }}
              />
              <span className="hidden sm:block font-display font-bold text-lg lg:text-xl tracking-tight text-brand-offwhite">
                {siteConfig.shortName}
                <span className="text-brand-cyan">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.href}
                    className={`focus-ring rounded-sm flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname.startsWith(item.href)
                        ? 'text-brand-cyan'
                        : 'text-brand-grey hover:text-brand-offwhite'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-brand-navy/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl shadow-black/40 overflow-hidden"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`focus-ring block px-5 py-3 text-sm transition-all duration-200 hover:bg-white/5 hover:pl-6 ${
                                location.pathname === child.href
                                  ? 'text-brand-cyan bg-white/5'
                                  : 'text-brand-grey hover:text-brand-offwhite'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-white/5 p-3">
                          <Link
                            to={item.href}
                            className="focus-ring rounded-sm flex items-center gap-2 text-xs font-medium text-brand-cyan hover:text-cyan-300 transition-colors"
                          >
                            View All {item.label}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="focus-ring hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-brand-cyan text-brand-black rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-brand-cyan/20"
              >
                Request a Consultation
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="focus-ring lg:hidden p-2 text-brand-offwhite hover:text-brand-cyan transition-colors rounded-md"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
