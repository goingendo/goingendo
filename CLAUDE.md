# Going Endo

Positioning: Going Endo works with businesses and industry partners to apply emerging technologies to meaningful challenges and strengthen the industries they depend on. The name means "going within": working inside companies and industries rather than apart from them. Everything on the site supports this.

What we do (the four activities):
1. Identify challenges: find problems worth solving across an industry.
2. Bring people together: connect businesses with technology experts, researchers, and regional partners.
3. Apply technology: develop and test practical solutions.
4. Measure results: evaluate business performance and broader economic value.

What we are not (the four trade offs):
- Not a technology news website.
- Not a generic AI training company.
- Not a conference business built on one time events.
- Not a broad consultancy claiming to solve every problem.

The site is in prelaunch and has one action: Discuss a challenge (the form at `#contact`).

## Writing rules (always)

Apply to all visible text on the site.

- No hyphens or dashes (-, –, —) in sentences
- No commas in headings
- No small label lines above headlines

## Brand voice

- Smart but approachable, ambitious but grounded, optimistic but evidence led, clear and direct
- Prefer: explore, understand, connect, experiment, build, solve
- Avoid hype: disruption, revolutionary, exponential, world changing
- Never imply affiliation with Singularity University or any other institution
- Never invent stats, partners, or outcomes. Use "to be announced" when details are unknown.
- Never list partners, advisors, projects, or results until they are confirmed in writing.
- Never use the phrase "shared value".
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
