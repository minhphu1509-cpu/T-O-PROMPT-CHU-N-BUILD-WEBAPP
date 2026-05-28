# GitHub and Vercel Deployment

## Commit to GitHub

```bash
git init
git add .
git commit -m "Initial PhuDong Web Brief Builder app"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

The `.gitignore` excludes `node_modules`, `dist`, local env files, logs, editor folders and Vercel local state.

## Deploy to Vercel

1. Open Vercel and choose **Add New Project**.
2. Import the GitHub repository.
3. Use these settings:
   - Framework Preset: Vite
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

`vercel.json` already includes the Vite build settings and a SPA rewrite to `index.html`.

## Local Verification

```bash
npm install
npm run build
npm run dev
```

## Release Checklist

- Confirm `.env` real files are not committed.
- Confirm Vercel build uses `npm run build`.
- Confirm `node_modules/` and `dist/` are ignored.
- Export a ZIP package from the app for handover when needed.
- Test prompt modes and language output before sharing publicly.

## Troubleshooting

### Vercel: TS18003 no inputs were found

This usually means Vercel is building a GitHub commit that does not contain the `src/` folder, or the Vercel project root is set to the wrong directory.

Check:

```bash
git status --short
git commit -m "Initial PhuDong Web Brief Builder app"
git push -u origin main
```

In Vercel Project Settings:

- Root Directory: leave empty if the app is at the repository root.
- Build Command: `npm run build`
- Output Directory: `dist`
