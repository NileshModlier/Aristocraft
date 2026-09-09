# Aristocraft

Premium marketing website for **Aristocraft** — MDF, HDHMR, acrylic and glass shutter specialists since 1993.

## Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router
- Production build for Vercel / Netlify SPA hosting

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Contact

Edit live details in `src/data/site.js`. The downloadable brochure is regenerated with:

```bash
node scripts/generate-brochure.mjs
```
