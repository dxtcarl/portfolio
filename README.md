# Dexter Carl S. Lozano — portfolio

Single-page React portfolio: Android work, bench (micro-soldering) log, services, about, contact.
Dark retro-print look: warm near-black, amber accent, serif display type, mono labels.

## Run it

```bash
cd ~/Documents/portfolio
npm install      # only needed once
npm run dev      # opens http://localhost:5173
```

Build the production files (goes into `dist/`):

```bash
npm run build
npm run preview   # serve the built version locally to check it
```

## The only file you edit for text: `src/content.js`

Everything the page shows is read from that one file. No API, no database —
if a line is not in `content.js`, it does not appear on the site.

| What you want to change | Where in `content.js` |
| --- | --- |
| Name, title, city, email, phone | `profile` |
| Your photo | put the file in `public/`, then set `profile.photo = '/photo.jpg'` |
| "Open for work" dot | `profile.available: true / false` |
| Hero numbers (2 yrs, 100+, …) | `profile.facts` and `statLine` |
| GitHub / Facebook links | `profile.links` — empty string = link is not shown (no fake links) |
| One-line intro under your name | `heroLine` |
| About paragraphs | `bio` (array — one string per paragraph) |
| Skills chips | `skills` (three groups) |
| Project cards | `projects` |
| App screenshots (phone frames) | `projects[].images` — files live in `public/shots/` |
| Bench log rows | `benchJobs` |
| Services + prices | `services` |
| Scrolling word strip | `tickerWords` |

### Removing the SAMPLE tags

The three project cards and the four bench rows are **sample content** — I wrote
them from what you told me, so the layout is not empty. Each one has:

```js
isSample: true,
```

Rewrite the text, then change it to `false` and the orange `SAMPLE` tag
disappears. Anything you are not allowed to show publicly (e.g. a client app)
should just be deleted from the array.

### Screenshots

Each project can carry `images: [{ src, label, alt }, ...]` — three of them render
as the fanned phone frames on the card (swipeable on a phone). Drop new files in
`public/shots/` as `.webp` (738×1600 is what the RockyGo set uses, ~70–90 KB each)
and add a matching entry. A project with no `images` falls back to the text-only card.

## Deploy to Vercel

**Option A — GitHub (recommended, auto-deploys on every push)**

```bash
cd ~/Documents/portfolio
git init && git add -A && git commit -m "Portfolio"
gh repo create portfolio --public --source=. --push
```

Then on vercel.com: *Add New → Project → import the repo*.
Vercel detects Vite automatically (build `npm run build`, output `dist`). No config file needed.

**Option B — Vercel CLI, straight from this folder**

```bash
npm i -g vercel
vercel        # first run: log in, accept the defaults
vercel --prod # publishes the live URL
```

## Publish on GitHub Pages (optional second host)

The repo has `.github/workflows/deploy.yml`. On every push to `main` it:

1. runs `npm ci`
2. runs `npm run build` with `GITHUB_PAGES=1` (so the base path becomes `/portfolio/`)
3. uploads `dist/` as a Pages artifact and deploys it

Live at **https://dxtcarl.github.io/portfolio/**.

Why the base path matters: Pages serves a project site from `/<repo>/`, so `/shots/x.webp`
would 404 there. `src/lib/asset.js` prefixes every image with `import.meta.env.BASE_URL`,
which is `/` on Vercel and `/portfolio/` on Pages — one codebase, both hosts.

## Files

```
index.html              page shell + Google Fonts
src/content.js          ALL your text  ← edit this
src/index.css           design tokens (colors, type, textures, buttons)
src/App.jsx             page order: Hero → Ticker → Work → Bench → Services → About → Contact
src/components/         one file per section (Nav, Hero, Ticker, Work, Bench,
                        Services, About, Contact, Footer, SectionHead, Reveal)
public/                 favicon + your photo goes here
```

## Changing the look

Colors and fonts live at the top of `src/index.css` inside `@theme`:

```css
--color-ink: #0b0a08;    /* page background */
--color-paper: #f4ecdc;  /* headings */
--color-amber: #f0a73a;  /* accent */
--font-display: "Instrument Serif", ...;
--font-mono: "JetBrains Mono", ...;
```

Change one value there and it updates everywhere on the page.
# portfolio
# Portfolio_DC
