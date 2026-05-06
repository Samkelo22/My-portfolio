/* =========================================================================
   Contact form: progressive enhancement over a Formspree endpoint.
   Replace FORMSPREE_ENDPOINT below with your own (https://formspree.io/f/xxxx)
   ========================================================================= */
(function () {
  'use strict';

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-id-here';

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = 'Sending…';

    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        status.className = 'form-status success';
        status.textContent = '✓ Message sent. I\'ll get back to you soon.';
      } else {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Failed to send.');
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = '✗ ' + (err.message || 'Something went wrong. Email me directly instead.');
    }
  });
})();
