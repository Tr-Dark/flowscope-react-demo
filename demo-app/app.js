const mockData = {
  productName: "FlowScope",
  teamName: "Team Alpha",
  periodLabel: "Last 3 sprints",
  hero: {
    headline: "A team that looks faster on paper is quietly becoming less healthy.",
    copy:
      "This mock demo combines GitHub, Jira, and Slack signals to show why raw output alone is not a reliable measure of engineering effectiveness."
  },
  storySummary:
    "Leadership pushed for faster releases. Throughput rose, but review depth, quality, and team sustainability weakened across the same period.",
  sources: [
    { name: "GitHub", note: "PRs, review flow, merge timing" },
    { name: "Jira", note: "Cycle time, throughput, urgent work" },
    { name: "Slack", note: "Pulse survey and check-ins" }
  ],
  pillars: [
    {
      name: "Delivery Flow",
      score: 74,
      status: "caution",
      trend: "+21% throughput",
      description: "Work is moving faster, but flow is becoming more fragile."
    },
    {
      name: "Quality & Stability",
      score: 42,
      status: "investigate",
      trend: "+167% escaped defects",
      description: "Quality deterioration suggests speed is being bought at a cost."
    },
    {
      name: "Predictability & Focus",
      score: 48,
      status: "investigate",
      trend: "+12 pts urgent work",
      description: "Interrupt pressure is rising and planning is less stable."
    },
    {
      name: "Team Health",
      score: 56,
      status: "caution",
      trend: "-23% focus pulse",
      description: "Team members report less focus time and less sustainable workload."
    }
  ],
  riskSignals: [
    {
      title: "Quality is worsening behind stronger throughput",
      body: "Escaped defects increased from 3 to 8 while throughput rose from 28 to 34."
    },
    {
      title: "Review time dropped too fast",
      body: "Review time fell from 21h to 12h, which may signal compressed review depth."
    },
    {
      title: "Urgent work is crowding out planned work",
      body: "Unplanned work and interrupt load increased for two sprints in a row."
    }
  ],
  contextMarkers: [
    "Release acceleration target",
    "Two urgent customer escalations",
    "Shared reviewer became on-call lead",
    "Planning priorities changed mid-sprint"
  ],
  recommendation:
    "Reduce interrupt work for one sprint, rebalance reviewer load, and protect focus blocks before pushing for more output.",
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
      value: "34 items",
      trend: "+21% vs Sprint 2",
      status: "healthy",
      source: ["Jira"],
      note: "Completed work items per sprint"
    },
    {
      label: "Cycle Time",
      value: "6.4 days",
      trend: "+1.1 days",
      status: "caution",
      source: ["Jira"],
      note: "Time from active work to done"
    },
    {
      label: "Lead Time",
      value: "8.9 days",
      trend: "+1.8 days",
      status: "caution",
      source: ["GitHub", "Jira"],
      note: "Request to delivered work"
    },
    {
      label: "Review Time",
      value: "12 hours",
      trend: "-43% vs Sprint 1",
      status: "investigate",
      source: ["GitHub"],
      note: "Average PR review turnaround"
    },
    {
      label: "Deployment Frequency",
      value: "9 deploys",
      trend: "+2 vs Sprint 2",
      status: "healthy",
      source: ["GitHub"],
      note: "Deployments shipped in the sprint"
    },
    {
      label: "Escaped Defects",
      value: "8 defects",
      trend: "+167% vs Sprint 2",
      status: "investigate",
      source: ["Jira"],
      note: "Production issues found after release"
    }
  ],
  healthMetrics: [
    {
      label: "Focus Time",
      value: "51 / 100",
      trend: "-15 pts",
      status: "investigate",
      source: ["Slack survey"],
      note: "Enough uninterrupted time to do meaningful work"
    },
    {
      label: "Workload Sustainability",
      value: "42 / 100",
      trend: "-19 pts",
      status: "investigate",
      source: ["Slack survey"],
      note: "Current workload feels sustainable"
    },
    {
      label: "Priority Clarity",
      value: "58 / 100",
      trend: "-11 pts",
      status: "caution",
      source: ["Slack survey"],
      note: "Team understands current sprint priorities"
    },
    {
      label: "Tooling Friction",
      value: "63 / 100",
      trend: "-2 pts",
      status: "caution",
      source: ["Slack survey"],
      note: "Tools support rather than slow down delivery"
    }
  ],
  comments: [
    {
      tag: "Code review pressure",
      text: "Reviews are faster, but they feel thinner. We are approving more PRs without enough time to look deeply."
    },
    {
      tag: "Interrupt load",
      text: "Too many urgent requests are breaking sprint focus. Planned work keeps getting displaced."
    },
    {
      tag: "Planning clarity",
      text: "Priorities changed more than once during the sprint, which made estimation and coordination harder."
    }
  ],
  insights: [
    {
      title: "Speed vs quality imbalance",
      status: "investigate",
      summary:
        "The team is shipping more items, but the defect trend suggests that quality controls are under strain.",
      caution:
        "Do not interpret rising throughput as pure improvement while defects and cycle time are moving in the wrong direction.",
      evidence: ["Throughput +21%", "Defects +167%", "Cycle time +1.1 days"]
    },
    {
      title: "Review compression risk",
      status: "caution",
      summary:
        "Review time dropped sharply while releases accelerated, which may indicate reduced review depth or overloaded reviewers.",
      caution:
        "Fast review is not always healthy review. The system should inspect PR size, reviewer capacity, and release pressure together.",
      evidence: ["Review time 24h -> 12h", "Deployments 5 -> 9", "Comment theme: shallow reviews"]
    },
    {
      title: "Sustainability warning",
      status: "investigate",
      summary:
        "Survey signals show less focus time, lower workload sustainability, and weaker clarity in the same period.",
      caution:
        "This looks like process pressure, not an individual performance issue. Use team-level interventions first.",
      evidence: ["Focus 74 -> 51", "Workload 69 -> 42", "Urgent work 14 -> 26"]
    }
  ],
  actions: [
    {
      title: "Protect focus blocks for one sprint",
      owner: "Engineering Manager",
      reviewDate: "Next sprint review",
      body:
        "Reserve no-meeting time and route urgent requests through one decision point to cut interrupt load."
    },
    {
      title: "Rebalance reviewer load",
      owner: "Tech Lead",
      reviewDate: "Within 2 weeks",
      body:
        "Distribute review ownership, flag oversized PRs, and avoid routing most reviews through one person."
    },
    {
      title: "Audit release pressure against defects",
      owner: "Delivery Lead",
      reviewDate: "After next release",
      body:
        "Compare release frequency, PR size, and defect escape patterns to find the threshold where speed harms stability."
    }
  ],
  antiPatterns: [
    {
      title: "Commits per developer",
      whyBad:
        "Encourages noisy activity instead of meaningful progress and ignores complexity, pairing, and review work.",
      saferAlternative:
        "Use team throughput, lead time, and quality together with context markers.",
      rule: "Never use as an individual ranking metric."
    },
    {
      title: "Lines of code written",
      whyBad:
        "Rewards volume over clarity and can punish refactoring, deletion, or simplification.",
      saferAlternative:
        "Use escaped defects, review quality, and delivery outcomes instead.",
      rule: "Treat code volume as a technical artifact, not a productivity signal."
    },
    {
      title: "Tickets closed per person",
      whyBad:
        "Pushes teams toward splitting work unnaturally and discourages collaboration on complex tasks.",
      saferAlternative:
        "Track team throughput and work item mix, then discuss context around delivery pressure.",
      rule: "Measure team flow, not personal ticket counts."
    },
    {
      title: "Story points per person",
      whyBad:
        "Turns planning estimates into performance targets and invites gaming of estimation.",
      saferAlternative:
        "Use sprint predictability and planned-vs-unplanned work at team level.",
      rule: "Story points are for planning conversations, not personal output scoring."
    }
  ]
};

const screenMeta = {
  overview: {
    title: "Overview",
    subtitle: "A balanced snapshot of team effectiveness across delivery, quality, focus, and wellbeing."
  },
  delivery: {
    title: "Delivery & Quality",
    subtitle: "Operational metrics from GitHub and Jira show where flow improves and where quality begins to slip."
  },
  health: {
    title: "Team Health",
    subtitle: "Lightweight survey signals explain the human context behind the operational changes."
  },
  insights: {
    title: "Insights & Actions",
    subtitle: "The interpretation layer connects metrics and feedback into concrete next steps."
  },
  guardrails: {
    title: "KPI Guardrails",
    subtitle: "This system is built to improve teams, not to rank individual employees."
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
            <strong>Caution</strong>
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
          <span><strong>Owner</strong> ${action.owner}</span>
          <span><strong>Review</strong> ${action.reviewDate}</span>
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
            <li><strong>Why it is harmful:</strong> ${item.whyBad}</li>
            <li><strong>Safer alternative:</strong> ${item.saferAlternative}</li>
            <li><strong>Guardrail:</strong> ${item.rule}</li>
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
      label: "Escaped Defects",
      color: "#b64736",
      values: mockData.sprints.map((item) => item.defects),
      suffix: ""
    },
    {
      label: "Urgent Work",
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
      label: "Priority Clarity",
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
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Trend chart">
      ${gridMarkup}
      ${axisMarkup}
      ${seriesMarkup}
      ${labelsMarkup}
    </svg>
    <div class="chart-legend">${legendMarkup}</div>
  `;
}

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
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
