# Demo struktura ekranów i plan realizacji

Data opracowania: 2026-05-06

## 1. Proponowana struktura demo

Demo powinno mieć 5 głównych sekcji w nawigacji:

1. Integrations
2. Surveys
3. Teams
4. Insights
5. Governance

To jest bardziej profesjonalne niż pokazywanie wszystkiego jako przypadkowych kart.

## 2. Mapa ekranów

### Sekcja 1: Integrations

#### Ekran 1. Integrations Overview

Cel:
- pokazać, że produkt nie opiera się tylko na ankietach.

Co pokazuje:
- lista aktywnych integracji,
- status połączenia,
- ostatnia synchronizacja,
- jakie dane przychodzą z każdej integracji.

Przykładowe kafelki:
- GitHub
- Jira
- Slack
- CI/CD

Przy każdej integracji:
- connected / pending / inactive,
- jakie metryki dostarcza,
- do czego system używa tych danych.

#### Ekran 2. Add Integration

Cel:
- pokazać, że produkt można rozbudowywać o źródła danych.

Co pokazuje:
- lista możliwych integracji,
- przycisk "Connect",
- krótki opis źródła danych,
- mini-preview:
  - PR review time,
  - throughput,
  - deployment frequency,
  - survey delivery.

## 3. Sekcja Surveys

### Ekran 3. Survey Overview

Cel:
- pokazać, jakie ankiety działają w systemie.

Co pokazuje:
- Sprint Survey
- Release Survey
- Quarterly Review
- Annual Review

Ważne:
- Sprint Survey ma być oznaczona jako core,
- pozostałe ankiety jako optional / extended.

### Ekran 4. Sprint Survey Builder

Cel:
- pokazać główną ankietę produktu.

Co pokazuje:
- nazwa ankiety,
- częstotliwość,
- anonimowość,
- pytania podstawowe,
- kategorie pytań,
- liczba pytań,
- response goal.

Najważniejsze pytania:
- workload,
- focus time,
- clarity,
- review quality,
- tooling,
- sprint predictability.

### Ekran 5. Question Library

Cel:
- pokazać, że system ma gotową bibliotekę pytań.

Co pokazuje:
- kategorie pytań,
- core vs optional,
- sprint vs release vs quarterly,
- filtry po typie pytania.

Przykładowe kategorie:
- Team Health
- Delivery Experience
- Quality & Stability
- Collaboration
- Leadership & Clarity
- Wellbeing

### Ekran 6. AI Question Suggestions

Cel:
- pokazać AI jako pomocnika, a nie jako magiczną czarną skrzynkę.

Co pokazuje:
- pole celu ankiety,
- prompt lub temat,
- wygenerowane pytania,
- przycisk "Add to survey",
- prostą ocenę jakości pytania.

Przykład:
- cel: "przeciążenie po release"
- AI proponuje 5 pytań
- użytkownik wybiera 3

## 4. Sekcja Teams

### Ekran 7. Teams Dashboard

Cel:
- pokazać organizacyjny widok produktu.

Co pokazuje:
- Team Alpha
- Team Beta
- Team Gamma

Dla każdego zespołu:
- status healthy / caution / investigate,
- top risk,
- top strength,
- ostatni trend,
- response rate ankiety po sprincie.

### Ekran 8. Team Detail

Cel:
- wejść głębiej w jeden konkretny zespół.

Co pokazuje:
- delivery metrics,
- quality metrics,
- sprint survey trend,
- open comments themes,
- current alerts,
- main recommendation.

To będzie rozwinięcie obecnego dashboardu, który już mamy.

## 5. Sekcja Insights

### Ekran 9. Insights Overview

Cel:
- pokazać główne wnioski systemu.

Co pokazuje:
- najważniejsze ryzyka,
- pozytywne sygnały,
- porównanie sprint do sprintu,
- zmiany w czasie,
- lista insightów.

### Ekran 10. Extended AI Analysis

Cel:
- pokazać najciekawszą część produktu.

Co pokazuje:
- połączenie twardych danych i ankiet,
- grupowanie komentarzy,
- możliwe przyczyny problemu,
- risk level,
- suggested action.

Przykład insightu:
- throughput rośnie,
- review time spada,
- escaped defects rosną,
- workload spada,
- AI wskazuje ryzyko przyspieszania kosztem jakości i zdrowia zespołu.

### Ekran 11. Action Planner

Cel:
- pokazać, że system nie kończy się na analizie.

Co pokazuje:
- rekomendowane działania,
- właściciel działania,
- termin przeglądu,
- expected outcome,
- status działania.

## 6. Sekcja Governance

### Ekran 12. KPI Guardrails

Cel:
- pokazać, że produkt jest bezpieczny i świadomy ryzyka.

Co pokazuje:
- złe KPI,
- dlaczego są szkodliwe,
- bezpieczniejsze alternatywy,
- ostrzeżenia przed oceną indywidualną.

### Ekran 13. Survey Governance

Cel:
- pokazać zasady ankiet.

Co pokazuje:
- kto może tworzyć ankiety,
- które pytania są stałe,
- które są opcjonalne,
- kto widzi wyniki,
- minimalna liczba odpowiedzi,
- zasady anonimowości.

## 7. Jak to połączyć w jedną narrację demo

Najlepszy flow prezentacji:

1. Integrations Overview
- skąd biorą się twarde dane.

2. Sprint Survey Builder
- jak zbieramy szybki feedback jakościowy po sprincie.

3. Teams Dashboard
- jak wygląda ogólny stan zespołów.

4. Team Detail
- co dzieje się w Team Alpha.

5. Extended AI Analysis
- jak system łączy dane i znajduje problem.

6. Action Planner
- co system rekomenduje zrobić.

7. KPI Guardrails
- dlaczego ten produkt nie jest narzędziem kontroli ludzi.

To jest bardzo spójny i profesjonalny scenariusz.

## 8. Które ekrany są must-have

Jeśli chcemy zrobić wersję mocną, ale nadal realistyczną, must-have to:

1. Integrations Overview
2. Sprint Survey Builder
3. Question Library
4. Teams Dashboard
5. Team Detail
6. Extended AI Analysis
7. KPI Guardrails

## 9. Które ekrany są nice-to-have

Jeśli starczy czasu:

1. Add Integration
2. AI Question Suggestions
3. Action Planner
4. Survey Governance

## 10. Rekomendowana architektura React

### App shell

Stałe elementy:
- sidebar,
- topbar,
- content area.

### Główne moduły

- `integrations/`
- `surveys/`
- `teams/`
- `insights/`
- `governance/`

### Wspólne komponenty

- cards,
- tables,
- charts,
- status pills,
- filters,
- info banners,
- insight cards,
- question cards.

## 11. Model mock data

Powinniśmy przygotować 1 wspólny model danych:

### Organization

- name
- size
- numberOfTeams

### Integrations

- provider
- status
- lastSync
- metricsProvided

### Teams

- id
- name
- status
- topRisk
- topStrength

### Sprints

- sprintName
- throughput
- cycleTime
- reviewTime
- defects
- urgentWork

### Survey templates

- id
- name
- type
- cadence
- categories
- questions

### Survey responses

- teamId
- sprintId
- responseRate
- categoryScores
- comments

### Insights

- title
- severity
- evidence
- explanation
- recommendation

## 12. Co trzeba przygotować do implementacji

Przed wejściem w kod powinniśmy mieć gotowe:

### Treść

- finalne nazwy ekranów,
- finalny flow demo,
- finalne pytania do sprint survey,
- finalne kategorie pytań,
- finalne komunikaty AI,
- finalne guardrails KPI.

### Dane

- 3 zespoły,
- 3 sprinty danych,
- 2-3 typy ankiet,
- przykładowe komentarze,
- 5-8 insightów,
- 4-6 złych KPI z opisem.

### UX

- struktura sidebaru,
- logika przechodzenia między ekranami,
- styl tabel,
- styl kart,
- styl insightów i alertów.

## 13. Najkrótsza decyzja wdrożeniowa

Najlepszy plan jest taki:

- budujemy demo w React,
- zostajemy przy mock data,
- pokazujemy 7 ekranów must-have,
- układamy prezentację wokół flow:
  - integracje -> sprint survey -> dashboard zespołów -> analiza AI -> rekomendacje -> guardrails.

To da demo, które będzie:
- czytelne,
- profesjonalne,
- spójne,
- zgodne z Waszą główną ideą produktu.
