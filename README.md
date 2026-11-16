# Hlaing Min Htun — React portfolio

Responsive React + Vite portfolio based on the supplied blueprint, presentation, and portrait. Includes four project case-study dialogs, career history, education, contact links, and a certificate gallery.

## Run

```sh
npm install
npm run dev
```

On Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

## Local access

Network sharing is disabled. `npm.cmd run dev` listens only on this computer at `http://127.0.0.1:5173`.

The production preview also listens only on this computer, at `http://127.0.0.1:4173`. Stop either server with Ctrl+C in its terminal.

## Build

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to static hosting. Both `/` and `/sample.html` are supported.

Unknown page paths show a branded 404 screen with links home, to projects, and to contact. `/`, `/index.html`, and `/sample.html` show the portfolio. `dist/404.html` is built for static hosts that support a custom 404 document; configure the host to serve it with HTTP 404 for missing pages. Vite's development fallback displays the same screen but does not itself supply a 404 HTTP status for HTML routes. Route matching lives in `src/routes.js` and the page in `src/NotFound.jsx`.

## Edit

- Content and project case studies: `src/main.jsx`
- Design and responsive layouts: `src/styles.css`
- Portrait: `public/images/hlaing-min-htun.jpg`
- Portfolio blueprint and presentation are source materials only. Their download section has been removed; copies are retained outside public assets in `private/originals`.
- Certificate gallery data: `src/credentials.js`; gallery and image viewer: `src/Showcase.jsx`.
- Personal photos and certificate thumbnails: `public/images/portraits` and `public/images/certificates`.
- Expressive sky-blue and lilac styling: `src/showcase.css`.
- Main portrait sizing: `.portrait-frame` in `src/showcase.css`. Adjust `--portrait-image-height` for image height, `--portrait-position` for alignment, or `--portrait-fit` (default `contain`, which shows the complete photo). Caption and label are outside the image area.
- Email composer: `src/ContactForm.jsx`, styled in `src/contact.css`. Name, reply email, optional subject, and message prepare a `mailto:` draft in the visitor's email app. The visitor reviews and sends it there. No backend delivery or successful-send confirmation is implied.

Uploaded certificate images remain in `public/hmh-certificates` for enlarged viewing and downloads, including the subsequently supplied PHP certificate. Optimized copies are used in the gallery. Earlier archived originals remain in `private/originals`; do not deploy the private directory. DUYC service dates (Aug 2024 – Apr 2025) follow the supplied CV.

Project graphics are conceptual CSS/SVG illustrations, not product screenshots. No CV was supplied. Education omits the unconfirmed graduation year, and certification work is described as support experience. Google Fonts use local font fallbacks when unavailable. Contact links open email or LinkedIn; no backend is required.
