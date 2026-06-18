# CallDeals — Next.js 15

Production-ready recreation of the CallDeals marketing site. Built with the
Next.js 15 App Router, TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

## Tech stack

- **Next.js 15** (App Router, React 19, Server Components by default)
- **TypeScript** (strict mode)
- **Tailwind CSS 3.4** with a custom brand token theme
- **next/font** — DM Sans, self-hosted and subset at build time

## Routes

| Path          | File                          | Notes                                  |
| ------------- | ----------------------------- | -------------------------------------- |
| `/`           | `app/page.tsx`                | Home — all 13 sections                 |
| `/solutions`  | `app/solutions/page.tsx`      | Solutions overview + security + CTA    |
| `/industries` | `app/industries/page.tsx`     | Industry tabs + client results         |
| `/pricing`    | `app/pricing/page.tsx`        | Three pricing tiers + FAQ              |
| `/about`      | `app/about/page.tsx`          | Story, values, talent pool             |
| `/contact`    | `app/contact/page.tsx`        | Contact details + form (client)        |

Each route exports its own `metadata` (title, description, canonical). A shared
`SiteShell` wraps every page with the `Navbar` and `Footer`.

## Folder structure

```
calldeals/
├── app/
│   ├── layout.tsx        # root layout, <html>/<body>, fonts, SEO metadata + viewport
│   ├── page.tsx          # home page — composes every section
│   ├── globals.css       # Tailwind directives + base resets
│   ├── sitemap.ts        # generated /sitemap.xml
│   └── robots.ts         # generated /robots.txt
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustedBy.tsx
│   ├── Solutions.tsx
│   ├── StrategyCTA.tsx
│   ├── VideoCollage.tsx
│   ├── IndustryExpertise.tsx   # "use client" — interactive industry tabs
│   ├── ClientResults.tsx
│   ├── TalentPool.tsx
│   ├── Security.tsx
│   ├── QuoteCTA.tsx
│   ├── FAQ.tsx                 # "use client" — accordion
│   ├── Footer.tsx
│   └── ui/                     # Button, Container, Logo primitives
├── lib/
│   └── data.ts           # all copy/content as typed constants (single source of truth)
├── types/
│   └── index.ts          # shared TypeScript interfaces
├── public/
│   └── assets/           # photography + SVG logo marks
├── tailwind.config.ts    # brand colors, fonts, animation
├── tsconfig.json         # path alias: @/* -> project root
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## Architecture notes

- **Server vs client.** Everything renders on the server except the two
  genuinely interactive pieces — `IndustryExpertise` (tab state) and `FAQ`
  (accordion state) — which are marked `"use client"`. This keeps the JS bundle
  minimal.
- **Content layer.** All text lives in `lib/data.ts` as typed constants, so copy
  changes never require touching markup.
- **Design tokens.** Brand colors (`navy`, `cyan`, `deep`, `mist`, `ice`,
  `midnight`, `mint`, …) and the DM Sans font are defined in
  `tailwind.config.ts` and used as utility classes throughout.
- **Responsive.** Mobile-first Tailwind breakpoints (`sm`, `lg`); grids collapse
  to a single column and the decorative hero/collage imagery is hidden on small
  screens.
- **Accessibility.** Semantic landmarks, `aria-label`/`aria-expanded`/
  `aria-controls`, a `tablist` pattern for the industry switcher, visible focus
  rings, and alt text on meaningful imagery (decorative images use empty alt).
- **SEO.** Full metadata (title template, description, keywords, Open Graph,
  Twitter card, canonical, robots) in `app/layout.tsx`, plus generated
  `sitemap.xml` and `robots.txt`.

## Content to replace before launch

- "Trusted by" wordmarks are neutral text placeholders (no third-party logos).
- Per-industry stats for the non-Finance tabs and several FAQ answers were
  written to match the design intent — swap in your real figures in
  `lib/data.ts`.
- Footer phone/address are placeholders from the source design.
