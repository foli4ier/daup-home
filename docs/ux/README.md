# UX screens

Direction A is the current homepage. Cream, terracotta, and forest stay on daup-theme. Fraunces and DM Sans stay. www educates and sends people to the Hub. There is no signup form on this site.

The hero phone and the app panels are CSS stills drawn to the Direction A comp. They are not captures of the live Hub. The older Eatery floor sample remains at `public/proof/eatery-floor-sample.png` and is not used on the homepage.

| File | Viewport | What to read |
| --- | --- | --- |
| `direction-a-desktop-hero.png` | 1440×900 | Header, H1 “Your house runs on one platform.”, terracotta **Open Hub.**, quiet **Book a walkthrough.**, one phone still. |
| `direction-a-mobile-hero.png` | 390×844 | Same hero, stacked. **Open Hub.** and the menu stay in the header. The phone starts on the first screen. |
| `direction-a-desktop-trust.png` | trust section | “Your data stays yours.” Sovereignty is selected. Kitchen English. No wallet or DID jargon. |
| `direction-a-mobile-trust.png` | trust section | Same tabs, wrapped. Header stays with the section. |
| `direction-a-desktop-apps.png` | apps section | Eatery selected. One panel: copy and a still. |
| `direction-a-mobile-apps.png` | apps section | Tabs wrap. The Eatery panel stacks under the copy. |
| `direction-a-desktop-hub-cta.png` | hub band | “Ready when you are.” and **Open Hub.** |
| `direction-a-mobile-hub-cta.png` | hub band | Same band on a phone width. |

Change set 2 frames stay in this folder as the previous homepage (price chip, **Start with email.**, sample floor). They are not the current page.

Capture after `npm run dev` at http://127.0.0.1:5173/ :

```bash
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=1440,900 --virtual-time-budget=8000 \
  --screenshot=docs/ux/direction-a-desktop-hero.png http://127.0.0.1:5173/

google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=390,844 --virtual-time-budget=8000 \
  --screenshot=docs/ux/direction-a-mobile-hero.png http://127.0.0.1:5173/
```
