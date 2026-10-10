# ManutenCasa

## Live Demo

[manutencasa.it](https://manutencasa.it/)

![ManutenCasa website preview showing the navigation and home maintenance services hero](docs/images/manutencasa-preview.png)

## Project Overview

ManutenCasa is an independently developed website for a real home maintenance and repair business based in Bologna, Italy. The Italian-language site presents the business, its services, and the steps for arranging an intervention, with direct phone and WhatsApp contact options.

The front end uses a single-page React architecture, reusable UI components, and content stored separately from presentation. A custom Chakra UI theme centralizes brand colors and typography.

## Key Features

- Responsive layouts, a sticky header, and a mobile navigation drawer with in-page links.
- Data-driven service cards, a step-by-step explanation of the service process, and a collapsible FAQ accordion.
- Click-to-call links, WhatsApp links with a prefilled message for describing a problem, and a floating WhatsApp button on mobile.
- Semantic page sections, labeled navigation controls, and visible focus styles for interactive elements.
- Locally hosted Poppins and Roboto fonts, WebP images, and lazy loading for selected images.
- Search and social-sharing metadata, a canonical URL, structured business data, `robots.txt`, and a sitemap.

## Tech Stack

- **React and TypeScript** — component-based UI and typed component props and content models.
- **Chakra UI and Emotion** — responsive styling and a shared theme.
- **React Icons** — service, navigation, and contact icons.
- **Vite** — local development, production builds, and build previews.
- **ESLint** — JavaScript, TypeScript, and React linting.
- **GitHub Pages** — deployment configured through `gh-pages` with the custom domain `manutencasa.it`.

## Getting Started

With Node.js and npm installed, run these commands from the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

Additional scripts:

```bash
npm run lint      # Run ESLint
npm run build     # Run the TypeScript build check and generate dist/
npm run preview   # Preview the production build after building
```

The repository also defines `npm run deploy`, which builds the project and publishes `dist/` to GitHub Pages with the custom domain. Publishing requires access to the target repository.

## Project Structure

```text
src/
  components/   # Page sections and reusable UI components
  data/         # Services, FAQs, navigation, and other page content
  hooks/        # Custom React hooks
  theme/        # Chakra UI theme and design tokens
  assets/fonts/ # Locally hosted font files
  styles/       # Font declarations and licenses
  App.tsx       # Page composition
  main.tsx      # React entry point and Chakra provider
public/         # Images, favicon, robots.txt, and sitemap
index.html      # HTML entry point, metadata, and structured data
```

## My Role

I independently developed the front end for this real local business. My work covers the responsive page layout, reusable React components, TypeScript content models, theme customization, contact interactions, search metadata, and GitHub Pages deployment configuration.
