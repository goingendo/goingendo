// Going Endo site behavior

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Briefing request form (Formspree; submits in the background and shows a thank you)
const form = document.getElementById('signup-form');
if (form) {
  const thanks = document.querySelector('.thanks');
  const error = form.querySelector('.form-error');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    error.hidden = true;
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(res.status);
      // Count the request without sending any form values
      if (typeof gtag === 'function') gtag('event', 'generate_lead', { form_name: 'early-briefing' });
      form.hidden = true;
      thanks.hidden = false;
      thanks.setAttribute('tabindex', '-1');
      thanks.focus();
    } catch (err) {
      error.hidden = false;
      btn.disabled = false;
      btn.textContent = 'Request a briefing';
    }
  });
}
