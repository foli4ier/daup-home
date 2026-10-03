# daup-www

Public marketing site for **www.daup.co.za**. Direction A: educate and send people to the Hub. Registration (email, WhatsApp, location) lives on the Hub. This site has no signup form.

This GitHub repository is the source for **Cloudflare Workers Builds**. The worker serves the Vite dist/ folder as static assets (wrangler.json). Builds run on Cloudflare; do not commit node_modules.

Visual tokens live in [`daup-theme`](https://github.com/foli4ier/daup-theme) (`import "daup-theme/tokens.css"`). Palette and type stay locked: cream / ink / terracotta / forest, DM Sans + Fraunces.

Homepage spine: hero (“Your house runs on one platform.”), big picture, trust tabs, eight app tabs, Hub CTA band, footer. One terracotta **Open Hub.** and header **Log in.** go to https://app.daup.co.za. There is no public walkthrough and no public WhatsApp number on this site. No price chip and no “Live now” row in the hero. The phone in the hero is a CSS still of the Hub (placeholder framing from the Direction A comp — not a capture of the live Hub). Eatery, Eat In, and Eat Out are three apps. Eatery is the floor: tables, tickets, kitchen, stock, at eatery.daup.co.za. Eat In is dinner and the fridge. Eat Out is reserve a table and pre-book a meal.

Desktop and mobile soft-sign stills live in [`docs/ux`](docs/ux).

## How daup.co.za becomes this look

The look Frans wants **is daup-www**. Connecting this Workers site to **daup.co.za** is how the public site becomes cream, terracotta, forest, Fraunces + DM Sans — not the Flutter neon console.

Do **not** port the Flutter marketplace or wallet onto this repo. Do **not** rebuild Flutter. Apex cutover is a Cloudflare custom-domain attach of **this** project, not a theme skin of the Netlify PWA.

## Custom domains

Attach **www.daup.co.za first**. Today the apex `daup.co.za` is still the Flutter PWA on Netlify, which is a SPA catch-all — it will swallow `/invite`, `/apps`, and `/docs` if you cut the apex over too soon.

www must own real path routing for:

- /
- /invite
- /apps
- /apps/eatery
- /apps/eat-in
- /apps/eat-out
- /apps/hub
- /docs
- /docs/*
- /privacy
- /terms
- /popia

The build writes an `index.html` under each of those directories in `dist/` so the edge serves a real file, not a Flutter rewrite. `wrangler.json` also sets `not_found_handling: single-page-application` as a fallback.

Attach the apex `daup.co.za` only when this site is ready to replace the Flutter PWA. That cutover is a dashboard change, not a redirect on this repo.

## What this site is (and is not)

- www.daup.co.za — public marketing. Educate, then **Open Hub.**
- app.daup.co.za — the Hub. Log in and registration happen there.
- eatery.daup.co.za — Eatery, the floor app, linked from the /apps pages, not from the homepage hero

**Open Hub.** and **Log in.** leave this origin and open https://app.daup.co.za (never an iframe, no query paths). There is no email field, WhatsApp field, or location field on this site. There is no public walkthrough control and no public WhatsApp number.

Staff invites still resolve at /invite for people who already have an invite. The homepage does not ask anyone to register.

This site has no cookies and no /login. The older /apps page still has **Notify me.** as a local stub (`localStorage.daup.notify`). It does not write a cookie and it is not on the homepage.

## Routes

- / — Direction A homepage: hero, big picture (#platform), trust tabs (#trust), eight app tabs (#apps), Hub CTA (#hub). The apps line counts the panels on the page: “Eight tools. One kitchen table.”
- /privacy, /terms, /popia — short kitchen-English legal notes. No forms.
- /apps — apps index (Eatery, Eat In, Eat Out, Your hub). Farm, reseller, and maker stay under Coming.
- /apps/eatery
- /apps/eat-in
- /apps/eat-out
- /apps/hub
- /docs — shift-style walkthroughs
- /docs/eatery/tuesday-lunch
- /docs/hub/set-up-eatery
- /invite — staff-invite URL kept for existing links
- /docs/staff-invite — client redirect to /invite

## Local

Install dependencies, then run the Vite dev server or the production build (writes dist/).

## Deploy

Cloudflare Workers Builds: connect this repo, production branch main. wrangler.json points assets at ./dist with not_found_handling: single-page-application so unmatched paths still load the SPA.
