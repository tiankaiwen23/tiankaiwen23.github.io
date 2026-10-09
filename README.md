# Academic Homepage

A fast, single-author academic homepage built with [Astro](https://astro.build/). All content lives in typed data files and Markdown — no CMS, no database, every page is static.

[中文说明](README.zh-CN.md)

## Features

- **Home / Publications / Blog** — sections driven entirely by data files
- **Light & dark themes** — follows system preference, remembers the choice, crossfades on toggle
- **Publication cards** — author highlighting, award badges, teaser lightbox
- **Markdown blog** — categories (Thoughts / Travel / Notes) and draft support
- **Visitor map** — optional country-level visitor counts; hidden until configured

## Quick start

```bash
npm install
npm run dev      # local preview
npm run build    # static site in dist/
npm run preview  # serve the production build locally
```

Requires Node.js ≥ 22.12.

## Project structure

```text
src/
├── data/            # all content: site, news, publications, experience
├── content/writing/ # blog posts (Markdown)
├── layouts/         # shared page shell
├── components/      # reusable UI components
└── styles/          # global stylesheet
public/              # avatar, favicon, OG image, brand logos
scripts/             # local maintenance scripts
```

## Updating content

Nothing requires touching components — everything is edited in `src/data/` or `src/content/writing/`:

| Content | File | Notes |
| --- | --- | --- |
| Intro, contact links, footer date | `src/data/site.ts` | `intro` allows inline `<strong>` / `<em>` / `<a>` |
| News | `src/data/news.ts` | Newest first, date as `YYYY.MM`; home shows the first three |
| Publications | `src/data/publications.ts` | See conventions below |
| Experience | `src/data/experience.ts` | Logos live in `public/brands/` |
| Blog posts | `src/content/writing/*.md` | Plain Markdown |

Conventions:

- **Publications** — `authors` holds exact name strings; the entry matching your name is highlighted automatically, and a trailing `†` marks the corresponding author. Common link labels: `Paper` / `Project` / `Code` / `arXiv` / `BibTeX`. Use `links: []` rather than placeholders; mark accepted-but-unpublished work with `note: "Accepted"`.
- **News** — one line each, milestones only (acceptances, awards, new positions).
- **Blog frontmatter** — `title`, `date` (`YYYY-MM-DD`), `category` (`Thoughts` / `Travel` / `Notes`), optional `description`; `draft: true` hides a post.
- **After any update** — bump `SITE.updated` in `src/data/site.ts` (`Oct. 2026` format) and make sure `npm run build` passes.

## Deployment

`npm run build` emits a fully static `dist/`. The repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes to GitHub Pages on every push to `main`; the output also works as-is on Vercel, Netlify, or any static host.
