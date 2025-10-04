# Seelenruhe Massage Studio - SEO Optimized Website

A fully SEO-optimized, multilingual static website built with Astro, featuring professional massage and wellness services.

## 🌟 Features

### SEO Optimization

This project implements comprehensive SEO best practices to ensure maximum visibility in search engines. The website includes unique meta tags for every page and language, canonical URLs to prevent duplicate content issues, and hreflang tags for proper language targeting. Structured data using JSON-LD schema markup provides rich search results, while a dynamic sitemap and robots.txt ensure proper indexing. All pages are statically generated for optimal performance and SEO.

### Multilingual Support

The website supports four languages with full internationalization capabilities. German serves as the default language, with English, Arabic, and Turkish also available. The Arabic version includes proper RTL (right-to-left) support, and all translations are centralized in a single file for easy management. Each language has its own URL structure following the pattern `/[lang]/...`, ensuring clean and SEO-friendly URLs.

### Modern Design

The design incorporates the color scheme from the V6 project, featuring a vibrant orange primary color (#f6861f), a bright yellow secondary color (#edeb6d), and a warm brown accent (#6f6549). Typography uses Playfair Display for elegant headings and Inter for readable body text. The hero section features rotating background images with smooth zoom effects, while all interactive elements include hover states and smooth transitions.

### Performance

Built with Astro's static site generation, the website delivers exceptional performance. All pages are pre-rendered at build time, resulting in instant page loads. Tailwind CSS v4 with Vite plugin ensures minimal CSS bundle size, and React components are only hydrated when necessary for interactivity. The optimized image loading and minimal JavaScript footprint contribute to fast loading times across all devices.

## 🏗️ Project Structure

```
seelenruhe-massage-final/
├── public/
│   ├── images/           # All images from V6 project
│   ├── favicon.svg       # Site favicon
│   └── _redirects        # Cloudflare Pages redirects
├── src/
│   ├── components/       # Reusable Astro and React components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Welcome.astro
│   │   └── LanguageSwitcher.tsx
│   ├── layouts/
│   │   └── Layout.astro  # Main layout with SEO meta tags
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── index.astro
│   │   │   └── services/
│   │   │       ├── index.astro
│   │   │       └── [slug].astro
│   │   ├── index.astro   # Root redirect
│   │   ├── sitemap.xml.ts
│   │   └── robots.txt.ts
│   ├── lib/
│   │   ├── i18n.ts       # Internationalization utilities
│   │   └── structured-data.ts  # JSON-LD schema generators
│   ├── data/
│   │   └── translations.ts  # Centralized translations
│   ├── content/
│   │   └── services.json # Service data with translations
│   └── styles/
│       └── global.css    # Global styles with V6 colors
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── SEO_CHECKLIST.md      # Comprehensive SEO checklist
└── README.md
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see the site in development mode.

### Build

```bash
npm run build
```

Generates static files in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## 📦 Technologies

The project leverages modern web technologies including **Astro 5.14.1** for static site generation, **React 19.1.1** for interactive components, **Tailwind CSS v4** with Vite plugin for styling, **TypeScript** for type safety, and **Astro Sitemap** for automatic sitemap generation.

## 🌍 Supported Languages

- **German (de)** - Default language at `/de/`
- **English (en)** - Available at `/en/`
- **Arabic (ar)** - With RTL support at `/ar/`
- **Turkish (tr)** - Available at `/tr/`

Each language version includes complete translations and proper hreflang tags for international SEO.

## 📄 Pages

The site includes a comprehensive homepage with hero section, welcome message, services overview, and about section. The services index page lists all available services, while individual service pages provide detailed information including pricing, duration, and related services. Additional pages cover contact information and booking options.

## 🎨 Design System

### Colors (from V6)

- **Primary**: #f6861f (Orange) - Call-to-action buttons and highlights
- **Secondary**: #edeb6d (Yellow) - Headings and accents
- **Accent**: #6f6549 (Brown) - Hover states and secondary elements

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 🔍 SEO Features

The website implements comprehensive SEO features including unique titles and descriptions for every page, canonical URLs to prevent duplicate content, hreflang tags for international targeting, and structured data with Organization, Service, and Breadcrumb schemas. A dynamic sitemap covers all pages and languages, while robots.txt allows proper crawler access. All images include descriptive alt attributes for accessibility and SEO.

## 📱 Responsive Design

The website provides an optimal experience across all devices through mobile-first design principles, responsive navigation with hamburger menu, touch-friendly buttons and links, and adaptive images and layouts for different screen sizes.

## 🚀 Deployment (Cloudflare Pages)

The project is optimized for Cloudflare Pages deployment with Node.js 20.x specified, static output mode for optimal performance, `_redirects` file for proper root URL handling, and build command `npm run build` generating all static files in the `dist/` directory.

## 📝 Content Management

Content management is streamlined through centralized files. All translations are stored in `src/data/translations.ts`, service information is maintained in `src/content/services.json`, and images are organized in `public/images/` with clear naming conventions.

## 🔧 Customization

### Adding a New Language

1. Update the languages object in `src/lib/i18n.ts`
2. Add translations to `src/data/translations.ts`
3. Add service translations to `src/content/services.json`

### Adding a New Service

1. Add an entry to `src/content/services.json` with translations for all languages
2. Include a service image in `public/images/`

### Modifying Colors

Update CSS variables in `src/styles/global.css` for consistent theming across the site.

## 📊 Analytics Ready

The website is prepared for analytics integration with clean URL structure for easy tracking, unique page titles for detailed analysis, Google Search Console readiness, and event tracking capability for call-to-action buttons.

## 📄 License

This project is proprietary and confidential, created for Seelenruhe Massage Studio.

## 🙏 Credits

Built with design elements from V6 project, SEO best practices from seelenruhe-massage-original-style, and powered by Astro, React, and Tailwind CSS.
