# Vercel Deployment Guide

Your portfolio is fully configured for deployment on [Vercel](https://vercel.com) — the optimal platform for React + Vite apps.

## Quick Setup (3 steps)

### 1. Connect Your GitHub Repository
- Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
- Click **"Add New..." → "Project"**
- Select **"Import Git Repository"**
- Search for and select `suryanshukumarrai/portfolio`
- Click **"Import"**

### 2. Configure Project Settings
Vercel auto-detects your Vite setup. Confirm:
- **Framework Preset:** Vite
- **Build Command:** `npm run build` ✓
- **Output Directory:** `dist` ✓
- **Install Command:** `npm install` ✓

All settings are pre-configured in [vercel.json](vercel.json). No changes needed.

### 3. Deploy
Click **"Deploy"** and wait ~1–2 minutes for your site to go live.

Vercel automatically provides:
- ✅ HTTPS
- ✅ Global CDN
- ✅ Zero-config deployment
- ✅ Preview URLs for every pull request
- ✅ Automatic rollbacks
- ✅ Environment variable management

## After Deployment

### Update Your Portfolio Links
Once deployed (e.g., `https://suryanshukumarrai.vercel.app`), update:
- [public/sitemap.xml](public/sitemap.xml) — Replace the domain
- [public/robots.txt](public/robots.txt) — Update sitemap URL

Then push to GitHub:
```bash
git add public/sitemap.xml public/robots.txt
git commit -m "Update SEO files for production domain"
git push
```

Vercel will auto-redeploy.

### Custom Domain (Optional)
1. Go to **Vercel Dashboard → Your Project → Settings → Domains**
2. Add your custom domain (e.g., `yourdomain.com`)
3. Point your domain registrar's DNS to Vercel
4. Update [public/sitemap.xml](public/sitemap.xml) and [public/robots.txt](public/robots.txt) with the new domain

## Environment Variables (Optional)

If you enable the Spring Boot backend later and need API secrets:
1. Go to **Settings → Environment Variables**
2. Add `VITE_API_URL`, `VITE_GITHUB_TOKEN`, etc.
3. Vercel safely injects them at build time

## Performance & Monitoring

### Lighthouse Audit
Vercel integrates with Web Vitals. Check performance:
1. Dashboard → Your Project → **"Analytics"**
2. View Core Web Vitals, Lighthouse scores, and performance trends

### Logs & Debugging
- **Build Logs:** Dashboard → Deployments → Click deployment → **"Logs"**
- **Runtime Logs:** Vercel CLI: `vercel logs`

## Rollbacks
If a deployment breaks:
1. Dashboard → Deployments
2. Find a previous successful deployment
3. Click **"Redeploy"** or **"Promote to Production"**

## CI/CD & Auto-Deployments
Vercel automatically:
- Redeploys when you `git push` to `main`
- Creates preview deployments for pull requests
- Rolls back on failure

## Local Development with Vercel CLI

Install the CLI for local testing:
```bash
npm install -g vercel
vercel dev
```

This runs your app with Vercel's production environment settings locally.

## Troubleshooting

### Build Fails
- Check [vercel.json](vercel.json) settings
- Review build logs in Vercel Dashboard
- Run `npm run build` locally to debug

### Site Shows 404 on Routes
The [vercel.json](vercel.json) rewrites all routes to `index.html` (SPA fallback). If issues persist:
- Clear Vercel's cache: Dashboard → Settings → **"Clear Cache"** → Redeploy

### GitHub is Disconnected
- Dashboard → Settings → **"Git"** → Reconnect your GitHub account

---

**Your portfolio is deployment-ready. Deploy now and share with recruiters!** 🚀
