import { useEffect, useState, type ReactNode } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  EATERY,
  HUB,
  legalPages,
  walkthroughs,
  type Walkthrough,
} from "./content";
import { HomeSpine } from "./home";
import { DocsBand, FloorPhone, Footer, LiveCards, Nav } from "./ui";

function Shell({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  useEffect(() => {
    document.title = title ?? "DAUP — Your house runs on one platform.";
  }, [title]);

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export function HomePage() {
  return (
    <Shell>
      <HomeSpine />
    </Shell>
  );
}

export function LegalPage({ page }: { page: keyof typeof legalPages }) {
  const doc = legalPages[page];
  return (
    <Shell title={`${doc.title} — DAUP`}>
      <article className="legal-page wrap">
        <Link className="back" to="/">
          ‹ Home
        </Link>
        <p className="section-kicker">Legal</p>
        <h1 className="section-title">{doc.title}</h1>
        {doc.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </Shell>
  );
}

export function AppsPage() {
  return (
    <Shell>
      <div className="wrap page">
        <Link className="back" to="/">
          ‹ Home
        </Link>
        <h1 className="serif">Apps</h1>
        <p className="sub">
          Eatery, Eat In, and Eat Out. Farm, reseller, and maker are next.
        </p>
        <LiveCards expanded />
        <p className="caption" style={{ marginTop: 28 }}>
          No marketplace. No trials. Open the app you run.
        </p>
      </div>
    </Shell>
  );
}

export function AppEateryPage() {
  return (
    <Shell>
      <div className="wrap page detail">
        <Link className="back" to="/apps">
          ‹ Apps
        </Link>
        <h1 className="serif">Eatery</h1>
        <p className="sub">Tables, tickets, kitchen, stock.</p>
        <article className="card">
          <p>
            The floor app for service. Seat a table, fire a ticket, send it to
            kitchen, 86 a dish, close. Stock stays with the room.
          </p>
          <div className="card-links">
            <a className="btn btn-primary" href={EATERY}>
              Open Eatery.
            </a>
          </div>
        </article>
      </div>
    </Shell>
  );
}

export function AppEatInPage() {
  return (
    <Shell>
      <div className="wrap page detail">
        <Link className="back" to="/apps">
          ‹ Apps
        </Link>
        <h1 className="serif">Eat In</h1>
        <p className="sub">Dinner, the fridge, and who picks up milk.</p>
        <article className="card">
          <p>
            What’s for dinner, what’s in the fridge, and who still needs to
            pick up milk — without a group chat spiral.
          </p>
          <p>You open Eat In from the Hub.</p>
          <div className="card-links">
            <a className="btn btn-primary" href={HUB}>
              Open Hub.
            </a>
          </div>
        </article>
      </div>
    </Shell>
  );
}

export function AppEatOutPage() {
  return (
    <Shell>
      <div className="wrap page detail">
        <Link className="back" to="/apps">
          ‹ Apps
        </Link>
        <h1 className="serif">Eat Out</h1>
        <p className="sub">A table and a meal, before you leave the house.</p>
        <article className="card">
          <p>Reserve a table and pre-book a meal before you leave the house.</p>
          <p>You open Eat Out from the Hub.</p>
          <div className="card-links">
            <a className="btn btn-primary" href={HUB}>
              Open Hub.
            </a>
          </div>
        </article>
      </div>
    </Shell>
  );
}

export function AppHubPage() {
  return (
    <Shell>
      <div className="wrap page detail">
        <Link className="back" to="/apps">
          ‹ Apps
        </Link>
        <h1 className="serif">Your hub</h1>
        <p className="sub">
          Where the owner sets up the business and invites staff.
        </p>
        <article className="card">
          <p>
            Start Eatery from your hub. Invite tonight’s floor on WhatsApp.
            Staff do not log in on this website, and they do not join as a new
            business.
          </p>
          <div className="card-links">
            <a className="btn btn-primary" href={HUB}>
              Open your hub.
            </a>
          </div>
        </article>
      </div>
    </Shell>
  );
}

export function DocsPage() {
  return (
    <Shell>
      <div className="wrap page">
        <Link className="back" to="/">
          ‹ Home
        </Link>
        <h1 className="serif">Docs</h1>
        <p className="sub">Learn it like a shift, not a manual.</p>
        <DocsBand nested />
      </div>
    </Shell>
  );
}

function Walk({ doc }: { doc: Walkthrough }) {
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  const step = doc.steps[i];
  const total = doc.steps.length;
  const pct = ((i + 1) / total) * 100;

  return (
    <div className="wrap walk">
      <Link className="back" to="/docs">
        ‹ Docs
      </Link>
      <p className="walk-kicker">{doc.kicker}</p>
      <h1>{doc.title}</h1>
      <p className="sub">{doc.sub}</p>
      <p className="progress-label">
        Step {i + 1} of {total}
      </p>
      <div className="bar" aria-hidden="true">
        <span style={{ width: `${pct}%` }} />
      </div>
      <div className="step-card">
        {step.phone === "floor" ? <FloorPhone /> : null}
        <h2>{step.title}</h2>
        <p>{step.body}</p>
      </div>
      <div className="walk-nav">
        <button
          className="btn btn-outline"
          type="button"
          disabled={i === 0}
          onClick={() => setI((n) => Math.max(0, n - 1))}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            if (i === total - 1) navigate("/docs");
            else setI((n) => n + 1);
          }}
        >
          {i === total - 1 ? "Done" : "Next"}
        </button>
      </div>
    </div>
  );
}

function walkthroughBySlug(slug: string) {
  const doc = walkthroughs.find((item) => item.slug === slug);
  if (!doc) throw new Error(`Missing walkthrough: ${slug}`);
  return doc;
}

export function TuesdayPage() {
  const doc = walkthroughBySlug("tuesday-lunch");
  return (
    <Shell>
      <Walk doc={doc} />
    </Shell>
  );
}

export function InvitePage() {
  return (
    <>
      <header>
        <div className="wrap">
          <nav className="site-nav" aria-label="Primary">
            <Link className="logo" to="/">
              DAUP
            </Link>
          </nav>
        </div>
      </header>
      <div className="wrap page invite">
        <Link className="back" to="/">
          ‹ Home
        </Link>
        <h1 className="serif">You were invited</h1>
        <p className="sub">You don’t make an account here.</p>
        <article className="card invite-card">
          <p>
            This website is public. Open the WhatsApp your owner sent. That
            message is your login.
          </p>
          <p>
            You land on Eatery: tables, tickets, kitchen.
          </p>
          <p>Do not open the hub. That is for the owner.</p>
        </article>
        <p className="caption invite-quiet">
          No WhatsApp yet? Ask your owner to send tonight’s invite.
        </p>
      </div>
    </>
  );
}

export function SetupPage() {
  const doc = walkthroughBySlug("set-up-eatery");
  return (
    <Shell>
      <Walk doc={doc} />
    </Shell>
  );
}

export function StaffInviteRedirect() {
  return <Navigate to="/invite" replace />;
}

export function HashScroller() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/" && hash) {
      const id = hash.slice(1);
      document.getElementById(id)?.scrollIntoView();
    }
  }, [hash, pathname]);
  return null;
}

export function NotFound() {
  return (
    <Shell>
      <div className="wrap page">
        <h1 className="serif">That page isn’t here.</h1>
        <p className="sub">
          Try the homepage, apps, or docs. Staff invites live at /invite.
        </p>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
    </Shell>
  );
}
