import { useState } from "react";
import { appSummary, sections } from "./mockData.js";

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const currentSection = sections.find((section) => section.id === activeSection);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="eyebrow">FlowScope Demo</p>
          <h1>FlowScope</h1>
          <p className="brand-copy">
            Platforma do mierzenia efektywności zespołów IT bez toksycznych KPI.
          </p>
        </div>

        <nav className="section-nav" aria-label="Główne sekcje produktu">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-button ${section.id === activeSection ? "active" : ""}`}
              onClick={() => setActiveSection(section.id)}
              type="button"
            >
              <span className="nav-index">{section.index}</span>
              <span>
                <strong>{section.title}</strong>
                <small>{section.short}</small>
              </span>
            </button>
          ))}
        </nav>

        <section className="sidebar-card">
          <p className="card-label">Status projektu</p>
          <p className="sidebar-copy">
            Etap 2: budujemy szkielet React i przygotowujemy bazę pod integracje, ankiety, dashboardy oraz analizę AI.
          </p>
        </section>

        <section className="sidebar-card">
          <p className="card-label">Organizacja demo</p>
          <div className="meta-list">
            <span>{appSummary.organization}</span>
            <span>{appSummary.size}</span>
            <span>{appSummary.tooling}</span>
          </div>
        </section>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Szkielet aplikacji</p>
            <h2>{currentSection.title}</h2>
            <p className="subtitle">{currentSection.description}</p>
          </div>
          <div className="topbar-chips">
            <span className="chip">React</span>
            <span className="chip">Mock data</span>
            <span className="chip">Frontend-only</span>
          </div>
        </header>

        <section className="hero-card">
          <div>
            <p className="card-label">Dlaczego ten ekran istnieje</p>
            <h3>{currentSection.heroTitle}</h3>
            <p className="hero-copy">{currentSection.heroCopy}</p>
          </div>
          <div className="hero-side">
            <p className="card-label">Co będzie tutaj dalej</p>
            <ul className="bullet-list">
              {currentSection.futureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-grid">
          <article className="panel-card">
            <p className="card-label">Ekrany w tej sekcji</p>
            <div className="screen-list">
              {currentSection.screens.map((screen) => (
                <div key={screen.name} className="screen-card">
                  <strong>{screen.name}</strong>
                  <span>{screen.goal}</span>
                  <small>{screen.status}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="panel-card">
            <p className="card-label">Dane, które będą używane</p>
            <div className="tag-grid">
              {currentSection.dataPoints.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel-card">
            <p className="card-label">Zespoły demo</p>
            <div className="teams-grid">
              {appSummary.teams.map((team) => (
                <div key={team.name} className={`team-card ${team.status}`}>
                  <strong>{team.name}</strong>
                  <span>{team.role}</span>
                  <small>{team.summary}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="panel-card">
            <p className="card-label">Najbliższy cel implementacyjny</p>
            <div className="next-step-card">
              <strong>{currentSection.nextStep.title}</strong>
              <p>{currentSection.nextStep.body}</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
