import { useState, type KeyboardEvent, type ReactNode } from "react";
import { HUB, appTabs, trustTabs, type AppTab } from "./content";

const COUNT_WORDS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
] as const;

function countWord(count: number) {
  return COUNT_WORDS[count] ?? String(count);
}

const PHONE_APPS = [
  { name: "Eatery", meta: "The floor", color: "#C45C26" },
  { name: "Eat In", meta: "Tonight’s list", color: "#5C4033" },
  { name: "Eat Out", meta: "Reserve", color: "#2F4A3C" },
  { name: "Vault", meta: "Your files", color: "#2F4A3C" },
] as const;

function HouseMap() {
  return (
    <svg className="house-map" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
      <rect className="room" x="20" y="30" width="90" height="60" rx="6" />
      <rect className="room" x="130" y="30" width="90" height="60" rx="6" />
      <rect className="room" x="20" y="110" width="90" height="50" rx="6" />
      <rect className="room" x="130" y="110" width="90" height="50" rx="6" />
      <circle className="node" cx="120" cy="95" r="8" />
      <path className="link" d="M65 60 L120 95 M175 60 L120 95 M65 135 L120 95 M175 135 L120 95" />
      <text x="42" y="64">
        Kitchen
      </text>
      <text x="155" y="64">
        Money
      </text>
      <text x="48" y="140">
        Files
      </text>
      <text x="158" y="140">
        Work
      </text>
      <text x="108" y="88" className="hub-label">
        Hub
      </text>
    </svg>
  );
}

function HubPhone() {
  return (
    <div className="device-stage" aria-hidden="true">
      <div className="device">
        <div className="device-screen">
          <div className="device-notch" />
          <div className="hub-ui">
            <div className="hub-status">
              <span>Hub</span>
              <span>On your phone</span>
            </div>
            <div className="hub-greeting">Good evening.</div>
            <div className="hub-hint">{countWord(appTabs.length)} apps. One kitchen table.</div>
            <div className="hub-apps">
              {PHONE_APPS.map((app) => (
                <div className="app-tile" key={app.name}>
                  <div className="dot" style={{ background: app.color }} />
                  <div className="name">{app.name}</div>
                  <div className="meta">{app.meta}</div>
                </div>
              ))}
            </div>
            <div className="hub-bar">
              <span>Your house</span>
              <span className="pill">Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppStill({ app }: { app: AppTab }) {
  return (
    <div className="app-still" aria-hidden="true">
      <div className="still-header">
        <div className="badge" style={{ background: app.color }}>
          {app.letter}
        </div>
        <div className="label">{app.stillLabel}</div>
      </div>
      {app.chart ? (
        <div className="still-chart">
          {app.chart.map((bar, index) => (
            <div
              className={bar.on ? "bar on" : "bar"}
              key={`${app.id}-bar-${index}`}
              style={{ height: `${bar.height}%` }}
            />
          ))}
        </div>
      ) : null}
      {app.rows.map((row) => (
        <div className="still-row" key={`${app.id}-${row.text}`}>
          <span>{row.text}</span>
          <span className="muted">{row.meta}</span>
        </div>
      ))}
    </div>
  );
}

function TabSet({
  label,
  variant,
  tabs,
}: {
  label: string;
  variant: "trust" | "apps";
  tabs: { id: string; label: string; content: ReactNode }[];
}) {
  const [current, setCurrent] = useState(tabs[0]?.id ?? "");
  const listClass = variant === "apps" ? "seg" : "tablist";
  const tabClass = variant === "apps" ? "seg-btn" : "tab";
  const panelClass = variant === "apps" ? "app-panel" : "tabpanel";

  function move(index: number, event: KeyboardEvent<HTMLButtonElement>) {
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const back = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!forward && !back) return;
    event.preventDefault();
    const delta = forward ? 1 : -1;
    const next = (index + delta + tabs.length) % tabs.length;
    const tab = tabs[next];
    if (!tab) return;
    setCurrent(tab.id);
    const target = document.getElementById(`${variant}-tab-${tab.id}`);
    target?.focus();
  }

  return (
    <div className="tabs">
      <div className={listClass} role="tablist" aria-label={label}>
        {tabs.map((tab, index) => {
          const on = tab.id === current;
          return (
            <button
              className={tabClass}
              role="tab"
              type="button"
              id={`${variant}-tab-${tab.id}`}
              key={tab.id}
              aria-selected={on}
              aria-controls={`${variant}-panel-${tab.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setCurrent(tab.id)}
              onKeyDown={(event) => move(index, event)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => {
        const on = tab.id === current;
        return (
          <div
            className={on ? `${panelClass} active` : panelClass}
            role="tabpanel"
            id={`${variant}-panel-${tab.id}`}
            key={tab.id}
            aria-labelledby={`${variant}-tab-${tab.id}`}
            hidden={on ? undefined : true}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}

export function HomeSpine() {
  return (
    <main id="top">
      <section className="home-hero" aria-label="Hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Your house runs on one platform.</h1>
            <p className="sub">
              Meals, money, files, and work — in one place you own. Built for South African homes and
              businesses.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-pill" href={HUB}>
                Open Hub.
              </a>
            </div>
          </div>
          <HubPhone />
        </div>
      </section>

      <section className="big-picture" id="platform">
        <div className="wrap bp-grid">
          <div>
            <p className="section-kicker">The big picture</p>
            <h2 className="section-title">
              One platform for the house — and the business that runs from it.
            </h2>
            <p className="section-lead">
              DAUP is where a South African household keeps the everyday stuff together: what’s for
              dinner, what’s owed, what’s shared, what’s next. Your data stays with you. The Hub is
              the front door.
            </p>
          </div>
          <div className="bp-visual" aria-hidden="true">
            <HouseMap />
          </div>
        </div>
      </section>

      <section className="trust-band" id="trust">
        <div className="wrap">
          <p className="section-kicker">Trust</p>
          <h2 className="section-title">Your data stays yours.</h2>
          <p className="section-lead">
            We built DAUP so the house owns the information — not a distant cloud that rents it back
            to you.
          </p>
          <TabSet
            label="Trust topics"
            variant="trust"
            tabs={trustTabs.map((tab) => ({
              id: tab.id,
              label: tab.label,
              content: tab.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>),
            }))}
          />
        </div>
      </section>

      <section className="apps-band" id="apps">
        <div className="wrap">
          <p className="section-kicker">The apps</p>
          <h2 className="section-title">{countWord(appTabs.length)} tools. One kitchen table.</h2>
          <p className="section-lead">
            Each app does one job well. Open Hub to start; registration lives there.
          </p>
          <TabSet
            label="Apps"
            variant="apps"
            tabs={appTabs.map((app) => ({
              id: app.id,
              label: app.label,
              content: (
                <>
                  <div className="copy">
                    <p>{app.body}</p>
                  </div>
                  <AppStill app={app} />
                </>
              ),
            }))}
          />
        </div>
      </section>

      <section className="hub-cta" id="hub">
        <div className="wrap">
          <h2>Ready when you are.</h2>
          <p>
            Registration starts in the Hub — email, WhatsApp, and where you are. www just shows you
            the door.
          </p>
          <a className="btn btn-primary btn-pill" href={HUB}>
            Open Hub.
          </a>
        </div>
      </section>
    </main>
  );
}
