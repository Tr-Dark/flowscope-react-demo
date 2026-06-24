import { useState, useEffect, useCallback } from "react";
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

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUS_LABELS = {
  healthy: "Stabilny",
  caution: "Do obserwacji",
  investigate: "Wymaga uwagi",
  connected: "Połączono"
};

const BADGE_LABELS = {
  Core: "Podstawowa",
  Optional: "Opcjonalna",
  Extended: "Rozszerzona",
  Strategic: "Roczna"
};

const WEIGHT_LABELS = {
  High: "Wysoki",
  Medium: "Średni",
  Low: "Niski"
};

const SECTION_ICONS = {
  integrations: "⚡",
  surveys: "📋",
  teams: "👥",
  insights: "💡",
  governance: "🛡"
};

// ─── Helper ───────────────────────────────────────────────────────────────────

function parseSprintNum(str) {
  const m = String(str).match(/[\d.]+/);
  return m ? parseFloat(m[0]) : 0;
}

// ─── Toast Container ──────────────────────────────────────────────────────────

function ToastContainer({ toasts }) {
  if (toasts.length === 0) return null;
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          <span className="toast-dot" />
          {t.message}
        </div>
      ))}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ children, onClose, title, subtitle }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button" aria-label="Zamknij">
          ✕
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        {subtitle && <p className="modal-subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [hasEnteredWorkspace, setHasEnteredWorkspace] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [selectedTeamId, setSelectedTeamId] = useState(teamsOverview.dashboard[0].id);
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  }, []);

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
          <p className="brand-copy">
            Platforma do mierzenia efektywności zespołów IT bez toksycznych KPI.
          </p>
        </div>

        <nav className="section-nav" aria-label="Główne sekcje platformy">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-button ${section.id === activeSection ? "active" : ""}`}
              onClick={() => setActiveSection(section.id)}
              type="button"
            >
              <span className="nav-icon">{SECTION_ICONS[section.id]}</span>
              <span>
                <strong>{section.title}</strong>
                <small>{section.short}</small>
              </span>
            </button>
          ))}
        </nav>

        <section className="sidebar-card">
          <p className="card-label">Przestrzeń robocza</p>
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

        <div className="sidebar-bottom">
          <div className="demo-chip">
            <span className="demo-chip-dot" />
            Demo workspace
          </div>
        </div>
      </aside>

      <main className={`main-panel section-${activeSection}`}>
        <header className="topbar">
          <div>
            <p className="eyebrow">Przegląd platformy</p>
            <h2>{currentSection.title}</h2>
            <p className="subtitle">{currentSection.description}</p>
          </div>
          <div className="topbar-chips">
            <span className="chip">Dane operacyjne</span>
            <span className="chip">Wnioski AI</span>
            <span className="chip">Kondycja zespołu</span>
          </div>
        </header>

        <section className="hero-card">
          <div>
            <p className="card-label">Dlaczego ten obszar istnieje</p>
            <h3>{currentSection.heroTitle}</h3>
            <p className="hero-copy">{currentSection.heroCopy}</p>
          </div>
          <div className="hero-side">
            <p className="card-label">Najważniejsze elementy</p>
            <ul className="bullet-list">
              {currentSection.futureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div key={activeSection} className="section-anim">
          {activeSection === "integrations" && <IntegrationsSection showToast={showToast} />}
          {activeSection === "surveys" && <SurveysSection showToast={showToast} />}
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
              showToast={showToast}
            />
          )}
          {activeSection === "governance" && <GovernanceSection />}
        </div>
      </main>

      <ToastContainer toasts={toasts} />
    </div>
  );
}

// ─── Welcome Screen ───────────────────────────────────────────────────────────

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
              Przejdź do platformy
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
            <p className="card-label">Główne zasady</p>
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

// ─── Integrations Section ─────────────────────────────────────────────────────

function IntegrationsSection({ showToast }) {
  const [syncingIds, setSyncingIds] = useState(new Set());
  const [syncTimestamps, setSyncTimestamps] = useState({});
  const [connectedExtra, setConnectedExtra] = useState([]);
  const [connectModal, setConnectModal] = useState(null);
  const [syncTime, setSyncTime] = useState(() => new Date(Date.now() - 6 * 60 * 1000));
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleSync = (name) => {
    if (syncingIds.has(name)) return;
    setSyncingIds((prev) => new Set(prev).add(name));
    setTimeout(() => {
      setSyncingIds((prev) => {
        const next = new Set(prev);
        next.delete(name);
        return next;
      });
      setSyncTimestamps((prev) => ({ ...prev, [name]: "przed chwilą" }));
      setSyncTime(new Date());
      showToast(`${name} zsynchronizowany ✓`, "success");
    }, 2200);
  };

  const handleConnect = (integration) => {
    setConnectModal({ name: integration.name, step: 1, token: "" });
  };

  const handleConnectNext = () => {
    if (connectModal.step === 1) {
      setConnectModal((prev) => ({ ...prev, step: 2 }));
      setTimeout(() => {
        setConnectModal((prev) => (prev ? { ...prev, step: 3 } : null));
      }, 1700);
    } else if (connectModal.step === 3) {
      setConnectedExtra((prev) => [...prev, connectModal.name]);
      showToast(`${connectModal.name} podłączony ✓`, "success");
      setConnectModal(null);
    }
  };

  const closeModal = () => {
    if (connectModal?.step !== 2) setConnectModal(null);
  };

  const allConnected = [
    ...integrationsOverview.connected,
    ...connectedExtra.map((name) => {
      const avail = integrationsOverview.available.find((a) => a.name === name);
      return {
        name,
        status: "connected",
        owner: "—",
        lastSync: "przed chwilą",
        description: avail?.preview ?? "",
        metrics: [],
        usage: ""
      };
    })
  ];

  const availableFiltered = integrationsOverview.available.filter(
    (a) => !connectedExtra.includes(a.name)
  );

  return (
    <>
      <section className="summary-grid">
        {integrationsOverview.summaryCards.map((item) => {
          if (item.label === "Ostatnia synchronizacja") {
            const hh = syncTime.getHours().toString().padStart(2, "0");
            const mm = syncTime.getMinutes().toString().padStart(2, "0");
            const diffSecs = Math.floor((now - syncTime) / 1000);
            const timeAgo =
              diffSecs < 60
                ? `${diffSecs} sek. temu`
                : diffSecs < 3600
                  ? `${Math.floor(diffSecs / 60)} min. temu`
                  : `${Math.floor(diffSecs / 3600)} godz. temu`;
            return (
              <article key={item.label} className="summary-card">
                <p className="card-label">{item.label}</p>
                <strong>{hh}:{mm}</strong>
                <span className="sync-live-note">
                  <span className="sync-live-dot" />
                  {timeAgo}
                </span>
              </article>
            );
          }
          return (
            <article key={item.label} className="summary-card">
              <p className="card-label">{item.label}</p>
              <strong>{item.value}</strong>
              <span>{item.note}</span>
            </article>
          );
        })}
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Przegląd integracji</p>
          <div className="integration-list">
            {allConnected.map((integration) => {
              const syncing = syncingIds.has(integration.name);
              const lastSync = syncTimestamps[integration.name] ?? integration.lastSync;
              return (
                <div key={integration.name} className="integration-card">
                  <div className="integration-top">
                    <div>
                      <strong>{integration.name}</strong>
                      <span>{integration.description}</span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                      <span className={`status-pill ${integration.status}`}>
                        {STATUS_LABELS[integration.status] ?? integration.status}
                      </span>
                      <button
                        className={`sync-button ${syncing ? "syncing" : ""}`}
                        onClick={() => handleSync(integration.name)}
                        disabled={syncing}
                        type="button"
                      >
                        <span className="sync-icon">↻</span>
                        {syncing ? "Trwa…" : "Synchronizuj"}
                      </button>
                    </div>
                  </div>
                  <div className="integration-meta">
                    <span>
                      <strong>Odpowiada:</strong> {integration.owner}
                    </span>
                    <span>
                      <strong>Ostatnia synchronizacja:</strong> {lastSync}
                    </span>
                  </div>
                  {integration.metrics.length > 0 && (
                    <div className="tag-grid compact">
                      {integration.metrics.map((metric) => (
                        <span key={metric} className="tag">
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}
                  {integration.usage && <p className="small-copy">{integration.usage}</p>}
                </div>
              );
            })}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Dodaj integracje</p>
          <div className="integration-list">
            {availableFiltered.map((integration) => (
              <div key={integration.name} className="integration-card available">
                <div className="integration-top">
                  <div>
                    <strong>{integration.name}</strong>
                    <span>{integration.category}</span>
                  </div>
                  <button
                    className="ghost-button"
                    type="button"
                    onClick={() => handleConnect(integration)}
                  >
                    Połącz
                  </button>
                </div>
                <p className="small-copy">{integration.preview}</p>
                <p className="small-copy muted">{integration.note}</p>
              </div>
            ))}
            {availableFiltered.length === 0 && (
              <div style={{ textAlign: "center", padding: "28px 16px" }}>
                <p style={{ color: "var(--teal)", fontWeight: 600, margin: 0 }}>
                  ✓ Wszystkie integracje są podłączone!
                </p>
              </div>
            )}
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

      {connectModal && (
        <Modal
          onClose={closeModal}
          title={`Podłącz ${connectModal.name}`}
          subtitle="Podaj dane uwierzytelniania, żeby połączyć integrację z FlowScope."
        >
          <div className="connect-steps">
            <div
              className={`connect-step ${
                connectModal.step > 1 ? "done" : connectModal.step === 1 ? "active" : ""
              }`}
            >
              <div className="connect-step-num">{connectModal.step > 1 ? "✓" : "1"}</div>
              <span>Konfiguracja</span>
            </div>
            <div className="connect-step-line" />
            <div
              className={`connect-step ${
                connectModal.step > 2 ? "done" : connectModal.step === 2 ? "active" : ""
              }`}
            >
              <div className="connect-step-num">{connectModal.step > 2 ? "✓" : "2"}</div>
              <span>Testowanie</span>
            </div>
            <div className="connect-step-line" />
            <div className={`connect-step ${connectModal.step === 3 ? "active" : ""}`}>
              <div className="connect-step-num">3</div>
              <span>Gotowe</span>
            </div>
          </div>

          {connectModal.step === 1 && (
            <>
              <p className="connect-label">URL lub API token</p>
              <input
                className="token-input"
                placeholder="https://api.example.com lub Bearer token…"
                value={connectModal.token}
                onChange={(e) =>
                  setConnectModal((prev) => ({ ...prev, token: e.target.value }))
                }
                autoFocus
              />
              <button
                className="add-btn"
                style={{ width: "100%" }}
                type="button"
                onClick={handleConnectNext}
                disabled={!connectModal.token.trim()}
              >
                Testuj połączenie →
              </button>
            </>
          )}

          {connectModal.step === 2 && (
            <>
              <p style={{ color: "var(--ink-soft)", margin: "0 0 4px" }}>
                Testowanie połączenia z {connectModal.name}…
              </p>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" />
              </div>
              <p className="small-copy">Weryfikacja uprawnień i dostępności danych…</p>
            </>
          )}

          {connectModal.step === 3 && (
            <>
              <div className="success-banner">
                <div className="success-banner-icon">✅</div>
                <h3>Połączono!</h3>
                <p>
                  {connectModal.name} zostal pomyslnie podłączony do FlowScope. Dane zaczna byc
                  synchronizowane automatycznie.
                </p>
              </div>
              <button
                className="add-btn"
                style={{ width: "100%", marginTop: "16px" }}
                type="button"
                onClick={handleConnectNext}
              >
                Gotowe
              </button>
            </>
          )}
        </Modal>
      )}
    </>
  );
}

// ─── Surveys Section ──────────────────────────────────────────────────────────

const RELEASE_QUESTIONS = [
  "Czy confidence przed release był wysoki?",
  "Czy proces release przebiegł zgodnie z planem?",
  "Czy komunikacja o release dotarła do wszystkich zainteresowanych?",
  "Czy jakość kodu po release spełniła oczekiwania?"
];

const QUARTERLY_QUESTIONS = [
  "Jak oceniasz jakość współpracy w zespole w ostatnim kwartale?",
  "Czy priorytety były jasne i stabilne przez cały kwartał?",
  "Jak oceniasz procesy delivery i przewidywalność sprintów?",
  "Czy narzędzia i infrastruktura wspierały pracę zespołu?",
  "Jak oceniasz jakość code review w tym kwartale?",
  "Czy workload był zrównoważony przez cały kwartał?",
  "Czy retrospektywy prowadziły do realnych zmian?",
  "Jak oceniasz komunikację między zespołami?",
  "Czy miałeś możliwość uczenia się i rozwoju w tym kwartale?",
  "Czy czujesz ryzyko wypalenia zawodowego?"
];

const ANNUAL_QUESTIONS = [
  "Jak oceniasz ogólną kulturę pracy w organizacji?",
  "Czy czujesz, że twój rozwój zawodowy jest wspierany?",
  "Jak oceniasz relacje z bezpośrednim przełożonym?",
  "Czy procesy i narzędzia pomagają ci pracować efektywnie?",
  "Jak oceniasz współpracę międzydziałową?",
  "Czy priorytety organizacji są dla ciebie jasne?",
  "Jak oceniasz poziom autonomii w swojej pracy?",
  "Czy feedback, który otrzymujesz, jest konstruktywny i regularny?",
  "Jak oceniasz równowagę między pracą a życiem prywatnym?",
  "Czy czujesz się psychologicznie bezpiecznie w swoim zespole?",
  "Jak oceniasz możliwości rozwoju zawodowego?",
  "Czy rozumiesz, jak twoja praca wpływa na cele organizacji?",
  "Jak oceniasz procesy onboardingu nowych członków zespołu?",
  "Czy są obszary, które chciałbyś poprawić w organizacji?"
];

const PROGRAM_BUILDER_CONFIG = {
  0: {
    cadence: surveysOverview.sprintBuilder.cadence,
    anonymity: surveysOverview.sprintBuilder.anonymity,
    responseGoal: surveysOverview.sprintBuilder.responseGoal,
    categories: surveysOverview.sprintBuilder.categories,
    questions: surveysOverview.sprintBuilder.questions
  },
  1: {
    cadence: "Warunkowo po ważnym release",
    anonymity: "Wyniki widoczne od minimum 3 odpowiedzi",
    responseGoal: "Cel: 80% odpowiedzi w 48h",
    categories: [
      { name: "Release Confidence", weight: "High", note: "Poziom pewności przed i po wydaniu." },
      { name: "Process Quality", weight: "High", note: "Jakość procesu wydawniczego." },
      { name: "Communication", weight: "Medium", note: "Komunikacja o release wewnątrz zespołu." },
      { name: "Post-release Stability", weight: "Medium", note: "Stabilnosc po wdrozeniu na produkcje." }
    ],
    questions: RELEASE_QUESTIONS
  },
  2: {
    cadence: "Raz na kwartał",
    anonymity: "Wyniki widoczne od minimum 5 odpowiedzi",
    responseGoal: "Cel: 85% odpowiedzi w 7 dni",
    categories: [
      { name: "Collaboration", weight: "High", note: "Jakość współpracy w zespole i między zespołami." },
      { name: "Process & Delivery", weight: "High", note: "Efektywnosc procesow i rytm delivery." },
      { name: "Tooling", weight: "Medium", note: "Jakość narzedzi i infrastruktury." },
      { name: "Wellbeing", weight: "Medium", note: "Równowaga workload i dobrostanu zespołu." }
    ],
    questions: QUARTERLY_QUESTIONS
  },
  3: {
    cadence: "Raz w roku",
    anonymity: "Wyniki widoczne od minimum 5 odpowiedzi",
    responseGoal: "Cel: 90% odpowiedzi w 14 dni",
    categories: [
      { name: "Culture & Values", weight: "High", note: "Kultura pracy i wartości organizacji." },
      { name: "Growth & Development", weight: "High", note: "Możliwości rozwoju zawodowego i nauki." },
      { name: "Leadership", weight: "High", note: "Jakość przywodztwa i zarzadzania." },
      { name: "Work-life Balance", weight: "Medium", note: "Równowaga między pracą a życiem prywatnym." },
      { name: "Psychological Safety", weight: "High", note: "Bezpieczeństwo psychologiczne w zespole." }
    ],
    questions: ANNUAL_QUESTIONS
  }
};

function SurveysSection({ showToast }) {
  const [customQuestionsByProgram, setCustomQuestionsByProgram] = useState({ 0: [], 1: [], 2: [], 3: [] });
  const [newQuestionText, setNewQuestionText] = useState("");
  const [editingIdx, setEditingIdx] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedProgramIdx, setSelectedProgramIdx] = useState(0);

  const selectedProgram = surveysOverview.programs[selectedProgramIdx];
  const builderConfig = PROGRAM_BUILDER_CONFIG[selectedProgramIdx];
  const builtIn = builderConfig.questions;
  const customQuestions = customQuestionsByProgram[selectedProgramIdx] ?? [];
  const allQuestions = [...builtIn, ...customQuestions];

  // Reset editing state when switching programs
  useEffect(() => {
    setEditingIdx(null);
    setNewQuestionText("");
  }, [selectedProgramIdx]);

  const addCustomQ = (text) => {
    setCustomQuestionsByProgram((prev) => ({
      ...prev,
      [selectedProgramIdx]: [...(prev[selectedProgramIdx] ?? []), text]
    }));
  };

  const handleAddQuestion = () => {
    const text = newQuestionText.trim();
    if (!text) return;
    addCustomQ(text);
    setNewQuestionText("");
    showToast("Pytanie dodane ✓", "success");
  };

  const handleDelete = (idx) => {
    setCustomQuestionsByProgram((prev) => ({
      ...prev,
      [selectedProgramIdx]: (prev[selectedProgramIdx] ?? []).filter((_, i) => i !== idx)
    }));
    if (editingIdx === idx) setEditingIdx(null);
    showToast("Pytanie usuniete", "info");
  };

  const handleStartEdit = (idx) => {
    setEditingIdx(idx);
    setEditingText(customQuestions[idx]);
  };

  const handleSaveEdit = () => {
    const text = editingText.trim();
    if (!text) return;
    setCustomQuestionsByProgram((prev) => ({
      ...prev,
      [selectedProgramIdx]: (prev[selectedProgramIdx] ?? []).map((q, i) => (i === editingIdx ? text : q))
    }));
    setEditingIdx(null);
    showToast("Pytanie zaktualizowane ✓", "success");
  };

  const handleAddFromAI = (question) => {
    addCustomQ(question);
    showToast("Pytanie dodane z sugestii AI ✓", "success");
  };

  const handleAddAllFromAI = (questions) => {
    setCustomQuestionsByProgram((prev) => ({
      ...prev,
      [selectedProgramIdx]: [...(prev[selectedProgramIdx] ?? []), ...questions]
    }));
    showToast(`Dodano ${questions.length} pytań z sugestii AI ✓`, "success");
  };

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
          <p className="card-label">Przegląd ankiet</p>

          <div className="survey-tab-bar">
            {surveysOverview.programs.map((program, idx) => (
              <button
                key={program.name}
                className={`survey-tab ${idx === selectedProgramIdx ? "active" : ""}`}
                onClick={() => setSelectedProgramIdx(idx)}
                type="button"
              >
                {program.name}
                <span className={`badge badge-${program.badge.toLowerCase()}`}>
                  {BADGE_LABELS[program.badge] ?? program.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="survey-program-detail">
            <div className="survey-program-purpose">{selectedProgram.purpose}</div>
            <div className="survey-program-meta-row">
              <span>📅 {selectedProgram.cadence}</span>
              <span>📋 {selectedProgram.length}</span>
              <span>👤 {selectedProgram.owner}</span>
            </div>
            <p className="card-label" style={{ margin: "6px 0 0" }}>
              Pytania ({allQuestions.length})
            </p>
            <div className="survey-q-list">
              {allQuestions.map((q, i) => (
                <div key={i} className="survey-q-row">
                  <div className="survey-q-num">{i + 1}</div>
                  <span>{q}</span>
                  {i >= builtIn.length && (
                    <span className="survey-custom-badge" style={{ gridColumn: "2" }}>Twoje</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="panel-card">
          <div className="builder-header">
            <div>
              <p className="card-label" style={{ marginBottom: 2 }}>Konfiguracja ankiety</p>
              <p style={{ margin: 0, fontWeight: 700, fontFamily: "'Bahnschrift','Aptos Display',sans-serif", letterSpacing: "-0.02em", fontSize: "1.05rem", color: "var(--ink)" }}>
                {selectedProgram.name}
              </p>
            </div>
            <button className="preview-btn" type="button" onClick={() => setPreviewOpen(true)}>
              👁 Podgląd
            </button>
          </div>

          <div className="builder-meta" style={{ marginTop: "14px" }}>
            <span>
              <strong>Rytm:</strong> {builderConfig.cadence}
            </span>
            <span>
              <strong>Anonimowość:</strong> {builderConfig.anonymity}
            </span>
            <span>
              <strong>Cel odpowiedzi:</strong> {builderConfig.responseGoal}
            </span>
          </div>

          <div className="category-list" style={{ marginTop: "14px" }}>
            {builderConfig.categories.map((category) => (
              <div key={category.name} className="category-card">
                <div className="category-top">
                  <strong>{category.name}</strong>
                  <span className="weight-pill">
                    {WEIGHT_LABELS[category.weight] ?? category.weight}
                  </span>
                </div>
                <p>{category.note}</p>
              </div>
            ))}
          </div>

          <p className="card-label" style={{ marginTop: "18px" }}>
            Pytania ({allQuestions.length})
          </p>

          <div className="question-list">
            {builtIn.map((question, index) => (
              <div key={question} className="question-row">
                <span className="question-index">{index + 1}</span>
                <span>{question}</span>
              </div>
            ))}

            {customQuestions.map((question, idx) => (
              <div key={`custom-${idx}`} className="question-row-interactive">
                <span className="question-index">{builtIn.length + idx + 1}</span>
                {editingIdx === idx ? (
                  <input
                    className="inline-edit-input"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
                    autoFocus
                  />
                ) : (
                  <span>{question}</span>
                )}
                <div className="question-actions">
                  {editingIdx === idx ? (
                    <button
                      className="icon-button"
                      type="button"
                      onClick={handleSaveEdit}
                      title="Zapisz"
                    >
                      ✓
                    </button>
                  ) : (
                    <>
                      <button
                        className="icon-button"
                        type="button"
                        onClick={() => handleStartEdit(idx)}
                        title="Edytuj"
                      >
                        ✏
                      </button>
                      <button
                        className="icon-button danger"
                        type="button"
                        onClick={() => handleDelete(idx)}
                        title="Usun"
                      >
                        ✕
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="add-question-form">
            <input
              className="add-question-input"
              placeholder="Wpisz nowe pytanie do ankiety…"
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddQuestion()}
            />
            <button
              className="add-btn"
              type="button"
              onClick={handleAddQuestion}
              disabled={!newQuestionText.trim()}
            >
              + Dodaj
            </button>
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Biblioteka pytań</p>
          <div className="library-list">
            {surveysOverview.library.map((group) => (
              <div key={group.category} className="library-card">
                <div className="program-top">
                  <div>
                    <strong>{group.category}</strong>
                    <span>{group.type === "Core" ? "Podstawowe" : "Opcjonalne"}</span>
                  </div>
                </div>
                <ul className="question-bullets-interactive">
                  {group.examples.map((example) => (
                    <div key={example} className="ai-question-row">
                      <li>{example}</li>
                      <button
                        className="add-single-btn"
                        type="button"
                        onClick={() => handleAddFromAI(example)}
                      >
                        + Dodaj
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Sugestie pytań AI</p>
          <div className="ai-list">
            {surveysOverview.aiSuggestions.map((suggestion) => (
              <div key={suggestion.prompt} className="ai-card">
                <strong>{suggestion.prompt}</strong>
                <ul className="question-bullets-interactive" style={{ marginTop: "10px" }}>
                  {suggestion.questions.map((question) => (
                    <div key={question} className="ai-question-row">
                      <li>{question}</li>
                      <button
                        className="add-single-btn"
                        type="button"
                        onClick={() => handleAddFromAI(question)}
                      >
                        + Dodaj
                      </button>
                    </div>
                  ))}
                </ul>
                <button
                  className="ghost-button"
                  type="button"
                  style={{ marginTop: "10px" }}
                  onClick={() => handleAddAllFromAI(suggestion.questions)}
                >
                  Dodaj wszystkie ({suggestion.questions.length}) do ankiety
                </button>
              </div>
            ))}
          </div>
        </article>
      </section>

      {previewOpen && (
        <Modal
          onClose={() => setPreviewOpen(false)}
          title={`Podgląd: ${selectedProgram.name}`}
          subtitle={`Tak wygląda ankieta dla członków zespołu. Odpowiedzi są anonimowe (min. ${selectedProgramIdx === 1 ? "3" : "5"} odpowiedzi).`}
        >
          <div className="survey-preview-intro">
            <p className="card-label" style={{ color: "var(--teal)" }}>
              {selectedProgram.name} — Northstar Digital
            </p>
            <p>
              Hej! Poniżej kilka pytań z ankiety {selectedProgram.name}. Zajmie to ok. {allQuestions.length <= 6 ? "2" : allQuestions.length <= 10 ? "5" : "10"} minut.
              Odpowiedzi są anonimowe i widoczne tylko w formie zagregowanej.
            </p>
          </div>

          {allQuestions.map((question, i) => (
            <div key={i} className="survey-question-block">
              <p>
                <strong>{i + 1}.</strong> {question}
                {i >= builtIn.length && (
                  <span className="survey-custom-badge">Twoje</span>
                )}
              </p>
              <div className="survey-scale">
                {[1, 2, 3, 4, 5].map((n) => (
                  <label key={n}>
                    <input type="radio" name={`q${i}`} value={n} />
                    <span className="survey-scale-num">{n}</span>
                  </label>
                ))}
              </div>
              <div className="survey-scale-labels">
                <span>Zdecydowanie nie</span>
                <span>Zdecydowanie tak</span>
              </div>
            </div>
          ))}

          <button
            className="add-btn"
            style={{ width: "100%", marginTop: "8px" }}
            type="button"
            onClick={() => {
              setPreviewOpen(false);
              showToast("Ankieta gotowa do wysłania w następnym sprincie ✓", "info");
            }}
          >
            Wysylam odpowiedz (demo)
          </button>
        </Modal>
      )}
    </>
  );
}

// ─── Teams Section ────────────────────────────────────────────────────────────

function TeamsSection({ selectedTeam, selectedTeamDetail, selectedTeamId, setSelectedTeamId }) {
  const history = selectedTeamDetail.sprintHistory;
  const maxTP = Math.max(...history.map((s) => parseSprintNum(s.throughput)));
  const maxDef = Math.max(...history.map((s) => parseSprintNum(s.defects)));
  const maxRev = Math.max(...history.map((s) => parseSprintNum(s.reviewTime)));

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
              <p className="card-label">Przegląd zespołów</p>
              <h3 className="section-title">Obraz całej organizacji</h3>
            </div>
            <p className="small-copy section-copy">
              Każda karta pokazuje stan zespołu, najważniejsze sygnały i temat, który warto omówić
              najszybciej.
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
                    <strong>Zespół:</strong> {team.squadSize}
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
              <p className="card-label">Szczegóły zespołu</p>
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
              <p className="card-label">Historia sprintów — wykres</p>
              <div className="sprint-chart">
                <div className="sprint-chart-legend">
                  <span className="sprint-legend-item">
                    <span
                      className="sprint-legend-dot"
                      style={{ background: "var(--blue)" }}
                    />
                    Throughput
                  </span>
                  <span className="sprint-legend-item">
                    <span
                      className="sprint-legend-dot"
                      style={{ background: "var(--amber)" }}
                    />
                    Defekty
                  </span>
                  <span className="sprint-legend-item">
                    <span
                      className="sprint-legend-dot"
                      style={{ background: "var(--teal)" }}
                    />
                    Review time
                  </span>
                </div>

                {history.map((sprint) => {
                  const tp = parseSprintNum(sprint.throughput);
                  const def = parseSprintNum(sprint.defects);
                  const rev = parseSprintNum(sprint.reviewTime);
                  return (
                    <div key={sprint.name} className="sprint-bar-group">
                      <div className="sprint-bar-header">
                        <span className="sprint-bar-label">{sprint.name}</span>
                        <span className="sprint-bar-period">{sprint.period}</span>
                      </div>
                      <div className="sprint-bar-row">
                        <span className="sprint-bar-name">Throughput</span>
                        <div className="sprint-bar-track">
                          <div
                            className="sprint-bar-fill throughput"
                            style={{ width: `${(tp / (maxTP || 1)) * 100}%` }}
                          />
                        </div>
                        <span className="sprint-bar-value">{sprint.throughput}</span>
                      </div>
                      <div className="sprint-bar-row">
                        <span className="sprint-bar-name">Defekty</span>
                        <div className="sprint-bar-track">
                          <div
                            className="sprint-bar-fill defects"
                            style={{ width: `${(def / (maxDef || 1)) * 100}%` }}
                          />
                        </div>
                        <span className="sprint-bar-value">{sprint.defects}</span>
                      </div>
                      <div className="sprint-bar-row">
                        <span className="sprint-bar-name">Review time</span>
                        <div className="sprint-bar-track">
                          <div
                            className="sprint-bar-fill review"
                            style={{ width: `${(rev / (maxRev || 1)) * 100}%` }}
                          />
                        </div>
                        <span className="sprint-bar-value">{sprint.reviewTime}</span>
                      </div>
                      <p className="sprint-bar-note">{sprint.note}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel-card">
          <p className="card-label">Najczęstsze tematy z komentarzy</p>
          <div className="signal-list">
            {selectedTeamDetail.commentThemes.map((item) => (
              <div key={item.theme} className="signal-card">
                <div className="program-top">
                  <strong>{item.theme}</strong>
                  <span className={`status-pill ${item.tone}`}>
                    {WEIGHT_LABELS[item.weight] ?? item.weight}
                  </span>
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
              <strong>Najbliższe działania</strong>
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

// ─── Insights Section ─────────────────────────────────────────────────────────

function InsightsSection({
  selectedTeam,
  selectedTeamDetail,
  selectedTeamId,
  setSelectedTeamId,
  showToast
}) {
  const [completedActions, setCompletedActions] = useState(new Set());

  const focusedInsight =
    insightsOverview.byTeam[selectedTeam.id] ??
    insightsOverview.byTeam[teamsOverview.dashboard[0].id];

  const toggleAction = (title) => {
    setCompletedActions((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
        showToast("Działanie oznaczone jako otwarte", "info");
      } else {
        next.add(title);
        showToast("Działanie oznaczone jako podjęte ✓", "success");
      }
      return next;
    });
  };

  const actionPlan = focusedInsight.actionPlan;
  const doneCount = actionPlan.filter((a) => completedActions.has(a.title)).length;
  const progressPct = actionPlan.length > 0 ? (doneCount / actionPlan.length) * 100 : 0;

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
              <p className="card-label">Najważniejsze sygnały</p>
              <h3 className="section-title">Priorytety dla organizacji</h3>
            </div>
            <p className="small-copy section-copy">
              Ten widok zbiera sygnały, które najbardziej wpływają na tempo pracy, jakość i
              stabilność zespołów.
            </p>
          </div>

          <div className="insight-overview-grid">
            {insightsOverview.topSignals.map((item) => (
              <div key={item.title} className={`overview-signal-card ${item.tone}`}>
                <div className="program-top">
                  <strong>{item.title}</strong>
                  <span className={`status-pill ${item.tone}`}>
                    {WEIGHT_LABELS[item.level] ?? item.level}
                  </span>
                </div>
                <p className="small-copy">{item.summary}</p>
                <div className="signal-meta-grid">
                  <span>
                    <strong>Zakres:</strong> {item.scope}
                  </span>
                  <span>
                    <strong>Pewność:</strong> {item.confidence}
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
              <p className="card-label">Wybrany zespół</p>
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
                  <span className={`status-pill ${item.tone}`}>
                    {WEIGHT_LABELS[item.weight] ?? item.weight}
                  </span>
                </div>
                <p className="small-copy">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <p className="card-label">Łańcuch sygnałów</p>
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
          <p className="card-label">Połączenie sygnałów</p>
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
              <strong>Jak system podsumowuje sytuację</strong>
              <p className="small-copy plain-copy">{focusedInsight.plainLanguage}</p>
            </div>

            <div className="insight-block">
              <strong>Komentarze, które to potwierdzają</strong>
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
              <p className="card-label">Plan działań</p>
              <h3 className="section-title">Działania na najbliższe 2 sprinty</h3>
            </div>
            <p className="small-copy section-copy">
              Każda rekomendacja ma właściciela, powód i moment sprawdzenia efektu.
            </p>
          </div>

          {doneCount > 0 && (
            <div className="actions-progress">
              <span className="actions-progress-label">
                {doneCount} / {actionPlan.length} podjęto
              </span>
              <div className="actions-progress-bar-track">
                <div
                  className="actions-progress-bar-fill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}

          <div
            className="action-plan-grid"
            style={{ marginTop: doneCount > 0 ? "14px" : "0" }}
          >
            {actionPlan.map((item) => {
              const done = completedActions.has(item.title);
              return (
                <div key={item.title} className={`action-card ${done ? "done" : ""}`}>
                  <div className="program-top">
                    <strong className="action-card-title">{item.title}</strong>
                    <span className={`status-pill ${item.tone}`}>
                      {WEIGHT_LABELS[item.priority] ?? item.priority}
                    </span>
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
                  <button
                    className="action-toggle"
                    type="button"
                    onClick={() => toggleAction(item.title)}
                  >
                    <span className={`action-checkbox ${done ? "checked" : ""}`}>
                      {done && "✓"}
                    </span>
                    {done ? "Podjęto — kliknij, aby cofnąć" : "Oznacz jako podjęte"}
                  </button>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}

// ─── Governance Section ───────────────────────────────────────────────────────

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
              <h3 className="section-title">Jak czytać te dane</h3>
            </div>
            <p className="small-copy section-copy">
              W tym miejscu widać, jak system pomaga korzystać z metryk bez tworzenia presji i
              złych nawyków.
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
                          ? "Prywatność"
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
          <p className="card-label">Model dostępu</p>
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
          <p className="card-label">Zasady prywatności</p>
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
