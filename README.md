# MgonnacrushT Website

Marketing site for [MgonnacrushT Limited](https://mgonnacrusht.co.uk) — product engineering services and the SaveT flagship app.

**Live:** [mgonnacrusht.co.uk](https://mgonnacrusht.co.uk)

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Formspree](https://formspree.io/) (contact form)
- [Umami](https://umami.is/) (analytics, self-hosted)

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
content/blog/     # Blog posts as Markdown files
lib/
  config/         # site.ts — flags, emails, integrations
  content/        # Copy and data (i18n-ready), incl. quiz.json
  quiz/           # Project estimate engine (reads content/quiz.json)
  seo/            # Metadata helpers
public/           # Static assets, CNAME, legacy redirect HTML
scripts/          # Build helpers (redirects, CNAME copy, quiz validation)
docs/             # Operational docs (Cloudflare, etc.)
```

Key pages: `/`, `/services/`, `/products/` (portfolio), `/savet/`, `/about/`, `/contact/`, plus company and SaveT legal pages.

## Environment variables

Optional GitHub Actions secrets (build-time):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Contact form (default: `mwvdyvkr`) |
| `NEXT_PUBLIC_PLAY_STORE_URL` | SaveT Google Play link when live |
| `NEXT_PUBLIC_CAL_LINK` | Cal.com discovery event URL (e.g. `https://cal.com/user/discovery`). Empty = Book CTAs hidden |

Services pricing copy lives in `lib/content/pricing.ts`. The price groups on the services page are derived from `lib/content/quiz.json`, so they always match the project estimate (see below).

Do not commit `.env` files.

## Project estimate (services page)

The estimate on `/services/` is driven entirely by `lib/content/quiz.json`: steps, options, base prices per service and size, add-ons, multipliers, timelines, "what is included" lists and result copy. The engine is `lib/quiz/engine.ts` and the UI is `components/quiz/PriceQuiz.tsx`.

- Edit prices, options or copy in `quiz.json` only; no code change is needed to add a step or an option.
- `npm run validate:quiz` checks the file (unknown ids, missing prices, inconsistent timelines) and runs automatically as part of `npm run build`.
- Interactions are sent to Umami as custom events (`quiz_start`, `quiz_step`, `quiz_result`, `quiz_cta_call`, `quiz_cta_brief`, `quiz_submit`, `quiz_restart`). The Umami script loads only in production builds, so local development never records events; they are logged to the browser console instead.

## Blog

Posts are Markdown files in `content/blog/`. The file name becomes the URL (`content/blog/my-post.md` is `/blog/my-post/`). Files starting with `_` are ignored.

```md
---
title: Post title
description: One or two sentences for search results.
date: 2026-10-03
updated: 2026-10-03
---

Post text in Markdown.
```

- `seoTitle` is optional: a shorter title (about 45 characters) for the browser tab and search results, while `title` stays as the page heading.
- `date` is the first publication date. `updated` is optional and sets the order: the index lists posts by `updated` (falling back to `date`), newest first, and the sitemap uses it as the last modified date.
- Keep prices in sync with the project estimate by using placeholders instead of typing numbers: `{{price:type_new_app.size_s}}`, `{{timeline:type_new_app.size_s}}`, `{{addon:extra_backend}}` and `{{hourly}}`. An unknown placeholder or a missing field fails the build.
- External links open in a new tab automatically.

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
