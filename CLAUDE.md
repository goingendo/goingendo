# Going Endo

Positioning: Find the AI worth doing. Going Endo helps leadership teams choose the AI use case that pays off twice: for the business, and for the customers, workers, and suppliers it depends on. The name means "going within": we go inside your company and your industry. Everything on the site supports this.

How it works: Learn, Choose, Plan. Two ways in: the Going Endo AI Briefing (associations, chambers, and innovation agencies) and the Going Endo AI Use Case Workshop (leadership teams). Markets: United States, United Arab Emirates, Singapore, United Kingdom, Switzerland. Based in Salt Lake City, delivered online.

The site is in prelaunch and has one action: Discuss a challenge (the form at `#contact`).

## Writing rules (always)

Apply to all visible text on the site.

- No hyphens or dashes (-, –, —) in sentences
- No commas in headings
- No small label lines above headlines
- Never say "shared value"
- Never mention Singularity University or PwC
- No prices, dates, or timelines
- Never invent clients, partners, or results
- Going Endo does not build or sell technology

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
- Keep the FAQ and FAQPage JSON-LD in sync.
- `llms.txt` summarizes the site for AI assistants. Update it when the offer changes.
- Every new page must include the Google tag G-PE0M7C7KN4 right after <head>.
- New pages reuse the same header, footer, and styles.css as index.html, and get added to sitemap.xml.
- Keep privacy.html accurate when adding any new service, form, or tracking.
- Contact: hello@goingendo.com
