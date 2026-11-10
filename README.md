# launcheduconsulting.com

Website for Launch Educational Consulting, built with Next.js and hosted on Vercel.

## Common edits

- **Links, email, Calendly, headshot, testimonials switch:** `lib/site.js`
- **Section text (who it's for, services, about, venture coaching):** `components/Sections.jsx`
- **Homepage hero:** `app/page.jsx`
- **Colors and fonts:** `app/globals.css`
- **Headshot:** add your photo to `public/` (e.g. `public/james-rizzo.jpg`) and set `headshot: "/james-rizzo.jpg"` in `lib/site.js`
- **Testimonials and outcomes:** fill in `testimonials` and `outcomes` in `components/Sections.jsx`, then set `showOutcomes: true` in `lib/site.js`

Every push to the `main` branch redeploys the site on Vercel automatically.

## Run locally

```
npm install
npm run dev
```
