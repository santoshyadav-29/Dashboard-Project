# Deployment Guide

## Pushing to GitHub

1. Create a new repository on GitHub (without initializing with README)

2. Add the remote repository:
```bash
git remote add origin https://github.com/YOUR_USERNAME/dashboard-app.git
```

3. Push the code:
```bash
git push -u origin main
```

## Creating a Pull Request

Since this project uses a feature branch workflow, you can simulate a PR:

1. Create and switch to a new feature branch:
```bash
git checkout -b feature/new-feature
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: Add new feature"
```

3. Push the feature branch:
```bash
git push -u origin feature/new-feature
```

4. On GitHub, create a Pull Request from `feature/new-feature` to `main`

## Deployment Options

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy

### Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build the project:
```bash
pnpm build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install gh-pages:
```bash
pnpm add -D gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "vite build && gh-pages -d dist"
```

3. Update vite.config.ts with base path:
```typescript
export default defineConfig({
  base: '/dashboard-app/',
  plugins: [react(), tailwindcss()],
})
```

4. Deploy:
```bash
pnpm deploy
```

## Environment Variables

If you need environment variables for production:

1. Create `.env.production`:
```
VITE_API_URL=https://api.example.com
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## CI/CD with GitHub Actions

A GitHub Actions workflow is included in `.github/workflows/ci.yml` that will:
- Run tests on every push
- Build the project
- Deploy to production on merge to main

## Monitoring

After deployment, monitor:
- Build logs
- Runtime errors
- Performance metrics
- User analytics

## Rollback

If you need to rollback:

```bash
git revert HEAD
git push origin main
```

Or redeploy a previous commit:

```bash
git checkout <commit-hash>
vercel --prod
```
