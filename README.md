# goingendo
Emerging technology education, innovation, and venture building

## Website

A one page prelaunch site for Going Endo. Plain HTML, CSS, and JavaScript. No build step.

Find the AI worth doing. Going Endo helps leadership teams choose the AI use case that pays off for the business and the people it depends on. The page has one action: Discuss a challenge.

### Files

- `index.html` is the home page: hero with the industry dropdown and AI ideas, how it works, a sample AI Plan, and the workshop booking form (`#book`)
- `partners.html` is the page for associations, chambers, and innovation agencies, with the briefing form
- `faq.html` is the FAQ page, with every question and answer and the founder
- `privacy.html` is the privacy policy (update its effective date when you change it)
- `paid.html` is the private payment confirmation page (`noindex`, not linked)
- `styles.css` holds colors, fonts, and layout (palette at the top)
- `script.js` runs the mobile menu, the industry ideas, the button preselect, and the forms
- `assets/` holds the logo, icons, and founder photo (`founder.jpg`, square)
- `sitemap.xml` and `robots.txt` point search engines at https://goingendo.com
- `llms.txt` is a plain text summary for AI assistants

### FAQ and structured data

`index.html` has the Organization JSON-LD. `faq.html` has the FAQPage JSON-LD, whose questions and answers must match the visible FAQ on that page word for word, so edit both together.

### Contact form

Messages go to Formspree form `xjyykvle` (the form's `action` in `index.html` and `partners.html`). The home form preselects a workshop; the partners form preselects a briefing. Fields: name, work email, organization, organization type, country, interest, and an optional challenge. Submissions show up in the Formspree dashboard and by email. A successful message sends a `generate_lead` event to Google Analytics with no form values.

### Analytics

Google Analytics tag `G-PE0M7C7KN4` sits right after `<head>` on every page.

### Deploy

This repo deploys on Vercel from `main`. It is a static site, so Vercel needs no build settings: framework preset Other, no build command, output directory is the repo root.

### Private payment link

`api/checkout.js` is a Vercel serverless function (no npm packages). `vercel.json` rewrites `/pay` to it. It creates a Stripe Checkout Session for one workshop and redirects to Stripe. After payment Stripe returns the client to `paid.html`, which is `noindex` and not linked from the site.

Set these in Vercel under Project Settings → Environment Variables (never in a file):

- `STRIPE_SECRET_KEY`: the Stripe secret key
- `STRIPE_PRICE_ID`: the price ID of the AI Workshop product

Redeploy after changing them. `/pay` is sent only to confirmed clients and is never linked from the site.

### Writing rules for this site

No hyphens or dashes in sentences. No commas in headings. No small label lines above headlines. See `CLAUDE.md` for the full brand guide.
