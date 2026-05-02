# prashankkadam.github.io

Personal website. Built with Astro 5 + Tailwind 4. Deployed to GitHub Pages via Actions.

---

## Dashboards & external accounts

| What | Where |
| --- | --- |
| **Site analytics** (visits, referrers, countries, browsers) | https://dash.cloudflare.com → Web Analytics → `prashankkadam.github.io` |
| **Google Search Console** (indexing, search performance, request re-index) | https://search.google.com/search-console (verified via `public/google0e759eef64682d33.html`) |
| **Live site** | https://prashankkadam.github.io/ |
| **Repo Pages settings** | https://github.com/prashankkadam/prashankkadam.github.io/settings/pages |

---

## Content edits (no code changes needed)

Edit the relevant TypeScript file under `src/data/` and push to `master`. The Actions workflow rebuilds and deploys automatically.

| Section | File |
| --- | --- |
| Bio, social links, research areas | `src/data/profile.ts` |
| Research papers | `src/data/research.ts` |
| Experience timeline | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Talks and academic service | `src/data/talks.ts` |
| Projects | `src/data/projects.ts` |
| Awards and certifications | `src/data/awards.ts` |
| Technical stack tags | `src/data/skills.ts` |

---

## Local dev

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

---

## Regenerate favicons / OG image

After editing `public/favicon.svg` or `scripts/og-image.svg`:

```
node scripts/build-favicons.mjs
```

This rewrites `favicon-96.png`, `apple-touch-icon.png`, and `og-image.png` from the SVG sources.

---

## Deployment

Push to `master` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies
2. Runs `npm run build`
3. Uploads `dist/` to GitHub Pages
4. Site is live within ~1 minute

Old static-site files are preserved under `_legacy/` for reference.
