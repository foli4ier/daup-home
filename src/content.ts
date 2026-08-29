export const HUB = "https://app.daup.co.za/";
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
    slug: "invite",
    path: "/invite",
    kicker: "DOCS • STAFF",
    title: "Invite tonight’s floor",
    sub: "Six steps. Same as a real shift.",
    steps: [
      {
        title: "You don’t make an account here",
        body: "This website is public. Staff never log in on daup.co.za. You don’t sign up on this page.",
      },
      {
        title: "The owner opens the hub",
        body: "Invites start in your hub — the owner’s place. Staff are not a new business.",
      },
      {
        title: "Send it on WhatsApp",
        body: "Pick tonight’s floor. Send the invite. WhatsApp carries it to their phone.",
      },
      {
        title: "That message is the login",
        body: "Open the WhatsApp your owner sent. That message is your login. No extra password on this site.",
      },
      {
        title: "Tap, and they’re on the floor",
        body: "One tap. They’re in the eatery app, on tonight’s shift, on their own phone.",
      },
      {
        title: "Don’t send them to the hub",
        body: "Do not send staff to app.daup.co.za as a new node. The hub is for the owner. Staff join with a WhatsApp tap.",
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
    to: "/invite",
    kind: "people" as const,
  },
  {
    title: "Set up your eatery",
    to: "/docs/hub/set-up-eatery",
    kind: "shop" as const,
  },
];
