const mockData = {
  productName: "FlowScope",
  teamName: "Zespół Alpha",
  periodLabel: "Ostatnie 3 sprinty",
  hero: {
    headline: "Zespół, który na papierze przyspiesza, w praktyce zaczyna działać mniej zdrowo.",
    copy:
      "To demo łączy sygnały z GitHub, Jira i Slack, aby pokazać, dlaczego sam wzrost outputu nie jest wiarygodną miarą efektywności engineering."
  },
  storySummary:
    "Zespół został dociśnięty do szybszego release tempo. Throughput wzrósł, ale jakość, głębokość review i sustainability zespołu pogorszyły się w tym samym okresie.",
  sources: [
    { name: "GitHub", note: "PR-y, flow review i timing merge" },
    { name: "Jira", note: "Cycle time, throughput i praca pilna" },
    { name: "Slack", note: "Pulse survey i check-iny" }
  ],
  pillars: [
    {
      name: "Przepływ Delivery",
      score: 74,
      status: "caution",
      trend: "+21% throughput",
      description: "Praca porusza się szybciej, ale cały flow staje się bardziej kruchy."
    },
    {
      name: "Jakość i Stabilność",
      score: 42,
      status: "investigate",
      trend: "+167% defektów po wdrożeniu",
      description: "Spadek jakości sugeruje, że prędkość jest kupowana kosztem stabilności."
    },
    {
      name: "Przewidywalność i Fokus",
      score: 48,
      status: "investigate",
      trend: "+12 pkt pracy pilnej",
      description: "Rośnie presja wynikająca z interruptów, a planowanie staje się mniej stabilne."
    },
    {
      name: "Kondycja Zespołu",
      score: 56,
      status: "caution",
      trend: "-23% focus pulse",
      description: "Członkowie zespołu zgłaszają mniej czasu na fokus i mniej zrównoważone workload."
    }
  ],
  riskSignals: [
    {
      title: "Jakość pogarsza się mimo lepszego throughput",
      body: "Defekty po wdrożeniu wzrosły z 3 do 8, podczas gdy throughput zwiększył się z 28 do 34."
    },
    {
      title: "Czas review spadł zbyt szybko",
      body: "Czas review spadł z 21h do 12h, co może oznaczać spłycenie procesu review."
    },
    {
      title: "Praca pilna wypiera pracę planowaną",
      body: "Unplanned work i interrupt load rosną już drugi sprint z rzędu."
    }
  ],
  contextMarkers: [
    "Cel przyspieszenia release'ów",
    "Dwie pilne eskalacje od klientów",
    "Główny reviewer przejął dyżur on-call",
    "Zmiana priorytetów w połowie sprintu"
  ],
  recommendation:
    "Ogranicz pracę przerywaną na jeden sprint, rozłóż review load bardziej równomiernie i zabezpiecz bloki fokusowe zanim zespół zostanie znów dociśnięty do większego outputu.",
  sprints: [
    {
      name: "Sprint 1",
      throughput: 24,
      cycleTime: 4.8,
      leadTime: 6.2,
      reviewTime: 24,
      deployments: 5,
      defects: 2,
      urgentWork: 14,
      focus: 74,
      workload: 69,
      clarity: 76,
      tooling: 68,
      responseRate: 91
    },
    {
      name: "Sprint 2",
      throughput: 28,
      cycleTime: 5.3,
      leadTime: 7.1,
      reviewTime: 21,
      deployments: 7,
      defects: 3,
      urgentWork: 19,
      focus: 66,
      workload: 61,
      clarity: 69,
      tooling: 65,
      responseRate: 88
    },
    {
      name: "Sprint 3",
      throughput: 34,
      cycleTime: 6.4,
      leadTime: 8.9,
      reviewTime: 12,
      deployments: 9,
      defects: 8,
      urgentWork: 26,
      focus: 51,
      workload: 42,
      clarity: 58,
      tooling: 63,
      responseRate: 86
    }
  ],
  deliveryMetrics: [
    {
      label: "Throughput",
      value: "34 elementy",
      trend: "+21% vs Sprint 2",
      status: "healthy",
      source: ["Jira"],
      note: "Liczba ukończonych elementów pracy w sprincie"
    },
    {
      label: "Cycle Time",
      value: "6.4 dnia",
      trend: "+1.1 dnia",
      status: "caution",
      source: ["Jira"],
      note: "Czas od rozpoczęcia pracy do zakończenia"
    },
    {
      label: "Lead Time",
      value: "8.9 dnia",
      trend: "+1.8 dnia",
      status: "caution",
      source: ["GitHub", "Jira"],
      note: "Czas od zgłoszenia potrzeby do dostarczenia"
    },
    {
      label: "Czas Review",
      value: "12 godzin",
      trend: "-43% vs Sprint 1",
      status: "investigate",
      source: ["GitHub"],
      note: "Średni czas przejścia przez review PR-a"
    },
    {
      label: "Deployment Frequency",
      value: "9 wdrożeń",
      trend: "+2 vs Sprint 2",
      status: "healthy",
      source: ["GitHub"],
      note: "Liczba wdrożeń w sprincie"
    },
    {
      label: "Defekty po wdrożeniu",
      value: "8 defektów",
      trend: "+167% vs Sprint 2",
      status: "investigate",
      source: ["Jira"],
      note: "Problemy wykryte dopiero po wdrożeniu"
    }
  ],
  healthMetrics: [
    {
      label: "Focus Time",
      value: "51 / 100",
      trend: "-15 pkt",
      status: "investigate",
      source: ["Ankieta Slack"],
      note: "Czy zespół ma dość nieprzerwanego czasu na sensowną pracę"
    },
    {
      label: "Zrównoważenie Workloadu",
      value: "42 / 100",
      trend: "-19 pkt",
      status: "investigate",
      source: ["Ankieta Slack"],
      note: "Czy obecny workload jest odczuwany jako zrównoważony"
    },
    {
      label: "Jasność Priorytetów",
      value: "58 / 100",
      trend: "-11 pkt",
      status: "caution",
      source: ["Ankieta Slack"],
      note: "Czy zespół rozumie priorytety bieżącego sprintu"
    },
    {
      label: "Tooling Friction",
      value: "63 / 100",
      trend: "-2 pkt",
      status: "caution",
      source: ["Ankieta Slack"],
      note: "Czy narzędzia wspierają pracę zamiast ją spowalniać"
    }
  ],
  comments: [
    {
      tag: "Presja na code review",
      text: "Review jest szybsze, ale też płytsze. Zatwierdzamy więcej PR-ów bez wystarczającego czasu na głębszą analizę."
    },
    {
      tag: "Interrupt load",
      text: "Za dużo pilnych zgłoszeń rozbija fokus sprintu. Praca planowana jest ciągle wypierana."
    },
    {
      tag: "Jasność planowania",
      text: "Priorytety zmieniały się więcej niż raz w trakcie sprintu, co utrudniło estymację i koordynację."
    }
  ],
  insights: [
    {
      title: "Brak równowagi między szybkością a jakością",
      status: "investigate",
      summary:
        "Zespół dostarcza więcej elementów, ale trend defektów sugeruje, że kontrola jakości jest przeciążona.",
      caution:
        "Nie interpretuj wzrostu throughput jako czystej poprawy, gdy defekty i cycle time idą w złym kierunku.",
      evidence: ["Throughput +21%", "Defekty +167%", "Cycle time +1.1 dnia"]
    },
    {
      title: "Ryzyko kompresji review",
      status: "caution",
      summary:
        "Czas review gwałtownie spadł przy jednoczesnym przyspieszeniu release'ów, co może oznaczać płytsze review albo przeciążenie reviewerów.",
      caution:
        "Szybkie review nie zawsze oznacza dobre review. System powinien sprawdzić rozmiar PR-ów, capacity reviewerów i presję release'ów razem.",
      evidence: ["Czas review 24h -> 12h", "Wdrożenia 5 -> 9", "Komentarz: płytkie review"]
    },
    {
      title: "Ostrzeżenie o sustainability",
      status: "investigate",
      summary:
        "Sygnały z ankiet pokazują mniej czasu na fokus, słabsze workload sustainability i mniejszą jasność priorytetów w tym samym okresie.",
      caution:
        "To wygląda na presję procesową, a nie problem wydajności pojedynczych osób. Najpierw stosuj działania na poziomie zespołu.",
      evidence: ["Focus 74 -> 51", "Workload 69 -> 42", "Praca pilna 14 -> 26"]
    }
  ],
  actions: [
    {
      title: "Zabezpiecz bloki fokusowe na jeden sprint",
      owner: "Engineering Manager",
      reviewDate: "Następny przegląd sprintu",
      body:
        "Wprowadź no-meeting time i przekieruj pilne zgłoszenia przez jeden punkt decyzyjny, aby ograniczyć interrupt load."
    },
    {
      title: "Rozłóż reviewer load bardziej równomiernie",
      owner: "Tech Lead",
      reviewDate: "W ciągu 2 tygodni",
      body:
        "Rozdziel ownership review, oznaczaj zbyt duże PR-y i unikaj kierowania większości review do jednej osoby."
    },
    {
      title: "Sprawdź presję release'ów względem defektów",
      owner: "Delivery Lead",
      reviewDate: "Po następnym release",
      body:
        "Porównaj częstotliwość release'ów, rozmiar PR-ów i wzorce ucieczki defektów, aby znaleźć moment, w którym szybkość zaczyna szkodzić stabilności."
    }
  ],
  antiPatterns: [
    {
      title: "Commits per developer",
      whyBad:
        "Promuje głośną aktywność zamiast realnego postępu i ignoruje złożoność pracy, pairing oraz review.",
      saferAlternative:
        "Używaj team throughput, lead time i jakości razem ze znacznikami kontekstu.",
      rule: "Nigdy nie używaj jako metryki rankingu indywidualnego."
    },
    {
      title: "Lines of code written",
      whyBad:
        "Nagradza objętość zamiast jakości i może karać refactoring, usuwanie kodu albo upraszczanie rozwiązania.",
      saferAlternative:
        "Lepiej używać defektów po wdrożeniu, jakości review i outcome'ów delivery.",
      rule: "Traktuj objętość kodu jako artefakt techniczny, a nie sygnał produktywności."
    },
    {
      title: "Tickets closed per person",
      whyBad:
        "Popycha zespoły do nienaturalnego rozbijania pracy i zniechęca do współpracy przy trudniejszych zadaniach.",
      saferAlternative:
        "Lepiej śledzić team throughput i mix typów pracy, a potem omawiać kontekst presji delivery.",
      rule: "Mierz flow zespołu, a nie liczbę ticketów zamykanych przez osobę."
    },
    {
      title: "Story points per person",
      whyBad:
        "Zamienia estymacje planistyczne w target wydajności i zachęca do grania estymacją.",
      saferAlternative:
        "Lepiej używać przewidywalności sprintu i relacji planned-vs-unplanned work na poziomie zespołu.",
      rule: "Story points służą rozmowie o planowaniu, a nie ocenianiu outputu pojedynczych osób."
    }
  ]
};

const screenMeta = {
  overview: {
    title: "Przegląd",
    subtitle: "Zbalansowany obraz efektywności zespołu w obszarach delivery, jakości, fokusu i wellbeing."
  },
  delivery: {
    title: "Delivery i Jakość",
    subtitle: "Metryki operacyjne z GitHub i Jira pokazują, gdzie flow się poprawia, a gdzie zaczyna spadać jakość."
  },
  health: {
    title: "Kondycja Zespołu",
    subtitle: "Lekkie sygnały z ankiet pokazują ludzki kontekst stojący za zmianami operacyjnymi."
  },
  insights: {
    title: "Insighty i Działania",
    subtitle: "Warstwa interpretacji łączy metryki i feedback w konkretne kolejne kroki."
  },
  guardrails: {
    title: "Guardrails KPI",
    subtitle: "Ten system został zaprojektowany, by rozwijać zespoły, a nie tworzyć rankingi pracowników."
  }
};

function renderSources() {
  const sourceList = document.getElementById("source-list");
  sourceList.innerHTML = mockData.sources
    .map(
      (source) => `
        <span class="source-chip" title="${source.note}">
          ${source.name}
        </span>
      `
    )
    .join("");
}

function renderOverview() {
  document.getElementById("hero-headline").textContent = mockData.hero.headline;
  document.getElementById("hero-copy").textContent = mockData.hero.copy;
  document.getElementById("story-summary").textContent = mockData.storySummary;
  document.getElementById("top-recommendation").textContent = mockData.recommendation;

  const pillarGrid = document.getElementById("pillar-grid");
  pillarGrid.innerHTML = mockData.pillars
    .map(
      (pillar) => `
        <article class="metric-card">
          <p class="section-kicker">${pillar.name}</p>
          <div class="metric-score">
            <strong>${pillar.score}</strong>
            <span class="status-badge" data-status="${pillar.status}">${formatStatus(pillar.status)}</span>
          </div>
          <p class="metric-trend">${pillar.trend}</p>
          <p class="small-note">${pillar.description}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("risk-list").innerHTML = mockData.riskSignals
    .map(
      (item) => `
        <li class="signal-item">
          <strong>${item.title}</strong>
          <span>${item.body}</span>
        </li>
      `
    )
    .join("");

  document.getElementById("context-list").innerHTML = mockData.contextMarkers
    .map((item) => `<span class="context-pill">${item}</span>`)
    .join("");
}

function renderMetricCards(targetId, metrics) {
  const target = document.getElementById(targetId);
  target.innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <p class="section-kicker">${metric.label}</p>
          <div class="metric-score">
            <strong>${metric.value}</strong>
            <span class="status-badge" data-status="${metric.status}">${formatStatus(metric.status)}</span>
          </div>
          <p class="metric-trend">${metric.trend}</p>
          <p class="small-note">${metric.note}</p>
          <div class="metric-source">
            ${metric.source.map((source) => `<span class="source-tag">${source}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderDeliveryTable() {
  const body = document.getElementById("delivery-table");
  body.innerHTML = mockData.sprints
    .map(
      (sprint) => `
        <tr>
          <td>${sprint.name}</td>
          <td>${sprint.throughput}</td>
          <td>${sprint.cycleTime} d</td>
          <td>${sprint.leadTime} d</td>
          <td>${sprint.reviewTime} h</td>
          <td>${sprint.deployments}</td>
          <td>${sprint.defects}</td>
          <td>${sprint.urgentWork}%</td>
        </tr>
      `
    )
    .join("");
}

function renderComments() {
  const list = document.getElementById("comment-list");
  list.innerHTML = mockData.comments
    .map(
      (comment) => `
        <div class="comment-item">
          <span class="comment-tag">${comment.tag}</span>
          <p class="comment-copy">${comment.text}</p>
        </div>
      `
    )
    .join("");
}

function renderInsights() {
  const insightGrid = document.getElementById("insight-grid");
  insightGrid.innerHTML = mockData.insights
    .map(
      (insight) => `
        <article class="insight-card">
          <span class="status-badge" data-status="${insight.status}">${formatStatus(insight.status)}</span>
          <h3>${insight.title}</h3>
          <p class="insight-copy">${insight.summary}</p>
          <div class="insight-evidence">
            ${insight.evidence.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <div>
            <strong>Uwaga</strong>
            <span class="small-note">${insight.caution}</span>
          </div>
        </article>
      `
    )
    .join("");

  const actionPlan = document.getElementById("action-plan");
  actionPlan.innerHTML = mockData.actions
    .map(
      (action) => `
        <div class="action-item">
          <strong>${action.title}</strong>
          <span><strong>Właściciel</strong> ${action.owner}</span>
          <span><strong>Przegląd</strong> ${action.reviewDate}</span>
          <span class="small-note">${action.body}</span>
        </div>
      `
    )
    .join("");
}

function renderAntiPatterns() {
  const grid = document.getElementById("antipattern-grid");
  grid.innerHTML = mockData.antiPatterns
    .map(
      (item) => `
        <article class="antipattern-card">
          <h3>${item.title}</h3>
          <ul>
            <li><strong>Dlaczego to szkodzi:</strong> ${item.whyBad}</li>
            <li><strong>Bezpieczniejsza alternatywa:</strong> ${item.saferAlternative}</li>
            <li><strong>Zasada ochronna:</strong> ${item.rule}</li>
          </ul>
        </article>
      `
    )
    .join("");
}

function renderCharts() {
  renderLineChart("delivery-chart", [
    {
      label: "Throughput",
      color: "#0f766e",
      values: mockData.sprints.map((item) => item.throughput),
      suffix: ""
    },
    {
      label: "Cycle Time",
      color: "#15324a",
      values: mockData.sprints.map((item) => item.cycleTime),
      suffix: "d"
    }
  ]);

  renderLineChart("quality-chart", [
    {
      label: "Defekty po wdrożeniu",
      color: "#b64736",
      values: mockData.sprints.map((item) => item.defects),
      suffix: ""
    },
    {
      label: "Praca pilna",
      color: "#c77813",
      values: mockData.sprints.map((item) => item.urgentWork),
      suffix: "%"
    }
  ]);

  renderLineChart("health-chart", [
    {
      label: "Focus Time",
      color: "#15324a",
      values: mockData.sprints.map((item) => item.focus),
      suffix: ""
    },
    {
      label: "Workload",
      color: "#b64736",
      values: mockData.sprints.map((item) => item.workload),
      suffix: ""
    },
    {
      label: "Jasność priorytetów",
      color: "#0f766e",
      values: mockData.sprints.map((item) => item.clarity),
      suffix: ""
    }
  ]);
}

function renderLineChart(targetId, series) {
  const target = document.getElementById(targetId);
  const width = 640;
  const height = 260;
  const padding = 42;
  const labels = mockData.sprints.map((item) => item.name);

  const allValues = series.flatMap((item) => item.values);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const span = maxValue - minValue || 1;

  const xForIndex = (index) =>
    padding + (index * (width - padding * 2)) / Math.max(labels.length - 1, 1);
  const yForValue = (value) =>
    height - padding - ((value - minValue) / span) * (height - padding * 2);

  const gridLines = 4;
  const gridMarkup = Array.from({ length: gridLines + 1 }, (_, index) => {
    const y = padding + ((height - padding * 2) / gridLines) * index;
    return `<line class="chart-grid" x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}"></line>`;
  }).join("");

  const axisMarkup = `
    <line class="chart-axis" x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}"></line>
    <line class="chart-axis" x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}"></line>
  `;

  const labelsMarkup = labels
    .map(
      (label, index) => `
        <text class="chart-label" x="${xForIndex(index)}" y="${height - padding + 24}" text-anchor="middle">${label}</text>
      `
    )
    .join("");

  const seriesMarkup = series
    .map((line) => {
      const points = line.values.map((value, index) => `${xForIndex(index)},${yForValue(value)}`).join(" ");
      const pointMarkup = line.values
        .map(
          (value, index) => `
            <circle class="chart-point" cx="${xForIndex(index)}" cy="${yForValue(value)}" r="6" fill="${line.color}"></circle>
            <text class="chart-label" x="${xForIndex(index)}" y="${yForValue(value) - 12}" text-anchor="middle">${value}${line.suffix}</text>
          `
        )
        .join("");

      return `
        <polyline class="chart-line" stroke="${line.color}" points="${points}"></polyline>
        ${pointMarkup}
      `;
    })
    .join("");

  const legendMarkup = series
    .map(
      (line) => `
        <span class="legend-item">
          <span class="legend-swatch" style="background:${line.color}"></span>
          ${line.label}
        </span>
      `
    )
    .join("");

  target.innerHTML = `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Wykres trendu">
      ${gridMarkup}
      ${axisMarkup}
      ${seriesMarkup}
      ${labelsMarkup}
    </svg>
    <div class="chart-legend">${legendMarkup}</div>
  `;
}

function formatStatus(status) {
  const labels = {
    healthy: "Zdrowo",
    caution: "Uwaga",
    investigate: "Sprawdź"
  };
  return labels[status] || status;
}

function activateScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screenId);
  });

  document.getElementById("screen-title").textContent = screenMeta[screenId].title;
  document.getElementById("screen-subtitle").textContent = screenMeta[screenId].subtitle;
}

function bindNavigation() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => activateScreen(button.dataset.screen));
  });
}

function init() {
  renderSources();
  renderOverview();
  renderMetricCards("delivery-metrics", mockData.deliveryMetrics);
  renderMetricCards("health-metrics", mockData.healthMetrics);
  renderDeliveryTable();
  renderComments();
  renderInsights();
  renderAntiPatterns();
  renderCharts();
  bindNavigation();
  activateScreen("overview");
}

document.addEventListener("DOMContentLoaded", init);
