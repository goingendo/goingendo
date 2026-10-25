# Going Endo

Purpose: Going Endo brings emerging technology education into a company and helps its team test one real idea on a real problem. The name means "going within": we work inside your company instead of sending leaders away to a conference. Everything on the site supports this.

The site is in prelaunch and has one action: Request an early briefing (the form at `#briefing`).

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
- Briefing requests go to Formspree (form action in `index.html`).
- Keep the FAQ and FAQPage JSON-LD in sync.
- `llms.txt` summarizes the site for AI assistants. Update it when the offer changes.
- Every new page must include the Google tag G-PE0M7C7KN4 right after <head>.
- New pages reuse the same header, footer, and styles.css as index.html, and get added to sitemap.xml.
- Keep privacy.html accurate when adding any new service, form, or tracking.
- Contact: hello@goingendo.com
