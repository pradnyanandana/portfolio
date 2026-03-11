# Pradnyanandana — Portfolio

Personal portfolio of **Pradnyanandana**, a Web, Frontend & WordPress Developer based in Bali, Indonesia.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: GSAP + ScrollTrigger, Lottie
- **Deployment**: GitHub Pages

## Features

- Server-side rendering (SSR) and static site generation (SSG) via Next.js App Router
- Full SEO setup — metadata API, Open Graph, Twitter Cards, per-page `generateMetadata`
- Simulated DB layer (`lib/db/projects.ts`) with REST API routes (`/api/projects`)
- Project detail pages with image gallery and lightbox
- Responsive design with smooth scroll navigation

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
app/                    # Next.js App Router pages & API routes
components/             # React components (Header, Footer, sections)
lib/db/                 # Dummy DB with project data
public/                 # Static assets (images, lottie animations)
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |