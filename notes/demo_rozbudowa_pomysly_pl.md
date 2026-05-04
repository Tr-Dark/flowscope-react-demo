# Pomysły na rozbudowę demo

## Główny kierunek

Obecne demo już pokazuje podstawową ideę:
- metryki,
- ankiety,
- insighty,
- guardrails KPI.

Jeśli chcemy je rozbudować, najlepiej zrobić to tak, żeby demo wyglądało bardziej jak prawdziwy produkt, a nie tylko zestaw wykresów.

## Co warto dodać

### 1. Widok tworzenia ankiety

To byłby bardzo dobry dodatek do demo.

Można pokazać:
- kto tworzy ankietę,
- jakie są kategorie pytań,
- że część pytań jest już wbudowana,
- że można dodać własne pytania,
- że można korzystać z AI do propozycji pytań.

#### Co może być na tym ekranie

- wybór typu ankiety:
  - kwartalna,
  - roczna,
  - po release,
  - po zmianie procesu;
- kategorie pytań:
  - workload,
  - focus time,
  - tooling,
  - code review,
  - release confidence,
  - collaboration,
  - manager support;
- sekcja:
  - „wbudowane pytania systemowe”
  - „własne pytania”
  - „AI suggestions”

### 2. Biblioteka pytań

To może być osobna sekcja albo część survey buildera.

Można pokazać:
- lista gotowych pytań,
- filtrowanie po kategorii,
- oznaczenie, które pytania są core,
- oznaczenie, które pytania są kwartalne, a które roczne.

To dobrze pokaże, że system nie zaczyna od pustej kartki.

### 3. AI do tworzenia pytań

To może wyglądać bardzo dobrze na demie.

Przykład działania:
- użytkownik wpisuje cel:
  - „chcę zbadać przeciążenie po release”
- AI proponuje 4-5 pytań,
- użytkownik wybiera 2-3,
- pytania trafiają do ankiety.

To nie musi być prawdziwe AI w demie.
Wystarczy dobrze pokazana logika.

### 4. Dashboard zespołu

To już częściowo macie, ale można go rozbudować.

Można pokazać:
- porównanie 2-3 zespołów,
- status każdego zespołu:
  - healthy,
  - caution,
  - investigate,
- najważniejsze problemy per zespół,
- największy pozytywny sygnał,
- największe ryzyko.

To sprawi, że demo będzie wyglądało bardziej „organizacyjnie”.

### 5. Widok analizy ankiet

To bardzo ważne.

Można pokazać:
- średnie oceny kategorii,
- trendy w czasie,
- heatmapę odpowiedzi,
- response rate,
- komentarze otwarte pogrupowane w tematy.

To będzie wyglądało bardziej realnie niż tylko kilka pojedynczych kart.

### 6. Rozszerzona analiza AI

To jest bardzo dobry pomysł do demo.

Można pokazać ekran:
- „AI Analysis”
- „Extended Analysis”
- „Insights Engine”

I tam pokazać:
- połączenie ankiet i metryk,
- wykryte zależności,
- możliwe przyczyny problemu,
- rekomendowane działania.

Przykład:
- throughput rośnie,
- review time spada,
- escaped defects rosną,
- workload spada w ankietach,
- AI mówi:
  - „zespół prawdopodobnie przyspiesza kosztem jakości i sustainability”.

### 7. Widok kategorii pytań

To może być prosty ekran lub modal.

Na przykład:
- Core Team Health
- Delivery Experience
- Quality & Stability
- Collaboration
- Leadership & Clarity
- Wellbeing

Po kliknięciu w kategorię widać:
- przykładowe pytania,
- do jakiej ankiety pasują,
- czy są core czy optional.

### 8. Widok konfiguracji ankiety

Można pokazać prostą logikę:
- częstotliwość,
- anonimowość,
- minimalna liczba odpowiedzi,
- kto widzi wyniki,
- czy AI ma analizować komentarze,
- czy włączyć porównanie z poprzednim kwartałem.

To bardzo dobrze pokaże governance produktu.

### 9. Widok „Question Health”

To ciekawy pomysł do demo.

Można pokazać, że system sam ocenia pytania:
- czy pytanie jest zbyt ogólne,
- czy może sugerować odpowiedź,
- czy jest za długie,
- czy dubluje inne pytanie.

Na demie mogłoby to wyglądać jako:
- zielone pytanie = ok,
- żółte = warto uprościć,
- czerwone = ryzyko słabego pytania.

### 10. Widok „Built-in vs Custom”

To też dobrze pasuje do Waszej koncepcji.

Można pokazać, że:
- system ma wbudowane, sprawdzone pytania,
- firma może je lekko dostosować,
- część pytań może dodać samodzielnie,
- ale nadal działają zasady bezpieczeństwa i porównywalności.

## Jak może wyglądać rozbudowane demo

Jeśli chcemy zrobić mocniejsze demo, można zbudować 3 główne obszary:

### Obszar 1: Survey Design

Pokazuje:
- tworzenie ankiety,
- wybór kategorii,
- pytania systemowe,
- propozycje AI,
- ustawienia prywatności i częstotliwości.

### Obszar 2: Team Intelligence

Pokazuje:
- dashboard zespołów,
- metryki delivery i jakości,
- wyniki ankiet,
- alerty,
- porównanie zespołów.

### Obszar 3: Insights & Decisions

Pokazuje:
- analizę AI,
- połączone sygnały,
- komentarze otwarte,
- rekomendacje działań,
- guardrails KPI.

## Najmocniejsza wersja demo

Moim zdaniem najmocniejszy scenariusz byłby taki:

1. Pokazujemy dashboard zespołu.
2. Widać problem: throughput rośnie, ale jakość i wellbeing spadają.
3. Wchodzimy do analizy ankiet i komentarzy.
4. System grupuje problem i pokazuje, że chodzi o przeciążenie i chaos priorytetów.
5. Pokazujemy ekran tworzenia ankiety kwartalnej.
6. Widać, że część pytań jest wbudowana, a część można dodać albo wygenerować przez AI.
7. Na końcu system daje rekomendacje działań.

To da bardzo spójny story flow.

## Konkretne ekrany, które można dodać

Jeśli chcecie iść dalej, polecam dodać 4 nowe ekrany:

### 1. Survey Builder

Pokazuje:
- tworzenie ankiety,
- typ ankiety,
- kategorie pytań,
- built-in questions,
- AI suggestions.

### 2. Question Library

Pokazuje:
- gotowe pytania,
- podział na kategorie,
- core vs optional,
- kwartalne vs roczne.

### 3. Teams Dashboard

Pokazuje:
- Team Alpha,
- Team Beta,
- Team Gamma,
- statusy,
- top risks,
- top strengths.

### 4. Extended AI Analysis

Pokazuje:
- analizę komentarzy,
- połączenie z metrykami,
- główne ryzyka,
- rekomendacje.

## Co można pokazać jako „AI”

Nie trzeba robić prawdziwego AI.

W demie można po prostu pokazać:
- gotowe sugestie pytań,
- wygenerowane tematy komentarzy,
- automatyczny insight,
- automatyczne rekomendacje.

Najważniejsze jest to, żeby użytkownik rozumiał logikę działania.

## Które pomysły są najlepsze na teraz

Jeśli mamy ograniczony czas, najlepsze dodatki to:

1. Survey Builder
2. Question Library
3. Teams Dashboard
4. Extended AI Analysis

To da największy efekt wizualny i najlepiej pokaże wartość produktu.

## Najkrótsza rekomendacja

Jeśli chcecie rozbudować demo sensownie, nie dodawajcie przypadkowych ekranów.

Najlepiej pokazać trzy rzeczy:
- jak tworzy się ankieta,
- jak wygląda dashboard zespołu,
- jak system robi rozszerzoną analizę i daje insighty przez AI.
