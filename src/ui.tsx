import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { EATERY, HUB, comingApps, starters } from "./content";
import {
  IconBook,
  IconCloche,
  IconFactory,
  IconFork,
  IconHouse,
  IconKitchen,
  IconMenu,
  IconPeople,
  IconShop,
  IconSprout,
  IconTable,
  IconTicket,
} from "./icons";
import { readKnownPlaces, readNotifyIds, toggleNotify } from "./session";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="wrap inner">
        <Link className="brand" to="/">
          DAUP
        </Link>
        <nav className={open ? "nav open" : "nav"} id="main-nav" aria-label="Primary">
          <Link to="/#platform" onClick={() => setOpen(false)}>
            Platform
          </Link>
          <Link to="/#trust" onClick={() => setOpen(false)}>
            Trust
          </Link>
          <Link to="/#apps" onClick={() => setOpen(false)}>
            Apps
          </Link>
        </nav>
        <div className="nav-actions">
          <a className="link-quiet" href={HUB}>
            Log in.
          </a>
          <a className="btn btn-primary btn-pill btn-sm" href={HUB}>
            Open Hub.
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" to="/">
              DAUP
            </Link>
            <p>One platform for South African houses and the work that runs from them.</p>
          </div>
          <div>
            <h3>Hub</h3>
            <a href={HUB}>Open Hub.</a>
          </div>
          <div>
            <h3>Legal</h3>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/popia">POPIA</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© DAUP · South Africa</span>
          <span>Educate on www · Start in Hub</span>
        </div>
      </div>
    </footer>
  );
}

export function FloorPhone() {
  return (
    <div className="phone walk-phone" aria-hidden="true">
      <div className="phone-screen">
        <div className="island" />
        <div className="status">
          <span>9:41</span>
          <span>▮▮▮</span>
        </div>
        <div className="floor-head">
          <span className="bell">
            <IconMenu />
          </span>
          <span className="who" style={{ textAlign: "center" }}>
            Floor
          </span>
          <span className="avatar">RM</span>
        </div>
        <div className="tiles">
          <div className="tile">
            <span className="ico forest">
              <IconTable />
            </span>
            Tables
          </div>
          <div className="tile">
            <span className="ico terra">
              <IconTicket />
            </span>
            Tickets
          </div>
          <div className="tile">
            <span className="ico forest">
              <IconKitchen />
            </span>
            Kitchen
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingIcon({ id }: { id: string }) {
  if (id === "farm") return <IconSprout />;
  if (id === "reseller") return <IconShop />;
  return <IconFactory />;
}

export function ProductProof() {
  return (
    <figure className="proof" id="trust">
      <div className="proof-frame">
        <span className="demo-badge">Sample</span>
        <img
          src="/proof/eatery-floor-sample.png"
          width={780}
          height={1464}
          alt="Sample Eatery floor at Kortrijk: window tables, a clash, a plate ready, and a ticket in service."
          decoding="async"
        />
      </div>
      <figcaption>Sample floor, Kortrijk. Not a live customer room.</figcaption>
    </figure>
  );
}

function FoodLiveCard({
  name,
  to,
  blurb,
  more,
  href,
  openLabel,
  icon,
  expanded = false,
  showOpen = true,
}: {
  name: string;
  to: string;
  blurb: string;
  more?: string;
  href: string;
  openLabel: string;
  icon: ReactNode;
  expanded?: boolean;
  showOpen?: boolean;
}) {
  return (
    <article className="card live-card">
      <div className={showOpen ? "live-row" : "live-row live-row-text"}>
        <span className="ico-sq">{icon}</span>
        <div className="live-copy">
          <h3>
            <Link to={to}>{name}</Link>
            <span className="live">LIVE</span>
          </h3>
          <p>{blurb}</p>
        </div>
        {showOpen ? (
          <a className="btn btn-secondary btn-open" href={href}>
            {openLabel}
          </a>
        ) : null}
      </div>
      {expanded && more ? (
        <div className="expand">
          <p>{more}</p>
        </div>
      ) : null}
    </article>
  );
}

function HubLiveCard({ expanded = false }: { expanded?: boolean }) {
  return (
    <article className="card live-card">
      <div className="live-row">
        <span className="ico-sq">
          <IconHouse />
        </span>
        <div className="live-copy">
          <h3>
            <Link to="/apps/hub">Your hub</Link>
            <span className="live">LIVE</span>
          </h3>
          <p>Where the owner sets up the business and invites staff.</p>
        </div>
        <a className="btn btn-secondary btn-open" href={HUB}>
          Open your hub.
        </a>
      </div>
      {expanded ? (
        <div className="expand">
          <p>
            Owners start here. Set up Eatery, send tonight’s floor a
            WhatsApp invite. Staff do not join as a new business.
          </p>
        </div>
      ) : null}
    </article>
  );
}

export function LiveCards({
  expanded = false,
  home = false,
}: {
  expanded?: boolean;
  home?: boolean;
}) {
  const showFloorNote = home;
  return (
    <div className={expanded ? "apps-stack" : "live-stack"}>
      <div className="section-head live-kicker">
        <span className="kicker">Live now</span>
        <span className="rule" />
      </div>
      {home ? <HubLiveCard /> : null}
      <FoodLiveCard
        name="Eatery"
        to="/apps/eatery"
        blurb={
          showFloorNote
            ? "Staff run the floor here: tables, tickets, kitchen, stock. They join from the WhatsApp you send, not from this page."
            : "Tables, tickets, kitchen, stock."
        }
        more="The floor app for service. Seat a table, fire a ticket, 86 a dish, close the shift. Kitchen sees what you send."
        href={EATERY}
        openLabel="Open Eatery."
        icon={<IconCloche />}
        expanded={expanded}
        showOpen={!showFloorNote}
      />
      <FoodLiveCard
        name="Eat In"
        to="/apps/eat-in"
        blurb="What’s for dinner, what’s in the fridge, and who still needs to pick up milk."
        href={HUB}
        openLabel="Open Hub."
        icon={<IconFork />}
        expanded={expanded}
        showOpen={!showFloorNote}
      />
      <FoodLiveCard
        name="Eat Out"
        to="/apps/eat-out"
        blurb="Reserve a table and pre-book a meal before you leave the house."
        href={HUB}
        openLabel="Open Hub."
        icon={<IconTable />}
        expanded={expanded}
        showOpen={!showFloorNote}
      />
      {home ? null : <HubLiveCard expanded={expanded} />}
      {expanded ? <ComingApps /> : null}
    </div>
  );
}

export function ComingApps() {
  const [notified, setNotified] = useState<string[]>([]);

  useEffect(() => {
    setNotified(readNotifyIds());
  }, []);

  return (
    <aside className="coming" aria-label="Coming soon">
      <div className="coming-head">
        <span className="kicker">Coming</span>
        <span className="rule" />
      </div>
      <ul className="coming-list">
        {comingApps.map((app) => {
          const on = notified.includes(app.id);
          return (
            <li className="coming-row" key={app.id}>
              <span className="coming-ico" aria-hidden="true">
                <ComingIcon id={app.id} />
              </span>
              <div className="coming-copy">
                <strong>{app.name}</strong>
                <span>{app.blurb}</span>
              </div>
              <button
                className={on ? "btn btn-ghost btn-notify" : "btn btn-outline btn-notify"}
                type="button"
                onClick={() => setNotified(toggleNotify(app.id))}
              >
                {on ? "Noted." : "Notify me."}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export function YourPlaces() {
  const [places, setPlaces] = useState<ReturnType<typeof readKnownPlaces>>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlaces(readKnownPlaces());
    setReady(true);
  }, []);

  return (
    <section className="places" aria-label="Your places">
      <div className="section-head">
        <span className="kicker">Your places</span>
        <span className="rule" />
      </div>
      {!ready || !places ? (
        <p className="places-empty">
          Continue a room you already run. Sign in at the hub — nothing is stored
          on this site.
        </p>
      ) : (
        <ul className="places-list">
          {places.map((place) => (
            <li className="place-row" key={`${place.name}-${place.role}`}>
              <div>
                <strong>{place.name}</strong>
                <span>{place.role}</span>
              </div>
              <a className="btn btn-secondary btn-open" href={place.href}>
                Continue
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function RoleDoor() {
  return (
    <section className="role-door" aria-label="How you enter">
      <div className="section-head">
        <span className="kicker">Who is this for</span>
        <span className="rule" />
      </div>
      <div className="door-grid">
        <article className="card door-card">
          <p className="door-role">Owner</p>
          <h3>You run the room.</h3>
          <p>Set up Eatery. Invite tonight’s floor. Hub is yours.</p>
          <a className="btn btn-secondary" href={HUB}>
            Open your hub.
          </a>
        </article>
        <article className="card door-card">
          <p className="door-role">Staff</p>
          <h3>You were invited.</h3>
          <p>WhatsApp is the login. Do not open the hub as a new business.</p>
          <Link className="btn btn-outline" to="/invite">
            I have a staff invite.
          </Link>
        </article>
      </div>
    </section>
  );
}

function StarterLinks() {
  return (
    <div className="starters">
      {starters.map((item) => (
        <Link className="starter" to={item.to} key={item.title}>
          {item.kind === "fork" ? (
            <IconFork />
          ) : item.kind === "people" ? (
            <IconPeople />
          ) : (
            <IconShop />
          )}
          {item.title}
          <span>›</span>
        </Link>
      ))}
    </div>
  );
}

export function DocsBand({ nested = false }: { nested?: boolean }) {
  const band = (
    <div className={nested ? "docs-band docs-band-solo" : "docs-band"}>
      {nested ? null : (
        <div className="docs-intro">
          <span className="docs-icon">
            <IconBook />
          </span>
          <div>
            <h2>Docs</h2>
            <p>Learn it like a shift, not a manual.</p>
          </div>
        </div>
      )}
      <StarterLinks />
    </div>
  );
  if (nested) return band;
  return (
    <section className="section" id="docs-band">
      <div className="wrap">{band}</div>
    </section>
  );
}

