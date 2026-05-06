import { useState } from "react";
import {
  appSummary,
  integrationsOverview,
  sections,
  surveysOverview,
  teamsOverview
} from "./mockData.js";

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [selectedTeamId, setSelectedTeamId] = useState(teamsOverview.dashboard[0].id);

  const currentSection = sections.find((section) => section.id === activeSection);
  const selectedTeam =
    teamsOverview.dashboard.find((team) => team.id === selectedTeamId) ?? teamsOverview.dashboard[0];
  const selectedTeamDetail =
    teamsOverview.details[selectedTeam.id] ?? teamsOverview.details[teamsOverview.dashboard[0].id];

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
            <p className="eyebrow">Etap {currentSection.index} / FlowScope Demo</p>
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
        {activeSection === "teams" && (
          <TeamsSection
            selectedTeam={selectedTeam}
            selectedTeamDetail={selectedTeamDetail}
            selectedTeamId={selectedTeamId}
            setSelectedTeamId={setSelectedTeamId}
          />
        )}
        {activeSection !== "integrations" &&
          activeSection !== "surveys" &&
          activeSection !== "teams" && <PlaceholderSection currentSection={currentSection} />}
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

function TeamsSection({ selectedTeam, selectedTeamDetail, selectedTeamId, setSelectedTeamId }) {
  return (
    <>
      <section className="summary-grid">
        {teamsOverview.summaryCards.map((item) => (
          <article key={item.label} className="summary-card">
            <p className="card-label">{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.note}</span>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel-card wide">
          <div className="section-head">
            <div>
              <p className="card-label">Teams Dashboard</p>
              <h3 className="section-title">Przegląd organizacji</h3>
            </div>
            <p className="small-copy section-copy">
              Każda karta pokazuje twarde metryki, sygnał z ankiety po sprincie i główny temat do
              sprawdzenia.
            </p>
          </div>

          <div className="team-dashboard-grid">
            {teamsOverview.dashboard.map((team) => (
              <button
                key={team.id}
                className={`team-dashboard-card ${team.status} ${
                  team.id === selectedTeamId ? "active" : ""
                }`}
                onClick={() => setSelectedTeamId(team.id)}
                type="button"
              >
                <div className="team-dashboard-top">
                  <div>
                    <strong>{team.name}</strong>
                    <span>{team.mission}</span>
                  </div>
                  <span className={`status-pill ${team.status}`}>{team.statusLabel}</span>
                </div>

                <div className="team-dashboard-meta">
                  <span>
                    <strong>Manager:</strong> {team.manager}
                  </span>
                  <span>
                    <strong>Squad:</strong> {team.squadSize}
                  </span>
                  <span>
                    <strong>Response rate:</strong> {team.responseRate}
                  </span>
                  <span>
                    <strong>Sprint pulse:</strong> {team.pulse}
                  </span>
                </div>

                <div className="team-metric-row">
                  {team.metrics.map((metric) => (
                    <div key={metric.label} className="mini-metric-card">
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                      <small className={`trend trend-${metric.tone}`}>{metric.trend}</small>
                    </div>
                  ))}
                </div>

                <div className="team-focus-list">
                  <div>
                    <p className="micro-label">Top risk</p>
                    <strong>{team.topRisk}</strong>
                  </div>
                  <div>
                    <p className="micro-label">Top strength</p>
                    <strong>{team.topStrength}</strong>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card wide">
          <div className="section-head">
            <div>
              <p className="card-label">Team Detail</p>
              <h3 className="section-title">{selectedTeam.name}</h3>
            </div>
            <div className="detail-head-meta">
              <span className={`status-pill ${selectedTeam.status}`}>{selectedTeam.statusLabel}</span>
              <span className="chip">{selectedTeam.releaseWindow}</span>
            </div>
          </div>

          <p className="detail-summary">{selectedTeamDetail.aiSummary}</p>

          <div className="detail-snapshot-grid">
            {selectedTeamDetail.snapshot.map((item) => (
              <div key={item.label} className={`snapshot-card ${item.tone}`}>
                <p className="card-label">{item.label}</p>
                <strong>{item.value}</strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <div className="detail-columns">
            <div className="detail-column">
              <p className="card-label">Survey Breakdown</p>
              <div className="score-list">
                {selectedTeamDetail.surveyBreakdown.map((item) => (
                  <div key={item.label} className="score-row">
                    <div className="score-top">
                      <strong>{item.label}</strong>
                      <span>{item.score.toFixed(1)} / 5</span>
                    </div>
                    <div className="score-track" aria-hidden="true">
                      <div
                        className={`score-fill ${item.tone}`}
                        style={{ width: `${(item.score / 5) * 100}%` }}
                      />
                    </div>
                    <p className="small-copy">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-column">
              <p className="card-label">Sprint Timeline</p>
              <div className="timeline-list">
                {selectedTeamDetail.sprintHistory.map((sprint) => (
                  <div key={sprint.name} className="timeline-card">
                    <div className="timeline-top">
                      <strong>{sprint.name}</strong>
                      <span>{sprint.period}</span>
                    </div>
                    <div className="timeline-metrics">
                      <span>
                        <strong>Throughput:</strong> {sprint.throughput}
                      </span>
                      <span>
                        <strong>Cycle time:</strong> {sprint.cycleTime}
                      </span>
                      <span>
                        <strong>Review time:</strong> {sprint.reviewTime}
                      </span>
                      <span>
                        <strong>Escaped defects:</strong> {sprint.defects}
                      </span>
                      <span>
                        <strong>Workload:</strong> {sprint.workload}
                      </span>
                      <span>
                        <strong>Focus:</strong> {sprint.focus}
                      </span>
                    </div>
                    <p className="small-copy">{sprint.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Open Comments Themes</p>
          <div className="signal-list">
            {selectedTeamDetail.commentThemes.map((item) => (
              <div key={item.theme} className="signal-card">
                <div className="program-top">
                  <strong>{item.theme}</strong>
                  <span className={`status-pill ${item.tone}`}>{item.weight}</span>
                </div>
                <p className="small-copy">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Manager View</p>
          <div className="stacked-list">
            <div className="insight-block">
              <strong>Strengths</strong>
              <ul className="question-bullets">
                {selectedTeamDetail.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="insight-block">
              <strong>Risks</strong>
              <ul className="question-bullets">
                {selectedTeamDetail.risks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="insight-block">
              <strong>Suggested next actions</strong>
              <ul className="question-bullets">
                {selectedTeamDetail.nextActions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
