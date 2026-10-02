# UX screens

Change set 1 clarity frames for the www home. Tokens stay on daup-theme (cream / ink / terracotta / forest, DM Sans / Fraunces).

A stranger should read what we sell and the next step from the first screen. The before frames are the live fail state (poetic headline, no hero button, Eatery and Hub both saying Open.).

| File | Viewport | What to read |
| --- | --- | --- |
| `before-home-desktop-atf.png` | 1440×900 | Fail state. Poetic H1. No hero CTA. Eatery Open. sits level with Hub Open. |
| `before-home-mobile-atf.png` | 390×844 | Same fail state. The first screen has no owner CTA in the hero. |
| `after-home-desktop-atf.png` | 1440×900 | Plain H1, one terracotta **Start with email.** Trust strip under the hero: labeled demo, **R199 a place.**, **Book a walkthrough.** Hub card follows. Eatery is below this frame. |
| `after-home-mobile-atf.png` | 390×844 | Same hero. **Start with email.** is fully on screen with no scroll. Demo, price, and **Book a walkthrough.** fit in that first screen. |
| `after-mobile-cta-above-fold.png` | 390×844 | Same first screen as the mobile ATF, named for the above-the-fold CTA check. |
| `after-trust-strip-desktop.png` | trust strip | Demo phone, **R199 a place.**, **Book a walkthrough.**, DAUP · South Africa. |
| `after-trust-strip-mobile.png` | trust strip | Same strip, stacked. |
| `home-desktop.png` | 1440×900 | Current desktop ATF. Same frame as `after-home-desktop-atf.png`. |
| `home-mobile.png` | 390×844 | Current mobile ATF. Same frame as `after-home-mobile-atf.png`. |
| `home-desktop-known.png` | 1440×900, scrolled | `?known=1`. Your places lists The Olive and The Olive · Floor. |
| `home-mobile-known.png` | 390×844, scrolled | Same known places on a phone. |

Header **Log in.** is an ink outline. The terracotta button is **Start with email.** and it opens https://app.daup.co.za/. **Open your hub.** on the hub card is a forest outline. The home Eatery card has no Open. Staff invite stays in the header drawer and the footer.

Capture after `npm run dev`:

```bash
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=1440,900 --virtual-time-budget=8000 \
  --screenshot=docs/ux/after-home-desktop-atf.png http://127.0.0.1:5173/

google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=390,844 --virtual-time-budget=8000 \
  --screenshot=docs/ux/after-home-mobile-atf.png http://127.0.0.1:5173/
```
