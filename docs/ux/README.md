# UX screens

Change set 2 puts the offer in the hero. Tokens stay on daup-theme (cream / ink / terracotta / forest, DM Sans / Fraunces).

A stranger should read what we sell, the price, and the next step from the first screen. The Change set 2 before frames are the Change set 1 home: price and **Book a walkthrough.** sat under the hero, and the phone was a CSS mock.

| File | Viewport | What to read |
| --- | --- | --- |
| `before-cs2-home-desktop-atf.png` | 1440×900 | Change set 1. Plain H1 and **Start with email.** Price and Book sit in the strip below. CSS phone. |
| `before-cs2-home-mobile-atf.png` | 390×844 | Same gap. The first screen is the hero CTA; the offer is not in the hero band. |
| `before-cs2-trust-desktop.png` | trust strip | CSS phone labeled Demo, **R199 a place.**, **Book a walkthrough.**, caption-only company line. |
| `before-cs2-trust-mobile.png` | trust strip | Same strip, stacked. |
| `after-cs2-home-desktop-atf.png` | 1440×900 | Hero cluster: terracotta **Start with email.**, outline **Book a walkthrough.**, **R199 a place.** chip. DAUP · South Africa and the WhatsApp number. Sample floor still in the same band. |
| `after-cs2-home-mobile-atf.png` | 390×844 | H1, lede, primary, price chip, and Book are on screen with no scroll. The sample floor starts in that first screen. |
| `after-cs2-mobile-cta-price.png` | 390×844 | Same first screen, named for the above-the-fold CTA and price check. |
| `after-cs2-proof-desktop.png` | proof | Sample Eatery floor still. Not a live customer room. |
| `after-cs2-proof-mobile.png` | proof | Same still on a phone. |
| `home-desktop.png` | 1440×900 | Current desktop ATF. Same frame as `after-cs2-home-desktop-atf.png`. |
| `home-mobile.png` | 390×844 | Current mobile ATF. Same frame as `after-cs2-home-mobile-atf.png`. |

The floor still is `public/proof/eatery-floor-sample.png`, captured from the live Eatery floor preview (Kortrijk). It is labeled **Sample**.

Header **Log in.** is an ink outline. The terracotta button is **Start with email.** and it opens https://app.daup.co.za/. **Book a walkthrough.** and the WhatsApp line open https://wa.me/27829261373. **Open your hub.** on the hub card is a forest outline. The home Eatery card has no Open. Staff invite stays in the header drawer and the footer.

Change set 1 frames (`before-home-*`, `after-home-*`, `after-trust-strip-*`, `after-mobile-cta-above-fold.png`, `home-desktop-known.png`, `home-mobile-known.png`) stay in this folder as the earlier clarity pass.

Capture after `npm run dev`:

```bash
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=1440,900 --virtual-time-budget=8000 \
  --screenshot=docs/ux/after-cs2-home-desktop-atf.png http://127.0.0.1:5173/

google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=390,844 --virtual-time-budget=8000 \
  --screenshot=docs/ux/after-cs2-home-mobile-atf.png http://127.0.0.1:5173/
```
