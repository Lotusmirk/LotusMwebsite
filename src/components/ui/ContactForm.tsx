import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { services } from '../../data/services';
import { industries } from '../../data/industries';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  industry: string;
  location: string;
  timeline: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    industry: '',
    location: '',
    timeline: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your project';
    if (!formData.consent) newErrors.consent = 'Please agree to the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate submission — replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-display font-bold text-2xl text-brand-offwhite mb-3">
          Thank You for Your Enquiry
        </h3>
        <p className="text-brand-grey max-w-md mx-auto mb-6">
          We have received your message and will respond within one business day. If your project is urgent, please contact us directly.
        </p>
        <p className="text-xs text-brand-grey italic">
          (This is a demonstration — no data was actually submitted. See the README for form integration instructions.)
        </p>
      </div>
    );
  }

  const inputClasses =
    'w-full bg-brand-navy/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-offwhite placeholder:text-brand-grey/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all';
  const labelClasses = 'block text-sm font-medium text-brand-grey mb-2';
  const errorClasses = 'flex items-center gap-1 mt-1.5 text-xs text-red-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className={`${inputClasses} ${errors.fullName ? 'border-red-400/50 focus:ring-red-400' : ''}`}
            placeholder="Your full name"
          />
          {errors.fullName && <p className={errorClasses}><AlertCircle className="w-3 h-3" />{errors.fullName}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className={labelClasses}>Company</label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className={inputClasses}
            placeholder="Your company name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>Work Email *</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`${inputClasses} ${errors.email ? 'border-red-400/50 focus:ring-red-400' : ''}`}
            placeholder="you@company.com"
          />
          {errors.email && <p className={errorClasses}><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={inputClasses}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClasses}>Required Service</label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className={labelClasses}>Industry</label>
          <select
            id="industry"
            value={formData.industry}
            onChange={(e) => handleChange('industry', e.target.value)}
            className={inputClasses}
          >
            <option value="">Select your industry</option>
            {industries.map((i) => (
              <option key={i.slug} value={i.title}>{i.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className={labelClasses}>Project Location</label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className={inputClasses}
            placeholder="City, State or Region"
          />
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className={labelClasses}>Project Timeline</label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => handleChange('timeline', e.target.value)}
            className={inputClasses}
          >
            <option value="">Select timeline</option>
            <option value="Immediate">Immediate (within 2 weeks)</option>
            <option value="1-3 months">1–3 months</option>
            <option value="3-6 months">3–6 months</option>
            <option value="Planning phase">Planning phase</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>Project Details *</label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`${inputClasses} resize-none ${errors.message ? 'border-red-400/50 focus:ring-red-400' : ''}`}
          placeholder="Describe your project, site, requirements and any specific deliverables you need..."
        />
        {errors.message && <p className={errorClasses}><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => handleChange('consent', e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-brand-navy text-brand-cyan focus:ring-brand-cyan focus:ring-offset-0"
          />
          <span className="text-sm text-brand-grey group-hover:text-brand-offwhite transition-colors">
            I agree to the processing of my personal data in accordance with the{' '}
            <a href="#/privacy-policy" className="text-brand-cyan hover:underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent && <p className={`${errorClasses} ml-7`}><AlertCircle className="w-3 h-3" />{errors.consent}</p>}
      </div>

      {/* Submit */}
      <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full md:w-auto">
        {submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </Button>
    </form>
  );
}
