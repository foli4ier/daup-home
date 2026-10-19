import { HUB } from "./content";
import { appTiers, trustPoints, honestItems, sovereignNodes } from "./content";

function SovereignFlow() {
  return (
    <div className="sov-flow" aria-hidden="false">
      {sovereignNodes.map((node, index) => (
        <div className="sov-node-row" key={node.title}>
          <div className={node.data ? "sov-node data" : "sov-node"}>
            <div className="sov-where">{node.where}</div>
            <h4>{node.title}</h4>
            <p className="sov-holds">{node.holds}</p>
          </div>
          {index < sovereignNodes.length - 1 ? (
            <span className="sov-arrow" aria-hidden="true">
              ↔
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function HomeSpine() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="sov-hero" aria-label="Hero">
        <div className="wrap">
          <p className="section-kicker">A peer-to-peer data platform</p>
          <h1>
            Your data lives on <span className="sov-accent">your node</span>.
            <br />
            Nowhere else.
          </h1>
          <p className="sov-lead">
            DAUP is how organisations and people run their own apps on their own
            infrastructure. Every node is sovereign by default — its data stays
            on it and is never persisted elsewhere. The apps are thin clients;
            the data never leaves home.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-pill" href={HUB}>
              Open your hub.
            </a>
            <a className="secondary" href="#apps">
              See the apps
            </a>
          </div>
          <p className="sov-assure">
            No shared central database · <b>no node-to-node sync</b> · the
            signing secret never leaves your node
          </p>
        </div>
      </section>

      {/* SOVEREIGNTY BAND */}
      <section className="sov-band" id="sovereign">
        <div className="wrap">
          <div className="sov-panel">
            <p className="section-kicker">The one thing to understand</p>
            <h2 className="section-title">Sovereign by default</h2>
            <p className="section-lead">
              DAUP has <b>one kind of node</b>, and every node's data lives on
              that node. There are no tiers to classify and no central store to
              trust — sovereignty isn't a premium option, it's the only mode.
              The apps you see below are static front-ends served from a CDN:
              they hold nothing at rest. The only component that holds data is
              the node you control.
            </p>
            <SovereignFlow />
          </div>
        </div>
      </section>

      {/* APP TAXONOMY */}
      <section className="sov-apps" id="apps">
        <div className="wrap">
          <p className="section-kicker">What runs on DAUP</p>
          <h2 className="section-title">One platform, four kinds of app</h2>
          <p className="section-lead">
            Social apps for people, SME apps for small businesses, enterprise
            apps for organisations — plus the apps you reach from inside another
            app. Every one of them reads and writes against your sovereign node.
          </p>

          {appTiers.map((tier) => (
            <div className="sov-tier" key={tier.label}>
              <div className="sov-tier-label">
                <h3>{tier.label}</h3>
                <span className={`sov-tag ${tier.tagClass}`}>{tier.tag}</span>
                <span className="sov-note">{tier.note}</span>
              </div>
              <div className="sov-cards">
                {tier.apps.map((app) => (
                  <article
                    className={app.live ? "sov-app live" : "sov-app"}
                    key={app.name}
                  >
                    <div className="sov-app-ic" aria-hidden="true">
                      {app.icon}
                    </div>
                    <h4>{app.name}</h4>
                    <p>
                      {app.blurb}
                      {app.live ? <b className="sov-live"> Live.</b> : null}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="sov-trust" id="trust">
        <div className="wrap">
          <p className="section-kicker">What a security team cares about</p>
          <h2 className="section-title">Independent by design</h2>
          <p className="section-lead">
            These four properties hold on every node — whether an organisation
            runs DAUP on-premise or a person runs a hosted node.
          </p>
          <div className="sov-tgrid">
            {trustPoints.map((point, index) => (
              <article className="sov-tcard" key={point.title}>
                <div className="sov-tn">{index + 1}</div>
                <h4>{point.title}</h4>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HONEST CURRENT STATE */}
      <section className="sov-honest">
        <div className="wrap">
          <div className="sov-honest-panel">
            <h3>What we are not claiming yet</h3>
            <ul>
              {honestItems.map((item) => (
                <li key={item.lead}>
                  <b>{item.lead}</b> {item.rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hub-cta" id="hub">
        <div className="wrap">
          <h2>Run your own node.</h2>
          <p>
            The hub is the front door to the apps on your node. Open it to get
            started.
          </p>
          <a className="btn btn-primary btn-pill" href={HUB}>
            Open your hub.
          </a>
        </div>
      </section>
    </main>
  );
}
