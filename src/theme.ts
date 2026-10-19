// Light is the default. Dark is opt-in and persisted. We also honour the OS
// preference on first visit when the user has not chosen yet.

export type Theme = "light" | "dark";

const KEY = "daup-theme";

export function readTheme(): Theme {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* localStorage unavailable — fall through to default */
  }
  return "light";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* ignore persistence failure */
  }
  applyTheme(theme);
}

// Call once at boot, before React renders, to avoid a flash of the wrong theme.
export function initTheme() {
  applyTheme(readTheme());
}
