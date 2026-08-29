import { useEffect, useState, type ReactNode } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { EATERY, HUB, walkthroughs, type Walkthrough } from "./content";
import { DocsBand, FloorPhone, Footer, LiveCards, Nav, PhoneMock } from "./ui";

function Shell({ children }: { children: ReactNode }) {
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
      <section className="wrap hero">
        <div>
          <h1>Food, from the people who grow it to the people who plate it.</h1>
          <p className="lede">
            DAUP is the chain between farm, factory, reseller, and eatery. You
            run the business. Staff join with a WhatsApp tap.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={HUB}>
              Start with your eatery
            </a>
            <Link className="btn btn-ghost" to="/docs/eatery/tuesday-lunch">
              See how a shift works
            </Link>
          </div>
          <p className="caption">
            Eatery first. Farm, reseller, and maker are next.
          </p>
        </div>
        <div className="phone-col">
          <PhoneMock />
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="wrap">
          <LiveCards />
        </div>
      </section>

      <DocsBand />
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
          Two live today. Farm, reseller, and maker are next — same chain.
        </p>
        <LiveCards expanded />
        <p className="caption" style={{ marginTop: 28 }}>
          No marketplace. No trials. Open the app you run, or walk through a
          shift in Docs.
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
              Open eatery ↗
            </a>
            <Link className="text-link" to="/docs/eatery/tuesday-lunch">
              Walk me through it ›
            </Link>
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
            Start the eatery from your hub. Invite tonight’s floor on WhatsApp.
            Staff do not log in on this website, and they do not join as a new
            business.
          </p>
          <div className="card-links">
            <a className="btn btn-primary" href={HUB}>
              Open your hub ↗
            </a>
            <Link className="text-link" to="/docs/hub/set-up-eatery">
              Walk me through it ›
            </Link>
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
            You land on the floor for this eatery: tables, tickets, kitchen.
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
