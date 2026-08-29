import { Link } from "react-router-dom";
import { EATERY, HUB, starters } from "./content";
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

export function Nav() {
  return (
    <header>
      <div className="wrap">
        <nav className="site-nav" aria-label="Primary">
          <Link className="logo" to="/">
            DAUP
          </Link>
          <div className="nav-center">
            <a href="/#how-it-works">How it works</a>
            <Link to="/apps">Apps</Link>
            <Link to="/docs">Docs</Link>
          </div>
          <div className="nav-actions">
            <Link className="btn btn-outline nav-invite" to="/invite">
              I have a staff invite
            </Link>
            <a className="btn btn-primary" href={HUB}>
              Log in ↗
            </a>
          </div>
        </nav>
        <div className="mobile-links">
          <a href="/#how-it-works">How it works</a>
          <Link to="/apps">Apps</Link>
          <Link to="/docs">Docs</Link>
        </div>
        <div className="nav-invite-mobile">
          <Link className="btn btn-outline btn-wide" to="/invite">
            I have a staff invite
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap site-footer">
        <p style={{ margin: 0, fontWeight: 600 }}>Already set up?</p>
        <a className="btn btn-primary" href={HUB}>
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
    <div className="phone" aria-hidden="true" style={{ width: 240, margin: "8px auto 18px" }}>
      <div className="phone-screen" style={{ minHeight: 420 }}>
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

export function LiveCards({ expanded = false }: { expanded?: boolean }) {
  return (
    <div className="apps-grid">
      <div className="section-head live-kicker">
        <span className="kicker">Live now</span>
        <span className="rule" />
      </div>
      <article className="card">
        <div className="card-top">
          <span className="ico-sq">
            <IconCloche />
          </span>
          <div>
            <h3>
              <Link to="/apps/eatery">Eatery</Link> <span className="live">LIVE</span>
            </h3>
            <p>Tables, tickets, kitchen, stock.</p>
          </div>
        </div>
        {expanded ? (
          <div className="expand">
            <p>
              The floor app for service. Seat a table, fire a ticket, 86 a dish,
              close the shift. Kitchen sees what you send.
            </p>
            <p>
              <Link to="/docs/eatery/tuesday-lunch">Tuesday lunch service</Link>
              {" · "}
              <Link to="/invite">Invite tonight’s floor</Link>
            </p>
          </div>
        ) : null}
        <div className="card-links">
          <a href={EATERY}>Open eatery ›</a>
          <Link to="/docs/eatery/tuesday-lunch">Walk me through it ›</Link>
        </div>
      </article>

      <article className="card">
        <div className="card-top">
          <span className="ico-sq">
            <IconHouse />
          </span>
          <div>
            <h3>
              <Link to="/apps/hub">Your hub</Link> <span className="live">LIVE</span>
            </h3>
            <p>Where the owner sets up the business and invites staff.</p>
          </div>
        </div>
        {expanded ? (
          <div className="expand">
            <p>
              Owners start here. Set up the eatery, send tonight’s floor a
              WhatsApp invite. Staff do not join as a new business.
            </p>
            <p>
              <Link to="/docs/hub/set-up-eatery">Set up your eatery</Link>
              {" · "}
              <Link to="/invite">Invite tonight’s floor</Link>
            </p>
          </div>
        ) : null}
        <div className="card-links">
          <a href={HUB}>Open your hub ›</a>
          <Link to="/docs/hub/set-up-eatery">Walk me through it ›</Link>
        </div>
      </article>

      <aside className="coming" aria-label="Coming soon">
        <div className="coming-head">
          <span className="kicker">Coming</span>
          <span className="rule" />
        </div>
        <div className="chips">
          <div className="chip">
            <IconSprout /> Farm
          </div>
          <div className="chip">
            <IconShop /> Reseller
          </div>
          <div className="chip">
            <IconFactory /> Maker
          </div>
        </div>
        <p className="caption">Same chain. Not live yet.</p>
      </aside>
    </div>
  );
}

function StarterLinks() {
  return (
    <div className="starters">
      {starters.map((item) => (
        <Link className="starter" to={item.to} key={item.to}>
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
