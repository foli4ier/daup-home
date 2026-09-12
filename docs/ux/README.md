# UX screens

Reference frames for the www craft-bar home. Tokens stay on daup-theme (cream / ink / terracotta / forest, DM Sans / Fraunces). Hierarchy is the work, not a new palette.

| File | Viewport | What to read |
| --- | --- | --- |
| `home-desktop.png` | 1440×900 | One Log in in the bar. Phone is small. Live now is raised (peach band), dense Open. actions. Your places empty. Coming Notify me. Owner / Staff door. |
| `home-mobile.png` | 390×844 | Header is one row (~56px). Live now enters the first viewport. |

Capture after `npm run dev` or `npm run preview`:

```bash
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=1440,900 --virtual-time-budget=8000 \
  --screenshot=docs/ux/home-desktop.png http://127.0.0.1:4173/

google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=390,844 --virtual-time-budget=8000 \
  --screenshot=docs/ux/home-mobile.png http://127.0.0.1:4173/
```
