# Dokumentacja projektu

## 1. Przegląd aplikacji

### 1.1. Nazwa robocza produktu

**FlowScope**

### 1.2. Czym jest nasz produkt

FlowScope to koncepcyjne narzędzie do mierzenia efektywności zespołów IT w taki sposób, żeby nie demotywować pracowników.

Naszym celem nie jest ocenianie pojedynczych osób.
Chcemy pomóc firmom lepiej rozumieć:
- jak pracuje zespół,
- gdzie pojawiają się problemy,
- czy szybkość pracy nie szkodzi jakości,
- czy sposób pracy nie prowadzi do przeciążenia i wypalenia.

### 1.3. Dlaczego taki produkt jest potrzebny

W wielu firmach mierzenie efektywności pracy zespołów IT wygląda źle.
Często patrzy się na proste liczby, na przykład:
- liczbę commitów,
- liczbę zamkniętych ticketów,
- liczbę linii kodu,
- liczbę story pointów na osobę.

Takie podejście może prowadzić do złych skutków:
- ludzie zaczynają pracować „pod metrykę”,
- spada jakość pracy,
- pojawia się stres i frustracja,
- manager widzi liczby, ale nie rozumie prawdziwego problemu.

Dlatego proponujemy system, który łączy:
- metryki procesowe,
- metryki jakościowe,
- krótkie ankiety zespołowe,
- interpretację wyników.

### 1.4. Dla kogo jest ten produkt

Główna grupa użytkowników:
- Engineering Managerowie,
- Team Leaderzy,
- CTO,
- Head of Engineering,
- osoby odpowiedzialne za organizację pracy zespołów IT.

Dodatkowi użytkownicy:
- DevEx / Platform teams,
- HR lub People Partnerzy,
- Agile Coachowie,
- Delivery Managerowie.

### 1.5. Co pokazuje aplikacja

Produkt ma pokazywać całościowy obraz pracy zespołu.
Nie tylko szybkość, ale też jakość i kondycję zespołu.

Najważniejsze obszary:
- **delivery** – jak szybko zespół dostarcza pracę,
- **jakość i stabilność** – czy szybkość nie obniża jakości,
- **przewidywalność** – czy zespół pracuje stabilnie,
- **kondycja zespołu** – czy sposób pracy jest zdrowy i możliwy do utrzymania.

### 1.6. Główne funkcje produktu

Najważniejsze funkcje:
- dashboard zespołowy z najważniejszymi metrykami,
- przegląd trendów w czasie,
- połączenie danych z narzędzi pracy i wyników ankiet,
- alerty o ryzykownych zmianach,
- interpretacja danych w prostym języku,
- rekomendacje działań dla managera i zespołu,
- sekcja pokazująca złe KPI i bezpieczniejsze alternatywy.

### 1.7. Źródła danych

W prawdziwym produkcie dane mogą pochodzić z:
- GitHub / GitLab,
- Jira / Linear,
- Slack / Microsoft Teams,
- CI/CD,
- systemów do zgłoszeń i incydentów.

W naszej wersji demo używamy mockowanych danych, ale pokazujemy, że produkt działa tak, jakby miał takie integracje.

### 1.8. Najważniejsza zasada produktu

Metryki mają pomagać w poprawie pracy zespołu, a nie służyć do oceniania ludzi.

To oznacza, że:
- system działa głównie na poziomie zespołu,
- nie robi rankingów pracowników,
- nie promuje toksycznych KPI,
- pokazuje kontekst, a nie tylko suche liczby.

## 2. Problemy i szanse

### 2.1. Główny problem

Mierzenie efektywności zespołów IT jest trudne.

Jeżeli firma nie mierzy nic:
- nie widzi problemów,
- nie wie, gdzie zespół traci czas,
- nie umie poprawić procesu.

Jeżeli firma mierzy złe rzeczy:
- zaczyna nagradzać pozorną aktywność,
- ludzie czują presję,
- spada zaufanie do managerów,
- pojawia się mikrozarządzanie.

### 2.2. Przykłady złego mierzenia

Niebezpieczne przykłady:
- liczba commitów na pracownika,
- liczba linii kodu,
- liczba ticketów zamkniętych przez osobę,
- story pointy na osobę,
- porównywanie developerów między sobą.

Takie metryki są proste, ale często dają błędny obraz sytuacji.

### 2.3. Skutki złych KPI

Złe KPI mogą prowadzić do:
- sztucznego dzielenia zadań,
- zaniżania albo zawyżania estymacji,
- robienia większej liczby mało wartościowych działań,
- spadku jakości kodu,
- większej liczby błędów po wdrożeniu,
- wypalenia zawodowego,
- utraty zaufania w zespole.

### 2.4. Problem po stronie managerów

Managerowie też mają trudną sytuację.
Potrzebują danych, żeby podejmować decyzje, ale często dostają tylko proste wykresy bez kontekstu.

Wtedy trudno odpowiedzieć na pytania:
- czy zespół naprawdę działa lepiej,
- czy większy throughput to sukces,
- czy spadek cycle time nie odbywa się kosztem jakości,
- czy zespół nie jest przeciążony.

### 2.5. Szansa rynkowa

Coraz więcej firm szuka narzędzi z obszaru:
- engineering effectiveness,
- developer experience,
- engineering intelligence,
- healthy productivity.

To pokazuje, że problem jest realny i ważny.

Jednocześnie wiele istniejących narzędzi:
- jest zbyt skupionych na managerach,
- daje za dużo danych bez interpretacji,
- nie chroni przed złym użyciem KPI,
- nie buduje zaufania w zespole.

To jest miejsce dla naszego rozwiązania.

### 2.6. Nasza szansa

Nasza przewaga polega na tym, że chcemy stworzyć system:
- bardziej zbalansowany,
- bardziej zrozumiały,
- bezpieczniejszy dla zespołu,
- skupiony na poprawie procesu, a nie ocenie ludzi.

### 2.7. Główna idea rozwiązania

Chcemy połączyć trzy rzeczy:
- dane z narzędzi pracy,
- krótkie ankiety zespołowe,
- warstwę interpretacji i rekomendacji.

Dzięki temu manager nie widzi tylko liczby.
Widzi też:
- co się zmieniło,
- dlaczego mogło się to zmienić,
- czego nie należy zbyt szybko zakładać,
- co warto zrobić dalej.

## 3. Rynek

### 3.1. Sytuacja rynkowa

Rynek narzędzi dla zespołów IT rozwija się bardzo szybko.
Firmy chcą:
- lepiej rozumieć, jak pracują zespoły,
- poprawiać delivery,
- ograniczać ryzyko wypalenia,
- podejmować decyzje na podstawie danych.

Popularne stają się narzędzia z obszaru:
- DORA metrics,
- developer productivity,
- developer experience,
- engineering intelligence.

### 3.2. Główni odbiorcy

Najbardziej zainteresowane takim produktem mogą być:
- software house’y,
- firmy produktowe,
- startupy technologiczne,
- średnie i duże działy IT,
- organizacje, które mają kilka zespołów developerskich.

### 3.3. Segmenty klientów

#### Małe firmy

Małe zespoły często nie mają zaawansowanych narzędzi do analizy pracy.
Najczęściej potrzebują:
- prostego wdrożenia,
- podstawowych metryk,
- łatwego dashboardu,
- niskiego kosztu wejścia.

#### Średnie firmy

To dla nas najciekawszy segment.
Takie firmy:
- mają już Jira, GitHub, Slack i podobne narzędzia,
- mają managerów, którzy potrzebują lepszej widoczności,
- często czują chaos organizacyjny,
- szukają sposobu na lepsze zarządzanie zespołami.

#### Duże firmy

Duże organizacje mają bardziej złożone potrzeby.
Ważne są dla nich:
- bezpieczeństwo danych,
- integracje,
- zgodność z RODO,
- możliwość wdrożenia we własnej chmurze,
- raportowanie na poziomie wielu zespołów.

### 3.4. Potrzeby klienta

Klient szuka rozwiązania, które:
- daje lepszy obraz pracy zespołu,
- nie psuje atmosfery i zaufania,
- pomaga poprawiać proces,
- pokazuje ryzyko zanim pojawi się większy problem,
- nie wymaga budowy skomplikowanego systemu od zera.

### 3.5. Dlaczego rynek może być zainteresowany

Firmy chcą mierzyć efektywność, ale boją się dwóch rzeczy:
- że bez danych nie będą umiały dobrze zarządzać,
- że złe KPI zniszczą motywację ludzi.

Nasz produkt odpowiada właśnie na ten problem.

## 4. Model biznesowy

### 4.1. Ogólne założenie

Najbardziej naturalny model biznesowy dla takiego produktu to **SaaS**, czyli aplikacja dostępna w modelu subskrypcyjnym.

Klient płaci za dostęp do platformy, dashboardów, integracji i funkcji analitycznych.

### 4.2. Freemium

Plan dla małych zespołów, na przykład do 10 osób.

Co może zawierać:
- podstawowy dashboard,
- podstawowe metryki zespołowe,
- prostą ankietę pulse survey,
- podstawowe alerty,
- ograniczoną historię danych.

Cel planu:
- obniżenie bariery wejścia,
- szybkie pokazanie wartości produktu,
- zachęcenie zespołów do przetestowania rozwiązania.

### 4.3. Standard

Plan dla średnich firm i rosnących organizacji.

Co może zawierać:
- więcej integracji,
- dłuższą historię danych,
- więcej dashboardów,
- bardziej rozbudowane ankiety,
- rekomendacje i insighty,
- porównanie trendów między okresami,
- bardziej rozbudowane uprawnienia.

To byłby najważniejszy plan biznesowy.

### 4.4. Enterprise

Plan dla dużych organizacji.

Co może zawierać:
- indywidualną wycenę,
- wdrożenie w chmurze klienta albo BYOC,
- większy poziom bezpieczeństwa,
- zaawansowane integracje,
- wsparcie wdrożeniowe,
- raportowanie dla wielu zespołów i działów.

### 4.5. Dlaczego ten model ma sens

Ten model jest prosty i dobrze pasuje do produktów B2B dla IT.

Korzyści:
- klient łatwo rozumie, za co płaci,
- można rosnąć razem z klientem,
- plan freemium ułatwia wejście,
- plan standard daje realne przychody,
- plan enterprise pozwala obsłużyć większe firmy.

### 4.6. Co jest najważniejsze w modelu biznesowym

Najważniejsze jest to, że klient nie płaci za „ankiety”.

Klient płaci za:
- lepszą widoczność pracy zespołu,
- wcześniejsze wykrywanie problemów,
- bardziej świadome decyzje managerskie,
- lepszy balans między szybkością, jakością i wellbeing.

## 5. Analiza konkurencji

### 5.1. GetDX

#### Zalety

- Łączy dane z narzędzi pracy z wynikami ankiet.
- Pokazuje metryki na poziomie zespołów, a nie pojedynczych osób.
- Mocno podkreśla developer experience i jakość środowiska pracy.
- Oferuje benchmarki i raporty dla liderów.

#### Wady

- Jest produktem bardziej enterprise niż self-serve.
- Może być drogi dla mniejszych firm.
- Dla części klientów może wyglądać jak narzędzie głównie dla managementu.
- Jeżeli firma za bardzo skupi się na jednym indeksie, może zgubić szczegóły.

#### Wniosek

Od GetDX warto wziąć:
- poważne podejście do ankiet,
- połączenie metryk i feedbacku,
- nacisk na dane zespołowe.

Nie warto kopiować:
- zbyt ciężkiej narracji enterprise,
- zbyt dużego skupienia na jednym zagregowanym score.

### 5.2. Jellyfish

#### Zalety

- Łączy dane engineering z potrzebami biznesu.
- Pokazuje nie tylko delivery, ale też szerszy kontekst zarządzania.
- Łączy metryki DORA z badaniem doświadczeń zespołu.
- Jest atrakcyjny dla firm, które chcą widzieć wpływ pracy IT na organizację.

#### Wady

- Może być postrzegany jako zbyt managerski.
- Dla zespołów może wyglądać bardziej jak narzędzie kontroli niż wsparcia.
- Jest szeroki funkcjonalnie, więc może być mniej prosty i mniej przejrzysty.

#### Wniosek

Od Jellyfish warto wziąć:
- łączenie danych technicznych i biznesowych,
- pokazywanie zależności między feedbackiem a wynikami.

Nie warto kopiować:
- zbyt szerokiego zakresu funkcji na start,
- narracji, która budzi skojarzenia z nadzorem.

### 5.3. Swarmia

#### Zalety

- Bardzo dobrze wpisuje się w filozofię zdrowych metryk.
- Skupia się na poziomie zespołu.
- Ma bardziej nowoczesny i mniej „enterprise-heavy” charakter.
- Jest prostszy we wdrożeniu niż część konkurencji.

#### Wady

- Słabiej pokazuje obszar wellbeing niż produkty mocniej oparte o ankiety.
- Nie akcentuje tak mocno ochrony przed złym użyciem KPI.
- W niektórych organizacjach może wydawać się zbyt lekkim rozwiązaniem.

#### Wniosek

Od Swarmia warto wziąć:
- prostotę,
- nacisk na zespoły,
- zdrowe metryki i poprawę procesu.

### 5.4. Hatica

#### Zalety

- Łączy metryki z check-inami i ankietami.
- Ma dużo integracji i praktycznych funkcji.
- Oferuje podejście bardziej operacyjne i codzienne.
- Dobrze pokazuje, że feedback i metryki mogą działać razem.

#### Wady

- Ma dużo metryk aktywności, które mogą zostać źle użyte.
- Szeroki zakres danych może prowadzić do chaosu i przeciążenia informacyjnego.
- Niektóre widoki mogą zachęcać do mikrozarządzania.

#### Wniosek

Od Hatica warto wziąć:
- praktyczne check-iny,
- regularny rytm zbierania feedbacku.

Nie warto kopiować:
- zbyt dużej liczby metryk aktywności,
- funkcji, które mogą wspierać nadmierną kontrolę ludzi.

### 5.5. Nasza przewaga konkurencyjna

Nasza przewaga nie polega na tym, że mamy najwięcej funkcji.

Nasza przewaga polega na tym, że:
- stawiamy na zespół, a nie jednostkę,
- łączymy metryki i feedback,
- pokazujemy interpretację, a nie tylko wykresy,
- ostrzegamy przed złym użyciem KPI,
- budujemy produkt bardziej oparty na zaufaniu.

## 6. Strategia marketingowa

### 6.1. Główny kierunek

Nasza strategia marketingowa powinna być prosta:

pokazać, że FlowScope pomaga firmom mierzyć efektywność zespołów IT w sposób bardziej zdrowy, nowoczesny i bezpieczny.

### 6.2. Główny komunikat marketingowy

Najważniejszy przekaz:

**Mierz efektywność zespołu IT bez tworzenia toksycznych KPI.**

Możliwe hasła:
- Lepsza widoczność pracy zespołu bez mikrozarządzania
- Dane, które pomagają, a nie demotywują
- Zbalansowane metryki dla nowoczesnych zespołów IT

### 6.3. Do kogo kierujemy przekaz

Najważniejsze grupy:
- CTO,
- Head of Engineering,
- Engineering Managerowie,
- Team Leaderzy,
- osoby odpowiedzialne za developer experience i proces delivery.

### 6.4. Kanały dotarcia

Najbardziej naturalne kanały:
- LinkedIn,
- konferencje i wydarzenia branżowe,
- grupy i społeczności IT,
- content marketing,
- case study i raporty,
- bezpośredni kontakt z firmami IT.

### 6.5. Jak budować zainteresowanie

Możemy budować zainteresowanie przez:
- pokazanie problemu toksycznych KPI,
- edukowanie managerów,
- krótkie materiały o zdrowych metrykach,
- przykłady błędnych decyzji opartych na złych danych,
- pokazanie demo produktu.

### 6.6. Product-led growth

Plan freemium może pomóc zdobyć pierwszych użytkowników.

Małe zespoły mogą sprawdzić produkt bez dużego ryzyka.
Jeżeli zobaczą wartość, łatwiej przejdą na wyższy plan.

### 6.7. Dlaczego klient ma zostać z produktem

Klient zostaje wtedy, kiedy widzi realną wartość:
- wcześniej zauważa problemy,
- lepiej rozumie pracę zespołu,
- podejmuje lepsze decyzje,
- ogranicza złe skutki źle dobranych KPI,
- poprawia balans między szybkością a jakością.

### 6.8. Co powinno wyróżniać marketing

Marketing nie powinien mówić tylko o technologii.
Powinien mówić o realnym problemie managerów i zespołów.

Najważniejsze wyróżniki:
- prosty język,
- mocny problem do rozwiązania,
- pokazanie praktycznej wartości,
- podkreślenie zaufania i bezpieczeństwa.

## 7. Podział ról

### 7.1. Product Manager

Odpowiada za ogólną wizję produktu i spójność projektu.

Zakres odpowiedzialności:
- określenie, czym jest produkt,
- wybór najważniejszych funkcji,
- pilnowanie zgodności projektu z problemem użytkownika,
- ustalenie priorytetów,
- połączenie części biznesowej, badawczej i produktowej.

### 7.2. Market Research Analyst

Odpowiada za analizę rynku i konkurencji.

Zakres odpowiedzialności:
- badanie potrzeb potencjalnych klientów,
- analiza trendów rynkowych,
- analiza konkurencji,
- zbieranie informacji o podobnych narzędziach,
- pomoc w określeniu, czym nasz produkt ma się wyróżniać.

### 7.3. Business Strategist / Strategy Manager

Odpowiada za stronę biznesową produktu.

Zakres odpowiedzialności:
- przygotowanie modelu biznesowego,
- określenie sposobu monetyzacji,
- zdefiniowanie przewagi konkurencyjnej,
- opracowanie strategii wejścia na rynek,
- ocena opłacalności i ryzyk.

### 7.4. UX/UI Designer

Odpowiada za doświadczenie użytkownika i wygląd produktu.

Zakres odpowiedzialności:
- projektowanie widoków i ekranów,
- przygotowanie dashboardów,
- projektowanie prostego i czytelnego interfejsu,
- dbanie o to, żeby produkt był zrozumiały dla użytkownika,
- przygotowanie mockupów i prototypów.

### 7.5. Product Designer

Odpowiada za połączenie potrzeb użytkownika z rozwiązaniem produktowym.

Zakres odpowiedzialności:
- projektowanie logiki produktu,
- myślenie o funkcjach i przepływach użytkownika,
- dbanie o spójność między problemem, funkcjami i interfejsem,
- wsparcie przy budowie demo i wizji produktu.

## Podsumowanie

FlowScope to koncepcja produktu, który pomaga mierzyć efektywność zespołów IT bez demotywowania pracowników.

Najważniejsza idea tego projektu jest prosta:
- nie patrzymy tylko na jedną liczbę,
- nie oceniamy pojedynczych osób,
- łączymy dane z narzędzi pracy i feedback zespołu,
- pokazujemy interpretację i rekomendacje,
- pomagamy poprawiać proces, a nie kontrolować ludzi.

To właśnie ma być największą wartością naszego rozwiązania.
