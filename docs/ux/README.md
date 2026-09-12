# UX screens

Reference frames for the www craft-bar home. Tokens stay on daup-theme (cream / ink / terracotta / forest, DM Sans / Fraunces). Hierarchy is the work, not a new palette.

| File | Viewport | What to read |
| --- | --- | --- |
| `home-desktop.png` | 1440×900 | Only header **Log in** is terracotta primary. Live **Open.** and Owner **Open your hub** are forest outline. Footer hub is quiet. Phone is small. Live now sits immediately under a tight hero. |
| `home-mobile.png` | 390×844 | Header is one row (~56px). Hero cream is tight so Live now is immediate. Live cards are dense (inline Open., not tall slabs). |
| `home-desktop-known.png` | 1440×900 | Same as desktop with `?known=1` — Your places lists The Olive / The Olive · Floor. |
| `home-mobile-known.png` | 390×844 | Same as mobile with `?known=1`. |

Capture after `npm run dev` or `npm run preview`:

```bash
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=1440,900 --virtual-time-budget=8000 \
  --screenshot=docs/ux/home-desktop.png http://127.0.0.1:4173/

google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=390,844 --virtual-time-budget=8000 \
  --screenshot=docs/ux/home-mobile.png http://127.0.0.1:4173/
```
