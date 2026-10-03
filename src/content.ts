export const HUB = "https://app.daup.co.za";
export const EATERY = "https://eatery.daup.co.za/";
export const WHATSAPP_DISPLAY = "+27 82 926 1373";
export const WHATSAPP = "https://wa.me/27829261373";

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
    title: "Set up your eatery",
    sub: "Six steps. Same as a real shift.",
    steps: [
      {
        title: "Open your hub",
        body: "Your business lives in your hub. Start there — not on this public website.",
      },
      {
        title: "Start with the eatery",
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
        title: "Open the eatery",
        body: "Floor phones open the eatery app. Tables, tickets, kitchen, stock.",
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
    title: "Set up your eatery",
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
    stillLabel: "Eatery · Tonight",
    body: "What’s for dinner, what’s in the fridge, and who still needs to pick up milk — without a group chat spiral.",
    rows: [
      { text: "Roast chicken & salad", meta: "Main" },
      { text: "Milk, tomatoes, bread", meta: "List · 3" },
      { text: "Leftovers: soup", meta: "Fridge" },
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
      { text: "Walkthrough booked Fri.", meta: "DAUP · 17:40" },
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
      "Open Hub. goes to the Hub. Book a walkthrough. goes to WhatsApp. Each app — Eatery, Vault, Finance, Trade, Project, Chat — is opened from the Hub.",
      "If we can’t explain a practice in plain English at the kitchen table, we don’t do it.",
    ],
  },
  popia: {
    title: "POPIA",
    paragraphs: [
      "DAUP is built for South African homes and businesses. You decide who sees the shopping list, the invoices, the family files.",
      "We don’t sit in the middle as the owner of your life’s paperwork. Think of it like a filing cabinet in your own kitchen — shared with the people you choose.",
      "A question about your information? Book a walkthrough — we’ll keep it in kitchen English.",
    ],
  },
} as const;
