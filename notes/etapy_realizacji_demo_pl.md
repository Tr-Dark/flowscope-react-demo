# Etapy realizacji demo

Data opracowania: 2026-05-06

## Cel

Chcemy budować demo etapami, żeby:
- nie robić wszystkiego naraz,
- łatwo sprawdzać postęp,
- szybciej podejmować decyzje,
- móc poprawiać produkt po każdej iteracji.

## Ogólna zasada

W każdym etapie kończymy konkretny, widoczny kawałek produktu.

Czyli nie robimy:
- trochę designu,
- trochę danych,
- trochę ekranów,
- trochę logiki bez końca.

Zamiast tego:
- zamykamy jeden sensowny blok,
- sprawdzamy, czy działa,
- przechodzimy dalej.

## Etap 1. Fundament produktu

### Cel

Przygotować wszystko, co potrzebne przed właściwym kodowaniem.

### Co wchodzi

- finalna struktura ekranów,
- decyzja techniczna,
- model danych,
- organizacja mockowanych danych,
- główny story flow demo,
- lista ekranów must-have.

### Efekt końcowy

Po tym etapie wiemy:
- co budujemy,
- z jakich ekranów to się składa,
- jakie dane mamy pokazać,
- jak poprowadzimy prezentację.

### Status

Ten etap jest praktycznie zamknięty albo bardzo blisko zamknięcia.

## Etap 2. Szkielet aplikacji

### Cel

Postawić bazę React, na której będziemy rozwijać demo.

### Co wchodzi

- struktura projektu,
- layout aplikacji,
- sidebar,
- topbar,
- routing albo prosty system przełączania ekranów,
- placeholdery ekranów,
- wspólny styl wizualny,
- podpięcie mock data.

### Efekt końcowy

Po tym etapie mamy działającą aplikację, w której można przechodzić między głównymi sekcjami produktu.

## Etap 3. Integrations i Surveys

### Cel

Pokazać, skąd biorą się dane i jak działa warstwa ankietowa.

### Co wchodzi

- ekran Integrations Overview,
- ekran Add Integration albo mock connect view,
- ekran Survey Overview,
- ekran Sprint Survey Builder,
- ekran Question Library,
- opcjonalnie AI Question Suggestions.

### Efekt końcowy

Po tym etapie użytkownik rozumie:
- że produkt nie opiera się tylko na ankietach,
- jakie dane pochodzą z narzędzi,
- jak tworzona jest ankieta po sprincie,
- że system ma wbudowane pytania i sugestie AI.

## Etap 4. Teams i operacyjny dashboard

### Cel

Pokazać stan organizacji i zespołów.

### Co wchodzi

- ekran Teams Dashboard,
- ekran Team Detail,
- karta stanu zespołu,
- metryki delivery,
- metryki jakości,
- wyniki sprint survey,
- komentarze otwarte,
- porównanie trendów.

### Efekt końcowy

Po tym etapie demo już wygląda jak prawdziwy produkt dla managera albo Team Leada.

## Etap 5. Insights i AI Analysis

### Cel

Pokazać najważniejszą wartość systemu: łączenie danych i interpretację.

### Co wchodzi

- ekran Insights Overview,
- ekran Extended AI Analysis,
- ekran Action Planner,
- logiczne połączenie metryk i ankiet,
- komentarze pogrupowane w tematy,
- rekomendacje działań.

### Efekt końcowy

Po tym etapie odbiorca widzi, że produkt nie tylko zbiera dane, ale naprawdę pomaga podejmować decyzje.

## Etap 6. Governance i bezpieczeństwo użycia

### Cel

Pokazać, że system jest świadomie zaprojektowany i nie promuje toksycznych KPI.

### Co wchodzi

- ekran KPI Guardrails,
- ekran Survey Governance,
- zasady anonimowości,
- minimum odpowiedzi,
- role użytkowników,
- ostrzeżenia przed oceną indywidualną.

### Efekt końcowy

Po tym etapie produkt ma wyraźną przewagę koncepcyjną i wygląda dojrzale.

## Etap 7. Final polish

### Cel

Dopieścić demo przed prezentacją.

### Co wchodzi

- poprawki UX,
- poprawki wizualne,
- ujednolicenie języka,
- skrócenie zbyt długich opisów,
- demo script,
- sprawdzenie spójności całego flow.

### Efekt końcowy

Po tym etapie demo jest gotowe do pokazania.

## Priorytet realizacji

Najlepsza kolejność jest taka:

1. Etap 2. Szkielet aplikacji
2. Etap 3. Integrations i Surveys
3. Etap 4. Teams i dashboard
4. Etap 5. Insights i AI Analysis
5. Etap 6. Governance
6. Etap 7. Final polish

## Co robimy teraz

Teraz przechodzimy do:

**Etapu 2. Szkielet aplikacji**

Równolegle przygotowujemy:
- realistyczne mock data,
- podział ekranów,
- dane dla prawdziwie wyglądającej organizacji.
