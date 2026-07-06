# MgonnacrushT Website

Marketing site for [MgonnacrushT Limited](https://mgonnacrusht.co.uk) — product engineering services and the SaveT flagship app.

**Live:** [mgonnacrusht.co.uk](https://mgonnacrusht.co.uk)

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Formspree](https://formspree.io/) (contact form)
- [Umami](https://umami.is/) (analytics)

Static output is deployed to **GitHub Pages** via GitHub Actions. DNS and edge redirects are managed in **Cloudflare**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build preview:

```bash
npm run build
npx serve out
```

## Project structure

```
app/              # Pages (App Router)
components/       # UI, layout, sections
lib/
  config/         # site.ts — flags, emails, integrations
  content/        # Copy and data (i18n-ready)
  seo/            # Metadata helpers
public/           # Static assets, CNAME, legacy redirect HTML
scripts/          # Build helpers (redirects, CNAME copy)
docs/             # Operational docs (Cloudflare, etc.)
```

Key pages: `/`, `/services/`, `/products/` (portfolio), `/savet/`, `/about/`, `/contact/`, plus company and SaveT legal pages.

## Environment variables

Optional GitHub Actions secrets (build-time):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Contact form (default: `mwvdyvkr`) |
| `NEXT_PUBLIC_PLAY_STORE_URL` | SaveT Google Play link when live |

Do not commit `.env` files.

## Deployment

1. Push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. GitHub repo **Settings → Pages** → source: **GitHub Actions**.
3. Custom domain: `mgonnacrusht.co.uk` (`public/CNAME`).

## Cloudflare & legacy redirects

Old `/features/*` URLs redirect to `/savet/` via a Cloudflare 301 rule. Full rule details, test commands, and fallback behaviour:

→ [`docs/cloudflare-config.md`](docs/cloudflare-config.md)

Code fallback: `scripts/generate-legacy-redirects.mjs` writes meta-refresh pages under `public/features/`.

## Content sync

When SaveT or site messaging changes, update [`assets/savet_prompt_agent_summary.txt`](assets/savet_prompt_agent_summary.txt) and include `Last updated: YYYY-MM-DD` at the bottom.

## License

Site content and branding © MgonnacrushT Limited. This repository is private company material; do not redistribute without permission.
