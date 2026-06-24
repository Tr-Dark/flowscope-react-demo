export const welcomeOverview = {
  title: "Efektywność, jakość i kondycja zespołu w jednym miejscu.",
  lead:
    "FlowScope łączy sygnały z GitHub, Jira i CI/CD z krótkim feedbackiem po sprincie. W jednym miejscu widać tempo pracy, jakość, przewidywalność i kondycję zespołu.",
  hint: "Workspace prowadzi od źródeł danych, przez zespoły i analizę AI, do konkretnych działań.",
  metrics: [
    { label: "Połączone źródła", value: "4", note: "GitHub, Jira, Slack, CI/CD" },
    { label: "Zespoły produktowe", value: "3", note: "Alpha, Beta, Gamma" },
    { label: "Pytania sprintowe", value: "6", note: "Workload, focus, clarity, review, tooling, predictability" },
    { label: "Plany działań AI", value: "7", note: "Priorytety na najbliższe sprinty" }
  ],
  pillars: [
    {
      title: "Dane operacyjne",
      description: "Delivery, quality, predictability i release pressure z codziennych narzędzi pracy."
    },
    {
      title: "Feedback po sprincie",
      description: "Krótkie ankiety po sprincie, które tłumaczą workload, focus i review quality."
    },
    {
      title: "Wnioski i decyzje",
      description: "AI łączy dane i pokazuje insighty bez sprowadzania ludzi do prostych rankingów."
    }
  ],
  principles: [
    "Produkt pracuje na poziomie zespołu, nie rankingu pojedynczych osób.",
    "Throughput bez quality i team health nie jest pełnym obrazem efektywności.",
    "Sprint Survey jest krótki, regularny i osadzony w rytmie pracy zespołu.",
    "Każdy insight powinien prowadzić do konkretnego działania, a nie tylko do wykresu."
  ]
};

export const appSummary = {
  organization: "Northstar Digital",
  size: "180 osób w IT, 3 zespoły produktowe",
  tooling: "GitHub + Jira + Slack + CI/CD",
  stageStatus: "Northstar Digital workspace",
  teams: [
    {
      name: "Team Alpha",
      role: "Główna platforma klienta",
      status: "investigate",
      summary: "Duze ciśnienie release, rosnące ryzyko jakości i przeciążenia."
    },
    {
      name: "Team Beta",
      role: "Platforma i integracje",
      status: "healthy",
      summary: "Stabilny zespół z drobnymi problemami zaleznosci."
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
    title: "Integracje",
    short: "źródła danych",
    description:
      "Przegląd połączonych narzędzi i danych, które zasilają analizę delivery, quality i team health.",
    heroTitle: "Najpierw dane twarde, potem feedback zespołu.",
    heroCopy:
      "W tym widoku widać, skąd pochodzą sygnały o review, przepływie pracy, release i odpowiedziach zespołu. To one tworzą wspólny obraz pracy nad sprintem.",
    futureItems: ["Przegląd integracji", "Dodaj integracje", "Mapa metryk z podłączonych uslug"],
    screens: [
      {
        name: "Przegląd integracji",
        goal: "Pokazac aktywne integracje i typy zbieranych danych.",
        status: "Implemented"
      },
      {
        name: "Dodaj integracje",
        goal: "Pokazac, ze produkt można rozbudowac o nowe źródła danych.",
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
      title: "Dopiąć mapowanie danych do zespołów",
      body: "Po ekranie integracji kolejnym krokiem jest pokazanie, jak konkretne metryki z GitHub i Jira trafiają do dashboardu zespołu."
    }
  },
  {
    id: "surveys",
    index: "02",
    title: "Ankiety",
    short: "Sprint feedback",
    description:
      "Krótkie ankiety po sprincie, biblioteka pytań i dodatkowe pytania kontekstowe dla release oraz retrospektyw.",
    heroTitle: "Sprint Survey jest sercem warstwy feedbackowej produktu.",
    heroCopy:
      "Kilka stałych pytań po każdym sprincie pomaga zrozumieć workload, focus, clarity i quality review. Ten feedback uzupełnia dane z narzędzi i nadaje im kontekst.",
    futureItems: [
      "Przegląd ankiet",
      "Konfiguracja ankiety sprintowej",
      "Biblioteka pytań",
      "Sugestie pytań AI"
    ],
    screens: [
      {
        name: "Przegląd ankiet",
        goal: "Pokazać wszystkie typy ankiet i wyróżnić Sprint Survey jako core.",
        status: "Implemented"
      },
      {
        name: "Konfiguracja ankiety sprintowej",
        goal: "Pokazać kategorie pytań, częstotliwość i anonimowość.",
        status: "Implemented"
      },
      {
        name: "Biblioteka pytań",
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
      body: "Po builderze i bibliotece pytań kolejnym etapem jest pokazanie wyników ankiety po sprincie na poziomie konkretnych zespołów."
    }
  },
  {
    id: "teams",
    index: "03",
    title: "Zespoły",
    short: "Widok organizacji",
    description:
      "Widok organizacji i szczegółowy obraz każdego zespołu w ostatnich sprintach.",
    heroTitle: "To tutaj produkt zaczyna wyglądać jak prawdziwe narzędzie dla managera.",
    heroCopy:
      "Można szybko porównać zespoły, zobaczyć główny status, najmocniejsze ryzyko i najmocniejszą stronę, a potem wejść głębiej w historię konkretnego zespołu.",
    futureItems: ["Przegląd zespołów", "Szczegóły zespołu", "Porównanie trendów między zespołami"],
    screens: [
      {
        name: "Przegląd zespołów",
        goal: "Pokazać status wszystkich zespołów i główne ryzyka.",
        status: "Implemented"
      },
      {
        name: "Szczegóły zespołu",
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
      body: "Mamy już dane organizacyjne i historię sprintów. Następny etap to analiza AI, która połączy te sygnały w gotowe wnioski."
    }
  },
  {
    id: "insights",
    index: "04",
    title: "Wnioski AI",
    short: "Analiza i decyzje",
    description:
      "Analiza AI, która łączy dane delivery, ankiety i komentarze w czytelne wnioski oraz plan działań.",
    heroTitle: "Tutaj produkt przestaje być dashboardem, a staje się narzędziem decyzyjnym.",
    heroCopy:
      "Ten widok zbiera sygnały z wielu miejsc i tłumaczy, co naprawdę dzieje się w zespole. Zamiast samych wykresów są tutaj priorytety, przyczyny i rekomendowane działania.",
    futureItems: ["Najważniejsze sygnały", "Rozszerzona analiza AI", "Plan działań"],
    screens: [
      {
        name: "Najważniejsze sygnały",
        goal: "Pokazać listę najważniejszych wniosków i trendów.",
        status: "Implemented"
      },
      {
        name: "Rozszerzona analiza AI",
        goal: "Pokazac połączenie delivery, ankiet i komentarzy.",
        status: "Implemented"
      },
      {
        name: "Plan działań",
        goal: "Pokazac działania, właścicieli i review date.",
        status: "Implemented"
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
      title: "Domknąć guardrails i governance",
      body: "Po analizie i action plannerze kolejnym etapem jest pokazanie, jak produkt chroni przed złym użyciem KPI i ankiet."
    }
  },
  {
    id: "governance",
    index: "05",
    title: "Zasady",
    short: "Bezpieczne KPI",
    description:
      "Zasady widoczności, anonimowosci i bezpiecznej interpretacji KPI oraz ankiet.",
    heroTitle: "Guardrails to nie dodatek. To czesc przewagi produktu.",
    heroCopy:
      "Tutaj widać, jak system chroni zespoły przed złym użyciem metryk. Wyniki są czytelne dla managerów, ale nie zamieniają ludzi w rankingi ani nie niszczą zaufania do ankiet.",
    futureItems: ["Bezpieczne KPI", "Zasady ankiet", "Zasady prywatności"],
    screens: [
      {
        name: "Bezpieczne KPI",
        goal: "Pokazac złe KPI i bezpieczniejsze alternatywy.",
        status: "Implemented"
      },
      {
        name: "Zasady ankiet",
        goal: "Pokazać zasady anonimowości, dostępu i stałych pytań.",
        status: "Implemented"
      }
    ],
    dataPoints: [
      "Unsafe KPI list",
      "Safer alternatives",
      "Minimum response rule",
      "Role-based visibility"
    ],
    nextStep: {
      title: "Przygotowac finalny polish i flow prezentacji",
      body: "Po guardrails zostaje już dopracowanie narracji prezentacyjnej, drobny polish wizualny i ewentualne screenshots do dokumentacji."
    }
  }
];

export const integrationsOverview = {
  summaryCards: [
    { label: "Aktywne integracje", value: "4 / 4", note: "GitHub, Jira, Slack, CI/CD" },
    { label: "Automatyczne metryki", value: "12", note: "Delivery, quality i predictability" },
    { label: "Ostatnia synchronizacja", value: "08:42", note: "Dane odswiezone 6 min temu" },
    { label: "Pokrycie organizacji", value: "3 zespoły", note: "Alpha, Beta, Gamma" }
  ],
  connected: [
    {
      name: "GitHub",
      status: "connected",
      owner: "Engineering Platform",
      lastSync: "6 min temu",
      description: "Zrodlo danych o PR-ach, review time i merge flow.",
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
      usage: "Uzywane do mierzenia flow, przewidywalności i presji pracy pilnej."
    },
    {
      name: "Slack",
      status: "connected",
      owner: "People Ops + Team Leads",
      lastSync: "Live",
      description: "Kanal dostarczania Sprint Survey i zbierania odpowiedzi.",
      metrics: ["Response rate", "Pulse answers", "Open comments", "Reminder delivery"],
      usage: "Uzywany do warstwy feedbackowej po sprincie i do analizy komentarzy."
    },
    {
      name: "CI/CD",
      status: "connected",
      owner: "Release Engineering",
      lastSync: "11 min temu",
      description: "Zrodlo danych o release stability i deployment frequency.",
      metrics: ["Deployment frequency", "Failed deployments", "Release stability", "Rollback rate"],
      usage: "Uzywane do wykrywania ryzyka jakosciowego po przyspieszeniu release'ow."
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
      note: "Dla zespołów produktowych pracujacych poza Jira."
    },
    {
      name: "Microsoft Teams",
      category: "Survey delivery",
      preview: "Pulse survey delivery, reminders, comment collection",
      note: "Dla organizacji pracujacych poza Slack."
    },
    {
      name: "PagerDuty",
      category: "Incident data",
      preview: "Incident load, on-call pressure, MTTR",
      note: "Dodatkowy kontekst quality i stability dla zespołów produkcyjnych."
    }
  ],
  mappingFlow: [
    {
      source: "GitHub + Jira",
      output: "Cycle time, lead time, review pressure",
      explanation: "Łączymy flow pracy z danymi o review, żeby zobaczyć, czy zespół przyspiesza zdrowo."
    },
    {
      source: "Jira + CI/CD",
      output: "Throughput vs release stability",
      explanation: "Wzrost liczby dostarczanych zadan zestawiamy z jakością release'ow i defektami po wdrozeniu."
    },
    {
      source: "Slack survey + open comments",
      output: "Workload, clarity, focus, comment themes",
      explanation: "Krotki feedback po sprincie tlumaczy, dlaczego metryki delivery zaczynaja wygladac gorzej."
    }
  ]
};

export const surveysOverview = {
  summaryCards: [
    { label: "Aktywne szablony", value: "4", note: "Sprint, Release, Quarterly, Annual" },
    { label: "Pytania podstawowe", value: "6", note: "Staly zestaw pytań po sprincie" },
    { label: "Średni odsetek odpowiedzi", value: "88%", note: "Na podstawie 3 ostatnich sprintów" },
    { label: "Sugestie AI", value: "Wlaczone", note: "Dla pytań tematycznych i komentarzy" }
  ],
  programs: [
    {
      name: "Sprint Survey",
      cadence: "Po kazdym sprincie",
      length: "6 pytań + 1 komentarz",
      owner: "Team Lead / Engineering Manager",
      badge: "Core",
      purpose: "Główne źródło szybkiego feedbacku jakosciowego do analizy pracy zespołu."
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
      purpose: "Pozwala zobaczyć szersze trendy w procesie, współpracy i toolingu."
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
    cadence: "Automatycznie po zamknieciu sprintu",
    anonymity: "Wyniki widoczne od minimum 5 odpowiedzi",
    responseGoal: "Cel: 85% odpowiedzi w 24h",
    categories: [
      { name: "Workload", weight: "High", note: "Czy sprint byl do utrzymania?" },
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
        "Czy tempo review nie obniżyło jakością"
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
      prompt: "Chce zbadac przeciążenie po release",
      questions: [
        "Czy ostatni release zwiększył napięcie w zespole bardziej niż zwykle?",
        "Czy po release pojawiło się zbyt dużo pracy reaktywnej?",
        "Czy zespół miał wystarczająco dużo czasu na quality checks przed wdrożeniem?"
      ]
    },
    {
      prompt: "Chce zbadac jakość code review",
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
    { label: "Zespoły stabilne", value: "1 / 3", note: "Beta jest obecnie najbardziej stabilna" },
    { label: "Zespoły do obserwacji", value: "2 / 3", note: "Alpha i Gamma maja mieszane sygnały" },
    { label: "Średni odsetek odpowiedzi", value: "89%", note: "Po ostatnich 3 sprintach" },
    { label: "Główny sygnał", value: "Review pressure", note: "Najmocniej widoczne w Team Alpha" }
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
      topRisk: "Rosnaca presja release i skrocone review",
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
      topRisk: "Zaleznosci od infrastruktury poza zespolem",
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
        "Team Alpha dowozi więcej pracy niż miesiąc temu, ale wzrost throughput idzie razem ze spadkiem focus time, dłuższym review time i większą liczbą defectów po release. To wygląda na zespół, który przyspieszył kosztem jakości i obciążenia.",
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
          note: "Wzrost po 2 ostatnich wdrozeniach",
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
          note: "Komentarze wskazuja na pospiech i review robione między spotkaniami.",
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
          theme: "Priorytety jasne od poczatku",
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
        "Szybszy delivery zaczyna podnosić liczbę defectów po release.",
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
          note: "Review jest szybkie, ale nadal postrzegane jako dokladne.",
          tone: "healthy"
        },
        {
          label: "Tooling support",
          score: 3.8,
          note: "Jedyny częstszy temat to zaleznosci od innego zespołu infrastruktury.",
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
          detail: "Komentarze chwalą spokojny sprint planning i realistyczny scope."
        },
        {
          theme: "Zaleznosci od infrastruktury",
          weight: "Low",
          tone: "caution",
          detail: "Pojawia się temat czekania na zewnętrzne decyzje platformowe."
        }
      ],
      strengths: [
        "Najbardziej stabilny review flow w organizacji.",
        "Bardzo dobra przewidywalność sprintów.",
        "Niski poziom pracy reaktywnej po wdrozeniach."
      ],
      risks: [
        "Ryzyko zaleznosci od zespołów poza Beta.",
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
        "Rosnąca liczba defects przy nowych funkcjach.",
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

export const insightsOverview = {
  summaryCards: [
    { label: "Otwarte sygnały", value: "4", note: "2 wysokie, 2 średnie" },
    { label: "Zespoły do działania", value: "2 / 3", note: "Alpha i Gamma" },
    { label: "Najwyższa pewność", value: "92%", note: "Alpha: workload + quality" },
    { label: "Zaplanowane działania", value: "7", note: "Na najbliższe 2 sprinty" }
  ],
  topSignals: [
    {
      title: "Delivery rośnie szybciej niż quality",
      level: "High",
      tone: "investigate",
      summary:
        "W Team Alpha wzrost throughput i szybszy release nie idą w parze ze stabilnością jakościową.",
      scope: "Team Alpha",
      confidence: "92%",
      evidence: "GitHub + Jira + CI/CD + Sprint Survey"
    },
    {
      title: "Sprint scope staje się mniej przewidywalny",
      level: "Medium",
      tone: "caution",
      summary:
        "Team Gamma nadal dowozi, ale częściej zmienia kierunek pracy w trakcie sprintu i traci clarity.",
      scope: "Team Gamma",
      confidence: "84%",
      evidence: "Jira + Sprint Survey + comments"
    },
    {
      title: "Beta jako benchmark zdrowego flow",
      level: "Low",
      tone: "healthy",
      summary:
        "Team Beta ma najbardziej stabilny review flow i przewidywalne sprinty, co daje dobry punkt odniesienia dla reszty organizacji.",
      scope: "Org benchmark",
      confidence: "88%",
      evidence: "GitHub + Jira + Sprint Survey"
    }
  ],
  byTeam: {
    alpha: {
      executiveSummary:
        "AI łączy tutaj trzy sygnały: większy throughput, gorszy workload score i rosnące defects po release. To nie wygląda jak zdrowa poprawa efektywności, tylko jak przyspieszenie kosztem jakości i czasu na review.",
      explanations: [
        {
          title: "Throughput sam w sobie nie oznacza poprawy",
          weight: "High",
          tone: "investigate",
          detail:
            "Team Alpha dostarczył więcej punktów niż w poprzednim sprincie, ale cycle time, review time i escaped defects poszły w górę razem z nim."
        },
        {
          title: "Survey potwierdza przeciążenie, a nie tylko gorszy nastrój",
          weight: "High",
          tone: "investigate",
          detail:
            "Workload i focus time spadają przez dwa sprinty z rzędu, a open comments opisują pracę reaktywną i review robione pod presją."
        },
        {
          title: "Problem nie dotyczy clarity",
          weight: "Medium",
          tone: "healthy",
          detail:
            "Priorytety i cele sprintu są jasne, więc źródeł problemu trzeba szukać w tempie release i sposobie pracy przy końcówce sprintu."
        }
      ],
      evidenceChain: [
        {
          signal: "GitHub review time",
          finding: "Review time wzrósł z 22 h do 31 h w 3 sprintach",
          whyItMatters: "Dłuższy review bez poprawy quality sugeruje przeciążenie reviewerów albo review odkładane na później."
        },
        {
          signal: "Jira throughput vs cycle time",
          finding: "Throughput rośnie, ale cycle time nie spada",
          whyItMatters: "To oznacza, że zespół nie pracuje płynniej, tylko wypycha więcej pracy przy większym obciążeniu procesu."
        },
        {
          signal: "CI/CD defects",
          finding: "Escaped defects wzrosły z 2 do 5",
          whyItMatters: "Rosnący koszt quality potwierdza, że przyspieszenie nie jest darmowe."
        },
        {
          signal: "Sprint Survey",
          finding: "Workload 2.8 / 5, Focus 2.9 / 5",
          whyItMatters: "Ludzie odczuwają skutki tego wzorca jeszcze zanim problem stanie się bardzo widoczny finansowo."
        }
      ],
      correlations: [
        {
          pair: "Throughput vs defects",
          reading: "Zespół dowozi więcej pracy, ale jednocześnie zwiększa liczbę poprawek po release.",
          verdict: "Unhealthy tradeoff",
          tone: "investigate"
        },
        {
          pair: "Review time vs review quality",
          reading: "Więcej czasu w review nie poprawia quality, bo review dzieje się pod presją i w złym momencie dnia.",
          verdict: "Process issue",
          tone: "caution"
        },
        {
          pair: "Clarity vs workload",
          reading: "Dobra clarity nie chroni zespołu przed przeciążeniem, jeśli release flow jest zbyt agresywny.",
          verdict: "Important nuance",
          tone: "healthy"
        }
      ],
      plainLanguage:
        "Team Alpha nie ma problemu z tym, co trzeba zrobić. Problem jest taki, że zespół robi za dużo naraz, za szybko dochodzi do końcówki sprintu i potem płaci za to jakością oraz zmęczeniem.",
      actionPlan: [
        {
          title: "Zmniejszyć release scope na 2 sprinty testowe",
          description:
            "Na dwa kolejne sprinty ograniczyć planowany zakres release, żeby sprawdzić, czy spadnie review pressure i liczba poprawek po wdrożeniu.",
          owner: "Marta Zielińska",
          reviewDate: "Po Sprincie 24.10",
          expectedImpact: "Mniej pracy reaktywnej i lepszy focus time",
          priority: "High",
          tone: "investigate"
        },
        {
          title: "Wprowadzić stałe okna review",
          description:
            "Dwa bloki review dziennie zamiast review robionego między spotkaniami i na końcu dnia.",
          owner: "Senior Engineers",
          reviewDate: "Po 10 dniach",
          expectedImpact: "Krótszy review time i lepsza jakość decyzji",
          priority: "High",
          tone: "investigate"
        },
        {
          title: "Przeanalizować źródła escaped defects",
          description:
            "Sprawdzić, które typy zmian najczęściej wracają po release i czy można dodać prosty quality gate.",
          owner: "Release Lead",
          reviewDate: "Na następnym retro",
          expectedImpact: "Mniej poprawek po wdrożeniu",
          priority: "Medium",
          tone: "caution"
        }
      ]
    },
    beta: {
      executiveSummary:
        "Team Beta daje obraz zdrowego przepływu pracy. Delivery jest spokojne, review szybkie, a survey nie sygnalizuje przeciążenia. Dla organizacji to dobry benchmark, a nie obszar alarmowy.",
      explanations: [
        {
          title: "Stabilność jest tutaj przewagą",
          weight: "Medium",
          tone: "healthy",
          detail:
            "Beta nie ma najbardziej spektakularnego throughput, ale ma najlepsze połączenie quality, predictability i team health."
        },
        {
          title: "Survey i metryki mówią to samo",
          weight: "Medium",
          tone: "healthy",
          detail:
            "Wysokie focus time i workload score dobrze zgadzają się z krótkim cycle time i niską liczbą defects."
        }
      ],
      evidenceChain: [
        {
          signal: "GitHub review flow",
          finding: "Review utrzymuje się na poziomie 12-13 h",
          whyItMatters: "To wygląda na zdrowy rytm współpracy bez dużych zaległości."
        },
        {
          signal: "Jira predictability",
          finding: "Cycle time stopniowo spada i jest stabilny",
          whyItMatters: "Zespół kończy sprinty bez dużych zrywów i pracy reaktywnej."
        },
        {
          signal: "Sprint Survey",
          finding: "Workload 4.3 / 5, Focus 4.1 / 5",
          whyItMatters: "Ludzie potwierdzają, że proces jest do utrzymania."
        }
      ],
      correlations: [
        {
          pair: "Review time vs quality",
          reading: "Szybkie review nie obniża quality, bo tempo jest stabilne i przewidywalne.",
          verdict: "Healthy pattern",
          tone: "healthy"
        },
        {
          pair: "Throughput vs workload",
          reading: "Zespół nie musi zwiększać throughput za wszelką cenę, żeby utrzymać dobry wynik biznesowy.",
          verdict: "Balanced",
          tone: "healthy"
        }
      ],
      plainLanguage:
        "Beta pokazuje, że dobry wynik nie musi oznaczać ciągłego dociskania zespołu. Oni pracują spokojnie i właśnie dlatego są przewidywalni.",
      actionPlan: [
        {
          title: "Zachować obecny rytm sprintów",
          description: "Nie zmieniać procesu na siłę, tylko utrzymać obecne praktyki review i planowania.",
          owner: "Tomasz Krawiec",
          reviewDate: "Za 1 miesiąc",
          expectedImpact: "Utrzymanie stabilnego benchmarku",
          priority: "Low",
          tone: "healthy"
        },
        {
          title: "Udokumentować praktyki Beta dla innych zespołów",
          description:
            "Spisać, jak wygląda ich sprint planning, review flow i praca z blockerami, żeby wykorzystać to jako wzorzec w Alpha i Gamma.",
          owner: "Engineering Ops",
          reviewDate: "Na przeglądzie kwartalnym",
          expectedImpact: "Lepsze standardy pracy w całej organizacji",
          priority: "Medium",
          tone: "healthy"
        }
      ]
    },
    gamma: {
      executiveSummary:
        "Team Gamma nie jest w kryzysie, ale ich flow robi się coraz bardziej chaotyczny. Największym tematem nie jest tutaj przeciążenie release jak w Alpha, tylko spadek przewidywalności i clarity przez zmieniający się scope sprintu.",
      explanations: [
        {
          title: "Produkt zmienia kierunek pracy zbyt często",
          weight: "High",
          tone: "investigate",
          detail:
            "Komentarze i wyniki clarity pokazują, że zespół reaguje na zbyt wiele zmian po środku sprintu."
        },
        {
          title: "Throughput jeszcze maskuje problem",
          weight: "Medium",
          tone: "caution",
          detail:
            "Na pierwszy rzut oka Gamma dowozi więcej, ale za ta liczba stoi coraz mniej przewidywalny proces i więcej poprawek."
        }
      ],
      evidenceChain: [
        {
          signal: "Jira scope change",
          finding: "Wzrost zmian priorytetów po midpoint review",
          whyItMatters: "To obniża przewidywalność i zwiększa koszt przełączania kontekstu."
        },
        {
          signal: "Survey clarity",
          finding: "Clarity spadło do 3.2 / 5",
          whyItMatters: "Zespół przestaje ufać, że plan sprintu jest stabilny."
        },
        {
          signal: "Defects",
          finding: "Escaped defects wzrosły z 2 do 3",
          whyItMatters: "Nowe funkcje dowozone pod presja częściej wracaja do poprawy."
        }
      ],
      correlations: [
        {
          pair: "Scope change vs focus time",
          reading: "Im więcej zmian w trakcie sprintu, tym trudniej utrzymać spokojną pracę nad zaplanowanymi zadaniami.",
          verdict: "Growing friction",
          tone: "caution"
        },
        {
          pair: "Throughput vs predictability",
          reading: "Zespół dalej dowozi, ale coraz mniej wiadomo, jakim kosztem i czy ten wynik da się utrzymać.",
          verdict: "Risk building up",
          tone: "investigate"
        }
      ],
      plainLanguage:
        "Gamma jeszcze wygląda dobrze na wykresach delivery, ale pod spodem zaczyna brakować stabilności. Jeśli scope dalej będzie się tak zmieniać, to za chwilę problem będzie już w quality i morale.",
      actionPlan: [
        {
          title: "Ograniczyć zmiany scope po midpoint review",
          description:
            "Wprowadzić prostą zasadę: po połowie sprintu zmieniamy priorytety tylko przy jasno uzasadnionym wyjątku.",
          owner: "Joanna Leśna + PM",
          reviewDate: "Po 2 sprintach",
          expectedImpact: "Lepsza clarity i przewidywalność",
          priority: "High",
          tone: "investigate"
        },
        {
          title: "Wdrożyć release checklist dla nowych funkcji",
          description:
            "Krótka lista kontroli przed release ma ograniczyć liczbę drobnych poprawek po wdrożeniu.",
          owner: "Feature Lead",
          reviewDate: "Po następnym release",
          expectedImpact: "Mniej escaped defects",
          priority: "Medium",
          tone: "caution"
        }
      ]
    }
  }
};

export const governanceOverview = {
  summaryCards: [
    { label: "Zablokowane KPI", value: "5", note: "FlowScope nie promuje rankingow ludzi" },
    { label: "Minimalna anonimowość", value: "5 odpowiedzi", note: "Mniej odpowiedzi = brak widoku wyników" },
    { label: "Role z dostępem", value: "4", note: "Każda rola ma inny poziom widoczności" },
    { label: "Stale zasady ankiet", value: "6", note: "Podstawowe reguly dla Sprint Survey" }
  ],
  guardrails: [
    {
      unsafeKpi: "Ranking developerów po liczbie commitów",
      risk: "Zachęca do sztucznej aktywności i nie mówi nic o quality, review ani realnym wpływie pracy.",
      saferAlternative: "Team-level flow trends + quality signals",
      framing: "Patrzymy na rytm pracy zespołu, a nie kto kliknal najwięcej."
    },
    {
      unsafeKpi: "Throughput jako jedyny wskaźnik sukcesu",
      risk: "Moze ukryc przeciążenie, spadek focus time i wzrost defects po release.",
      saferAlternative: "Throughput razem z quality, workload i predictability",
      framing: "Więcej dowiezionej pracy ma sens tylko wtedy, gdy nie psuje procesu."
    },
    {
      unsafeKpi: "Średni review time używany do oceny pojedynczej osoby",
      risk: "Prowadzi do powierzchownego review i presji na szybkość zamiast quality decyzji.",
      saferAlternative: "Review flow na poziomie zespołu + survey o jakości review",
      framing: "Review ma być zdrowym procesem współpracy, a nie testem szybkości."
    },
    {
      unsafeKpi: "Publiczne porownywanie wynikow ankiet między osobami",
      risk: "Niszczy zaufanie do ankiet i obniża szczerość odpowiedzi.",
      saferAlternative: "Anonimowe wyniki team-level z minimalnym progiem odpowiedzi",
      framing: "Ankiety służą zrozumieniu procesu, nie ocenie jednostek."
    },
    {
      unsafeKpi: "Defects bez kontekstu typu zmian i release pressure",
      risk: "Może karać zespoły, które robią najtrudniejsze lub najbardziej ryzykowne wdrożenia.",
      saferAlternative: "Defects + release context + workload + sprint scope",
      framing: "Jakość analizujemy razem z trudnoscia i tempem pracy."
    }
  ],
  surveyPolicies: [
    {
      title: "Stały core Sprint Survey",
      tag: "Core",
      tone: "healthy",
      description: "Każdy zespół ma ten sam podstawowy zestaw pytań o workload, focus, clarity, review i tooling. Dzięki temu można porównywać trendy w czasie."
    },
    {
      title: "Dodatkowe pytania tylko jako warstwa opcjonalna",
      tag: "Optional",
      tone: "caution",
      description: "Manager może dodać kilka pytań kontekstowych, ale nie powinien zmieniać całego szkieletu ankiety co sprint."
    },
    {
      title: "Minimalny próg odpowiedzi",
      tag: "Privacy",
      tone: "healthy",
      description: "Wyniki ankiety nie są pokazywane, jeśli liczba odpowiedzi jest za mała, żeby zachować anonimowość."
    },
    {
      title: "Survey fatigue control",
      tag: "Guardrail",
      tone: "caution",
      description: "System pilnuje, żeby nie dokładać zbyt wielu ankiet w jednym okresie. Sprint Survey jest krótki, a dodatkowe ankiety są ograniczone."
    }
  ],
  accessModel: [
    {
      role: "Engineering Manager",
      scope: "Widok team-level + action plan",
      permissions: [
        "Moze widzieć wyniki zespołu i trendy sprintowe",
        "Może tworzyć actions po insightach",
        "Nie widzi indywidualnych odpowiedzi pracownikow"
      ]
    },
    {
      role: "Team Lead",
      scope: "Widok operacyjny sprintu",
      permissions: [
        "Może uruchamiać Sprint Survey",
        "Moze widzieć wynik zespołu po przekroczeniu progu odpowiedzi",
        "Może dodawać pytania kontekstowe do release survey"
      ]
    },
    {
      role: "People / HR",
      scope: "Widok przekrojowy bez danych osobowych",
      permissions: [
        "Moze obserwowac trendy między zespolami",
        "Może analizować obszary wellbeing i workload",
        "Nie widzi szczegolow technicznych ani danych repo per osoba"
      ]
    },
    {
      role: "Leadership",
      scope: "Widok strategiczny",
      permissions: [
        "Widok zagregowany dla organizacji",
        "Dostęp do najważniejszych insightów i ryzyk",
        "Brak wgladu w surowe komentarze jesli nie ma takiej potrzeby"
      ]
    }
  ],
  privacyRules: [
    {
      title: "Brak widoku indywidualnych ocen",
      description: "FlowScope nie pokazuje odpowiedzi na poziomie jednej osoby. Produkt działa na poziomie zespołu i trendu, nie na poziomie rankingu pracownikow."
    },
    {
      title: "Ankiety nie służą do performance review",
      description: "W dokumentacji i w samym interfejsie system jasno komunikuje, ze wyniki ankiet nie powinny byc używane do oceny rocznej pojedynczych osób."
    },
    {
      title: "AI nie trenuje się na danych klienta bez kontroli",
      description: "Wersja produktowa powinna jasno określać, jak używane są dane i dawać organizacji możliwość pełnej kontroli nad prywatnością."
    }
  ]
};
