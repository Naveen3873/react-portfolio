# Personal Portfolio (Vite + React + Tailwind)


## Setup


1. Node.js: Use Node v22.x (tested with 22.19.0) and npm 10.x.
2. Install dependencies: `npm install`.
3. Start dev server: `npm run dev`.
4. Build for production: `npm run build`.
5. Preview production locally: `npm run preview`.


## Environment / Contact form


- If using Formspree, set `FORMSPREE_ID` in `src/components/Contact.jsx` or convert to environment variable at build-time and use it from code.


## Optimizations & SEO


- Add `<link rel="preload">` on large hero images in `index.html` if necessary.
- Serve optimized images (WebP) and use `srcset`/`picture` for responsive images.
- Vite's build output is optimized (code-splitting + minification). Enable Brotli/Gzip on your CDN.


## Dark-mode


- Uses Tailwind's `dark` class. You can persist user's preference in `localStorage` and apply on first paint to avoid flash.


## Linting & Formatting


- `npm run lint` and `npm run format` are available.


## Deploy


### Vercel
1. Connect your repo to Vercel.
2. Build command: `npm run build`.
3. Output directory: `dist`.
4. Add any environment variables in the Vercel dashboard (e.g. Formspree ID).


### Netlify
1. Connect repo and set build command `npm run build` and publish directory `dist`.
2. If using SPA fallback, add a `_redirects` file to `public/` with `/* /index.html 200`.


### GitHub Pages
1. Build the site (`npm run build`).
2. Push the `dist/` folder to `gh-pages` branch or use a static site job in GitHub Actions to deploy.


## Accessibility & Performance
- Add `alt` text for images and labels for form inputs.
- Use Lighthouse to check performance/SEO and remediate blocking issues.