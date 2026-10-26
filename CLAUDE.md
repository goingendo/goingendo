# Going Endo

Positioning: Find the AI worth doing. Going Endo helps leadership teams choose the AI use case that pays off twice: for the business, and for the customers, workers, and suppliers it depends on. The name means "going within": we go inside your company and your industry. Everything on the site supports this.

How it works: AI Workshop (an online session with the leadership team), then the AI Plan (one page: the problem, the payoff, the smallest test), then the AI Sprint (we build it and test it with our specialists). The AI Briefing is the free entry point for associations, chambers, and innovation agencies and lives on the partners page. Available online in the United States, the UAE, Singapore, the UK, and Switzerland. Do not mention Salt Lake City or "based in" in visible copy; the address lives only in the Organization JSON-LD.

The site is in prelaunch and is shopping first for companies. Two actions: "Book a workshop" (the form at `index.html#book`, workshop preselected) and "Host a briefing" (the form on `partners.html`, briefing preselected). Both forms are the same Formspree form; buttons with `data-interest` or a `?interest=` link preselect "I'm interested in". Briefings are free for host organizations; no prices appear on the site.

## Writing rules (always)

Apply to all visible text on the site.

- No hyphens or dashes (-, –, —) in sentences
- No commas in headings
- No small label lines above headlines
- Never say "shared value"
- Never mention Singularity University or PwC
- No prices, dates, or timelines
- Never invent clients, partners, or results
- Going Endo sells no software. It helps choose AI use cases, then builds them through AI Sprints delivered by specialist partners. Never name a delivery partner on the site.
- On Going Endo's own site the offers are "AI Briefing", "AI Workshop", and "AI Sprint". Add "Going Endo" only where the brand isn't visible. Never use "Endo" alone.
- Never use the word opportunity anywhere on the site. The workshop deliverable is called the AI Plan.
- The AI Briefing, AI Workshop and AI Sprint are online only. Never say in person or half day.

## Brand voice

- Smart but approachable, ambitious but grounded, optimistic but evidence led, clear and direct
- Prefer: explore, understand, connect, experiment, build, solve
- Avoid hype: disruption, revolutionary, exponential, world changing
- Never imply affiliation with any university, institute, or other organization
- Never invent stats, partners, or outcomes
- Never list partners, advisors, projects, or results until they are confirmed in writing.
- Style is Apple inspired: big type, lots of white space, very few words, one idea per section.

## Palette and type

| Name | Hex | Use |
| --- | --- | --- |
| Deep Endo Teal | #123C3A | Primary |
| Electric Lime | #C7F36B | Accents and buttons only. Never small text on light backgrounds. |
| Warm Ivory | #F5F3EA | Background |
| Graphite | #252B2B | Body text |
| Sage Mist | #B8C9BD | Secondary |

Fonts: Sora for headings, Inter for body. Colors are defined as variables at the top of `styles.css`.

## Site

- Plain HTML, CSS, and JS. No framework, package.json, or build step.
- Deploys on Vercel from `main`.
- Contact form messages go to Formspree (form action in `index.html`).
- Pages:
  - `index.html` (home), in this order only: hero (H1 "Find the AI worth doing.", the "I run a [industry] business." dropdown with three ideas that change per industry, the note "Examples of common AI uses. Your workshop finds yours.", and the button "Find yours in an online workshop"), "Here's how it works." (three tiles), "What you walk away with." (a sample AI Plan for a fictional manufacturer, labeled Sample), and "Book a workshop." (`#book`). It carries the Organization JSON-LD. The industry ideas live in `script.js`; the Manufacturing ideas are also in the HTML for no script visitors.
  - `partners.html`: H1 "Give your members an AI edge.", the briefing paragraph, three tiles, and the form with briefing preselected and the submit button "Host a briefing".
  - `faq.html`: H1 "Questions and answers." with every FAQ, including who is behind Going Endo (with the founder photo), what the name means, and where it is available. It carries the FAQPage JSON-LD.
- Nav on every page: How it works, For partners, FAQ, and a "Book a workshop" button. Footer: For partners, FAQ, Privacy Policy, and the copyright line.
- Keep the visible FAQ on `faq.html` and its FAQPage JSON-LD in sync, word for word.
- `llms.txt` summarizes the site for AI assistants. Update it when the offer changes.
- Every new page must include the Google tag G-PE0M7C7KN4 right after <head>.
- New pages reuse the same header, footer, and styles.css as index.html, and get added to sitemap.xml.
- Keep privacy.html accurate when adding any new service, form, or tracking.
- Never show an email address on the site, in the JSON-LD, or in llms.txt. All contact goes through the forms (`index.html#book` and `partners.html`).
- Stripe keys (`STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`) live only in Vercel environment variables. Never put a key or price ID in any file.
- `/pay` (rewritten to `api/checkout.js` in `vercel.json`) is a private checkout link sent only to confirmed clients. Never link it from the site, and keep `/pay` and `paid.html` out of the nav and `sitemap.xml`. `paid.html` stays `noindex`. Every "Book a workshop" button points to the form at `index.html#book`.
