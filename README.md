# goingendo
Emerging technology education, innovation, and venture building

## Website

A one page launch site for Going Endo. Plain HTML, CSS, and JavaScript. No build step.

### Files

- `index.html` is the page and all of its words
- `styles.css` holds colors, fonts, and layout (palette at the top)
- `script.js` runs the mobile menu and the signup form
- `assets/` holds the logo and icons

### Before tickets go on sale

The speaker, date, and venue currently read "to be announced" in `index.html`. Update them when they are confirmed.

When tickets go on sale, change the `href="#signup"` on the **Reserve your spot** button (id `ticket-link`) to your Eventbrite link.

### Signup form

Signups go to Formspree (free). Create a form at formspree.io and put its form ID in the form's `action` in `index.html` (currently `xjyykvle`). Submissions show up in your Formspree dashboard and by email.

### Deploy

This repo deploys on Vercel from `main`. It is a static site, so Vercel needs no build settings: framework preset Other, no build command, output directory is the repo root.

### Writing rules for this site

No hyphens or dashes in sentences. No commas in headings.
