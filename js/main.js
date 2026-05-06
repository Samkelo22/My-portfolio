/* =========================================================================
   Shared utilities: nav toggle, active link, reveal animations, year stamp
   ========================================================================= */
(function () {
  'use strict';

  // ---- Mobile nav -------------------------------------------------------
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const backdrop = document.querySelector('.nav-backdrop');

  function setNav(open) {
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('open', open);
    backdrop && backdrop.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      setNav(open);
    });
  }
  backdrop && backdrop.addEventListener('click', () => setNav(false));
  links && links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setNav(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setNav(false);
  });

  // ---- Active nav link --------------------------------------------------
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    const normalized = href.replace(/\.html$/, '');
    if (normalized === path || (normalized === '/' && (path === '/' || path === '/index'))) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // ---- Reveal on scroll -------------------------------------------------
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }

  // ---- Skill bar fill on view ------------------------------------------
  const skills = document.querySelectorAll('.skill-fill[data-level]');
  if (skills.length && 'IntersectionObserver' in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + '%';
          so.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    skills.forEach((el) => so.observe(el));
  }

  // ---- Year stamp -------------------------------------------------------
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();

// Fix navigation for static files
document.querySelectorAll('a[href^="/"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    let path = this.getAttribute('href');

    if (path === "/") {
      window.location.href = "/index.html";
    } else {
      window.location.href = path + ".html";
    }
  });
});