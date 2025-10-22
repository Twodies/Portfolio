# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Framework: Next.js App Router with TypeScript and Tailwind CSS; animated UI via Framer Motion and icons via Lucide.
- Purpose: Single-page portfolio composed from data in src/data/portfolio-data.ts and rendered through section components.

Common commands
- Dev server (Turbopack):
```bash path=null start=null
npm run dev
```
- Build production bundle:
```bash path=null start=null
npm run build
```
- Start production server (after build):
```bash path=null start=null
npm run start
```
- Type-check locally (no emit):
```bash path=null start=null
npx tsc --noEmit
```
Notes
- Lint: no lint script/config present.
- Tests: no test framework configured; running a single test is not applicable.

High-level architecture
- Entry and routing
  - src/app/layout.tsx defines global metadata and wraps the app with ThemeProvider.
  - src/app/page.tsx composes the single-page sections: Navigation, Hero, About, Skills, Experience, Projects, Contact, Footer.
- Rendering model
  - Most UI is client-side (“use client”) components using Framer Motion for animation and smooth scrolling.
  - No API routes or server actions; all content is static/data-driven.
- Data flow and types
  - All portfolio content (projects, experiences, skills, contact, social, personalInfo) lives in src/data/portfolio-data.ts.
  - Shared domain types in src/types/index.ts ensure the data file and components stay in sync.
- Theming/state
  - src/lib/theme-provider.tsx exposes a ThemeContext with light/dark, persists to localStorage, and toggles the html.dark class.
  - Navigation and Footer implement smooth in-page navigation via section IDs and scroll offset logic.
- Styles
  - Tailwind configured via tailwind.config.ts and postcss.config.mjs.
  - Global styles and CSS variables for light/dark themes live in src/app/globals.css (utilities like btn-primary, section-padding, etc.).
- Assets
  - Public assets (resume, icons, images) in public/; project thumbnails in public/projects/.
- SEO/Meta
  - Rich Metadata (title, description, Open Graph, Twitter, robots) defined in src/app/layout.tsx.

Key edit points (from README)
- Content: edit src/data/portfolio-data.ts to update personal info, skills, work history, projects, and links.
- Images: add project images to public/projects/ and reference them from the data file.
- Theme: tune CSS variables in src/app/globals.css to change colors.
- Resume: place your PDF at public/resume.pdf for the download link.
- Optional env: create .env.local with NEXT_PUBLIC_SITE_URL if needed for absolute URLs.
