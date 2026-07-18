# Lotusmirk Aerospace — Corporate Website

A premium, responsive corporate website template for **Lotusmirk Aerospace**, an Indian professional drone services company.

Built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Scroll and entrance animations |
| Lucide React | Icon library |
| React Router 6 | Client-side routing (HashRouter) |

## Site Architecture

| Route | Page |
|-------|------|
| `/#/` | Home (12 sections) |
| `/#/services` | Services overview |
| `/#/services/:slug` | Individual service (4 services) |
| `/#/industries` | Industries overview |
| `/#/industries/:slug` | Individual industry (8 industries) |
| `/#/about` | Company info, mission, values |
| `/#/projects` | Case studies |
| `/#/contact` | Enquiry form |
| `/#/privacy-policy` | Privacy policy (draft) |
| `/#/terms-of-use` | Terms of use (draft) |
| `/#/*` | Custom 404 |

## Deployment

### GitHub Pages (Automatic)

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on every push to `main`.

**Setup Steps:**
1. Push this repository to `https://github.com/Lotusmirk/LotusMwebsite.git`
2. Go to **Settings → Pages** in the GitHub repository
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the site will deploy automatically

The production base path is configured as `/LotusMwebsite/` in `vite.config.ts`.

### Custom Domain

If you set up a custom domain later:
1. Add the domain in GitHub Pages settings
2. Create a `CNAME` file in `public/` with your domain
3. Update `vite.config.ts` base to `'/'`
4. Consider switching from `HashRouter` to `BrowserRouter` in `src/App.tsx`

## Content Replacement Guide

All content is stored in centralized TypeScript data files in `src/data/`. Edit these files to update the site:

| File | Contents |
|------|----------|
| `siteConfig.ts` | Company name, contact, social links, logos |
| `services.ts` | Service definitions (4 services) |
| `industries.ts` | Industry definitions (8 industries) |
| `projects.ts` | Case study data (3 placeholders) |
| `metrics.ts` | Impact statistics |
| `insights.ts` | Blog/article cards |
| `company.ts` | About, mission, vision, values, leadership |
| `navigation.ts` | Menu structure |

### Brand Colors

Colors are defined as Tailwind theme tokens in `tailwind.config.ts` and as CSS variables in `src/styles/index.css`:

```
Near-black:  #070B0F  → brand-black
Deep navy:   #0B1824  → brand-navy
Slate:       #172632  → brand-slate
Off-white:   #F3F6F7  → brand-offwhite
Muted grey:  #9AA8B2  → brand-grey
Accent cyan: #46D5E8  → brand-cyan
Warm accent: #E8B65A  → brand-gold
```

### Logo Replacement

1. Place your logo files in `public/logos/`
2. Update paths in `src/data/siteConfig.ts`
3. For best results, provide transparent-background PNG or SVG files

### Images

Replace placeholder images in `public/images/`. The template uses gradient backgrounds where real images are not yet available.

## Form Integration

The contact form (`src/components/ui/ContactForm.tsx`) currently uses a demo submission state. To connect a real backend:

### Formspree
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (response.ok) setSubmitted(true);
};
```

### Web3Forms
Similar pattern with `https://api.web3forms.com/submit` and your access key.

### EmailJS
Use the `emailjs.send()` method with your service, template and public key.

## Placeholder Content Checklist

The following items need to be replaced with real Lotusmirk content:

### Must Have (Before Launch)
- [ ] Official logo files (transparent PNG or SVG)
- [ ] Confirmed brand colors (if different from template)
- [ ] Contact email, phone, WhatsApp number
- [ ] Office address and operating locations
- [ ] Company description and founding story
- [ ] Founder/team names, roles and bios
- [ ] Confirmed list of services offered
- [ ] DGCA/regulatory licences and certifications
- [ ] Privacy policy (legal review)
- [ ] Terms of use (legal review)
- [ ] Form backend integration

### Should Have
- [ ] Hero video or professional drone photography
- [ ] Project statistics (flights, acres, projects, etc.)
- [ ] Real case studies with client approval
- [ ] Equipment and sensor details
- [ ] Operating cities/states list
- [ ] Social media links
- [ ] Client testimonials with permission
- [ ] Client logos with permission
- [ ] Google Maps API key for contact page

### Nice to Have
- [ ] Blog/insights articles
- [ ] Careers page content
- [ ] Custom domain configuration
- [ ] Analytics integration (GA4)
- [ ] Cookie consent banner
- [ ] Live chat integration

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, MobileNav, Layout
│   ├── sections/     # Home page sections (11)
│   └── ui/           # Reusable UI components
├── data/             # All content in TypeScript files
├── hooks/            # Custom React hooks
├── pages/            # Route page components (11)
├── styles/           # Global CSS
├── App.tsx           # Router configuration
└── main.tsx          # Entry point
```

## Accessibility

- WCAG-conscious color contrast
- Keyboard-navigable menus and dropdowns
- Visible focus states on all interactive elements
- Semantic HTML and heading hierarchy
- `prefers-reduced-motion` respected
- Descriptive `aria-labels` on buttons and navigation
- Form field labels and accessible error messages

## License

Copyright © 2026 Lotusmirk Aerospace. All rights reserved.
