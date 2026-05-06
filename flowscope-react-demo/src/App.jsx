import { useState } from "react";
import {
  appSummary,
  governanceOverview,
  insightsOverview,
  integrationsOverview,
  sections,
  surveysOverview,
  teamsOverview,
  welcomeOverview
} from "./mockData.js";

const STATUS_LABELS = {
  healthy: "Stabilny",
  caution: "Do obserwacji",
  investigate: "Wymaga uwagi",
  connected: "Polaczono"
};

const BADGE_LABELS = {
  Core: "Podstawowa",
  Optional: "Opcjonalna",
  Extended: "Rozszerzona",
  Strategic: "Roczna"
};

const WEIGHT_LABELS = {
  High: "Wysoki",
  Medium: "Sredni",
  Low: "Niski"
};

function App() {
  const [hasEnteredWorkspace, setHasEnteredWorkspace] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [selectedTeamId, setSelectedTeamId] = useState(teamsOverview.dashboard[0].id);

  const currentSection = sections.find((section) => section.id === activeSection);
  const selectedTeam =
    teamsOverview.dashboard.find((team) => team.id === selectedTeamId) ?? teamsOverview.dashboard[0];
  const selectedTeamDetail =
    teamsOverview.details[selectedTeam.id] ?? teamsOverview.details[teamsOverview.dashboard[0].id];

  if (!hasEnteredWorkspace) {
    return <WelcomeScreen onEnter={() => setHasEnteredWorkspace(true)} />;
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="eyebrow">FlowScope</p>
          <h1>FlowScope</h1>
          <p className="brand-copy">Platforma do mierzenia efektywnosci zespolow IT bez toksycznych KPI.</p>
        </div>

        <nav className="section-nav" aria-label="Glowne sekcje platformy">
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
          <p className="card-label">Przestrzen robocza</p>
          <p className="sidebar-copy">{appSummary.stageStatus}</p>
        </section>

        <section className="sidebar-card">
          <p className="card-label">Organizacja</p>
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
            <p className="eyebrow">Przeglad platformy</p>
            <h2>{currentSection.title}</h2>
            <p className="subtitle">{currentSection.description}</p>
          </div>
          <div className="topbar-chips">
            <span className="chip">Dane operacyjne</span>
            <span className="chip">Wnioski AI</span>
            <span className="chip">Kondycja zespolu</span>
          </div>
        </header>

        <section className="hero-card">
          <div>
            <p className="card-label">Dlaczego ten obszar istnieje</p>
            <h3>{currentSection.heroTitle}</h3>
            <p className="hero-copy">{currentSection.heroCopy}</p>
          </div>
          <div className="hero-side">
            <p className="card-label">Najwazniejsze elementy</p>
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
        {activeSection === "insights" && (
          <InsightsSection
            selectedTeam={selectedTeam}
            selectedTeamDetail={selectedTeamDetail}
            selectedTeamId={selectedTeamId}
            setSelectedTeamId={setSelectedTeamId}
          />
        )}
        {activeSection === "governance" && <GovernanceSection />}
      </main>
    </div>
  );
}

function WelcomeScreen({ onEnter }) {
  return (
    <main className="welcome-shell">
      <section className="welcome-hero-card">
        <div className="welcome-copy">
          <p className="eyebrow">FlowScope</p>
          <h1>{welcomeOverview.title}</h1>
          <p className="welcome-lead">{welcomeOverview.lead}</p>

          <div className="welcome-actions">
            <button className="primary-button" onClick={onEnter} type="button">
              Przejdz do platformy
            </button>
            <span className="welcome-hint">{welcomeOverview.hint}</span>
          </div>

          <div className="welcome-pillars">
            {welcomeOverview.pillars.map((item) => (
              <div key={item.title} className="welcome-pillar-card">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="welcome-side">
          <div className="welcome-metric-grid">
            {welcomeOverview.metrics.map((item) => (
              <div key={item.label} className="welcome-metric-card">
                <p className="card-label">{item.label}</p>
                <strong>{item.value}</strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <div className="welcome-principles-card">
            <p className="card-label">Glowne zasady</p>
            <ul className="bullet-list">
              {welcomeOverview.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
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
          <p className="card-label">Przeglad integracji</p>
          <div className="integration-list">
            {integrationsOverview.connected.map((integration) => (
              <div key={integration.name} className="integration-card">
                <div className="integration-top">
                  <div>
                    <strong>{integration.name}</strong>
                    <span>{integration.description}</span>
                  </div>
                  <span className={`status-pill ${integration.status}`}>
                    {STATUS_LABELS[integration.status] ?? integration.status}
                  </span>
                </div>
                <div className="integration-meta">
                  <span>
                    <strong>Odpowiada:</strong> {integration.owner}
                  </span>
                  <span>
                    <strong>Ostatnia synchronizacja:</strong> {integration.lastSync}
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
          <p className="card-label">Dodaj integracje</p>
          <div className="integration-list">
            {integrationsOverview.available.map((integration) => (
              <div key={integration.name} className="integration-card available">
                <div className="integration-top">
                  <div>
                    <strong>{integration.name}</strong>
                    <span>{integration.category}</span>
                  </div>
                  <button className="ghost-button" type="button">
                    Polacz
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
          <p className="card-label">Jak dane lacza sie w analizie</p>
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
          <p className="card-label">Przeglad ankiet</p>
          <div className="program-list">
            {surveysOverview.programs.map((program) => (
              <div key={program.name} className="program-card">
                <div className="program-top">
                  <div>
                    <strong>{program.name}</strong>
                    <span>{program.purpose}</span>
                  </div>
                  <span className={`badge badge-${program.badge.toLowerCase()}`}>
                    {BADGE_LABELS[program.badge] ?? program.badge}
                  </span>
                </div>
                <div className="program-meta">
                  <span>
                    <strong>Rytm:</strong> {program.cadence}
                  </span>
                  <span>
                    <strong>Zakres:</strong> {program.length}
                  </span>
                  <span>
                    <strong>Odpowiada:</strong> {program.owner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Konfiguracja ankiety sprintowej</p>
          <div className="builder-meta">
            <span>
              <strong>Rytm:</strong> {surveysOverview.sprintBuilder.cadence}
            </span>
            <span>
              <strong>Anonimowosc:</strong> {surveysOverview.sprintBuilder.anonymity}
            </span>
            <span>
              <strong>Cel odpowiedzi:</strong> {surveysOverview.sprintBuilder.responseGoal}
            </span>
          </div>

          <div className="category-list">
            {surveysOverview.sprintBuilder.categories.map((category) => (
              <div key={category.name} className="category-card">
                <div className="category-top">
                  <strong>{category.name}</strong>
                  <span className="weight-pill">{WEIGHT_LABELS[category.weight] ?? category.weight}</span>
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
          <p className="card-label">Biblioteka pytan</p>
          <div className="library-list">
            {surveysOverview.library.map((group) => (
              <div key={group.category} className="library-card">
                <div className="program-top">
                  <div>
                    <strong>{group.category}</strong>
                    <span>{group.type === "Core" ? "Podstawowe" : "Opcjonalne"}</span>
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
          <p className="card-label">Sugestie pytan AI</p>
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
                  Dodaj do ankiety
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
              <p className="card-label">Przeglad zespolow</p>
              <h3 className="section-title">Obraz calej organizacji</h3>
            </div>
            <p className="small-copy section-copy">
              Kazda karta pokazuje stan zespolu, najwazniejsze sygnaly i temat, ktory warto omowic najszybciej.
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
                  <span className={`status-pill ${team.status}`}>
                    {STATUS_LABELS[team.status] ?? team.statusLabel}
                  </span>
                </div>

                <div className="team-dashboard-meta">
                  <span>
                    <strong>Manager:</strong> {team.manager}
                  </span>
                  <span>
                    <strong>Zespol:</strong> {team.squadSize}
                  </span>
                  <span>
                    <strong>Udzial odpowiedzi:</strong> {team.responseRate}
                  </span>
                  <span>
                    <strong>Ocena sprintu:</strong> {team.pulse}
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
                    <p className="micro-label">Najwieksze ryzyko</p>
                    <strong>{team.topRisk}</strong>
                  </div>
                  <div>
                    <p className="micro-label">Najmocniejsza strona</p>
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
              <p className="card-label">Szczegoly zespolu</p>
              <h3 className="section-title">{selectedTeam.name}</h3>
            </div>
            <div className="detail-head-meta">
              <span className={`status-pill ${selectedTeam.status}`}>
                {STATUS_LABELS[selectedTeam.status] ?? selectedTeam.statusLabel}
              </span>
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
              <p className="card-label">Wyniki ankiety</p>
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
              <p className="card-label">Historia sprintow</p>
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
          <p className="card-label">Najczestsze tematy z komentarzy</p>
          <div className="signal-list">
            {selectedTeamDetail.commentThemes.map((item) => (
              <div key={item.theme} className="signal-card">
                <div className="program-top">
                  <strong>{item.theme}</strong>
                  <span className={`status-pill ${item.tone}`}>{WEIGHT_LABELS[item.weight] ?? item.weight}</span>
                </div>
                <p className="small-copy">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Widok managera</p>
          <div className="stacked-list">
            <div className="insight-block">
              <strong>Mocne strony</strong>
              <ul className="question-bullets">
                {selectedTeamDetail.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="insight-block">
              <strong>Ryzyka</strong>
              <ul className="question-bullets">
                {selectedTeamDetail.risks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="insight-block">
              <strong>Najblizsze dzialania</strong>
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

function InsightsSection({ selectedTeam, selectedTeamDetail, selectedTeamId, setSelectedTeamId }) {
  const focusedInsight =
    insightsOverview.byTeam[selectedTeam.id] ?? insightsOverview.byTeam[teamsOverview.dashboard[0].id];

  return (
    <>
      <section className="summary-grid">
        {insightsOverview.summaryCards.map((item) => (
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
              <p className="card-label">Najwazniejsze sygnaly</p>
              <h3 className="section-title">Priorytety dla organizacji</h3>
            </div>
            <p className="small-copy section-copy">
              Ten widok zbiera sygnaly, ktore najbardziej wplywaja na tempo pracy, jakosc i stabilnosc zespolow.
            </p>
          </div>

          <div className="insight-overview-grid">
            {insightsOverview.topSignals.map((item) => (
              <div key={item.title} className={`overview-signal-card ${item.tone}`}>
                <div className="program-top">
                  <strong>{item.title}</strong>
                  <span className={`status-pill ${item.tone}`}>{WEIGHT_LABELS[item.level] ?? item.level}</span>
                </div>
                <p className="small-copy">{item.summary}</p>
                <div className="signal-meta-grid">
                  <span>
                    <strong>Zakres:</strong> {item.scope}
                  </span>
                  <span>
                    <strong>Pewnosc:</strong> {item.confidence}
                  </span>
                  <span>
                    <strong>Podstawa:</strong> {item.evidence}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <div className="section-head">
            <div>
              <p className="card-label">Wybrany zespol</p>
              <h3 className="section-title">Rozszerzona analiza AI</h3>
            </div>
            <div className="team-pill-row">
              {teamsOverview.dashboard.map((team) => (
                <button
                  key={team.id}
                  className={`team-pill-button ${team.id === selectedTeamId ? "active" : ""}`}
                  onClick={() => setSelectedTeamId(team.id)}
                  type="button"
                >
                  {team.name}
                </button>
              ))}
            </div>
          </div>

          <div className="ai-summary-card">
            <div className="program-top">
              <strong>{selectedTeam.name}</strong>
              <span className={`status-pill ${selectedTeam.status}`}>
                {STATUS_LABELS[selectedTeam.status] ?? selectedTeam.statusLabel}
              </span>
            </div>
            <p>{focusedInsight.executiveSummary}</p>
          </div>

          <div className="explanation-list">
            {focusedInsight.explanations.map((item) => (
              <div key={item.title} className="explanation-card">
                <div className="program-top">
                  <strong>{item.title}</strong>
                  <span className={`status-pill ${item.tone}`}>{WEIGHT_LABELS[item.weight] ?? item.weight}</span>
                </div>
                <p className="small-copy">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Lancuch sygnalow</p>
          <div className="evidence-list">
            {focusedInsight.evidenceChain.map((item) => (
              <div key={item.signal} className="evidence-card">
                <span className="mapping-source">{item.signal}</span>
                <strong>{item.finding}</strong>
                <p className="small-copy">{item.whyItMatters}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Polaczenie sygnalow</p>
          <div className="correlation-list">
            {focusedInsight.correlations.map((item) => (
              <div key={item.pair} className="correlation-card">
                <strong>{item.pair}</strong>
                <p className="small-copy">{item.reading}</p>
                <span className={`status-pill ${item.tone}`}>{item.verdict}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Kontekst dla managera</p>
          <div className="stacked-list">
            <div className="insight-block">
              <strong>Jak system podsumowuje sytuacje</strong>
              <p className="small-copy plain-copy">{focusedInsight.plainLanguage}</p>
            </div>

            <div className="insight-block">
              <strong>Komentarze, ktore to potwierdzaja</strong>
              <ul className="question-bullets">
                {selectedTeamDetail.commentThemes.map((item) => (
                  <li key={item.theme}>
                    <strong>{item.theme}:</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card wide">
          <div className="section-head">
            <div>
              <p className="card-label">Plan dzialan</p>
              <h3 className="section-title">Dzialania na najblizsze 2 sprinty</h3>
            </div>
            <p className="small-copy section-copy">
              Kazda rekomendacja ma wlasciciela, powod i moment sprawdzenia efektu.
            </p>
          </div>

          <div className="action-plan-grid">
            {focusedInsight.actionPlan.map((item) => (
              <div key={item.title} className="action-card">
                <div className="program-top">
                  <strong>{item.title}</strong>
                  <span className={`status-pill ${item.tone}`}>{WEIGHT_LABELS[item.priority] ?? item.priority}</span>
                </div>
                <p className="small-copy">{item.description}</p>
                <div className="action-meta">
                  <span>
                    <strong>Odpowiada:</strong> {item.owner}
                  </span>
                  <span>
                    <strong>Weryfikacja:</strong> {item.reviewDate}
                  </span>
                  <span>
                    <strong>Oczekiwany efekt:</strong> {item.expectedImpact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

function GovernanceSection() {
  return (
    <>
      <section className="summary-grid">
        {governanceOverview.summaryCards.map((item) => (
          <article key={item.label} className="summary-card">
            <p className="card-label">{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.note}</span>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <div className="section-head">
            <div>
              <p className="card-label">Bezpieczne KPI</p>
              <h3 className="section-title">Jak czytac te dane</h3>
            </div>
            <p className="small-copy section-copy">
              W tym miejscu widac, jak system pomaga korzystac z metryk bez tworzenia presji i zlych nawykow.
            </p>
          </div>

          <div className="guardrail-list">
            {governanceOverview.guardrails.map((item) => (
              <div key={item.unsafeKpi} className="guardrail-card">
                <div className="program-top">
                  <strong>{item.unsafeKpi}</strong>
                  <span className="status-pill investigate">Niebezpieczne</span>
                </div>
                <p className="small-copy">{item.risk}</p>
                <div className="guardrail-split">
                  <div>
                    <p className="micro-label">Bezpieczniejsza alternatywa</p>
                    <strong>{item.saferAlternative}</strong>
                  </div>
                  <div>
                    <p className="micro-label">Jak system to pokazuje</p>
                    <span>{item.framing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Zasady ankiet</p>
          <div className="policy-list">
            {governanceOverview.surveyPolicies.map((item) => (
              <div key={item.title} className="policy-card">
                <div className="program-top">
                  <strong>{item.title}</strong>
                  <span className={`status-pill ${item.tone}`}>
                    {item.tag === "Core"
                      ? "Podstawa"
                      : item.tag === "Optional"
                        ? "Opcjonalne"
                        : item.tag === "Privacy"
                          ? "Prywatnosc"
                          : "Zasada"}
                  </span>
                </div>
                <p className="small-copy">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Model dostepu</p>
          <div className="access-grid">
            {governanceOverview.accessModel.map((item) => (
              <div key={item.role} className="access-card">
                <strong>{item.role}</strong>
                <p className="small-copy">{item.scope}</p>
                <ul className="question-bullets">
                  {item.permissions.map((permission) => (
                    <li key={permission}>{permission}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Zasady prywatnosci</p>
          <div className="stacked-list">
            {governanceOverview.privacyRules.map((item) => (
              <div key={item.title} className="insight-block">
                <strong>{item.title}</strong>
                <p className="small-copy plain-copy">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
