<<<<<<< HEAD
# Samkelo Mabena — Portfolio

A minimal, accessible developer portfolio built with vanilla **HTML + CSS + JavaScript**. No build step, no frameworks, no npm install — just open and ship.

## ✨ Features

- 4 pages: Home, Projects, About, Contact
- Mobile-first responsive design with hamburger drawer nav
- Scroll-triggered reveal animations (`IntersectionObserver`)
- Data-driven project cards (edit one JS array → cards update)
- Filterable projects (Full-stack / Frontend / Backend)
- Collapsible project details with optional video walkthrough
- Contact form via Formspree
- Accessible: semantic HTML, ARIA, skip-to-content link, `prefers-reduced-motion`
- Clean URLs (`/about` not `/about.html`) via `vercel.json`
- Security & caching headers preconfigured

## 📁 Folder structure

```
portfolio/
├── index.html             # Home
├── projects.html          # Projects listing + filters
├── about.html             # Bio, skills, timeline
├── contact.html           # Form + contact info
├── 404.html               # Not-found page
├── vercel.json            # Clean URLs + headers
├── css/
│   ├── variables.css      # 🎨 Design tokens (edit here to re-theme)
│   └── styles.css         # All component styles
├── js/
│   ├── projects.js        # 📦 Project data — edit to add a project
│   ├── render-projects.js # Renders cards + handles filters
│   ├── contact.js         # Formspree submission
│   └── main.js            # Nav, reveal observer, year stamp
└── assets/
    ├── screenshots/       # Project screenshots (16:9 ideal)
    └── videos/            # Optional walkthrough .mp4 files
```

## 🚀 Run locally

This is a static site — any local server works.

```bash
# Python
python3 -m http.server 5173

# Node (one-off)
npx serve .

# PHP
php -S localhost:5173
```

Then open <http://localhost:5173>.

> **Note**: opening `index.html` directly via `file://` works for the home page, but cross-page navigation uses absolute paths (`/about`) which need a server. Use one of the commands above.

## ➕ Add a new project

Open **`js/projects.js`** and append an entry to the `window.PROJECTS` array:

```js
{
  id: 'my-new-project',                          // unique slug
  title: 'My New Project',
  description: 'One-paragraph summary.',
  live: 'https://example.com',                   // or '' to hide
  github: 'https://github.com/you/repo',         // or '' to hide
  thumb: 'assets/screenshots/my-project.png',
  video: 'assets/videos/walkthrough.mp4',        // optional, '' to hide
  filters: ['fullstack'],                        // any of: fullstack, frontend, backend
  tags: ['React', 'Postgres'],                   // free-form display tags
  features: ['Bullet 1', 'Bullet 2'],
  featured: true                                 // show on the home page?
}
```

Drop your screenshot into `assets/screenshots/` and (optionally) the video into `assets/videos/`. Save — done. No HTML to touch.

## 🎨 Design tokens

All colors, fonts, spacing, radii, and motion live in **`css/variables.css`**. Change a value once, the whole site updates.

| Token group        | Examples                                                 |
| ------------------ | -------------------------------------------------------- |
| Colors             | `--color-bg`, `--color-text`, `--color-accent` (#3b82f6) |
| Typography         | `--font-sans`, `--font-mono`, `--fs-base`, `--fs-4xl`    |
| Spacing            | `--space-1` … `--space-10`                               |
| Layout             | `--container-max`, `--header-h`                          |
| Radius             | `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill` |
| Motion             | `--ease-out`, `--dur-fast`, `--dur-base`, `--dur-slow`   |

To swap the accent color (e.g. to green), change just `--color-accent`, `--color-accent-hover`, `--color-accent-dim`, and `--color-accent-glow` in `:root`.

## 📬 Contact form (Formspree)

1. Sign up at [formspree.io](https://formspree.io) and create a form. You'll get an endpoint like `https://formspree.io/f/abcd1234`.
2. Open `js/contact.js` and replace the value of `FORMSPREE_ENDPOINT`.
3. That's it — submissions land in your inbox.

(Alternative: Web3Forms, Getform, or your own backend — same form fields work.)

## 🌐 Deployment

### Vercel (recommended)

1. Push this folder to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Other**. Build command: leave blank. Output dir: `.`.
4. Deploy. The included `vercel.json` enables clean URLs and security headers.

### Netlify

Create a `netlify.toml` (or use the dashboard) with:

```toml
[[redirects]]
  from = "/about"
  to = "/about.html"
  status = 200
# repeat for projects, contact, etc.
```

Or simpler — rename pages into folders (`about/index.html`) and deploy the folder. Netlify also auto-strips `.html`.

### GitHub Pages / Cloudflare Pages

Both work out of the box. For GitHub Pages, links to `/about` will need either folder-style routing or a `.nojekyll` setup — easiest is to keep `.html` extensions in the nav links if deploying there.

## 📝 License

MIT — do whatever you want.
=======
# My-portfolio
This is my website with all my projexts
>>>>>>> 4cff8159f2957a6d22d791b5ba16bfa96df21e09
