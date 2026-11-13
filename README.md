# I Arise Ministry website

The website for I Arise Ministry, founded by Dr Iva Beranek.

Built with [Astro](https://astro.build), TypeScript and Tailwind CSS. It is a fully static site, served by Cloudflare Workers (static assets). There is no client-side framework.

## Quick start

```bash
npm install
npm run dev        # local site at http://localhost:4321
npm run build      # builds the static site into dist/
npm run preview    # builds, then serves it locally with Cloudflare's own runtime
npm run check      # type and template checks
```

Requires Node 22 or newer.

## How deployment works

- Cloudflare is connected to this GitHub repo (Workers Builds).
- Every push to `main` builds and publishes the production version.
- Pushes to other branches build a **preview version** with its own link (Cloudflare dashboard > the Worker > Deployments). Preview URLs must be switched on in the Worker's Settings.
- The build command lives in `wrangler.jsonc` (`build.command`), so Cloudflare runs `npm run build` and then uploads `dist/`.
- Manual deploy from a laptop, if ever needed: `npx wrangler login`, then `npm run deploy`.

Workflow: make changes on a branch, check the preview link, then merge into `main`.

## Where things live

| What | Where |
|---|---|
| Site name, URL, launch switches | `src/config/site.ts` |
| Navigation and spirituality themes | `src/config/site.ts` |
| Colours and fonts (brand tokens) | `src/styles/global.css` (`@theme` block) |
| Retreats and events | `src/content/retreats/*.md` (copy `_TEMPLATE.md.example`) |
| Books and writings | `src/content/books/*.md` |
| Content schemas | `src/content.config.ts` |
| Pages | `src/pages/` |
| Shared layouts | `src/layouts/` |
| Components (header, footer, key motif, lists) | `src/components/` |
| Logo, photos, book covers | `src/assets/` (optimised automatically at build) |
| Static files served as-is | `public/` |
| Project strategy and decisions | `docs/` |

## Adding a retreat

1. Copy `src/content/retreats/_TEMPLATE.md.example` to a new file, e.g. `2027-03-lenten-retreat.md`.
2. Fill in the fields. Only add events Iva has confirmed.
3. Commit on a branch, check the preview, merge.

Past events disappear from the listings automatically. If no events are upcoming, a gentle "no retreats scheduled" message shows instead.

## Before launch

In `src/config/site.ts`:

- set `url` to the real domain
- set `allowIndexing: true` (until then every page is `noindex` and `robots.txt` blocks crawlers)
- set `showPlaceholders: false` once every gold "to confirm" box is resolved

Search the code for `TODO-CONTENT` to find every outstanding item.

## Rules for content

- Never invent testimonials, qualifications, events, dates or prices.
- Do not publish private contact details from Iva's CV or letters.
- Spiritual and pastoral healing is not presented as a substitute for medical or psychological care.
- No secrets or API keys in this repository. Use Cloudflare's dashboard for those.

## Accessibility

Target: WCAG 2.2 AA. Brand red `#CB5B59` is only 3.6:1 on ivory, so it is used for large display type and decoration. Text and buttons use `restoration-deep` (`#A8403F`). Contrast notes are in `src/styles/global.css`.
