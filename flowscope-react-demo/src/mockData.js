export const appSummary = {
  organization: "Northstar Digital",
  size: "180 osób w IT, 3 zespoły pokazowe",
  tooling: "GitHub + Jira + Slack + CI/CD",
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
        status: "Planned"
      },
      {
        name: "Add Integration",
        goal: "Pokazać, że produkt można rozbudować o nowe źródła danych.",
        status: "Planned"
      }
    ],
    dataPoints: [
      "PR review time",
      "Throughput",
      "Cycle time",
      "Deployment frequency",
      "Response delivery przez Slack"
    ],
    nextStep: {
      title: "Zbudować widok statusów integracji",
      body: "Potrzebujemy listy integracji, statusów połączenia, ostatniej synchronizacji i przypisanych metryk."
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
        status: "Planned"
      },
      {
        name: "Sprint Survey Builder",
        goal: "Pokazać kategorie pytań, częstotliwość i anonimowość.",
        status: "Planned"
      },
      {
        name: "Question Library",
        goal: "Pokazać gotowe pytania systemowe i podział na core vs optional.",
        status: "Planned"
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
      title: "Ustalić finalne pytania sprint survey",
      body: "Przed implementacją buildera potrzebujemy zamknąć zestaw 5-6 pytań stałych i podział na kategorie."
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
