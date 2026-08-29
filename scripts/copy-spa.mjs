import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SPA_PATHS = [
  "invite",
  "apps",
  "apps/eatery",
  "apps/hub",
  "docs",
  "docs/eatery/tuesday-lunch",
  "docs/hub/set-up-eatery",
  "docs/staff-invite",
];

const dist = join(process.cwd(), "dist");
const html = readFileSync(join(dist, "index.html"), "utf8");
for (const route of SPA_PATHS) {
  const target = join(dist, route, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}
