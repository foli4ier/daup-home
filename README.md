# daup-www

Public marketing site for **daup.co.za** — food, from the people who grow it to the people who plate it.

This GitHub repository is the source for **Cloudflare Workers Builds**. The worker serves the Vite dist/ folder as static assets (wrangler.json). Builds run on Cloudflare; do not commit node_modules.

## Custom domains

In the Cloudflare dashboard, attach:

- daup.co.za (apex)
- www.daup.co.za

Attaching the apex cuts over from the current Flutter PWA on Netlify. Do that only when this site is ready to be the public homepage.

## What this site is (and is not)

- daup.co.za — public marketing, /apps, /docs, /invite
- app.daup.co.za — owner hub (separate, secure). Log in happens there.
- eatery.daup.co.za — live eatery floor app

Log in, Start with your eatery, Open your hub, and Profile leave this origin and open https://app.daup.co.za/ (hub home, full navigation, never an iframe, no query paths, never auto-launch the eatery).

Open eatery goes to https://eatery.daup.co.za/.

Staff do not log in here. "I have a staff invite" stays on this host at /invite. The WhatsApp the owner sent is their login. Do not send staff to the hub as a new node.

This site has no cookies, no /login, no /profile, and no vault.

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

Cloudflare Workers Builds: connect this repo, production branch main. wrangler.json points assets at ./dist with not_found_handling: single-page-application so client routes work on the edge.
