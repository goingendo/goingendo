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

// Hero: the ideas change with the industry dropdown
const industryIdeas = {
  'Manufacturing': [
    ['Predict breakdowns before they happen.', 'Less downtime. Safer shifts.'],
    ['Cut energy use on the line.', 'Lower bills. Lower emissions.'],
    ['Spot defects with cameras.', 'Less scrap. Less waste.'],
  ],
  'Logistics': [
    ['Plan smarter delivery routes.', 'Lower fuel costs. Fewer emissions.'],
    ['Forecast demand ahead of time.', 'Less overstock. Fewer rush shifts.'],
    ['Automate the paperwork.', 'Faster billing. Less overtime.'],
  ],
  'Healthcare': [
    ['Draft visit notes automatically.', 'More time with patients. Less burnout.'],
    ['Predict missed appointments.', 'Fuller schedules. Patients seen sooner.'],
    ['Answer patient questions around the clock.', 'Fewer calls. Faster help.'],
  ],
  'Professional services': [
    ['Draft proposals and reports faster.', 'More billable time. Fewer late nights.'],
    ['Find past work instantly.', 'Faster answers. Less repeated effort.'],
    ['Sort and prioritize leads.', 'More wins. Less wasted time.'],
  ],
  'Financial services': [
    ['Flag fraud sooner.', 'Fewer losses. Customers protected.'],
    ['Speed up loan reviews.', 'Faster decisions. More small businesses served.'],
    ['Answer customer questions instantly.', 'Lower costs. Happier customers.'],
  ],
  'Construction': [
    ['Estimate jobs faster.', 'More bids. Fewer errors.'],
    ['Spot safety risks in site photos.', 'Fewer incidents. Safer crews.'],
    ['Track materials on every job.', 'Less waste. Lower costs.'],
  ],
};
const industry = document.getElementById('industry');
const ideasList = document.getElementById('ideas');
if (industry && ideasList) {
  const showIdeas = () => {
    ideasList.replaceChildren(...(industryIdeas[industry.value] || []).map(([idea, payoff]) => {
      const li = document.createElement('li');
      const strong = document.createElement('strong');
      strong.textContent = idea;
      li.append(strong, ' ' + payoff);
      return li;
    }));
  };
  industry.addEventListener('change', showIdeas);
  showIdeas();
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Buttons that open the contact form with an "I'm interested in" option chosen
const interestSelect = document.getElementById('interest');
const interestOptions = {
  briefing: 'A briefing for our members',
  workshop: 'A workshop for our leadership team',
};
// Member count is asked only for briefings; disabled when hidden so it is not sent
const membersField = document.getElementById('members-field');
function toggleMembers() {
  if (!interestSelect || !membersField) return;
  const show = interestSelect.value === interestOptions.briefing;
  membersField.hidden = !show;
  membersField.querySelector('input').disabled = !show;
}
if (interestSelect) interestSelect.addEventListener('change', toggleMembers);
function preselectInterest(key) {
  if (interestSelect && interestOptions[key]) interestSelect.value = interestOptions[key];
  toggleMembers();
}
document.querySelectorAll('[data-interest]').forEach((a) =>
  a.addEventListener('click', () => preselectInterest(a.dataset.interest))
);
// Links from other pages pass the choice as ?interest=briefing or ?interest=workshop
preselectInterest(new URLSearchParams(location.search).get('interest'));

// Contact form (Formspree; submits in the background and shows a thank you)
const form = document.getElementById('signup-form');
if (form) {
  const thanks = document.querySelector('.thanks');
  const error = form.querySelector('.form-error');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    error.hidden = true;
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(res.status);
      // Count the message without sending any form values
      if (typeof gtag === 'function') gtag('event', 'generate_lead', { form_name: 'discuss-challenge' });
      form.hidden = true;
      thanks.hidden = false;
      thanks.setAttribute('tabindex', '-1');
      thanks.focus();
    } catch (err) {
      error.hidden = false;
      btn.disabled = false;
      btn.textContent = label;
    }
  });
}
