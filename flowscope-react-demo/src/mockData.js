export const appSummary = {
  organization: "Northstar Digital",
  size: "180 osób w IT, 3 zespoły produktowe",
  tooling: "GitHub + Jira + Slack + CI/CD",
  stageStatus: "Etap 4: Teams Dashboard i Team Detail",
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
        status: "Implemented"
      },
      {
        name: "Team Detail",
        goal: "Wejść głębiej w historię Team Alpha.",
        status: "Implemented"
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
      title: "Przejść do gotowych insightów i rekomendacji",
      body: "Mamy już dane organizacyjne i historię sprintów. Następny etap to ekran AI analysis, który połączy te sygnały w gotowe wnioski."
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
    futureItems: ["Insights Overview", "Extended AI Analysis", "Action Planner"],
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
    futureItems: ["KPI Guardrails", "Survey Governance", "Privacy rules"],
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

export const teamsOverview = {
  summaryCards: [
    { label: "Zespoły healthy", value: "1 / 3", note: "Beta jest obecnie najbardziej stabilna" },
    { label: "Zespoły do obserwacji", value: "2 / 3", note: "Alpha i Gamma mają mieszane sygnały" },
    { label: "Średni response rate", value: "89%", note: "Po ostatnich 3 sprintach" },
    { label: "Główny sygnał org", value: "Review pressure", note: "Najmocniej widoczne w Team Alpha" }
  ],
  dashboard: [
    {
      id: "alpha",
      name: "Team Alpha",
      mission: "Główna platforma klienta",
      manager: "Marta Zielińska",
      squadSize: "9 osób",
      releaseWindow: "Release co 2 tygodnie",
      responseRate: "92%",
      pulse: "3.1 / 5",
      status: "investigate",
      statusLabel: "Investigate",
      topRisk: "Rosnąca presja release i skrócone review",
      topStrength: "Wysokie tempo delivery przy jasnych priorytetach",
      metrics: [
        { label: "Throughput", value: "34 pts", trend: "+13%", tone: "up" },
        { label: "Cycle time", value: "5.6 d", trend: "+0.8 d", tone: "warning" },
        { label: "Review time", value: "31 h", trend: "+9 h", tone: "warning" },
        { label: "Defects", value: "5", trend: "+3", tone: "down" }
      ]
    },
    {
      id: "beta",
      name: "Team Beta",
      mission: "Platforma i integracje",
      manager: "Tomasz Krawiec",
      squadSize: "7 osób",
      releaseWindow: "Release weekly",
      responseRate: "86%",
      pulse: "4.2 / 5",
      status: "healthy",
      statusLabel: "Healthy",
      topRisk: "Zależności od infrastruktury poza zespołem",
      topStrength: "Stabilny review flow i dobra przewidywalność sprintu",
      metrics: [
        { label: "Throughput", value: "22 pts", trend: "+2%", tone: "up" },
        { label: "Cycle time", value: "3.2 d", trend: "-0.3 d", tone: "up" },
        { label: "Review time", value: "12 h", trend: "-1 h", tone: "up" },
        { label: "Defects", value: "1", trend: "0", tone: "steady" }
      ]
    },
    {
      id: "gamma",
      name: "Team Gamma",
      mission: "Nowe funkcje biznesowe",
      manager: "Joanna Leśna",
      squadSize: "8 osób",
      releaseWindow: "Release co 3 tygodnie",
      responseRate: "88%",
      pulse: "3.6 / 5",
      status: "caution",
      statusLabel: "Caution",
      topRisk: "Zbyt dużo zmian scope w trakcie sprintu",
      topStrength: "Dobry throughput i szybkie dostarczanie nowych funkcji",
      metrics: [
        { label: "Throughput", value: "28 pts", trend: "+11%", tone: "up" },
        { label: "Cycle time", value: "4.4 d", trend: "+0.5 d", tone: "warning" },
        { label: "Review time", value: "18 h", trend: "+2 h", tone: "steady" },
        { label: "Defects", value: "3", trend: "+1", tone: "warning" }
      ]
    }
  ],
  details: {
    alpha: {
      aiSummary:
        "Team Alpha dowozi więcej pracy niż miesiąc temu, ale wzrost throughput idzie razem ze spadkiem focus time, dłuższym review time i większą liczbą defektów po release. To wygląda na zespół, który przyspieszył kosztem jakości i obciążenia.",
      snapshot: [
        {
          label: "Aktualny status",
          value: "Investigate",
          note: "Presja release + spadek focus time",
          tone: "investigate"
        },
        {
          label: "Sprint pulse",
          value: "3.1 / 5",
          note: "Najniższy wynik w organizacji",
          tone: "caution"
        },
        {
          label: "Escaped defects",
          value: "5",
          note: "Wzrost po 2 ostatnich wdrożeniach",
          tone: "investigate"
        },
        {
          label: "Response rate",
          value: "92%",
          note: "Feedback jest wiarygodny",
          tone: "healthy"
        }
      ],
      surveyBreakdown: [
        {
          label: "Workload sustainability",
          score: 2.8,
          note: "Zespół sygnalizuje zbyt dużo pracy reaktywnej pod koniec sprintu.",
          tone: "investigate"
        },
        {
          label: "Focus time",
          score: 2.9,
          note: "Coraz więcej przerwań przez pilne poprawki i szybkie review.",
          tone: "investigate"
        },
        {
          label: "Clarity",
          score: 4.1,
          note: "Priorytety są jasne, problem nie leży w planowaniu celu sprintu.",
          tone: "healthy"
        },
        {
          label: "Review quality",
          score: 3.0,
          note: "Komentarze wskazują na pośpiech i review robione między spotkaniami.",
          tone: "caution"
        },
        {
          label: "Tooling support",
          score: 3.6,
          note: "Narzędzia są OK, ale release process jest męczący.",
          tone: "caution"
        }
      ],
      sprintHistory: [
        {
          name: "Sprint 24.06",
          period: "18 mar - 29 mar",
          throughput: "27 pts",
          cycleTime: "4.4 d",
          reviewTime: "22 h",
          defects: "2",
          workload: "3.6 / 5",
          focus: "3.8 / 5",
          note: "Stabilny sprint przed wzrostem presji release."
        },
        {
          name: "Sprint 24.07",
          period: "1 kwi - 12 kwi",
          throughput: "30 pts",
          cycleTime: "4.9 d",
          reviewTime: "26 h",
          defects: "3",
          workload: "3.2 / 5",
          focus: "3.3 / 5",
          note: "Więcej pracy dowiezionej, ale pojawiły się sygnały przeciążenia."
        },
        {
          name: "Sprint 24.08",
          period: "15 kwi - 26 kwi",
          throughput: "34 pts",
          cycleTime: "5.6 d",
          reviewTime: "31 h",
          defects: "5",
          workload: "2.8 / 5",
          focus: "2.9 / 5",
          note: "Najmocniejsze tempo delivery, ale też wyraźny koszt jakości i komfortu pracy."
        }
      ],
      commentThemes: [
        {
          theme: "Presja release na końcu sprintu",
          weight: "High",
          tone: "investigate",
          detail: "Kilka osób wskazuje, że ostatnie 3 dni sprintu to gaszenie pożarów i szybkie merge'e."
        },
        {
          theme: "Review między spotkaniami",
          weight: "Medium",
          tone: "caution",
          detail: "Komentarze sugerują, że review jest robione szybko i bez spokojnego czasu na analizę."
        },
        {
          theme: "Priorytety jasne od początku",
          weight: "Low",
          tone: "healthy",
          detail: "Zespół nie ma problemu z tym, co robić. Problem jest raczej w tempie niż w kierunku."
        }
      ],
      strengths: [
        "Dobrze rozumiany cel sprintu i wysoka jasność priorytetów.",
        "Zespół nadal dowozi ważne elementy roadmapy.",
        "Wysoki response rate pozwala ufać danym z ankiety."
      ],
      risks: [
        "Szybszy delivery zaczyna podnosić liczbę defektów po release.",
        "Review time rośnie, mimo że komentarze sugerują spadek jakości review.",
        "Focus time i workload pogarszają się drugi sprint z rzędu."
      ],
      nextActions: [
        "Na najbliższy sprint zmniejszyć scope release o 10-15%.",
        "Zablokować 2 stałe okna na review zamiast robić je ad hoc między spotkaniami.",
        "Sprawdzić, które poprawki po release generują najwięcej pracy reaktywnej."
      ]
    },
    beta: {
      aiSummary:
        "Team Beta wygląda najbardziej zdrowo w całej organizacji. Delivery jest stabilne, review działa sprawnie, a wyniki z ankiety nie pokazują dużych napięć. To dobry zespół referencyjny do porównania z Alpha i Gamma.",
      snapshot: [
        {
          label: "Aktualny status",
          value: "Healthy",
          note: "Stabilny rytm sprintów i release",
          tone: "healthy"
        },
        {
          label: "Sprint pulse",
          value: "4.2 / 5",
          note: "Najwyższy wynik w organizacji",
          tone: "healthy"
        },
        {
          label: "Escaped defects",
          value: "1",
          note: "Jakość stabilna od 3 sprintów",
          tone: "healthy"
        },
        {
          label: "Response rate",
          value: "86%",
          note: "Wystarczająco mocny sygnał do trendów",
          tone: "healthy"
        }
      ],
      surveyBreakdown: [
        {
          label: "Workload sustainability",
          score: 4.3,
          note: "Tempo pracy oceniane jako zdrowe i przewidywalne.",
          tone: "healthy"
        },
        {
          label: "Focus time",
          score: 4.1,
          note: "Zespół ma regularne bloki skupionej pracy.",
          tone: "healthy"
        },
        {
          label: "Clarity",
          score: 4.4,
          note: "Priorytety i zależności są dobrze komunikowane.",
          tone: "healthy"
        },
        {
          label: "Review quality",
          score: 4.0,
          note: "Review jest szybkie, ale nadal postrzegane jako dokładne.",
          tone: "healthy"
        },
        {
          label: "Tooling support",
          score: 3.8,
          note: "Jedyny częstszy temat to zależności od innego zespołu infrastruktury.",
          tone: "caution"
        }
      ],
      sprintHistory: [
        {
          name: "Sprint 24.06",
          period: "18 mar - 29 mar",
          throughput: "21 pts",
          cycleTime: "3.5 d",
          reviewTime: "13 h",
          defects: "1",
          workload: "4.1 / 5",
          focus: "4.0 / 5",
          note: "Równy sprint bez większych blokad."
        },
        {
          name: "Sprint 24.07",
          period: "1 kwi - 12 kwi",
          throughput: "22 pts",
          cycleTime: "3.4 d",
          reviewTime: "13 h",
          defects: "1",
          workload: "4.2 / 5",
          focus: "4.1 / 5",
          note: "Stabilny rytm pracy i brak wzrostu pracy reaktywnej."
        },
        {
          name: "Sprint 24.08",
          period: "15 kwi - 26 kwi",
          throughput: "22 pts",
          cycleTime: "3.2 d",
          reviewTime: "12 h",
          defects: "1",
          workload: "4.3 / 5",
          focus: "4.1 / 5",
          note: "Najbardziej przewidywalny zespół w ostatnim cyklu."
        }
      ],
      commentThemes: [
        {
          theme: "Dobre planowanie pracy",
          weight: "Medium",
          tone: "healthy",
          detail: "Komentarze chwalą spokojne sprint planning i realistyczny scope."
        },
        {
          theme: "Zależności od infrastruktury",
          weight: "Low",
          tone: "caution",
          detail: "Pojawia się temat czekania na zewnętrzne decyzje platformowe."
        }
      ],
      strengths: [
        "Najbardziej stabilny review flow w organizacji.",
        "Bardzo dobra przewidywalność sprintów.",
        "Niski poziom pracy reaktywnej po wdrożeniach."
      ],
      risks: [
        "Ryzyko zależności od zespołów poza Beta.",
        "Możliwe spowolnienie, jeśli pojawi się więcej pilnych zgłoszeń integracyjnych."
      ],
      nextActions: [
        "Użyć Team Beta jako benchmarku dobrych praktyk review.",
        "Spisać ich rytm sprint planning i sharing blockers.",
        "Monitorować zależności z infrastrukturą, zanim staną się częstym blockerem."
      ]
    },
    gamma: {
      aiSummary:
        "Team Gamma nadal dostarcza szybko, ale ich flow robi się coraz mniej przewidywalny. Ankiety nie pokazują kryzysu jak w Alpha, ale widać rosnące zmęczenie zmianami zakresu prac i większą liczbę poprawek po sprintach.",
      snapshot: [
        {
          label: "Aktualny status",
          value: "Caution",
          note: "Dobre tempo, ale słabsza przewidywalność",
          tone: "caution"
        },
        {
          label: "Sprint pulse",
          value: "3.6 / 5",
          note: "Środek stawki w organizacji",
          tone: "caution"
        },
        {
          label: "Escaped defects",
          value: "3",
          note: "Lekki wzrost po nowych funkcjach",
          tone: "caution"
        },
        {
          label: "Response rate",
          value: "88%",
          note: "Dane wystarczające do trendów",
          tone: "healthy"
        }
      ],
      surveyBreakdown: [
        {
          label: "Workload sustainability",
          score: 3.4,
          note: "Workload jeszcze akceptowalny, ale czuć więcej zmian w trakcie sprintu.",
          tone: "caution"
        },
        {
          label: "Focus time",
          score: 3.5,
          note: "Focus rozbijany przez częste korekty scope i pytania produktowe.",
          tone: "caution"
        },
        {
          label: "Clarity",
          score: 3.2,
          note: "Najbardziej problematyczny obszar w tym zespole.",
          tone: "investigate"
        },
        {
          label: "Review quality",
          score: 3.7,
          note: "Review jest całkiem dobre, ale pojawia się więcej pośpiechu przy końcówce sprintu.",
          tone: "caution"
        },
        {
          label: "Tooling support",
          score: 3.9,
          note: "Narzędzia nie są problemem, większy wpływ ma zmienny scope.",
          tone: "healthy"
        }
      ],
      sprintHistory: [
        {
          name: "Sprint 24.06",
          period: "18 mar - 29 mar",
          throughput: "24 pts",
          cycleTime: "3.9 d",
          reviewTime: "16 h",
          defects: "2",
          workload: "3.8 / 5",
          focus: "3.8 / 5",
          note: "Dobry start nowej inicjatywy produktowej."
        },
        {
          name: "Sprint 24.07",
          period: "1 kwi - 12 kwi",
          throughput: "26 pts",
          cycleTime: "4.1 d",
          reviewTime: "17 h",
          defects: "2",
          workload: "3.6 / 5",
          focus: "3.6 / 5",
          note: "Pojawia się więcej zmian zakresu w połowie sprintu."
        },
        {
          name: "Sprint 24.08",
          period: "15 kwi - 26 kwi",
          throughput: "28 pts",
          cycleTime: "4.4 d",
          reviewTime: "18 h",
          defects: "3",
          workload: "3.4 / 5",
          focus: "3.5 / 5",
          note: "Więcej pracy dowiezionej, ale kosztem przewidywalności i większej liczby poprawek."
        }
      ],
      commentThemes: [
        {
          theme: "Zmieniający się scope sprintu",
          weight: "High",
          tone: "investigate",
          detail: "Najczęściej powtarzany komentarz dotyczy zmiany kierunku pracy po środku sprintu."
        },
        {
          theme: "Szybkie wsparcie produktowe",
          weight: "Low",
          tone: "healthy",
          detail: "Pozytywny sygnał: zespół dobrze współpracuje z product managerem mimo zmian."
        },
        {
          theme: "Końcówka sprintu bardziej napięta",
          weight: "Medium",
          tone: "caution",
          detail: "Kilka osób wskazuje, że końcówka sprintu jest coraz mniej przewidywalna."
        }
      ],
      strengths: [
        "Wysoki throughput i dobra reakcja na potrzeby biznesowe.",
        "Dobry poziom współpracy z product managerem.",
        "Brak mocnych problemów narzędziowych."
      ],
      risks: [
        "Spadek clarity może szybko przełożyć się na większy chaos delivery.",
        "Rosnąca liczba defektów przy nowych funkcjach.",
        "Zmienny scope może z czasem obniżyć zaufanie zespołu do planowania sprintu."
      ],
      nextActions: [
        "Ograniczyć liczbę zmian scope po midpoint review sprintu.",
        "Dodać prosty release checklist dla nowych funkcji biznesowych.",
        "Na następnym retro sprawdzić, które zmiany były naprawdę konieczne, a które mogły poczekać."
      ]
    }
  }
};
