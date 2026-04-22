# Context projektu do Codex

## Temat
**Jak mierzyć efektywność pracy zespołów IT bez demotywowania pracowników?**

### Problem
Zbyt sztywne KPI obniżają jakość i morale, a brak mierników utrudnia zarządzanie.

### Zakres
- przegląd metryk (velocity, lead time, cycle time, throughput, defect rate, predictability, team satisfaction itp.)
- ryzyka „złych KPI”
- propozycja zbalansowanego modelu mierzenia efektywności
- demonstracja rozwiązania w formie mockupów / prostego demo programu bez pełnej implementacji backendu

---

## Jak rozumiemy zadanie
Na podstawie przykładu z poprzedniego roku to zadanie **nie wygląda jak zwykły referat teoretyczny**.
Bardziej przypomina **projekt koncepcyjny produktu / narzędzia cyfrowego**, który zawiera:

1. analizę problemu,
2. przegląd istniejących podejść i narzędzi,
3. propozycję własnego rozwiązania,
4. mockupy / demo interfejsu,
5. uzasadnienie wartości rozwiązania.

### Ważny wniosek
Najprawdopodobniej od nas oczekuje się:
- **analizy problemu**, a nie tylko definicji pojęć,
- **przedstawienia własnej koncepcji rozwiązania**,
- **pokazania tego rozwiązania jako demo / dashboard / panel**, a nie pełnego systemu produkcyjnego,
- pracy bardziej w stylu **produktowym / projektowym**, a nie stricte naukowym.

---

## Co najpewniej mamy zrobić

### 1. Opisać problem
Wyjaśnić, dlaczego mierzenie efektywności zespołów IT jest trudne.

Trzeba pokazać dwie skrajności:
- zbyt sztywne KPI powodują presję, spadek jakości, pracę „pod metrykę”, frustrację i spadek morale,
- brak mierników utrudnia planowanie, wykrywanie problemów i zarządzanie zespołem.

### 2. Zrobić przegląd metryk
Wyjaśnić podstawowe metryki używane w zespołach IT, np.:
- velocity,
- lead time,
- cycle time,
- throughput,
- defect rate / bug rate,
- deployment frequency,
- predictability,
- team satisfaction / morale.

Dla każdej metryki warto wskazać:
- co mierzy,
- do czego się nadaje,
- jakie ma ograniczenia,
- kiedy może być źle użyta.

### 3. Opisać ryzyka złych KPI
Pokazać przykłady złego stosowania KPI, np.:
- ocenianie ludzi po liczbie ticketów,
- ocenianie po liczbie commitów,
- ocenianie po liczbie linii kodu,
- porównywanie developerów między sobą po velocity,
- wymuszanie wzrostu velocity bez kontekstu.

Ryzyka:
- sztuczne dzielenie zadań,
- zaniżanie lub zawyżanie estymacji,
- spadek jakości,
- ukrywanie problemów,
- mikrozarządzanie,
- wypalenie,
- utrata zaufania.

### 4. Zaproponować własny model
Najważniejsza część.
Nie chodzi tylko o listę metryk, ale o **zbalansowany model mierzenia efektywności**.

Przykładowe filary modelu:
- **tempo pracy** – jak szybko zespół dostarcza,
- **jakość** – czy szybkość nie psuje jakości,
- **przewidywalność** – czy zespół dostarcza stabilnie,
- **dobrostan zespołu** – czy sposób pracy nie prowadzi do wypalenia,
- **kontekst** – złożoność zadań, zmiany priorytetów, zależności od innych zespołów.

Założenia modelu:
- metryki służą do poprawy procesu, a nie do karania ludzi,
- oceniamy głównie **zespół**, a nie pojedynczych pracowników,
- dane ilościowe są uzupełniane o dane jakościowe,
- dashboard powinien ostrzegać przed błędną interpretacją danych.

### 5. Pokazać demo programu
Ponieważ padła informacja, że ma być **demo programu bez backendu**, to najrozsądniej zrobić:
- prosty frontend / prototyp,
- mockowane dane,
- dashboard lub panel pokazujący metryki,
- widoki dla managera / team leadera / zespołu,
- sygnały ostrzegawcze dotyczące „złych KPI”.

To **nie musi być pełny system**.
Ma pokazać logikę działania rozwiązania.

---

## Jakiego typu produkt możemy pokazać
Najbardziej logiczna forma rozwiązania:

### Koncepcja produktu
**Dashboard / system wspierający zbalansowane mierzenie efektywności zespołów IT**

### Co może pokazywać demo
- metryki zespołowe zamiast rankingów indywidualnych,
- połączenie metryk szybkości, jakości i dobrostanu,
- ostrzeżenia typu: „ta metryka nie powinna być używana do oceny jednostek”,
- porównanie sprintów / tygodni / zespołów,
- komentarz lub rekomendacje interpretacyjne,
- sekcję „risks / anti-patterns”.

### Możliwe widoki
- **widok managera** – zbiorczy obraz zespołu,
- **widok zespołu** – transparentne metryki bez presji rankingowej,
- **widok alertów** – np. spadek jakości przy wzroście throughput,
- **widok insightów** – np. przeciążenie zespołu, wzrost lead time, ryzyko wypalenia.

---

## Pytania, które nadal warto doprecyzować z osobami zlecającymi temat
Nadal nie mamy 100% pewności, czy temat ma być:
- bardziej ogólny,
- czy osadzony w realiach ich firmy.

Warto doprecyzować:
1. Czy projekt ma dotyczyć realnych zespołów w firmie, czy być ogólną koncepcją?
2. Czy najważniejsza jest analiza problemu, projekt rozwiązania czy samo demo?
3. Co dokładnie ma pokazywać demo programu?
4. Czy można użyć przykładowych danych?
5. Czy mają własne metryki / dashboardy / negatywne doświadczenia, które powinniśmy uwzględnić?
6. Jakie są kryteria oceny projektu?

---

## Konkurencja / narzędzia, które analizujemy
W naszej dokumentacji pojawiają się narzędzia z obszaru engineering intelligence / developer productivity / DevEx:
- **GetDX**
- **Jellyfish**
- **Swarmia**
- **Hatica**

### Jak rozumieć tę konkurencję
To nie są klasyczne systemy helpdeskowe.
To narzędzia, które pomagają zespołom i managerom analizować:
- delivery,
- flow pracy,
- DORA metrics,
- developer experience,
- wellbeing / burnout,
- wpływ procesów i AI na efektywność.

### Po co nam analiza konkurencji
Nie po to, żeby zrobić identyczny produkt, tylko żeby:
- zobaczyć, jakie funkcje już istnieją,
- zobaczyć, jakie są słabe strony obecnych narzędzi,
- zbudować własną przewagę koncepcyjną,
- uzasadnić, dlaczego nasz model jest bardziej zbalansowany i mniej demotywujący.

---

## Co powinno być przewagą naszego rozwiązania
Proponowana przewaga koncepcyjna:
- brak rankingów indywidualnych jako głównego mechanizmu oceny,
- nacisk na metryki zespołowe,
- połączenie danych ilościowych i jakościowych,
- widoczność ryzyk złych KPI,
- interpretacja danych zamiast samego ich wyświetlania,
- możliwość pokazania dobrostanu zespołu obok delivery,
- transparentność i czytelność dashboardu.

---

## Proponowana struktura dokumentacji
Można iść podobnym schematem jak w przykładzie z poprzedniego roku:

1. **Przegląd aplikacji**
   - czym jest nasze rozwiązanie,
   - dla kogo jest,
   - jakie ma główne funkcje,
   - mockupy.

2. **Problemy i szanse**
   - problemy z obecnym podejściem do KPI,
   - ryzyka demotywacji,
   - szansa na bardziej zbalansowane podejście.

3. **Rynek / odbiorcy**
   - kto może korzystać z takiego narzędzia,
   - np. team leaderzy, engineering managerowie, product managerowie, HR/People teams.

4. **Model biznesowy**
   - jeśli wymagany,
   - najprościej: SaaS, subskrypcja, różne pakiety.

5. **Analiza konkurencji**
   - GetDX, Jellyfish, Swarmia, Hatica.

6. **Propozycja rozwiązania**
   - nasz model mierzenia efektywności,
   - zasady interpretacji,
   - ochrona przed złymi KPI.

7. **Mockupy / demo**
   - widoki ekranu,
   - scenariusz działania.

8. **Podział ról**
   - kto odpowiada za research, strategię, UX/UI, demo, dokumentację.

---

## Co może zrobić Codex / AI w tym projekcie
Ten plik ma służyć jako kontekst do dalszej pracy.
Na jego podstawie można generować:
- strukturę dokumentacji,
- opisy sekcji do raportu,
- teksty do prezentacji,
- propozycje funkcji produktu,
- listę ekranów do mockupów,
- treści do dashboardu,
- przykładowe dane do demo,
- opisy przewag konkurencyjnych,
- podział zadań w zespole,
- treści do Figma / promptów do projektowania.

---

## Czego NIE zakładamy
- nie zakładamy pełnego backendu,
- nie zakładamy produkcyjnego wdrożenia,
- nie zakładamy dostępu do prawdziwych danych firmy,
- nie zakładamy oceny pojedynczych pracowników jako głównego celu systemu.

---

## Robocza definicja projektu
Projekt dotyczy stworzenia **koncepcji narzędzia do zbalansowanego mierzenia efektywności zespołów IT**, które wspiera managerów i zespoły w analizie delivery, jakości i dobrostanu pracy, jednocześnie ograniczając ryzyko demotywacji wynikającej z błędnie dobranych KPI.

---

## Następne kroki
1. Doprecyzować oczekiwania z osobami prowadzącymi temat.
2. Uporządkować analizę konkurencji.
3. Zdefiniować własny model mierzenia efektywności.
4. Zaprojektować strukturę dashboardu / demo.
5. Przygotować mockupy.
6. Rozpisać dokumentację.
