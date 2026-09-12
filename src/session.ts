import { demoPlaces, type Place } from "./content";

const PLACES_KEY = "daup.places";
const NOTIFY_KEY = "daup.notify";

export function readKnownPlaces(): Place[] | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("known") === "1") return demoPlaces;
    const raw = window.localStorage.getItem(PLACES_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Place[];
    if (!Array.isArray(parsed) || parsed.length === 0) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readNotifyIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(NOTIFY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function toggleNotify(id: string): string[] {
  const next = new Set(readNotifyIds());
  if (next.has(id)) next.delete(id);
  else next.add(id);
  const list = [...next];
  window.localStorage.setItem(NOTIFY_KEY, JSON.stringify(list));
  return list;
}
