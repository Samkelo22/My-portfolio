/**
 * Single source of truth for all projects.
 * Add a new entry here and it will appear on /projects and the home page.
 *
 * filters: any of "fullstack" | "frontend" | "backend"
 * tags:    free-form display labels (tech stack)
 * thumb:   path to screenshot (place files in /assets/screenshots/)
 * video:   optional path to walkthrough mp4 (place in /assets/videos/)
 */
window.PROJECTS = [
  {
    id: 'flux-dashboard',
    title: 'Flux Analytics Dashboard',
    description: 'A multi-tenant analytics platform serving 200+ SaaS teams. Live charts stream over WebSockets, dashboards are fully customizable, and every widget is keyboard accessible.',
    live: 'https://flux.alexcarter.dev',
    github: 'https://github.com/alexcarter/flux',
    thumb: 'assets/screenshots/placeholder-1.svg',
    video: '',
    filters: ['fullstack'],
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Redis'],
    features: [
      'Real-time data streaming via WebSockets with auto-reconnect',
      'Role-based access control with JWT + refresh rotation',
      'Drag-and-drop dashboard builder with 12 widget types',
      'Deployed on Vercel + Fly.io with GitHub Actions CI/CD',
    ],
    featured: true,
  },
  {
    id: 'pixel-shop',
    title: 'Pixel Shop',
    description: 'A minimal e-commerce frontend built with zero frameworks. Product filters, persistent cart, and smooth checkout animations — all in ~14kb gzipped.',
    live: 'https://pixelshop.alexcarter.dev',
    github: 'https://github.com/alexcarter/pixel-shop',
    thumb: 'assets/screenshots/placeholder-2.svg',
    video: '',
    filters: ['frontend'],
    tags: ['Vanilla JS', 'CSS Grid', 'LocalStorage', 'View Transitions'],
    features: [
      'Zero-framework, ~14kb gzipped, 100/100 Lighthouse',
      'Optimistic UI updates with rollback on failure',
      'Fully accessible keyboard navigation and focus traps',
      'Animated checkout flow using the View Transitions API',
    ],
    featured: true,
  },
  {
    id: 'hawk-api',
    title: 'Hawk Rate-Limit API',
    description: 'A high-throughput rate-limiting service backed by Redis. Sliding-window counters, per-key quotas, and Prometheus metrics out of the box.',
    live: '',
    github: 'https://github.com/alexcarter/hawk',
    thumb: 'assets/screenshots/placeholder-3.svg',
    video: '',
    filters: ['backend'],
    tags: ['Go', 'Redis', 'Docker', 'gRPC', 'Prometheus'],
    features: [
      'Handles 50k req/s on a single 2-core node',
      'Sliding-window and token-bucket strategies',
      'Prometheus metrics + ready-made Grafana dashboards',
      'Single static binary, ships as a 12MB Docker image',
    ],
    featured: true,
  },
  {
    id: 'notepulse',
    title: 'NotePulse',
    description: 'A markdown notes app with real-time collaboration, offline-first sync, and a Linear-style command palette. Works fully offline and syncs when you reconnect.',
    live: 'https://notepulse.app',
    github: 'https://github.com/alexcarter/notepulse',
    thumb: 'assets/screenshots/placeholder-4.svg',
    video: '',
    filters: ['fullstack', 'frontend'],
    tags: ['TypeScript', 'CRDT (Yjs)', 'IndexedDB', 'Service Workers'],
    features: [
      'Conflict-free real-time sync powered by Yjs',
      'Works fully offline with Service Worker caching',
      'Cmd-K palette with fuzzy search across all notes',
      'End-to-end encrypted shared notebooks',
    ],
    featured: false,
  },
  {
    id: 'orbit-cms',
    title: 'Orbit Headless CMS',
    description: 'A self-hostable headless CMS with a friendly admin UI, GraphQL + REST APIs, and image transforms baked in. Designed for small teams that don\'t want to babysit a server.',
    live: '',
    github: 'https://github.com/alexcarter/orbit',
    thumb: 'assets/screenshots/placeholder-1.svg',
    video: '',
    filters: ['fullstack', 'backend'],
    tags: ['Node.js', 'Fastify', 'PostgreSQL', 'GraphQL', 'S3'],
    features: [
      'GraphQL + REST endpoints generated from your schema',
      'On-the-fly image transforms with smart caching',
      'Plugin system for custom field types',
      'One-command deploy to Fly.io or any Docker host',
    ],
    featured: false,
  },
  {
    id: 'lumen-ui',
    title: 'Lumen UI Kit',
    description: 'A small, opinionated component library built with semantic CSS variables. Ships as plain HTML+CSS so you can drop it into any project — no build step required.',
    live: 'https://lumen.alexcarter.dev',
    github: 'https://github.com/alexcarter/lumen-ui',
    thumb: 'assets/screenshots/placeholder-2.svg',
    video: '',
    filters: ['frontend'],
    tags: ['HTML', 'CSS', 'Design Tokens'],
    features: [
      '30+ accessible components with zero JavaScript',
      'Light + dark themes via CSS custom properties',
      'Copy-paste docs site with live previews',
      'Under 8kb gzipped for the full kit',
    ],
    featured: false,
  },
];
