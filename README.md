# goingendo
Emerging technology education, innovation, and venture building

## Website

A one page prelaunch site for Going Endo. Plain HTML, CSS, and JavaScript. No build step.

Find the AI worth doing. Going Endo helps leadership teams choose the AI use case that pays off for the business and the people it depends on. The page has one action: Discuss a challenge.

### Files

- `index.html` is the home page: hero, how it works, example, two ways in (AI Briefing and AI Workshop, with the availability line), what we don't do, about, FAQ, and the contact form
- `privacy.html` is the privacy policy (update its effective date when you change it)
- `styles.css` holds colors, fonts, and layout (palette at the top)
- `script.js` runs the mobile menu and the contact form
- `assets/` holds the logo, icons, and founder photo (`founder.jpg`, square)
- `sitemap.xml` and `robots.txt` point search engines at https://goingendo.com
- `llms.txt` is a plain text summary for AI assistants

### FAQ and structured data

The `<head>` of `index.html` has JSON-LD for the Organization and an FAQPage. The FAQPage questions and answers must match the visible FAQ section word for word, so edit both together.

### Contact form

Messages go to Formspree form `xjyykvle` (the form's `action` in `index.html`). Fields: name, work email, organization, organization type, country, interest, and an optional challenge. Submissions show up in the Formspree dashboard and by email. A successful message sends a `generate_lead` event to Google Analytics with no form values.

### Analytics

Google Analytics tag `G-PE0M7C7KN4` sits right after `<head>` on every page.

### Deploy

This repo deploys on Vercel from `main`. It is a static site, so Vercel needs no build settings: framework preset Other, no build command, output directory is the repo root.

### Writing rules for this site

No hyphens or dashes in sentences. No commas in headings. No small label lines above headlines. See `CLAUDE.md` for the full brand guide.
