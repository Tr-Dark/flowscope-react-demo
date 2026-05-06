# Integracja i przepływ produktu

## Najważniejsze doprecyzowanie

Nasz produkt **nie jest systemem ankietowym**.

Ankiety są tylko jedną z warstw.

Główna idea produktu jest szersza:
- system zbiera twarde dane z narzędzi pracy,
- do tego dodaje krótki feedback od zespołu,
- potem łączy oba typy danych,
- na końcu pokazuje analizę i rekomendacje.

Czyli:

**metryki + kontekst + interpretacja**

a nie:

**same ankiety**

## Co dzieje się z tym, co już mamy

To, co już mamy w koncepcji, nadal zostaje.

Nic nie wyrzucamy.

Mamy już:
- dashboard zespołu,
- metryki delivery i jakości,
- wyniki ankiet,
- insighty,
- guardrails KPI.

Teraz tylko doprecyzowujemy logikę działania:

1. najpierw są dane z narzędzi,
2. potem krótka ankieta po sprincie,
3. potem system robi analizę,
4. na końcu pokazuje rekomendacje.

## Co powinno być fundamentem produktu

Fundamentem produktu powinny być integracje z narzędziami, które dają twarde dane.

Na przykład:
- GitHub / GitLab,
- Jira / Linear,
- CI/CD,
- Slack / Teams,
- ewentualnie systemy incydentów.

To one dają:
- throughput,
- cycle time,
- lead time,
- review time,
- deployment frequency,
- escaped defects,
- incident load,
- unplanned work.

To jest rdzeń systemu.

## Jaka jest rola ankiet

Ankiety nie zastępują metryk.

Ankiety odpowiadają na pytanie:

**dlaczego to się dzieje?**

Na przykład:
- metryki pokazują, że cycle time rośnie,
- ankieta pokazuje, że zespół ma chaos priorytetów,
- komentarze pokazują, że review jest zbyt płytkie,
- AI łączy to w jedną hipotezę.

To jest właściwa rola ankiet w naszym systemie.

## Co powinno być głównym typem ankiety

Masz rację:

Najważniejsza dla naszego produktu powinna być:

**krótka ankieta po sprincie**

To jest najbardziej spójne z całą koncepcją.

Dlaczego:
- jest związana z realnym rytmem pracy zespołu,
- daje szybki feedback,
- łatwo ją powiązać z danymi delivery,
- łatwo pokazać trend sprint do sprintu,
- daje konkret do analizy.

## Jakie ankiety powinny być w naszym modelu

### 1. Ankieta po sprincie

To jest główna ankieta produktu.

Powinna być:
- krótka,
- stała,
- regularna,
- prosta do porównywania w czasie.

Najbardziej pasujące pytania:
- czy workload był do utrzymania,
- czy priorytety były jasne,
- czy zespół miał dość czasu na fokus,
- czy proces review działał dobrze,
- czy narzędzia pomagały, a nie przeszkadzały,
- czy zespół czuł, że sprint był przewidywalny.

To powinno być centrum naszego systemu.

### 2. Ankieta po releasie

To może być ankieta dodatkowa.

Nie musi być zawsze aktywna.

Przydaje się wtedy, gdy chcemy zbadać:
- jakość release,
- napięcie po wdrożeniu,
- confidence zespołu,
- stabilność procesu wydawniczego.

### 3. Ankieta kwartalna

To jest poziom szerszy.

Może badać:
- dłuższe trendy,
- współpracę,
- manager support,
- tooling,
- przeciążenie w dłuższym okresie.

Ale to nie powinno być serce produktu.

To powinno być uzupełnienie.

### 4. Ankieta roczna

To już warstwa bardziej strategiczna.

Może być inspirowana praktykami HR, ale nie jest najważniejsza dla MVP.

W naszym projekcie można o niej wspomnieć, ale nie trzeba robić z niej centrum systemu.

## Najlepszy model dla naszego produktu

Najbardziej sensowny układ wygląda tak:

- **po każdym sprincie**:
  - krótka ankieta operacyjna,
  - główne źródło feedbacku jakościowego;

- **po ważnych release'ach lub zmianach**:
  - mini ankieta tematyczna,
  - aktywowana warunkowo;

- **co kwartał**:
  - szersze badanie trendów i procesów;

- **raz w roku**:
  - bardziej strategiczny przegląd.

Czyli:
- sprint survey = core,
- release survey = contextual,
- quarterly survey = broader review,
- annual survey = optional strategic layer.

## Jak to się integruje w praktyce

Model działania powinien być prosty:

### Krok 1: integracje zbierają twarde dane

Na przykład:
- GitHub daje PR i review time,
- Jira daje cycle time i throughput,
- CI/CD daje deployment frequency,
- systemy incydentów dają escaped defects i awarie.

### Krok 2: po sprincie uruchamia się krótka ankieta

Zespół odpowiada na 5-6 pytań.

### Krok 3: system łączy oba źródła

Łączy:
- twarde metryki,
- oceny z ankiet,
- komentarze otwarte,
- kontekst sprintu lub release'u.

### Krok 4: AI robi rozszerzoną analizę

System pokazuje:
- co się zmieniło,
- co może być przyczyną,
- jakie jest ryzyko,
- co warto zrobić dalej.

### Krok 5: dashboard pokazuje wynik

Manager i zespół widzą:
- sygnały pozytywne,
- sygnały ryzyka,
- trend,
- rekomendacje.

## Czy warto dodać ekran integracji do demo

Tak, zdecydowanie.

To bardzo dobry pomysł.

Bo wtedy lepiej pokażemy, że produkt nie jest tylko o ankietach.

## Co może być na ekranie integracji

### Widok: Add integrations

Pokazuje:
- GitHub
- GitLab
- Jira
- Linear
- Slack
- Teams
- CI/CD

Przy każdej integracji można pokazać:
- status podłączenia,
- jakie dane są pobierane,
- kiedy była ostatnia synchronizacja,
- do jakich analiz te dane są używane.

### Przykład

GitHub:
- PR review time
- merge flow
- PR size

Jira:
- cycle time
- throughput
- planned vs unplanned work

Slack:
- ankiety po sprincie
- response rate
- komentarze otwarte

CI/CD:
- deployment frequency
- release stability

To byłby bardzo mocny ekran demo.

## Jak rozbudować demo, żeby było bardziej spójne

Najlepiej dodać 3 nowe obszary:

### 1. Integrations Setup

Pokazuje:
- skąd biorą się twarde dane,
- jakie integracje są aktywne,
- jakie kategorie danych system zbiera.

### 2. Survey Builder

Pokazuje:
- jak tworzy się ankietę po sprincie,
- że część pytań jest wbudowana,
- że można dodać pytania przez AI,
- że można aktywować ankietę po releasie.

### 3. Extended Analysis

Pokazuje:
- połączenie metryk i ankiet,
- analizę komentarzy,
- rekomendacje działań,
- ostrzeżenia i trend.

## Jak to opowiadać prostymi słowami

Najprościej:

"Najpierw system zbiera twarde dane z narzędzi pracy, takich jak GitHub i Jira. Potem po każdym sprincie zespół odpowiada na krótką ankietę. Na końcu system łączy te informacje i pokazuje, co naprawdę dzieje się w zespole."

## Najważniejszy wniosek

Musimy pilnować jednej rzeczy:

**nasz produkt jest platformą do analizy pracy zespołu IT, a nie aplikacją do ankiet.**

Ankiety są ważne, ale tylko jako uzupełnienie twardych danych i narzędzie do lepszego zrozumienia sytuacji.
