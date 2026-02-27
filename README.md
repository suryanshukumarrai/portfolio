# Suryanshu Kumar Rai — Portfolio

Production-ready, recruiter-focused portfolio built with React 18, Vite, Tailwind CSS, Framer Motion, and React Router. Designed for modern hiring workflows, ATS readability, and high Lighthouse performance.

## Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## Highlights
- Dark-first premium UI with glassmorphism and subtle gradients
- ATS-optimized content structure with strong technical details
- Animated project metrics, typing headline, scroll progress indicator
- GitHub API integration for live repository data
- Responsive design (mobile-first)

## Getting Started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deployment (Vercel)
1. Import this repository into Vercel.
2. Set the framework preset to Vite.
3. Build command: `npm run build`
4. Output directory: `dist`

## Optional Environment Variable
If you want higher GitHub API rate limits, set:
- `VITE_GITHUB_TOKEN` (optional, no value required for basic usage)

## Update Sitemap Domain
The sitemap currently targets:
- `https://suryanshukumarrai.vercel.app`

If you deploy to a different domain, update:
- [public/sitemap.xml](public/sitemap.xml)
- [public/robots.txt](public/robots.txt)

## Project Structure
```
src/
  components/   # Reusable UI blocks
  data/         # Structured content data
  hooks/        # Custom hooks
  layouts/      # Page layouts
  pages/        # Route pages
  routes/       # Router config
  sections/     # Page sections
  styles/       # Global styles
```

## License
This portfolio is tailored for Suryanshu Kumar Rai. Feel free to fork for learning, but please replace content before publishing.
