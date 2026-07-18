import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, Facebook, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { services } from '../../data/services';
import { industries } from '../../data/industries';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  ];

  return (
    <footer className="bg-brand-black border-t border-white/5">
      {/* Main Footer */}
      <div className="section-padding py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-3 mb-6">
                <img
                  src={siteConfig.logos.icon}
                  alt=""
                  className="h-10 w-10 object-contain"
                  style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.5))' }}
                />
                <span className="font-display font-bold text-xl text-brand-offwhite">
                  {siteConfig.shortName}<span className="text-brand-cyan">.</span>
                </span>
              </Link>
              <p className="text-sm text-brand-grey leading-relaxed mb-6 max-w-sm">
                {siteConfig.description}
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-brand-grey hover:text-brand-cyan hover:bg-white/10 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-semibold text-sm text-brand-offwhite mb-4 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-sm text-brand-grey hover:text-brand-cyan transition-colors duration-200"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-semibold text-sm text-brand-offwhite mb-4 uppercase tracking-wider">
                Industries
              </h3>
              <ul className="space-y-2.5">
                {industries.slice(0, 6).map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="text-sm text-brand-grey hover:text-brand-cyan transition-colors duration-200"
                    >
                      {ind.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/industries"
                    className="flex items-center gap-1 text-sm text-brand-cyan hover:text-cyan-300 font-medium transition-colors"
                  >
                    All Industries <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-semibold text-sm text-brand-offwhite mb-4 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-sm text-brand-grey hover:text-brand-cyan transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-sm text-brand-grey hover:text-brand-cyan transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-sm text-brand-grey hover:text-brand-cyan transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="text-sm text-brand-grey hover:text-brand-cyan transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use" className="text-sm text-brand-grey hover:text-brand-cyan transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-semibold text-sm text-brand-offwhite mb-4 uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-brand-grey hover:text-brand-cyan transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                  <span className="text-sm text-brand-grey">{siteConfig.contact.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                  <span className="text-sm text-brand-grey">{siteConfig.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-padding border-t border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-grey">
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-brand-grey hover:text-brand-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-xs text-brand-grey hover:text-brand-cyan transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
