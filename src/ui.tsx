import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EATERY, HUB, comingApps, starters } from "./content";
import {
  IconBell,
  IconBook,
  IconCloche,
  IconFactory,
  IconFork,
  IconHeart,
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
    <header className="craft-bar">
      <div className="wrap">
        <nav className="site-nav" aria-label="Primary">
          <Link className="logo" to="/">
            DAUP
          </Link>
          <div className="nav-center">
            <Link to="/apps">Apps</Link>
            <Link to="/docs">Docs</Link>
          </div>
          <div className="nav-actions">
            <a className="btn btn-primary" href={HUB}>
              Log in ↗
            </a>
            <button
              className="nav-more"
              type="button"
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((value) => !value)}
            >
              <IconMenu />
              <span className="sr-only">More</span>
            </button>
          </div>
        </nav>
        {open ? (
          <div className="nav-drawer" id="nav-drawer">
            <Link to="/apps">Apps</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/invite">I have a staff invite</Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap site-footer">
        <div>
          <p className="footer-lead">Already set up?</p>
          <Link className="quiet-link" to="/invite">
            Staff invite
          </Link>
        </div>
        <a className="quiet-link" href={HUB}>
          Open your hub ↗
        </a>
      </div>
    </footer>
  );
}

export function PhoneMock() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <div className="island" />
        <div className="status">
          <span>9:41</span>
          <span>▮▮▮</span>
        </div>
        <div className="floor-head">
          <span className="avatar">L</span>
          <span className="who">Lerato · Floor · The Olive</span>
          <span className="bell">
            <IconBell />
          </span>
        </div>
        <div className="scene">
          <span className="lamp" />
          <span className="lamp" />
          <span className="table a" />
          <span className="table b" />
          <span className="table c" />
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
              <IconHeart />
            </span>
            Tips
          </div>
        </div>
      </div>
    </div>
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

export function LiveCards({ expanded = false }: { expanded?: boolean }) {
  return (
    <div className={expanded ? "apps-stack" : "live-stack"}>
      <div className="section-head live-kicker">
        <span className="kicker">Live now</span>
        <span className="rule" />
      </div>

      <article className="card live-card">
        <div className="live-row">
          <span className="ico-sq">
            <IconCloche />
          </span>
          <div className="live-copy">
            <h3>
              <Link to="/apps/eatery">Eatery</Link>
              <span className="live">LIVE</span>
            </h3>
            <p>Tables, tickets, kitchen, stock.</p>
          </div>
          <a className="btn btn-secondary btn-open" href={EATERY}>
            Open.
          </a>
        </div>
        {expanded ? (
          <div className="expand">
            <p>
              The floor app for service. Seat a table, fire a ticket, 86 a dish,
              close the shift. Kitchen sees what you send.
            </p>
          </div>
        ) : null}
        <Link className="walk-link" to="/docs/eatery/tuesday-lunch">
          Walkthrough
        </Link>
      </article>

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
            Open.
          </a>
        </div>
        {expanded ? (
          <div className="expand">
            <p>
              Owners start here. Set up the eatery, send tonight’s floor a
              WhatsApp invite. Staff do not join as a new business.
            </p>
          </div>
        ) : null}
        <Link className="walk-link" to="/docs/hub/set-up-eatery">
          Walkthrough
        </Link>
      </article>

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
          <p>Set up the eatery. Invite tonight’s floor. Hub is yours.</p>
          <a className="btn btn-secondary" href={HUB}>
            Open your hub ↗
          </a>
        </article>
        <article className="card door-card">
          <p className="door-role">Staff</p>
          <h3>You were invited.</h3>
          <p>WhatsApp is the login. Do not open the hub as a new business.</p>
          <Link className="btn btn-outline" to="/invite">
            I have a staff invite
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

