# CLAUDE.md

Project-root instructions for Claude Code sessions on the rafiou.ch portfolio rebuild.

## Project

Personal portfolio for Franck Rafiou-Doué. Dual-track positioning: Financial Controller + Software Engineer + Data Analyst. Target domain `rafiou.ch`. Replaces `econowiz.github.io`.

**Read first**: `/Users/itachi/Downloads/Career/portfolio_rebuild/build_brief.md` — full design, copy, and architecture specs (visual system, component inventory, page-by-page copy, voice rules).

## Stack

- **Astro 6** (static output, SSG)
- **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens in `src/styles/global.css` via `@theme {}` (NOT `tailwind.config.ts`)
- **MDX** via `@astrojs/mdx`
- **Content Collections** (Astro 6 loader API) — config at `src/content.config.ts`
- **React** via `@astrojs/react` — for interactive islands only (D3 charts, filters)
- **Vercel** via `@astrojs/vercel`

## Commands

```bash
pnpm dev          # local dev server
pnpm build        # production build (run before pushing)
pnpm preview      # preview the built output locally
pnpm astro check  # TypeScript + Astro type check
```

## Structure

```
src/
  components/ui/     # atomic components (.astro unless interactive → .tsx)
  content/
    case-studies/    # *.mdx case study files
    essays/          # *.mdx blog posts
  content.config.ts  # Zod schemas for Content Collections
  layouts/
    Base.astro       # root layout (fonts, TopNav, global CSS)
  pages/             # file-based routing
  styles/
    global.css       # Tailwind v4 @theme tokens + base styles
```

## Design tokens

All tokens live in `src/styles/global.css` under `@theme {}`. Use CSS custom properties in Tailwind classes:
- `text-[var(--color-sage)]` not a hex literal
- Never hardcode `#4F6B52` — always `var(--color-sage)`
- Font families: `font-serif`, `font-sans`, `font-mono` (mapped in `@theme`)

Key tokens: `--color-sage #4F6B52`, `--color-sage-dark #304a33`, `--color-bg-primary #fafaf8`, `--color-bg-secondary #f5f5f0`, `--color-bg-tertiary #edede6`, `--color-text-primary #1a1a17`, `--color-text-secondary #5f5e5a`, `--color-border-tertiary #e6e6e1`, `--color-border-secondary #d3d1c7`.

Category colors: systems/operations = purple (`--color-systems-bg/text`), analytics = amber (`--color-analytics-bg/text`), bridge = teal (`--color-bridge-bg/text`).

## Conventions

- **Components**: `.astro` by default; `.tsx` only if the component needs React state/hooks or is a D3 island. One component per file, PascalCase.
- **Interactive islands**: add `client:visible` directive on the Astro page (lazy hydration). Prefer `client:idle` for non-critical.
- **MDX content**: frontmatter drives the layout; body is prose + optional React components.
- **Images**: `/public/` for static assets. Use `<Image>` from `astro:assets` for optimisation.
- **Two font weights only**: 400 and 500. Never 600/700.
- **Sentence case everywhere**. No ALL CAPS except mono labels via `tracking-[0.06em] uppercase`.

## Voice (strict)

See `build_brief.md` §9. Short version:
- No em/en dashes mid-sentence. Commas, semicolons, or periods instead.
- No buzzwords: "deep expertise", "leverage", "impactful", "data-driven", "modernizing", "strategic" (as adjective).
- Metrics must be verified or labelled "(simulated)" / "(modelled)".
- No client names. CARBOGEN = "a Swiss pharma CDMO".
- "Currently" not "Open to".
- Private repos labelled "Private" honestly.

## Source of truth (facts, not copy)

Before writing copy for any case study, read the relevant wiki file:
- IFC: `/Users/itachi/Downloads/Career/wiki/projects/Intelligent Financial Close.md`
- GENNA: `/Users/itachi/Downloads/Career/wiki/projects/GENNA CaMeL architecture.md`
- Recurr: `/Users/itachi/Downloads/Career/wiki/projects/Recurr AI subscription management.md`
- Claude Code automation: `/Users/itachi/Downloads/Career/wiki/projects/Claude Code automation layer.md`

## Deployment

Every push to a branch creates a Vercel preview. `main` → `rafiou.ch`. Do not push speculative changes to `main`.

## When stuck

Re-read `build_brief.md`. If something isn't specified, ask Franck before improvising — especially on copy.
