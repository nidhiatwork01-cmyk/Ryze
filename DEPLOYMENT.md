# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Your site will be live in minutes!

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Deploy to Other Platforms

### AWS Amplify
- Connect GitHub repository
- Auto-detects Next.js
- Follow AWS setup wizard

### Railway
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize
railway init

# Deploy
railway up
```

### Self-Hosted (Node.js Server)
```bash
# Build the project
npm run build

# Start production server
npm start

# Runs on port 3000 by default
```

## Environment Variables

Currently, no environment variables are required. If you add features that need API keys or secrets, add them in your deployment platform's environment variables section.

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS as instructed

## Performance Optimization

The site is already optimized with:
- ✅ Next.js automatic code splitting
- ✅ Tailwind CSS purging unused styles
- ✅ Optimized font loading
- ✅ Image optimization ready

## Monitoring

Consider adding:
- Vercel Analytics (built-in)
- Google Analytics
- Error tracking (Sentry)
- Performance monitoring

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Run `npm install` locally first
- Check for TypeScript errors: `npm run build`

### Styles Not Loading
- Ensure Tailwind is configured correctly
- Check `postcss.config.js` exists
- Verify `globals.css` imports Tailwind

### Deployment Issues
- Check build logs in deployment platform
- Verify all dependencies in `package.json`
- Ensure `.gitignore` doesn't exclude necessary files

