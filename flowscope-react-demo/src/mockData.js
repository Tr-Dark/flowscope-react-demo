export const welcomeOverview = {
  title: "Efektywnosc, jakosc i kondycja zespolu w jednym miejscu.",
  lead:
    "FlowScope laczy sygnaly z GitHub, Jira i CI/CD z krotkim feedbackiem po sprincie. W jednym miejscu widac tempo pracy, jakosc, przewidywalnosc i kondycje zespolu.",
  hint: "Workspace prowadzi od zrodel danych, przez zespoly i analize AI, do konkretnych dzialan.",
  metrics: [
    { label: "Polaczone zrodla", value: "4", note: "GitHub, Jira, Slack, CI/CD" },
    { label: "Zespoly produktowe", value: "3", note: "Alpha, Beta, Gamma" },
    { label: "Pytania sprintowe", value: "6", note: "Workload, focus, clarity, review, tooling, predictability" },
    { label: "Plany dzialan AI", value: "7", note: "Priorytety na najblizsze sprinty" }
  ],
  pillars: [
    {
      title: "Dane operacyjne",
      description: "Delivery, quality, predictability i release pressure z codziennych narzedzi pracy."
    },
    {
      title: "Feedback po sprincie",
      description: "Krotkie ankiety po sprincie, ktore tlumacza workload, focus i review quality."
    },
    {
      title: "Wnioski i decyzje",
      description: "AI laczy dane i pokazuje insighty bez sprowadzania ludzi do prostych rankingow."
    }
  ],
  principles: [
    "Produkt pracuje na poziomie zespolu, nie rankingu pojedynczych osob.",
    "Throughput bez quality i team health nie jest pelnym obrazem efektywnosci.",
    "Sprint Survey jest krotki, regularny i osadzony w rytmie pracy zespolu.",
    "Kazdy insight powinien prowadzic do konkretnego dzialania, a nie tylko do wykresu."
  ]
};

export const appSummary = {
  organization: "Northstar Digital",
  size: "180 osob w IT, 3 zespoly produktowe",
  tooling: "GitHub + Jira + Slack + CI/CD",
  stageStatus: "Northstar Digital workspace",
  teams: [
    {
      name: "Team Alpha",
      role: "Glowna platforma klienta",
      status: "investigate",
      summary: "Duze cisnienie release, rosnace ryzyko jakosci i przeciazenia."
    },
    {
      name: "Team Beta",
      role: "Platforma i integracje",
      status: "healthy",
      summary: "Stabilny zespol z drobnymi problemami zaleznosci."
    },
    {
      name: "Team Gamma",
      role: "Nowe funkcje biznesowe",
      status: "caution",
      summary: "Dobry throughput, ale mieszane sygnaly z quality i survey."
    }
  ]
};

export const sections = [
  {
    id: "integrations",
    index: "01",
    title: "Integracje",
    short: "Zrodla danych",
    description:
      "Przeglad polaczonych narzedzi i danych, ktore zasilaja analize delivery, quality i team health.",
    heroTitle: "Najpierw dane twarde, potem feedback zespolu.",
    heroCopy:
      "W tym widoku widac, skad pochodza sygnaly o review, przeplywie pracy, release i odpowiedziach zespolu. To one tworza wspolny obraz pracy nad sprintem.",
    futureItems: ["Przeglad integracji", "Dodaj integracje", "Mapa metryk z podlaczonych uslug"],
    screens: [
      {
        name: "Przeglad integracji",
        goal: "Pokazac aktywne integracje i typy zbieranych danych.",
        status: "Implemented"
      },
      {
        name: "Dodaj integracje",
        goal: "Pokazac, ze produkt mozna rozbudowac o nowe zrodla danych.",
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
      title: "Dopiac mapowanie danych do zespolow",
      body: "Po ekranie integracji kolejnym krokiem jest pokazanie, jak konkretne metryki z GitHub i Jira trafiaja do dashboardu zespolu."
    }
  },
  {
    id: "surveys",
    index: "02",
    title: "Ankiety",
    short: "Sprint feedback",
    description:
      "Krotkie ankiety po sprincie, biblioteka pytan i dodatkowe pytania kontekstowe dla release oraz retrospektyw.",
    heroTitle: "Sprint Survey jest sercem warstwy feedbackowej produktu.",
    heroCopy:
      "Kilka stalych pytan po kazdym sprincie pomaga zrozumiec workload, focus, clarity i quality review. Ten feedback uzupelnia dane z narzedzi i nadaje im kontekst.",
    futureItems: [
      "Przeglad ankiet",
      "Konfiguracja ankiety sprintowej",
      "Biblioteka pytan",
      "Sugestie pytan AI"
    ],
    screens: [
      {
        name: "Przeglad ankiet",
        goal: "Pokazac wszystkie typy ankiet i wyroznic Sprint Survey jako core.",
        status: "Implemented"
      },
      {
        name: "Konfiguracja ankiety sprintowej",
        goal: "Pokazac kategorie pytan, czestotliwosc i anonimowosc.",
        status: "Implemented"
      },
      {
        name: "Biblioteka pytan",
        goal: "Pokazac gotowe pytania systemowe i podzial na core vs optional.",
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
      title: "Podpiac wyniki Sprint Survey do Team Detail",
      body: "Po builderze i bibliotece pytan kolejnym etapem jest pokazanie wynikow ankiety po sprincie na poziomie konkretnych zespolow."
    }
  },
  {
    id: "teams",
    index: "03",
    title: "Zespoly",
    short: "Widok organizacji",
    description:
      "Widok organizacji i szczegolowy obraz kazdego zespolu w ostatnich sprintach.",
    heroTitle: "To tutaj produkt zaczyna wygladac jak prawdziwe narzedzie dla managera.",
    heroCopy:
      "Mozna szybko porownac zespoly, zobaczyc glowny status, najmocniejsze ryzyko i najmocniejsza strone, a potem wejsc glebiej w historie konkretnego zespolu.",
    futureItems: ["Przeglad zespolow", "Szczegoly zespolu", "Porownanie trendow miedzy zespolami"],
    screens: [
      {
        name: "Przeglad zespolow",
        goal: "Pokazac status wszystkich zespolow i glowne ryzyka.",
        status: "Implemented"
      },
      {
        name: "Szczegoly zespolu",
        goal: "Wejsc glebiej w historie Team Alpha.",
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
      title: "Przejsc do gotowych insightow i rekomendacji",
      body: "Mamy juz dane organizacyjne i historie sprintow. Nastepny etap to analiza AI, ktora polaczy te sygnaly w gotowe wnioski."
    }
  },
  {
    id: "insights",
    index: "04",
    title: "Wnioski AI",
    short: "Analiza i decyzje",
    description:
      "Analiza AI, ktora laczy dane delivery, ankiety i komentarze w czytelne wnioski oraz plan dzialan.",
    heroTitle: "Tutaj produkt przestaje byc dashboardem, a staje sie narzedziem decyzyjnym.",
    heroCopy:
      "Ten widok zbiera sygnaly z wielu miejsc i tlumaczy, co naprawde dzieje sie w zespole. Zamiast samych wykresow sa tutaj priorytety, przyczyny i rekomendowane dzialania.",
    futureItems: ["Najwazniejsze sygnaly", "Rozszerzona analiza AI", "Plan dzialan"],
    screens: [
      {
        name: "Najwazniejsze sygnaly",
        goal: "Pokazac liste najwazniejszych wnioskow i trendow.",
        status: "Implemented"
      },
      {
        name: "Rozszerzona analiza AI",
        goal: "Pokazac polaczenie delivery, ankiet i komentarzy.",
        status: "Implemented"
      },
      {
        name: "Plan dzialan",
        goal: "Pokazac dzialania, wlascicieli i review date.",
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
      title: "Domknac guardrails i governance",
      body: "Po analizie i action plannerze kolejnym etapem jest pokazanie, jak produkt chroni przed zlym uzyciem KPI i ankiet."
    }
  },
  {
    id: "governance",
    index: "05",
    title: "Zasady",
    short: "Bezpieczne KPI",
    description:
      "Zasady widocznosci, anonimowosci i bezpiecznej interpretacji KPI oraz ankiet.",
    heroTitle: "Guardrails to nie dodatek. To czesc przewagi produktu.",
    heroCopy:
      "Tutaj widac, jak system chroni zespoly przed zlym uzyciem metryk. Wyniki sa czytelne dla managerow, ale nie zamieniaja ludzi w rankingi ani nie niszcza zaufania do ankiet.",
    futureItems: ["Bezpieczne KPI", "Zasady ankiet", "Zasady prywatnosci"],
    screens: [
      {
        name: "Bezpieczne KPI",
        goal: "Pokazac zle KPI i bezpieczniejsze alternatywy.",
        status: "Implemented"
      },
      {
        name: "Zasady ankiet",
        goal: "Pokazac zasady anonimowosci, dostepu i stalych pytan.",
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
      body: "Po guardrails zostaje juz dopracowanie narracji prezentacyjnej, drobny polish wizualny i ewentualne screenshots do dokumentacji."
    }
  }
];

export const integrationsOverview = {
  summaryCards: [
    { label: "Aktywne integracje", value: "4 / 4", note: "GitHub, Jira, Slack, CI/CD" },
    { label: "Automatyczne metryki", value: "12", note: "Delivery, quality i predictability" },
    { label: "Ostatnia synchronizacja", value: "08:42", note: "Dane odswiezone 6 min temu" },
    { label: "Pokrycie organizacji", value: "3 zespoly", note: "Alpha, Beta, Gamma" }
  ],
  connected: [
    {
      name: "GitHub",
      status: "connected",
      owner: "Engineering Platform",
      lastSync: "6 min temu",
      description: "Zrodlo danych o PR-ach, review time i merge flow.",
      metrics: ["PR review time", "Merge lead time", "PR size", "Review load"],
      usage: "Uzywane do analizy delivery quality i przeciazenia reviewerow."
    },
    {
      name: "Jira",
      status: "connected",
      owner: "Delivery Operations",
      lastSync: "4 min temu",
      description: "Zrodlo danych o przeplywie pracy i stabilnosci sprintu.",
      metrics: ["Throughput", "Cycle time", "Lead time", "Planned vs unplanned work"],
      usage: "Uzywane do mierzenia flow, przewidywalnosci i presji pracy pilnej."
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
      note: "Dla zespolow produktowych pracujacych poza Jira."
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
      note: "Dodatkowy kontekst quality i stability dla zespolow produkcyjnych."
    }
  ],
  mappingFlow: [
    {
      source: "GitHub + Jira",
      output: "Cycle time, lead time, review pressure",
      explanation: "Laczymy flow pracy z danymi o review, zeby zobaczyc czy zespol przyspiesza zdrowo."
    },
    {
      source: "Jira + CI/CD",
      output: "Throughput vs release stability",
      explanation: "Wzrost liczby dostarczanych zadan zestawiamy z jakoscia release'ow i defektami po wdrozeniu."
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
    { label: "Pytania podstawowe", value: "6", note: "Staly zestaw pytan po sprincie" },
    { label: "Sredni odsetek odpowiedzi", value: "88%", note: "Na podstawie 3 ostatnich sprintow" },
    { label: "Sugestie AI", value: "Wlaczone", note: "Dla pytan tematycznych i komentarzy" }
  ],
  programs: [
    {
      name: "Sprint Survey",
      cadence: "Po kazdym sprincie",
      length: "6 pytan + 1 komentarz",
      owner: "Team Lead / Engineering Manager",
      badge: "Core",
      purpose: "Glowne zrodlo szybkiego feedbacku jakosciowego do analizy pracy zespolu."
    },
    {
      name: "Release Survey",
      cadence: "Warunkowo po waznym release",
      length: "4 pytania",
      owner: "Release Lead",
      badge: "Optional",
      purpose: "Bada confidence, napiecie i jakosc procesu wydawniczego po release."
    },
    {
      name: "Quarterly Review",
      cadence: "Raz na kwartal",
      length: "10 pytan",
      owner: "Engineering Ops / People",
      badge: "Extended",
      purpose: "Pozwala zobaczyc szersze trendy w procesie, wspolpracy i tooling."
    },
    {
      name: "Annual Review",
      cadence: "Raz w roku",
      length: "14 pytan",
      owner: "People Partner + Leadership",
      badge: "Strategic",
      purpose: "Daje szerszy przeglad kultury pracy, rozwoju i dlugofalowego wellbeing."
    }
  ],
  sprintBuilder: {
    cadence: "Automatycznie po zamknieciu sprintu",
    anonymity: "Wyniki widoczne od minimum 5 odpowiedzi",
    responseGoal: "Cel: 85% odpowiedzi w 24h",
    categories: [
      { name: "Workload", weight: "High", note: "Czy sprint byl do utrzymania?" },
      { name: "Focus Time", weight: "High", note: "Czy zespol mial czas na skupiona prace?" },
      { name: "Clarity", weight: "High", note: "Czy priorytety byly jasne?" },
      { name: "Review Quality", weight: "Medium", note: "Czy code review dzialalo dobrze?" },
      { name: "Tooling", weight: "Medium", note: "Czy narzedzia pomagaly czy spowalnialy?" },
      { name: "Predictability", weight: "Medium", note: "Czy sprint byl przewidywalny?" }
    ],
    questions: [
      "Czy workload w tym sprincie byl do utrzymania?",
      "Czy zespol mial wystarczajaco duzo czasu na skupiona prace?",
      "Czy priorytety sprintu byly jasne od poczatku do konca?",
      "Czy proces code review dzialal dobrze w tym sprincie?",
      "Czy narzedzia wspieraly prace zamiast ja spowalniac?",
      "Czy sprint byl przewidywalny i dobrze zaplanowany?"
    ]
  },
  library: [
    {
      category: "Team Health",
      type: "Core",
      examples: [
        "Czy workload byl do utrzymania?",
        "Czy zespol mial energie do pracy przez caly sprint?",
        "Czy tempo pracy bylo zdrowe?"
      ]
    },
    {
      category: "Delivery Experience",
      type: "Core",
      examples: [
        "Czy sprint byl przewidywalny?",
        "Czy zespol dostarczal zgodnie z planem?",
        "Czy zmiany w trakcie sprintu byly pod kontrola?"
      ]
    },
    {
      category: "Quality & Stability",
      type: "Optional",
      examples: [
        "Czy release confidence byl wysoki?",
        "Czy jakosc zmian byla wystarczajaca?",
        "Czy tempo review nie obnizylo jakosci?"
      ]
    },
    {
      category: "Collaboration",
      type: "Optional",
      examples: [
        "Czy wspolpraca w zespole przebiegala sprawnie?",
        "Czy zaleznosci od innych zespolow blokowaly prace?",
        "Czy blockerami zajmowano sie wystarczajaco szybko?"
      ]
    }
  ],
  aiSuggestions: [
    {
      prompt: "Chce zbadac przeciazenie po release",
      questions: [
        "Czy ostatni release zwiekszyl napiecie w zespole bardziej niz zwykle?",
        "Czy po release pojawilo sie zbyt duzo pracy reaktywnej?",
        "Czy zespol mial wystarczajaco duzo czasu na quality checks przed wdrozeniem?"
      ]
    },
    {
      prompt: "Chce zbadac jakosc code review",
      questions: [
        "Czy review bylo wystarczajaco dokladne, a nie tylko szybkie?",
        "Czy reviewerzy mieli realnie czas na analize zmian?",
        "Czy tempo merge'ow nie wymuszalo powierzchownego review?"
      ]
    }
  ]
};

export const teamsOverview = {
  summaryCards: [
    { label: "Zespoly stabilne", value: "1 / 3", note: "Beta jest obecnie najbardziej stabilna" },
    { label: "Zespoly do obserwacji", value: "2 / 3", note: "Alpha i Gamma maja mieszane sygnaly" },
    { label: "Sredni odsetek odpowiedzi", value: "89%", note: "Po ostatnich 3 sprintach" },
    { label: "Glowny sygnal", value: "Review pressure", note: "Najmocniej widoczne w Team Alpha" }
  ],
  dashboard: [
    {
      id: "alpha",
      name: "Team Alpha",
      mission: "Glowna platforma klienta",
      manager: "Marta Zielinska",
      squadSize: "9 osob",
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
      squadSize: "7 osob",
      releaseWindow: "Release weekly",
      responseRate: "86%",
      pulse: "4.2 / 5",
      status: "healthy",
      statusLabel: "Healthy",
      topRisk: "Zaleznosci od infrastruktury poza zespolem",
      topStrength: "Stabilny review flow i dobra przewidywalnosc sprintu",
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
      manager: "Joanna Lesna",
      squadSize: "8 osob",
      releaseWindow: "Release co 3 tygodnie",
      responseRate: "88%",
      pulse: "3.6 / 5",
      status: "caution",
      statusLabel: "Caution",
      topRisk: "Zbyt duzo zmian scope w trakcie sprintu",
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
        "Team Alpha dowozi wiecej pracy niz miesiac temu, ale wzrost throughput idzie razem ze spadkiem focus time, dluzszym review time i wieksza liczba defectow po release. To wyglada na zespol, ktory przyspieszyl kosztem jakosci i obciazenia.",
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
          note: "Najnizszy wynik w organizacji",
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
          note: "Zespol sygnalizuje zbyt duzo pracy reaktywnej pod koniec sprintu.",
          tone: "investigate"
        },
        {
          label: "Focus time",
          score: 2.9,
          note: "Coraz wiecej przerwan przez pilne poprawki i szybkie review.",
          tone: "investigate"
        },
        {
          label: "Clarity",
          score: 4.1,
          note: "Priorytety sa jasne, problem nie lezy w planowaniu celu sprintu.",
          tone: "healthy"
        },
        {
          label: "Review quality",
          score: 3.0,
          note: "Komentarze wskazuja na pospiech i review robione miedzy spotkaniami.",
          tone: "caution"
        },
        {
          label: "Tooling support",
          score: 3.6,
          note: "Narzedzia sa OK, ale release process jest meczacy.",
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
          note: "Wiecej pracy dowiezionej, ale pojawily sie sygnaly przeciazenia."
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
          note: "Najmocniejsze tempo delivery, ale tez wyrazny koszt jakosci i komfortu pracy."
        }
      ],
      commentThemes: [
        {
          theme: "Presja release na koncu sprintu",
          weight: "High",
          tone: "investigate",
          detail: "Kilka osob wskazuje, ze ostatnie 3 dni sprintu to gaszenie pozarow i szybkie merge'e."
        },
        {
          theme: "Review miedzy spotkaniami",
          weight: "Medium",
          tone: "caution",
          detail: "Komentarze sugeruja, ze review jest robione szybko i bez spokojnego czasu na analize."
        },
        {
          theme: "Priorytety jasne od poczatku",
          weight: "Low",
          tone: "healthy",
          detail: "Zespol nie ma problemu z tym, co robic. Problem jest raczej w tempie niz w kierunku."
        }
      ],
      strengths: [
        "Dobrze rozumiany cel sprintu i wysoka jasnosc priorytetow.",
        "Zespol nadal dowozi wazne elementy roadmapy.",
        "Wysoki response rate pozwala ufac danym z ankiety."
      ],
      risks: [
        "Szybszy delivery zaczyna podnosic liczbe defectow po release.",
        "Review time rosnie, mimo ze komentarze sugeruja spadek jakosci review.",
        "Focus time i workload pogarszaja sie drugi sprint z rzedu."
      ],
      nextActions: [
        "Na najblizszy sprint zmniejszyc scope release o 10-15%.",
        "Zablokowac 2 stale okna na review zamiast robic je ad hoc miedzy spotkaniami.",
        "Sprawdzic, ktore poprawki po release generuja najwiecej pracy reaktywnej."
      ]
    },
    beta: {
      aiSummary:
        "Team Beta wyglada najbardziej zdrowo w calej organizacji. Delivery jest stabilne, review dziala sprawnie, a wyniki z ankiety nie pokazuja duzych napiec. To dobry zespol referencyjny do porownania z Alpha i Gamma.",
      snapshot: [
        {
          label: "Aktualny status",
          value: "Healthy",
          note: "Stabilny rytm sprintow i release",
          tone: "healthy"
        },
        {
          label: "Sprint pulse",
          value: "4.2 / 5",
          note: "Najwyzszy wynik w organizacji",
          tone: "healthy"
        },
        {
          label: "Escaped defects",
          value: "1",
          note: "Jakosc stabilna od 3 sprintow",
          tone: "healthy"
        },
        {
          label: "Response rate",
          value: "86%",
          note: "Wystarczajaco mocny sygnal do trendow",
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
          note: "Zespol ma regularne bloki skupionej pracy.",
          tone: "healthy"
        },
        {
          label: "Clarity",
          score: 4.4,
          note: "Priorytety i zaleznosci sa dobrze komunikowane.",
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
          note: "Jedyny czestszy temat to zaleznosci od innego zespolu infrastruktury.",
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
          note: "Rowny sprint bez wiekszych blokad."
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
          note: "Najbardziej przewidywalny zespol w ostatnim cyklu."
        }
      ],
      commentThemes: [
        {
          theme: "Dobre planowanie pracy",
          weight: "Medium",
          tone: "healthy",
          detail: "Komentarze chwala spokojne sprint planning i realistyczny scope."
        },
        {
          theme: "Zaleznosci od infrastruktury",
          weight: "Low",
          tone: "caution",
          detail: "Pojawia sie temat czekania na zewnetrzne decyzje platformowe."
        }
      ],
      strengths: [
        "Najbardziej stabilny review flow w organizacji.",
        "Bardzo dobra przewidywalnosc sprintow.",
        "Niski poziom pracy reaktywnej po wdrozeniach."
      ],
      risks: [
        "Ryzyko zaleznosci od zespolow poza Beta.",
        "Mozliwe spowolnienie, jesli pojawi sie wiecej pilnych zgloszen integracyjnych."
      ],
      nextActions: [
        "Uzyc Team Beta jako benchmarku dobrych praktyk review.",
        "Spisac ich rytm sprint planning i sharing blockers.",
        "Monitorowac zaleznosci z infrastruktura, zanim stana sie czestym blockerem."
      ]
    },
    gamma: {
      aiSummary:
        "Team Gamma nadal dostarcza szybko, ale ich flow robi sie coraz mniej przewidywalny. Ankiety nie pokazuja kryzysu jak w Alpha, ale widac rosnace zmeczenie zmianami zakresu prac i wieksza liczbe poprawek po sprintach.",
      snapshot: [
        {
          label: "Aktualny status",
          value: "Caution",
          note: "Dobre tempo, ale slabsza przewidywalnosc",
          tone: "caution"
        },
        {
          label: "Sprint pulse",
          value: "3.6 / 5",
          note: "Srodek stawki w organizacji",
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
          note: "Dane wystarczajace do trendow",
          tone: "healthy"
        }
      ],
      surveyBreakdown: [
        {
          label: "Workload sustainability",
          score: 3.4,
          note: "Workload jeszcze akceptowalny, ale czuc wiecej zmian w trakcie sprintu.",
          tone: "caution"
        },
        {
          label: "Focus time",
          score: 3.5,
          note: "Focus rozbijany przez czeste korekty scope i pytania produktowe.",
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
          note: "Review jest calkiem dobre, ale pojawia sie wiecej pospiechu przy koncowce sprintu.",
          tone: "caution"
        },
        {
          label: "Tooling support",
          score: 3.9,
          note: "Narzedzia nie sa problemem, wiekszy wplyw ma zmienny scope.",
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
          note: "Pojawia sie wiecej zmian zakresu w polowie sprintu."
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
          note: "Wiecej pracy dowiezionej, ale kosztem przewidywalnosci i wiekszej liczby poprawek."
        }
      ],
      commentThemes: [
        {
          theme: "Zmieniajacy sie scope sprintu",
          weight: "High",
          tone: "investigate",
          detail: "Najczesciej powtarzany komentarz dotyczy zmiany kierunku pracy po srodku sprintu."
        },
        {
          theme: "Szybkie wsparcie produktowe",
          weight: "Low",
          tone: "healthy",
          detail: "Pozytywny sygnal: zespol dobrze wspolpracuje z product managerem mimo zmian."
        },
        {
          theme: "Koncowka sprintu bardziej napieta",
          weight: "Medium",
          tone: "caution",
          detail: "Kilka osob wskazuje, ze koncowka sprintu jest coraz mniej przewidywalna."
        }
      ],
      strengths: [
        "Wysoki throughput i dobra reakcja na potrzeby biznesowe.",
        "Dobry poziom wspolpracy z product managerem.",
        "Brak mocnych problemow narzedziowych."
      ],
      risks: [
        "Spadek clarity moze szybko przelozyc sie na wiekszy chaos delivery.",
        "Rosnaca liczba defectow przy nowych funkcjach.",
        "Zmienny scope moze z czasem obnizyc zaufanie zespolu do planowania sprintu."
      ],
      nextActions: [
        "Ograniczyc liczbe zmian scope po midpoint review sprintu.",
        "Dodac prosty release checklist dla nowych funkcji biznesowych.",
        "Na nastepnym retro sprawdzic, ktore zmiany byly naprawde konieczne, a ktore mogly poczekac."
      ]
    }
  }
};

export const insightsOverview = {
  summaryCards: [
    { label: "Otwarte sygnaly", value: "4", note: "2 wysokie, 2 srednie" },
    { label: "Zespoly do dzialania", value: "2 / 3", note: "Alpha i Gamma" },
    { label: "Najwyzsza pewnosc", value: "92%", note: "Alpha: workload + quality" },
    { label: "Zaplanowane dzialania", value: "7", note: "Na najblizsze 2 sprinty" }
  ],
  topSignals: [
    {
      title: "Delivery rosnie szybciej niz quality",
      level: "High",
      tone: "investigate",
      summary:
        "W Team Alpha wzrost throughput i szybszy release nie ida w parze ze stabilnoscia jakosciowa.",
      scope: "Team Alpha",
      confidence: "92%",
      evidence: "GitHub + Jira + CI/CD + Sprint Survey"
    },
    {
      title: "Sprint scope staje sie mniej przewidywalny",
      level: "Medium",
      tone: "caution",
      summary:
        "Team Gamma nadal dowozi, ale czesciej zmienia kierunek pracy w trakcie sprintu i traci clarity.",
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
        "AI laczy tutaj trzy sygnaly: wiekszy throughput, gorszy workload score i rosnace defects po release. To nie wyglada jak zdrowa poprawa efektywnosci, tylko jak przyspieszenie kosztem jakosci i czasu na review.",
      explanations: [
        {
          title: "Throughput sam w sobie nie oznacza poprawy",
          weight: "High",
          tone: "investigate",
          detail:
            "Team Alpha dostarczyl wiecej punktow niz w poprzednim sprincie, ale cycle time, review time i escaped defects poszly w gore razem z nim."
        },
        {
          title: "Survey potwierdza przeciazenie, a nie tylko gorszy nastroj",
          weight: "High",
          tone: "investigate",
          detail:
            "Workload i focus time spadaja przez dwa sprinty z rzedu, a open comments opisuja prace reaktywna i review robione pod presja."
        },
        {
          title: "Problem nie dotyczy clarity",
          weight: "Medium",
          tone: "healthy",
          detail:
            "Priorytety i cele sprintu sa jasne, wiec zrodel problemu trzeba szukac w tempie release i sposobie pracy przy koncowce sprintu."
        }
      ],
      evidenceChain: [
        {
          signal: "GitHub review time",
          finding: "Review time wzrosl z 22 h do 31 h w 3 sprintach",
          whyItMatters: "Dluzszy review bez poprawy quality sugeruje przeciazenie reviewerow albo review odkladane na pozniej."
        },
        {
          signal: "Jira throughput vs cycle time",
          finding: "Throughput rosnie, ale cycle time nie spada",
          whyItMatters: "To oznacza, ze zespol nie pracuje plyniej, tylko wypycha wiecej pracy przy wiekszym obciazeniu procesu."
        },
        {
          signal: "CI/CD defects",
          finding: "Escaped defects wzrosly z 2 do 5",
          whyItMatters: "Rosnacy koszt quality potwierdza, ze przyspieszenie nie jest darmowe."
        },
        {
          signal: "Sprint Survey",
          finding: "Workload 2.8 / 5, Focus 2.9 / 5",
          whyItMatters: "Ludzie odczuwaja skutki tego wzorca jeszcze zanim problem stanie sie bardzo widoczny finansowo."
        }
      ],
      correlations: [
        {
          pair: "Throughput vs defects",
          reading: "Zespol dowozi wiecej pracy, ale jednoczesnie zwieksza liczbe poprawek po release.",
          verdict: "Unhealthy tradeoff",
          tone: "investigate"
        },
        {
          pair: "Review time vs review quality",
          reading: "Wiecej czasu w review nie poprawia quality, bo review dzieje sie pod presja i w zlym momencie dnia.",
          verdict: "Process issue",
          tone: "caution"
        },
        {
          pair: "Clarity vs workload",
          reading: "Dobra clarity nie chroni zespolu przed przeciazeniem, jesli release flow jest zbyt agresywny.",
          verdict: "Important nuance",
          tone: "healthy"
        }
      ],
      plainLanguage:
        "Team Alpha nie ma problemu z tym, co trzeba zrobic. Problem jest taki, ze zespol robi za duzo naraz, za szybko dochodzi do koncowki sprintu i potem placi za to jakoscia oraz zmeczeniem.",
      actionPlan: [
        {
          title: "Zmniejszyc release scope na 2 sprinty testowe",
          description:
            "Na dwa kolejne sprinty ograniczyc planowany zakres release, zeby sprawdzic czy spadnie review pressure i liczba poprawek po wdrozeniu.",
          owner: "Marta Zielinska",
          reviewDate: "Po Sprincie 24.10",
          expectedImpact: "Mniej pracy reaktywnej i lepszy focus time",
          priority: "High",
          tone: "investigate"
        },
        {
          title: "Wprowadzic stale okna review",
          description:
            "Dwa bloki review dziennie zamiast review robionego miedzy spotkaniami i na koncu dnia.",
          owner: "Senior Engineers",
          reviewDate: "Po 10 dniach",
          expectedImpact: "Krotszy review time i lepsza jakosc decyzji",
          priority: "High",
          tone: "investigate"
        },
        {
          title: "Przeanalizowac zrodla escaped defects",
          description:
            "Sprawdzic, ktore typy zmian najczesciej wracaja po release i czy mozna dodac prosty quality gate.",
          owner: "Release Lead",
          reviewDate: "Na nastepnym retro",
          expectedImpact: "Mniej poprawek po wdrozeniu",
          priority: "Medium",
          tone: "caution"
        }
      ]
    },
    beta: {
      executiveSummary:
        "Team Beta daje obraz zdrowego przeplywu pracy. Delivery jest spokojne, review szybkie, a survey nie sygnalizuje przeciazenia. Dla organizacji to dobry benchmark, a nie obszar alarmowy.",
      explanations: [
        {
          title: "Stabilnosc jest tutaj przewaga",
          weight: "Medium",
          tone: "healthy",
          detail:
            "Beta nie ma najbardziej spektakularnego throughput, ale ma najlepsze polaczenie quality, predictability i team health."
        },
        {
          title: "Survey i metryki mowia to samo",
          weight: "Medium",
          tone: "healthy",
          detail:
            "Wysokie focus time i workload score dobrze zgadzaja sie z krotkim cycle time i niska liczba defects."
        }
      ],
      evidenceChain: [
        {
          signal: "GitHub review flow",
          finding: "Review utrzymuje sie na poziomie 12-13 h",
          whyItMatters: "To wyglada na zdrowy rytm wspolpracy bez duzych zaleglosci."
        },
        {
          signal: "Jira predictability",
          finding: "Cycle time stopniowo spada i jest stabilny",
          whyItMatters: "Zespol konczy sprinty bez duzych zrywow i pracy reaktywnej."
        },
        {
          signal: "Sprint Survey",
          finding: "Workload 4.3 / 5, Focus 4.1 / 5",
          whyItMatters: "Ludzie potwierdzaja, ze proces jest do utrzymania."
        }
      ],
      correlations: [
        {
          pair: "Review time vs quality",
          reading: "Szybkie review nie obniza quality, bo tempo jest stabilne i przewidywalne.",
          verdict: "Healthy pattern",
          tone: "healthy"
        },
        {
          pair: "Throughput vs workload",
          reading: "Zespol nie musi zwiekszac throughput za wszelka cene, zeby utrzymac dobry wynik biznesowy.",
          verdict: "Balanced",
          tone: "healthy"
        }
      ],
      plainLanguage:
        "Beta pokazuje, ze dobry wynik nie musi oznaczac ciaglego dociskania zespolu. Oni pracuja spokojnie i wlasnie dlatego sa przewidywalni.",
      actionPlan: [
        {
          title: "Zachowac obecny rytm sprintow",
          description: "Nie zmieniac procesu na sile, tylko utrzymac obecne praktyki review i planowania.",
          owner: "Tomasz Krawiec",
          reviewDate: "Za 1 miesiac",
          expectedImpact: "Utrzymanie stabilnego benchmarku",
          priority: "Low",
          tone: "healthy"
        },
        {
          title: "Udokumentowac praktyki Beta dla innych zespolow",
          description:
            "Spisac, jak wyglada ich sprint planning, review flow i praca z blockerami, zeby wykorzystac to jako wzorzec w Alpha i Gamma.",
          owner: "Engineering Ops",
          reviewDate: "Na przegladzie kwartalnym",
          expectedImpact: "Lepsze standardy pracy w calej organizacji",
          priority: "Medium",
          tone: "healthy"
        }
      ]
    },
    gamma: {
      executiveSummary:
        "Team Gamma nie jest w kryzysie, ale ich flow robi sie coraz bardziej chaotyczny. Najwiekszym tematem nie jest tutaj przeciazenie release jak w Alpha, tylko spadek przewidywalnosci i clarity przez zmieniajacy sie scope sprintu.",
      explanations: [
        {
          title: "Produkt zmienia kierunek pracy zbyt czesto",
          weight: "High",
          tone: "investigate",
          detail:
            "Komentarze i wyniki clarity pokazuja, ze zespol reaguje na zbyt wiele zmian po srodku sprintu."
        },
        {
          title: "Throughput jeszcze maskuje problem",
          weight: "Medium",
          tone: "caution",
          detail:
            "Na pierwszy rzut oka Gamma dowozi wiecej, ale za ta liczba stoi coraz mniej przewidywalny proces i wiecej poprawek."
        }
      ],
      evidenceChain: [
        {
          signal: "Jira scope change",
          finding: "Wzrost zmian priorytetow po midpoint review",
          whyItMatters: "To obniza przewidywalnosc i zwieksza koszt przelaczania kontekstu."
        },
        {
          signal: "Survey clarity",
          finding: "Clarity spadlo do 3.2 / 5",
          whyItMatters: "Zespol przestaje ufac, ze plan sprintu jest stabilny."
        },
        {
          signal: "Defects",
          finding: "Escaped defects wzrosly z 2 do 3",
          whyItMatters: "Nowe funkcje dowozone pod presja czesciej wracaja do poprawy."
        }
      ],
      correlations: [
        {
          pair: "Scope change vs focus time",
          reading: "Im wiecej zmian w trakcie sprintu, tym trudniej utrzymac spokojna prace nad zaplanowanymi zadaniami.",
          verdict: "Growing friction",
          tone: "caution"
        },
        {
          pair: "Throughput vs predictability",
          reading: "Zespol dalej dowozi, ale coraz mniej wiadomo, jakim kosztem i czy ten wynik da sie utrzymac.",
          verdict: "Risk building up",
          tone: "investigate"
        }
      ],
      plainLanguage:
        "Gamma jeszcze wyglada dobrze na wykresach delivery, ale pod spodem zaczyna brakowac stabilnosci. Jesli scope dalej bedzie sie tak zmienial, to za chwile problem bedzie juz w quality i morale.",
      actionPlan: [
        {
          title: "Ograniczyc zmiany scope po midpoint review",
          description:
            "Wprowadzic prosta zasade: po polowie sprintu zmieniamy priorytety tylko przy jasno uzasadnionym wyjatku.",
          owner: "Joanna Lesna + PM",
          reviewDate: "Po 2 sprintach",
          expectedImpact: "Lepsza clarity i przewidywalnosc",
          priority: "High",
          tone: "investigate"
        },
        {
          title: "Wdrozyc release checklist dla nowych funkcji",
          description:
            "Krotka lista kontroli przed release ma ograniczyc liczbe drobnych poprawek po wdrozeniu.",
          owner: "Feature Lead",
          reviewDate: "Po nastepnym release",
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
    { label: "Minimalna anonimowosc", value: "5 odpowiedzi", note: "Mniej odpowiedzi = brak widoku wynikow" },
    { label: "Role z dostepem", value: "4", note: "Kazda rola ma inny poziom widocznosci" },
    { label: "Stale zasady ankiet", value: "6", note: "Podstawowe reguly dla Sprint Survey" }
  ],
  guardrails: [
    {
      unsafeKpi: "Ranking developerow po liczbie commitow",
      risk: "Zacheca do sztucznej aktywnosci i nie mowi nic o quality, review ani realnym wplywie pracy.",
      saferAlternative: "Team-level flow trends + quality signals",
      framing: "Patrzymy na rytm pracy zespolu, a nie kto kliknal najwiecej."
    },
    {
      unsafeKpi: "Throughput jako jedyny wskaznik sukcesu",
      risk: "Moze ukryc przeciazenie, spadek focus time i wzrost defects po release.",
      saferAlternative: "Throughput razem z quality, workload i predictability",
      framing: "Wiecej dowiezionej pracy ma sens tylko wtedy, gdy nie psuje procesu."
    },
    {
      unsafeKpi: "Sredni review time uzywany do oceny pojedynczej osoby",
      risk: "Prowadzi do powierzchownego review i presji na szybkosc zamiast quality decyzji.",
      saferAlternative: "Review flow na poziomie zespolu + survey o jakosci review",
      framing: "Review ma byc zdrowym procesem wspolpracy, a nie testem szybkosci."
    },
    {
      unsafeKpi: "Publiczne porownywanie wynikow ankiet miedzy osobami",
      risk: "Niszczy zaufanie do ankiet i obniza szczerosc odpowiedzi.",
      saferAlternative: "Anonimowe wyniki team-level z minimalnym progiem odpowiedzi",
      framing: "Ankiety sluza zrozumieniu procesu, nie ocenie jednostek."
    },
    {
      unsafeKpi: "Defects bez kontekstu typu zmian i release pressure",
      risk: "Moze karac zespoly, ktore robia najtrudniejsze lub najbardziej ryzykowne wdrozenia.",
      saferAlternative: "Defects + release context + workload + sprint scope",
      framing: "Jakosc analizujemy razem z trudnoscia i tempem pracy."
    }
  ],
  surveyPolicies: [
    {
      title: "Staly core Sprint Survey",
      tag: "Core",
      tone: "healthy",
      description: "Kazdy zespol ma ten sam podstawowy zestaw pytan o workload, focus, clarity, review i tooling. Dzieki temu mozna porownywac trendy w czasie."
    },
    {
      title: "Dodatkowe pytania tylko jako warstwa opcjonalna",
      tag: "Optional",
      tone: "caution",
      description: "Manager moze dodac kilka pytan kontekstowych, ale nie powinien zmieniac calego szkieletu ankiety co sprint."
    },
    {
      title: "Minimalny prog odpowiedzi",
      tag: "Privacy",
      tone: "healthy",
      description: "Wyniki ankiety nie sa pokazywane, jesli liczba odpowiedzi jest za mala, zeby zachowac anonimowosc."
    },
    {
      title: "Survey fatigue control",
      tag: "Guardrail",
      tone: "caution",
      description: "System pilnuje, zeby nie dokladac zbyt wielu ankiet w jednym okresie. Sprint Survey jest krotki, a dodatkowe ankiety sa ograniczone."
    }
  ],
  accessModel: [
    {
      role: "Engineering Manager",
      scope: "Widok team-level + action plan",
      permissions: [
        "Moze widziec wyniki zespolu i trendy sprintowe",
        "Moze tworzyc actions po insightach",
        "Nie widzi indywidualnych odpowiedzi pracownikow"
      ]
    },
    {
      role: "Team Lead",
      scope: "Widok operacyjny sprintu",
      permissions: [
        "Moze uruchamiac Sprint Survey",
        "Moze widziec wynik zespolu po przekroczeniu progu odpowiedzi",
        "Moze dodawac pytania kontekstowe do release survey"
      ]
    },
    {
      role: "People / HR",
      scope: "Widok przekrojowy bez danych osobowych",
      permissions: [
        "Moze obserwowac trendy miedzy zespolami",
        "Moze analizowac obszary wellbeing i workload",
        "Nie widzi szczegolow technicznych ani danych repo per osoba"
      ]
    },
    {
      role: "Leadership",
      scope: "Widok strategiczny",
      permissions: [
        "Widok zagregowany dla organizacji",
        "Dostep do najwazniejszych insightow i ryzyk",
        "Brak wgladu w surowe komentarze jesli nie ma takiej potrzeby"
      ]
    }
  ],
  privacyRules: [
    {
      title: "Brak widoku indywidualnych ocen",
      description: "FlowScope nie pokazuje odpowiedzi na poziomie jednej osoby. Produkt dziala na poziomie zespolu i trendu, nie na poziomie rankingu pracownikow."
    },
    {
      title: "Ankiety nie sluza do performance review",
      description: "W dokumentacji i w samym interfejsie system jasno komunikuje, ze wyniki ankiet nie powinny byc uzywane do oceny rocznej pojedynczych osob."
    },
    {
      title: "AI nie trenuje sie na danych klienta bez kontroli",
      description: "Wersja produktowa powinna jasno okreslac, jak uzywane sa dane i dawac organizacji mozliwosc pelnej kontroli nad prywatnoscia."
    }
  ]
};
