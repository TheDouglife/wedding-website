# Wedding Website SPA

Single-page React app inspired by the provided wedding screenshot, built for quick content edits and deployment on DigitalOcean App Platform.

## Stack

- Vite
- React
- Tailwind CSS (plus custom CSS)

## Local development

1. Install dependencies:

   npm install

2. Start dev server:

   npm run dev

3. Build production bundle:

   npm run build

4. Preview production build:

   npm run preview

## Editing content quickly

Primary content lives in `src/App.jsx`:

- Hero text and countdown data
- Couple story and event cards
- Gallery and latest posts
- Footer text blocks

Primary styling lives in `src/index.css`:

- Colors and typography variables in `:root`
- Section spacing and layout grids
- Mobile breakpoints

## DigitalOcean App Platform

The app spec is in `.do/app.yaml`.

What to do:

1. Push this repo to GitHub.
2. In DigitalOcean App Platform, create app from GitHub repo.
3. Confirm static site settings:
   - Build command: npm ci && npm run build
   - Output directory: dist
4. Enable auto deploy on push.

If you prefer to configure through the UI only, keep `.do/app.yaml` as reference.
