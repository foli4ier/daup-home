# daup-www

Public marketing site for **daup.co.za** — food, from the people who grow it to the people who plate it.

This GitHub repository is the source for **Cloudflare Workers Builds**. The worker serves the Vite dist/ folder as static assets (wrangler.json). Builds run on Cloudflare; do not commit node_modules.

Visual tokens live in [`daup-theme`](https://github.com/foli4ier/daup-theme) (`import "daup-theme/tokens.css"`). Do not redesign here.

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
- /apps/hub
- /docs
- /docs/*

The build writes an `index.html` under each of those directories in `dist/` so the edge serves a real file, not a Flutter rewrite. `wrangler.json` also sets `not_found_handling: single-page-application` as a fallback.

Attach the apex `daup.co.za` only when this site is ready to replace the Flutter PWA. That cutover is a dashboard change, not a redirect on this repo.

## What this site is (and is not)

- daup.co.za / www — public marketing, /apps, /docs, /invite
- app.daup.co.za — owner hub (separate, secure). Log in happens there.
- eatery.daup.co.za — live eatery floor app

Log in, Start with your eatery, Open your hub, and Profile leave this origin and open https://app.daup.co.za/ (hub home, full navigation, never an iframe, no query paths, never auto-launch the eatery).

Open eatery goes to https://eatery.daup.co.za/.

Staff do not log in here. "I have a staff invite" stays on this host at /invite. The WhatsApp the owner sent is their login. Do not send staff to the hub as a new node.

This site has no cookies, no /login, no /profile, and no vault. Public names are **Eatery** and **Your hub** only.

## Routes

- / — homepage (#how-it-works)
- /apps — live apps (Eatery, Your hub) plus coming chips
- /apps/eatery
- /apps/hub — owner hub, plain language (never titled Edge Hub)
- /docs — shift-style walkthroughs
- /docs/eatery/tuesday-lunch
- /docs/hub/set-up-eatery
- /invite — the only staff-invite URL
- /docs/staff-invite — client redirect to /invite

## Local

Install dependencies, then run the Vite dev server or the production build (writes dist/).

## Deploy

Cloudflare Workers Builds: connect this repo, production branch main. wrangler.json points assets at ./dist with not_found_handling: single-page-application so unmatched paths still load the SPA.
