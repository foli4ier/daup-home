export const HUB = "https://apps.daup.co.za";
export const EATERY = "https://eatery.daup.co.za/";

export type Step = {
  title: string;
  body: string;
  phone?: "floor" | "tiles";
};

export type Walkthrough = {
  slug: string;
  path: string;
  kicker: string;
  title: string;
  sub: string;
  steps: Step[];
};

export const walkthroughs: Walkthrough[] = [
  {
    slug: "tuesday-lunch",
    path: "/docs/eatery/tuesday-lunch",
    kicker: "DOCS • EATERY",
    title: "Tuesday lunch service",
    sub: "Six steps. Same as a real shift.",
    steps: [
      {
        title: "Open the floor",
        body: "Your tables, tickets, and kitchen live here. Same phone, whole shift.",
        phone: "floor",
      },
      {
        title: "Seat a table",
        body: "Two-top at the window. Seat them. That table is yours until they pay.",
      },
      {
        title: "Fire tickets",
        body: "They order. Fire the ticket. Kitchen sees it the moment you send it.",
      },
      {
        title: "Kitchen",
        body: "Pass, plate, pass. When it is ready, the floor knows — no shouting down the line.",
      },
      {
        title: "86 a dish",
        body: "Fish is gone. 86 it. The floor stops selling it. The ticket does not lie.",
      },
      {
        title: "Close",
        body: "Last table paid. Close the shift. Tips sit on the floor phone.",
      },
    ],
  },
  {
    slug: "set-up-eatery",
    path: "/docs/hub/set-up-eatery",
    kicker: "DOCS • HUB",
    title: "Set up Eatery",
    sub: "Six steps. Same as a real shift.",
    steps: [
      {
        title: "Open your hub",
        body: "Your business lives in your hub. Start there — not on this public website.",
      },
      {
        title: "Start with Eatery",
        body: "Eatery first. Farm, reseller, and maker are next.",
      },
      {
        title: "Name the place",
        body: "The Olive, your name, your town. This is the room you will run tonight.",
      },
      {
        title: "Invite tonight’s floor",
        body: "Staff join with a WhatsApp tap. You send it from the hub. They never sign up here.",
      },
      {
        title: "Open Eatery",
        body: "Floor phones open Eatery. Tables, tickets, kitchen, stock.",
      },
      {
        title: "Run the first shift",
        body: "Tuesday lunch. Seat, fire, 86, close. Same as a real service.",
      },
    ],
  },
];

export const starters = [
  {
    title: "Tuesday lunch service",
    to: "/docs/eatery/tuesday-lunch",
    kind: "fork" as const,
  },
  {
    title: "Invite tonight’s floor",
    to: "/docs/hub/set-up-eatery",
    kind: "people" as const,
  },
  {
    title: "Set up Eatery",
    to: "/docs/hub/set-up-eatery",
    kind: "shop" as const,
  },
];

export const comingApps = [
  { id: "farm", name: "Farm", blurb: "Grow and send." },
  { id: "reseller", name: "Reseller", blurb: "Move the book." },
  { id: "maker", name: "Maker", blurb: "Make and plate-ready." },
] as const;

export type Place = {
  name: string;
  role: "Owner" | "Staff";
  href: string;
};

export const demoPlaces: Place[] = [
  { name: "The Olive", role: "Owner", href: HUB },
  { name: "The Olive · Floor", role: "Staff", href: EATERY },
];

export type TrustTab = {
  id: string;
  label: string;
  paragraphs: string[];
};

export const trustTabs: TrustTab[] = [
  {
    id: "sovereignty",
    label: "Sovereignty",
    paragraphs: [
      "Your household’s information lives with you. You decide who sees the shopping list, the invoices, the family files. We don’t sit in the middle as the owner of your life’s paperwork.",
      "Think of it like a filing cabinet in your own kitchen — shared with the people you choose, not parked on someone else’s shelf.",
    ],
  },
  {
    id: "p2p",
    label: "How P2P keeps it that way",
    paragraphs: [
      "Devices in your circle talk to each other directly when they can. That means less of your everyday detail has to pass through a company server just to get from your phone to your laptop.",
      "When a middleman isn’t needed, we leave them out. Simpler path. Fewer copies of your stuff floating about.",
    ],
  },
  {
    id: "never",
    label: "What we never do",
    paragraphs: [
      "We never sell your household data. We never use your private notes to train ads. We never lock your files behind a surprise paywall after you’ve put your life in.",
      "If we can’t explain a practice in plain English at the kitchen table, we don’t do it.",
    ],
  },
];

export type AppStillRow = { text: string; meta: string };

export type AppTab = {
  id: string;
  label: string;
  letter: string;
  color: string;
  stillLabel: string;
  body: string;
  rows: AppStillRow[];
  chart?: { height: number; on?: boolean }[];
};

export const appTabs: AppTab[] = [
  {
    id: "eatery",
    label: "Eatery",
    letter: "E",
    color: "#C45C26",
    stillLabel: "Eatery · Floor",
    body: "Tables, tickets, kitchen, and stock — seat a table, fire a ticket, close the shift.",
    rows: [
      { text: "Window two-top", meta: "Seated" },
      { text: "Ticket 14", meta: "Kitchen" },
      { text: "Fish", meta: "86" },
    ],
  },
  {
    id: "eat-in",
    label: "Eat In",
    letter: "I",
    color: "#5C4033",
    stillLabel: "Eat In · Tonight",
    body: "What’s for dinner, what’s in the fridge, and who still needs to pick up milk — without a group chat spiral.",
    rows: [
      { text: "Roast chicken & salad", meta: "Main" },
      { text: "Milk, tomatoes, bread", meta: "List · 3" },
      { text: "Leftovers: soup", meta: "Fridge" },
    ],
  },
  {
    id: "eat-out",
    label: "Eat Out",
    letter: "O",
    color: "#2F4A3C",
    stillLabel: "Eat Out · Tonight",
    body: "Reserve a table and pre-book a meal before you leave the house.",
    rows: [
      { text: "Table for two", meta: "Reserved" },
      { text: "Roast chicken", meta: "Pre-booked" },
      { text: "Saturday dinner", meta: "Table" },
    ],
  },
  {
    id: "vault",
    label: "Vault",
    letter: "V",
    color: "#2F4A3C",
    stillLabel: "Vault · Recent",
    body: "Contracts, IDs, school letters — filed where the family can find them, not lost in email.",
    rows: [
      { text: "Home insurance.pdf", meta: "Shared" },
      { text: "School fees · Term 3", meta: "Private" },
      { text: "ID copies", meta: "Folder" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    letter: "F",
    color: "#8B6914",
    stillLabel: "Finance · October",
    body: "What came in, what went out, what’s due — so the month doesn’t sneak up on you.",
    chart: [
      { height: 40 },
      { height: 72, on: true },
      { height: 55 },
      { height: 88 },
      { height: 48 },
      { height: 62 },
    ],
    rows: [{ text: "Groceries", meta: "R 2\u202f840" }],
  },
  {
    id: "trade",
    label: "Trade",
    letter: "T",
    color: "#4A5568",
    stillLabel: "Trade · Near you",
    body: "Buy, sell, and swap locally — with people you trust, not a feed of strangers.",
    rows: [
      { text: "Used desk · Parkhurst", meta: "R 900" },
      { text: "Garden tools · loan", meta: "Neighbour" },
      { text: "Homemade bread", meta: "Sat" },
    ],
  },
  {
    id: "project",
    label: "Project",
    letter: "P",
    color: "#5C4033",
    stillLabel: "Project · Kitchen reno",
    body: "The renovation, the side hustle, the school fair — a clear next step, not another inbox.",
    rows: [
      { text: "Quote from Jo", meta: "Done" },
      { text: "Choose tiles", meta: "This week" },
      { text: "Book plumber", meta: "Next" },
    ],
  },
  {
    id: "chat",
    label: "Chat",
    letter: "C",
    color: "#3D5C4B",
    stillLabel: "Chat · Household",
    body: "House chat that stays in the house — not mixed into every other app on your phone.",
    rows: [
      { text: "Can you grab bread?", meta: "Sam · 18:02" },
      { text: "Already on the list.", meta: "You · 18:04" },
      { text: "Dinner at seven.", meta: "Sam · 17:40" },
    ],
  },
];

export const legalPages = {
  privacy: {
    title: "Privacy",
    paragraphs: [
      "This website does not take your email, your number, or your address. It explains DAUP and shows you the door to the Hub.",
      "Your household’s information lives with you. We never sell it. We never use your private notes to train ads. We never lock your files behind a surprise paywall after you’ve put your life in.",
      "Registration — email, WhatsApp, and where you are — starts in the Hub, not here.",
    ],
  },
  terms: {
    title: "Terms",
    paragraphs: [
      "www.daup.co.za is here to explain the platform. You don’t make an account on this page.",
      "Open Hub. goes to the Hub. Each app — Eatery, Eat In, Eat Out, Vault, Finance, Trade, Project, and Chat — is opened from the Hub.",
      "If we can’t explain a practice in plain English at the kitchen table, we don’t do it.",
    ],
  },
  popia: {
    title: "POPIA",
    paragraphs: [
      "DAUP is built for South African homes and businesses. You decide who sees the shopping list, the invoices, the family files.",
      "We don’t sit in the middle as the owner of your life’s paperwork. Think of it like a filing cabinet in your own kitchen — shared with the people you choose.",
    ],
  },
} as const;

/* ── Data-sovereignty homepage content ─────────────────────────── */

export type SovereignNode = {
  where: string;
  title: string;
  holds: string;
  data?: boolean;
};

export const sovereignNodes: SovereignNode[] = [
  {
    where: "Inside your environment",
    title: "Node · “seed”",
    holds:
      "Holds all data. Local database, issues sessions, stores membership. The signing secret lives here and nowhere else.",
    data: true,
  },
  {
    where: "Served from CDN",
    title: "Apps",
    holds:
      "Static bundles. Pure clients — hold no data. Read & write against your node.",
  },
  {
    where: "Served from CDN",
    title: "Hub · front door",
    holds: "Lists a place's apps and opens them. Pure client — holds no data.",
  },
];

export type SovereignApp = {
  name: string;
  blurb: string;
  icon: string;
  live?: boolean;
};

export type SovereignTier = {
  label: string;
  tag: string;
  tagClass: string;
  note: string;
  apps: SovereignApp[];
};

export const appTiers: SovereignTier[] = [
  {
    label: "Social",
    tag: "for people",
    tagClass: "tag-social",
    note: "everyday life & connection",
    apps: [
      { name: "Eat In", blurb: "Order and eat at home.", icon: "🍽️" },
      { name: "Eat Out", blurb: "Dining and takeaway, out and about.", icon: "🥡" },
      { name: "Chat", blurb: "Messaging between people and places.", icon: "💬" },
      { name: "Call Out", blurb: "Reach a person or a service directly.", icon: "📞" },
    ],
  },
  {
    label: "SME",
    tag: "for small business",
    tagClass: "tag-sme",
    note: "run the place you own",
    apps: [
      { name: "Eatery", blurb: "Run a restaurant or food place.", icon: "🍴" },
      { name: "Reseller", blurb: "Sell and resell to your customers.", icon: "🛍️" },
      { name: "Maker", blurb: "Make and sell what you produce.", icon: "🔨" },
      { name: "Farms", blurb: "Farm produce from gate to buyer.", icon: "🌾" },
      { name: "Workshops", blurb: "Services, jobs and bookings.", icon: "🧰" },
    ],
  },
  {
    label: "Enterprise",
    tag: "for organisations",
    tagClass: "tag-ent",
    note: "members-only, on the org's own node",
    apps: [
      {
        name: "duidelik",
        blurb:
          "The single source of truth for every data product, clear through its whole lifecycle.",
        icon: "📐",
        live: true,
      },
    ],
  },
  {
    label: "Reached from inside the apps",
    tag: "in-app",
    tagClass: "tag-sub",
    note: "capabilities apps open for you",
    apps: [
      { name: "Projects", blurb: "Plan and track work across an app.", icon: "🗂️" },
      { name: "Finance", blurb: "Money, invoicing and settlement.", icon: "💰" },
      { name: "Vault", blurb: "Secure store for keys and credentials.", icon: "🔐" },
    ],
  },
];

export type TrustPoint = { title: string; body: string };

export const trustPoints: TrustPoint[] = [
  {
    title: "Your node is independent",
    body: "It runs on your own infrastructure with its own database and its own signing secret. It boots and serves with every other node offline — not a client of, and not dependent on, any external node.",
  },
  {
    title: "No node-to-node connection",
    body: "Nodes don't talk to each other. There's no sync protocol and no server-to-server trust. The only thing two nodes share is the public CDN app bundle — static files, no data path. Any future cross-node capability is opt-in and returns through review first.",
  },
  {
    title: "Data containment",
    body: "Your data is written only to your node's database and never persisted to any external node. Members-only apps are refused on the wrong node by policy, so data can't be created in the wrong place.",
  },
  {
    title: "You control identity",
    body: "A node admits only an operator-maintained roster; an identity not on it is refused entry — fail-closed, not “let in with low privilege.” Access is governed by the node you control, not an external service.",
  },
];

export type HonestItem = { lead: string; rest: string };

export const honestItems: HonestItem[] = [
  {
    lead: "Identity verification is interim.",
    rest: "Until a production OTP/SSO provider is wired, membership is enforced by an explicit allow-list (peer/phone), not verified corporate SSO. Verified SSO/OIDC is the committed next step, not a shipped feature.",
  },
  {
    lead: "Containment is being enforced in code now,",
    rest: "not yet a battle-tested deployment. The current build persists client-side; server-side per-node persistence that fully realises containment is the active next build.",
  },
  {
    lead: "“Your node” means a managed server/VM",
    rest: "— not a personal laptop. A developer laptop has been used for development only; it is not the production posture.",
  },
];
