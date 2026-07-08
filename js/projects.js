/**
 * Single source of truth for all projects.
 * Add a new entry here and it will appear on /projects and the home page.
 *
 * filters: any of "fullstack" | "frontend" | "backend"
 * tags:    free-form display labels (tech stack)
 * thumb:   path to screenshot (place files in /assets/screenshots/)
 * video:   optional path to walkthrough mp4 (place in /assets/videos/)
 *
 * 👉 TO ADD YOUR LINKS: paste your URLs into the `live` and `github`
 *    fields below (between the quotes). Leave empty '' to hide the button.
 */
window.PROJECTS = [
  {
    id: 'meet-hala',
    title: 'Meet & Hala Website',
    description: 'A website currently in development. Open "Project details" below to watch a preview of the progress so far.',
    live: '',   // ← paste your live website link here when it launches
    github: '', // ← paste your GitHub repo link here
    thumb: 'assets/screenshots/meet-hala.jpg',
    video: 'assets/videos/meet-hala.mp4',
    filters: ['frontend'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'In Progress',
    features: [
      'Currently in active development',
      'Watch the preview video below to see the progress',
    ],
    featured: true,
  },
  {
    id: 'mzansitraders',
    title: 'MzansiTraders',
    description: 'A South African online trading platform. Full walkthrough of the site in the video below — open "Project details" to watch it.',
    live: '',   // ← paste your live website link here, e.g. 'https://mzansitraders.co.za'
    github: '', // ← paste your GitHub repo link here
    thumb: 'assets/screenshots/mzansitraders.jpg',
    video: 'assets/videos/mzansitraders.mp4',
    filters: ['fullstack', 'frontend'],
    tags: ['HTML', 'CSS', 'JavaScript','SQL', 'PHP'],
    features: [
      'Fully responsive layout across desktop and mobile',
      'Clean, modern UI with smooth navigation',
      'Watch the full walkthrough video below',
    ],
    featured: true,
  },
  {
    id: 'ryan-website',
    title: 'Ryan Website',
    description: 'A custom-built website designed and developed from scratch. Open "Project details" below to watch the full walkthrough video.',
    live: '',   // ← paste your live website link here
    github: '', // ← paste your GitHub repo link here
    thumb: 'assets/screenshots/ryan-website.jpg',
    video: 'assets/videos/ryan-website.mp4',
    filters: ['frontend'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Custom design built to the client\'s vision',
      'Smooth animations and interactive elements',
      'Watch the full walkthrough video below',
    ],
    featured: true,
  },
];
