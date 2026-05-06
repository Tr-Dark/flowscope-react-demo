import { useState } from "react";
import {
  appSummary,
  integrationsOverview,
  sections,
  surveysOverview
} from "./mockData.js";

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
          <p className="sidebar-copy">{appSummary.stageStatus}</p>
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
            <p className="eyebrow">Etap 3 / Pierwsze realne ekrany</p>
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
            <p className="card-label">Dlaczego ten obszar istnieje</p>
            <h3>{currentSection.heroTitle}</h3>
            <p className="hero-copy">{currentSection.heroCopy}</p>
          </div>
          <div className="hero-side">
            <p className="card-label">Co jeszcze dojdzie w tej sekcji</p>
            <ul className="bullet-list">
              {currentSection.futureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {activeSection === "integrations" && <IntegrationsSection />}
        {activeSection === "surveys" && <SurveysSection />}
        {activeSection !== "integrations" && activeSection !== "surveys" && (
          <PlaceholderSection currentSection={currentSection} />
        )}
      </main>
    </div>
  );
}

function IntegrationsSection() {
  return (
    <>
      <section className="summary-grid">
        {integrationsOverview.summaryCards.map((item) => (
          <article key={item.label} className="summary-card">
            <p className="card-label">{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.note}</span>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Integrations Overview</p>
          <div className="integration-list">
            {integrationsOverview.connected.map((integration) => (
              <div key={integration.name} className="integration-card">
                <div className="integration-top">
                  <div>
                    <strong>{integration.name}</strong>
                    <span>{integration.description}</span>
                  </div>
                  <span className={`status-pill ${integration.status}`}>{integration.status}</span>
                </div>
                <div className="integration-meta">
                  <span>
                    <strong>Owner:</strong> {integration.owner}
                  </span>
                  <span>
                    <strong>Last sync:</strong> {integration.lastSync}
                  </span>
                </div>
                <div className="tag-grid compact">
                  {integration.metrics.map((metric) => (
                    <span key={metric} className="tag">
                      {metric}
                    </span>
                  ))}
                </div>
                <p className="small-copy">{integration.usage}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Add Integration</p>
          <div className="integration-list">
            {integrationsOverview.available.map((integration) => (
              <div key={integration.name} className="integration-card available">
                <div className="integration-top">
                  <div>
                    <strong>{integration.name}</strong>
                    <span>{integration.category}</span>
                  </div>
                  <button className="ghost-button" type="button">
                    Connect
                  </button>
                </div>
                <p className="small-copy">{integration.preview}</p>
                <p className="small-copy muted">{integration.note}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card wide">
          <p className="card-label">Jak dane łączą się w analizie</p>
          <div className="mapping-list">
            {integrationsOverview.mappingFlow.map((item) => (
              <div key={item.source} className="mapping-card">
                <span className="mapping-source">{item.source}</span>
                <strong>{item.output}</strong>
                <p>{item.explanation}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

function SurveysSection() {
  return (
    <>
      <section className="summary-grid">
        {surveysOverview.summaryCards.map((item) => (
          <article key={item.label} className="summary-card">
            <p className="card-label">{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.note}</span>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Survey Overview</p>
          <div className="program-list">
            {surveysOverview.programs.map((program) => (
              <div key={program.name} className="program-card">
                <div className="program-top">
                  <div>
                    <strong>{program.name}</strong>
                    <span>{program.purpose}</span>
                  </div>
                  <span className={`badge badge-${program.badge.toLowerCase()}`}>{program.badge}</span>
                </div>
                <div className="program-meta">
                  <span>
                    <strong>Cadence:</strong> {program.cadence}
                  </span>
                  <span>
                    <strong>Length:</strong> {program.length}
                  </span>
                  <span>
                    <strong>Owner:</strong> {program.owner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Sprint Survey Builder</p>
          <div className="builder-meta">
            <span>
              <strong>Cadence:</strong> {surveysOverview.sprintBuilder.cadence}
            </span>
            <span>
              <strong>Anonymity:</strong> {surveysOverview.sprintBuilder.anonymity}
            </span>
            <span>
              <strong>Response goal:</strong> {surveysOverview.sprintBuilder.responseGoal}
            </span>
          </div>

          <div className="category-list">
            {surveysOverview.sprintBuilder.categories.map((category) => (
              <div key={category.name} className="category-card">
                <div className="category-top">
                  <strong>{category.name}</strong>
                  <span className="weight-pill">{category.weight}</span>
                </div>
                <p>{category.note}</p>
              </div>
            ))}
          </div>

          <div className="question-list">
            {surveysOverview.sprintBuilder.questions.map((question, index) => (
              <div key={question} className="question-row">
                <span className="question-index">{index + 1}</span>
                <span>{question}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Question Library</p>
          <div className="library-list">
            {surveysOverview.library.map((group) => (
              <div key={group.category} className="library-card">
                <div className="program-top">
                  <div>
                    <strong>{group.category}</strong>
                    <span>{group.type}</span>
                  </div>
                </div>
                <ul className="question-bullets">
                  {group.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">AI Question Suggestions</p>
          <div className="ai-list">
            {surveysOverview.aiSuggestions.map((suggestion) => (
              <div key={suggestion.prompt} className="ai-card">
                <strong>{suggestion.prompt}</strong>
                <ul className="question-bullets">
                  {suggestion.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
                <button className="ghost-button" type="button">
                  Add to survey
                </button>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

function PlaceholderSection({ currentSection }) {
  return (
    <>
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
    </>
  );
}

export default App;
