# goingendo
Emerging technology education, innovation, and venture building

## Website

A one page prelaunch site for Going Endo. Plain HTML, CSS, and JavaScript. No build step.

Going Endo brings emerging technology education into a company and helps its team test one real idea on a real problem. The page has one action: Request an early briefing.

### Files

- `index.html` is the home page: hero, how it works, an illustrative example, who it is for, founder note, FAQ, and the briefing form
- `privacy.html` is the privacy policy (update its effective date when you change it)
- `styles.css` holds colors, fonts, and layout (palette at the top)
- `script.js` runs the mobile menu and the briefing form
- `assets/` holds the logo and icons
- `sitemap.xml` and `robots.txt` point search engines at https://goingendo.com
- `llms.txt` is a plain text summary for AI assistants

### FAQ and structured data

The `<head>` of `index.html` has JSON-LD for the Organization and an FAQPage. The FAQPage questions and answers must match the visible FAQ section word for word, so edit both together.

### Founder photo

The About section shows a placeholder circle. Add a square photo as `assets/founder.jpg`, then replace the `founder-photo-placeholder` div in `index.html` with the `<img>` tag given in the comment above it.

### Briefing form

Requests go to Formspree form `xjyykvle` (the form's `action` in `index.html`). Submissions show up in the Formspree dashboard and by email. A successful request sends a `generate_lead` event to Google Analytics with no form values.

### Analytics

Google Analytics tag `G-PE0M7C7KN4` sits right after `<head>` on every page.

### Deploy

This repo deploys on Vercel from `main`. It is a static site, so Vercel needs no build settings: framework preset Other, no build command, output directory is the repo root.

### Writing rules for this site

No hyphens or dashes in sentences. No commas in headings. No small label lines above headlines. See `CLAUDE.md` for the full brand guide.
