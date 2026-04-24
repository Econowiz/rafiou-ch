# rafiou.ch

Personal portfolio site. Built with Astro 6, Tailwind CSS v4, and MDX.

## Stack

- [Astro 6](https://astro.build) — static output, file-based routing
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens in `src/styles/global.css`
- [MDX](https://mdxjs.com) — case studies and essays as content files
- [Vercel](https://vercel.com) — hosting and previews

## Commands

```bash
pnpm dev        # local dev server at localhost:4321
pnpm build      # production build
pnpm preview    # preview build locally
pnpm astro check # type check
```

## Structure

```
src/
  components/ui/     # shared components
  content/           # MDX case studies and essays
  layouts/           # page layouts
  pages/             # routes
  styles/            # global CSS + design tokens
```
