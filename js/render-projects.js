/* =========================================================================
   Renders project cards. Used by both index.html (featured) and projects.html
   ========================================================================= */
(function () {
  'use strict';

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function cardHTML(p) {
    const tags = p.tags.map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join('');
    const live = p.live ? `<a class="btn btn-ghost btn-sm" href="${escapeHTML(p.live)}" target="_blank" rel="noopener">Live <span class="arrow">→</span></a>` : '';
    const gh = p.github ? `<a class="btn btn-ghost btn-sm" href="${escapeHTML(p.github)}" target="_blank" rel="noopener">Code</a>` : '';
    const features = (p.features || []).map((f) => `<li>${escapeHTML(f)}</li>`).join('');
    const video = p.video
      ? `<video controls preload="metadata" src="${escapeHTML(p.video)}" aria-label="Walkthrough of ${escapeHTML(p.title)}"></video>`
      : '';

    return `
      <article class="project-card reveal" data-filters="${p.filters.join(' ')}">
        <div class="project-thumb" style="background-image:url('${escapeHTML(p.thumb)}')" role="img" aria-label="${escapeHTML(p.title)} screenshot"></div>
        <div class="project-body">
          <h3 class="project-title">${escapeHTML(p.title)}</h3>
          <p class="project-desc">${escapeHTML(p.description)}</p>
          <div class="tags">${tags}</div>
          <div class="project-actions">${live}${gh}</div>
        </div>
        <details class="project-details">
          <summary>Project details</summary>
          <div class="project-details-body">
            ${features ? `<div><strong style="color:var(--color-text);font-size:var(--fs-sm)">Key features</strong><ul>${features}</ul></div>` : ''}
            ${video}
          </div>
        </details>
      </article>
    `;
  }

  function renderInto(selector, items) {
    const root = document.querySelector(selector);
    if (!root) return;
    root.innerHTML = items.map(cardHTML).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const all = window.PROJECTS || [];

    // Featured (home page)
    renderInto('#featured-projects', all.filter((p) => p.featured));

    // Full list (projects page)
    const grid = document.querySelector('#projects-grid');
    if (grid) {
      renderInto('#projects-grid', all);

      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;
          filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
          document.querySelectorAll('#projects-grid .project-card').forEach((card) => {
            const matches = filter === 'all' || card.dataset.filters.split(' ').includes(filter);
            card.style.display = matches ? '' : 'none';
          });
        });
      });
    }

    // Re-trigger reveal observer for newly inserted cards
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.project-card.reveal:not(.visible)').forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll('.project-card.reveal').forEach((el) => el.classList.add('visible'));
    }
  });
})();
