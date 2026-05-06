export const appSummary = {
  organization: "Northstar Digital",
  size: "180 osób w IT, 3 zespoły produktowe",
  tooling: "GitHub + Jira + Slack + CI/CD",
  stageStatus: "Etap 3: Integrations i Surveys",
  teams: [
    {
      name: "Team Alpha",
      role: "Główna platforma klienta",
      status: "investigate",
      summary: "Duża presja release, rosnące ryzyko jakości i przeciążenia."
    },
    {
      name: "Team Beta",
      role: "Platforma i integracje",
      status: "healthy",
      summary: "Stabilny zespół z drobnymi problemami zależności."
    },
    {
      name: "Team Gamma",
      role: "Nowe funkcje biznesowe",
      status: "caution",
      summary: "Dobry throughput, ale mieszane sygnały z quality i survey."
    }
  ]
};

export const sections = [
  {
    id: "integrations",
    index: "01",
    title: "Integrations",
    short: "Źródła twardych danych",
    description:
      "Sekcja pokazująca, skąd system bierze dane z GitHub, Jira, Slack i CI/CD oraz jak mapuje je na metryki produktu.",
    heroTitle: "Najpierw pokazujemy dane twarde, potem dopiero feedback zespołu.",
    heroCopy:
      "Ta sekcja ma od razu uciąć skojarzenie, że FlowScope to tylko narzędzie ankietowe. Użytkownik ma zobaczyć, że rdzeń produktu stoi na integracjach z narzędziami pracy.",
    futureItems: [
      "Integrations Overview",
      "Add Integration",
      "Mapa metryk z podłączonych usług"
    ],
    screens: [
      {
        name: "Integrations Overview",
        goal: "Pokazać aktywne integracje i typy zbieranych danych.",
        status: "Implemented"
      },
      {
        name: "Add Integration",
        goal: "Pokazać, że produkt można rozbudować o nowe źródła danych.",
        status: "Implemented"
      }
    ],
    dataPoints: [
      "PR review time",
      "Throughput",
      "Cycle time",
      "Deployment frequency",
      "Survey delivery przez Slack"
    ],
    nextStep: {
      title: "Dodać mapowanie danych do ekranów Teams",
      body: "Po ekranie integracji kolejnym krokiem będzie pokazanie, jak konkretne metryki z GitHub i Jira trafiają do dashboardu Team Alpha."
    }
  },
  {
    id: "surveys",
    index: "02",
    title: "Surveys",
    short: "Ankiety po sprincie i biblioteka pytań",
    description:
      "Sekcja pokazująca ankietę po sprincie jako główny mechanizm zbierania krótkiego feedbacku jakościowego.",
    heroTitle: "Sprint Survey jest sercem warstwy feedbackowej produktu.",
    heroCopy:
      "Tutaj użytkownik ma zrozumieć, że ankiety są krótkie, regularne i osadzone w rytmie pracy zespołu. Nie są dodatkiem HR-owym, tylko elementem analizy delivery.",
    futureItems: [
      "Survey Overview",
      "Sprint Survey Builder",
      "Question Library",
      "AI Question Suggestions"
    ],
    screens: [
      {
        name: "Survey Overview",
        goal: "Pokazać wszystkie typy ankiet i wyróżnić Sprint Survey jako core.",
        status: "Implemented"
      },
      {
        name: "Sprint Survey Builder",
        goal: "Pokazać kategorie pytań, częstotliwość i anonimowość.",
        status: "Implemented"
      },
      {
        name: "Question Library",
        goal: "Pokazać gotowe pytania systemowe i podział na core vs optional.",
        status: "Implemented"
      }
    ],
    dataPoints: [
      "Workload sustainability",
      "Focus time",
      "Clarity",
      "Review quality",
      "Tooling friction",
      "Response rate"
    ],
    nextStep: {
      title: "Podpiąć wyniki Sprint Survey do Team Detail",
      body: "Po builderze i bibliotece pytań kolejnym etapem będzie pokazanie wyników ankiety po sprincie na poziomie konkretnych zespołów."
    }
  },
  {
    id: "teams",
    index: "03",
    title: "Teams",
    short: "Widok organizacji i zespołów",
    description:
      "Sekcja pokazująca stan organizacji oraz szczegółowy dashboard dla zespołu, na którym najlepiej widać sens produktu.",
    heroTitle: "To tutaj produkt zaczyna wyglądać jak prawdziwe narzędzie dla managera.",
    heroCopy:
      "Użytkownik powinien widzieć nie tylko jeden zespół, ale też kontekst organizacyjny: porównanie statusów, top risks i top strengths między zespołami.",
    futureItems: [
      "Teams Dashboard",
      "Team Detail",
      "Porównanie trendów między zespołami"
    ],
    screens: [
      {
        name: "Teams Dashboard",
        goal: "Pokazać status wszystkich zespołów i główne ryzyka.",
        status: "Planned"
      },
      {
        name: "Team Detail",
        goal: "Wejść głębiej w historię Team Alpha.",
        status: "Planned"
      }
    ],
    dataPoints: [
      "3 sprinty danych",
      "Team status",
      "Top risk",
      "Top strength",
      "Survey trend",
      "Open comments themes"
    ],
    nextStep: {
      title: "Zamknąć realistyczne dane dla 3 zespołów",
      body: "Musimy przygotować spójne historie dla Alpha, Beta i Gamma, żeby dashboard organizacji miał sens."
    }
  },
  {
    id: "insights",
    index: "04",
    title: "Insights",
    short: "Analiza AI i rekomendacje",
    description:
      "Sekcja pokazująca największą wartość FlowScope: łączenie twardych danych, ankiet i komentarzy w interpretację oraz działania.",
    heroTitle: "Tutaj produkt przestaje być dashboardem, a staje się narzędziem decyzyjnym.",
    heroCopy:
      "Na tym etapie użytkownik ma zobaczyć, że FlowScope nie tylko pokazuje liczby, ale tłumaczy, co się dzieje i co warto zrobić dalej.",
    futureItems: [
      "Insights Overview",
      "Extended AI Analysis",
      "Action Planner"
    ],
    screens: [
      {
        name: "Insights Overview",
        goal: "Pokazać listę najważniejszych wniosków i trendów.",
        status: "Planned"
      },
      {
        name: "Extended AI Analysis",
        goal: "Pokazać połączenie delivery, ankiet i komentarzy.",
        status: "Planned"
      },
      {
        name: "Action Planner",
        goal: "Pokazać działania, właścicieli i review date.",
        status: "Planned"
      }
    ],
    dataPoints: [
      "Throughput vs defects",
      "Review time",
      "Workload score",
      "Comment clusters",
      "AI explanation",
      "Suggested action"
    ],
    nextStep: {
      title: "Przygotować 5-8 gotowych insightów",
      body: "Potrzebujemy gotowych hipotez i rekomendacji, żeby ekran analizy wyglądał jak realny produkt."
    }
  },
  {
    id: "governance",
    index: "05",
    title: "Governance",
    short: "Bezpieczne użycie KPI i ankiet",
    description:
      "Sekcja pokazująca, że produkt ma zasady bezpieczeństwa i nie wspiera toksycznego użycia metryk ani ankiet.",
    heroTitle: "Guardrails to nie dodatek. To część przewagi produktu.",
    heroCopy:
      "Ta sekcja ma pokazać, że FlowScope świadomie odcina się od narzędzi, które zamieniają ludzi w rankingi i tworzą presję opartą na złych KPI.",
    futureItems: [
      "KPI Guardrails",
      "Survey Governance",
      "Privacy rules"
    ],
    screens: [
      {
        name: "KPI Guardrails",
        goal: "Pokazać złe KPI i bezpieczniejsze alternatywy.",
        status: "Planned"
      },
      {
        name: "Survey Governance",
        goal: "Pokazać zasady anonimowości, dostępu i stałych pytań.",
        status: "Planned"
      }
    ],
    dataPoints: [
      "Unsafe KPI list",
      "Safer alternatives",
      "Minimum response rule",
      "Role-based visibility"
    ],
    nextStep: {
      title: "Zebrać finalny zestaw guardrails",
      body: "Potrzebujemy gotowej listy 4-6 złych KPI z prostym wyjaśnieniem i alternatywami."
    }
  }
];

export const integrationsOverview = {
  summaryCards: [
    { label: "Aktywne integracje", value: "4 / 4", note: "GitHub, Jira, Slack, CI/CD" },
    { label: "Automatyczne metryki", value: "12", note: "Delivery, quality i predictability" },
    { label: "Ostatnia synchronizacja", value: "08:42", note: "Dane odświeżone 6 min temu" },
    { label: "Pokrycie organizacji", value: "3 zespoły", note: "Alpha, Beta, Gamma" }
  ],
  connected: [
    {
      name: "GitHub",
      status: "connected",
      owner: "Engineering Platform",
      lastSync: "6 min temu",
      description: "Źródło danych o PR-ach, review time i merge flow.",
      metrics: ["PR review time", "Merge lead time", "PR size", "Review load"],
      usage: "Używane do analizy delivery quality i przeciążenia reviewerów."
    },
    {
      name: "Jira",
      status: "connected",
      owner: "Delivery Operations",
      lastSync: "4 min temu",
      description: "Źródło danych o przepływie pracy i stabilności sprintu.",
      metrics: ["Throughput", "Cycle time", "Lead time", "Planned vs unplanned work"],
      usage: "Używane do mierzenia flow, przewidywalności i presji pracy pilnej."
    },
    {
      name: "Slack",
      status: "connected",
      owner: "People Ops + Team Leads",
      lastSync: "Live",
      description: "Kanał dostarczania Sprint Survey i zbierania odpowiedzi.",
      metrics: ["Response rate", "Pulse answers", "Open comments", "Reminder delivery"],
      usage: "Używany do warstwy feedbackowej po sprincie i do analizy komentarzy."
    },
    {
      name: "CI/CD",
      status: "connected",
      owner: "Release Engineering",
      lastSync: "11 min temu",
      description: "Źródło danych o release stability i deployment frequency.",
      metrics: ["Deployment frequency", "Failed deployments", "Release stability", "Rollback rate"],
      usage: "Używane do wykrywania ryzyka jakościowego po przyspieszeniu release'ów."
    }
  ],
  available: [
    {
      name: "GitLab",
      category: "Repozytorium kodu",
      preview: "MR review time, merge flow, branch activity",
      note: "Alternatywa dla GitHub w organizacjach self-hosted."
    },
    {
      name: "Linear",
      category: "Work tracking",
      preview: "Cycle time, issue flow, roadmap delivery",
      note: "Dla zespołów produktowych pracujących poza Jira."
    },
    {
      name: "Microsoft Teams",
      category: "Survey delivery",
      preview: "Pulse survey delivery, reminders, comment collection",
      note: "Dla organizacji pracujących poza Slack."
    },
    {
      name: "PagerDuty",
      category: "Incident data",
      preview: "Incident load, on-call pressure, MTTR",
      note: "Dodatkowy kontekst jakości i stability dla zespołów produkcyjnych."
    }
  ],
  mappingFlow: [
    {
      source: "GitHub + Jira",
      output: "Cycle time, lead time, review pressure",
      explanation: "Łączymy flow pracy z danymi o review, żeby zobaczyć czy zespół przyspiesza zdrowo."
    },
    {
      source: "Jira + CI/CD",
      output: "Throughput vs release stability",
      explanation: "Wzrost liczby dostarczanych zadań zestawiamy z jakością release'ów i defektami po wdrożeniu."
    },
    {
      source: "Slack survey + open comments",
      output: "Workload, clarity, focus, comment themes",
      explanation: "Krótki feedback po sprincie tłumaczy, dlaczego metryki delivery zaczynają wyglądać gorzej."
    }
  ]
};

export const surveysOverview = {
  summaryCards: [
    { label: "Aktywne szablony", value: "4", note: "Sprint, Release, Quarterly, Annual" },
    { label: "Core questions", value: "6", note: "Stały zestaw pytań po sprincie" },
    { label: "Średni response rate", value: "88%", note: "Na podstawie 3 ostatnich sprintów" },
    { label: "AI suggestions", value: "Włączone", note: "Dla pytań tematycznych i komentarzy" }
  ],
  programs: [
    {
      name: "Sprint Survey",
      cadence: "Po każdym sprincie",
      length: "6 pytań + 1 komentarz",
      owner: "Team Lead / Engineering Manager",
      badge: "Core",
      purpose: "Główne źródło szybkiego feedbacku jakościowego do analizy pracy zespołu."
    },
    {
      name: "Release Survey",
      cadence: "Warunkowo po ważnym release",
      length: "4 pytania",
      owner: "Release Lead",
      badge: "Optional",
      purpose: "Bada confidence, napięcie i jakość procesu wydawniczego po release."
    },
    {
      name: "Quarterly Review",
      cadence: "Raz na kwartał",
      length: "10 pytań",
      owner: "Engineering Ops / People",
      badge: "Extended",
      purpose: "Pozwala zobaczyć szersze trendy w procesie, współpracy i tooling."
    },
    {
      name: "Annual Review",
      cadence: "Raz w roku",
      length: "14 pytań",
      owner: "People Partner + Leadership",
      badge: "Strategic",
      purpose: "Daje szerszy przegląd kultury pracy, rozwoju i długofalowego wellbeing."
    }
  ],
  sprintBuilder: {
    cadence: "Automatycznie po zamknięciu sprintu",
    anonymity: "Wyniki widoczne od minimum 5 odpowiedzi",
    responseGoal: "Cel: 85% odpowiedzi w 24h",
    categories: [
      { name: "Workload", weight: "High", note: "Czy sprint był do utrzymania?" },
      { name: "Focus Time", weight: "High", note: "Czy zespół miał czas na skupioną pracę?" },
      { name: "Clarity", weight: "High", note: "Czy priorytety były jasne?" },
      { name: "Review Quality", weight: "Medium", note: "Czy code review działało dobrze?" },
      { name: "Tooling", weight: "Medium", note: "Czy narzędzia pomagały czy spowalniały?" },
      { name: "Predictability", weight: "Medium", note: "Czy sprint był przewidywalny?" }
    ],
    questions: [
      "Czy workload w tym sprincie był do utrzymania?",
      "Czy zespół miał wystarczająco dużo czasu na skupioną pracę?",
      "Czy priorytety sprintu były jasne od początku do końca?",
      "Czy proces code review działał dobrze w tym sprincie?",
      "Czy narzędzia wspierały pracę zamiast ją spowalniać?",
      "Czy sprint był przewidywalny i dobrze zaplanowany?"
    ]
  },
  library: [
    {
      category: "Team Health",
      type: "Core",
      examples: [
        "Czy workload był do utrzymania?",
        "Czy zespół miał energię do pracy przez cały sprint?",
        "Czy tempo pracy było zdrowe?"
      ]
    },
    {
      category: "Delivery Experience",
      type: "Core",
      examples: [
        "Czy sprint był przewidywalny?",
        "Czy zespół dostarczał zgodnie z planem?",
        "Czy zmiany w trakcie sprintu były pod kontrolą?"
      ]
    },
    {
      category: "Quality & Stability",
      type: "Optional",
      examples: [
        "Czy release confidence był wysoki?",
        "Czy jakość zmian była wystarczająca?",
        "Czy tempo review nie obniżyło jakości?"
      ]
    },
    {
      category: "Collaboration",
      type: "Optional",
      examples: [
        "Czy współpraca w zespole przebiegała sprawnie?",
        "Czy zależności od innych zespołów blokowały pracę?",
        "Czy blockerami zajmowano się wystarczająco szybko?"
      ]
    }
  ],
  aiSuggestions: [
    {
      prompt: "Chcę zbadać przeciążenie po release",
      questions: [
        "Czy ostatni release zwiększył napięcie w zespole bardziej niż zwykle?",
        "Czy po release pojawiło się zbyt dużo pracy reaktywnej?",
        "Czy zespół miał wystarczająco dużo czasu na quality checks przed wdrożeniem?"
      ]
    },
    {
      prompt: "Chcę zbadać jakość code review",
      questions: [
        "Czy review było wystarczająco dokładne, a nie tylko szybkie?",
        "Czy reviewerzy mieli realnie czas na analizę zmian?",
        "Czy tempo merge'ów nie wymuszało powierzchownego review?"
      ]
    }
  ]
};
