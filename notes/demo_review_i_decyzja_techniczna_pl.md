# Demo review i decyzja techniczna

Data opracowania: 2026-05-06

## 1. Krótkie review obecnej propozycji

### Co już działa dobrze

Obecne demo ma kilka mocnych stron:
- pokazuje główny problem produktu,
- ma logiczny flow: metryki -> ankiety -> insighty -> guardrails,
- ma spójny mock story,
- jest proste do otwarcia i pokazania,
- dobrze komunikuje, że produkt nie służy do oceniania ludzi.

### Co jest jeszcze za słabe

Jeśli chcemy pokazać bardziej profesjonalny produkt, obecna wersja jest za wąska.

Największe braki:
- nie pokazuje ekranu integracji z narzędziami,
- nie pokazuje, jak tworzy się ankiety,
- nie pokazuje biblioteki pytań,
- nie pokazuje różnych zespołów,
- nie pokazuje bardziej rozbudowanej analizy AI,
- wygląda bardziej jak dashboard końcowy niż pełny produkt.

### Główne ryzyko

Jeżeli zostaniemy tylko przy obecnych ekranach, odbiorca może pomyśleć:

"to jest po prostu dashboard z ankietą obok"

a nie:

"to jest pełna platforma do mierzenia efektywności zespołów IT"

## 2. Co powinno być pokazane w nowym demo

Nowe demo powinno pokazać trzy warstwy produktu:

### Warstwa 1: źródła danych

Czyli:
- integracje z GitHub / Jira / Slack / CI-CD,
- dane twarde,
- synchronizacja i mapowanie danych.

### Warstwa 2: warstwa ankietowa

Czyli:
- ankieta po sprincie jako główna,
- opcjonalna ankieta po release,
- biblioteka pytań,
- kreator ankiet,
- pytania wbudowane i pytania sugerowane przez AI.

### Warstwa 3: warstwa analityczna

Czyli:
- dashboard zespołu,
- porównanie zespołów,
- trendy,
- analiza komentarzy,
- insighty i rekomendacje,
- guardrails KPI.

## 3. HTML czy React

### Ocena prostego HTML

Prosty HTML + CSS + JS ma plusy:
- szybko się uruchamia,
- nie wymaga backendu,
- nie wymaga builda,
- jest dobry do bardzo prostego MVP.

Ale przy naszej nowej skali ma już ograniczenia.

Problem pojawi się wtedy, gdy dodamy:
- więcej ekranów,
- więcej stanów,
- więcej mockowanych danych,
- więcej przełączania między widokami,
- reużywalne karty, sekcje, tabele i filtry.

Wtedy kod HTML/JS zacznie robić się mniej czytelny i trudniejszy do rozbudowy.

### Ocena React

React będzie lepszy, jeśli chcemy:
- rozbudować demo do 8-10 ekranów,
- mieć komponenty wielokrotnego użycia,
- mieć porządny podział na sekcje,
- łatwo podmieniać mock data,
- szybko rozwijać nowe widoki,
- zrobić demo bardziej profesjonalne wizualnie i organizacyjnie.

### Nasza rekomendacja

**Rekomendacja: przejść na React.**

Dlaczego:
- demo już przestaje być małym statycznym ekranem,
- chcemy pokazać produkt, a nie pojedynczy landing/dashboard,
- mamy dużo logicznych modułów,
- React da lepszą strukturę i łatwiej będzie go dalej rozwijać.

### Ważne doprecyzowanie

To nadal może być:
- frontend-only,
- bez backendu,
- bez prawdziwych integracji,
- w 100% na mockowanych danych.

Czyli:

**React nie oznacza większej złożoności biznesowej.**

To tylko lepszy sposób zbudowania demo.

## 4. Jak profesjonalnie pokazać demo

Jeśli chcemy, żeby demo wyglądało dojrzale, to powinno mieć:

### 1. Spójny layout produktu

Na przykład:
- sidebar,
- górny pasek,
- sekcja główna,
- spójna nawigacja między obszarami produktu.

### 2. Jedną logikę narracyjną

Demo nie powinno być zbiorem przypadkowych ekranów.

Powinno odpowiadać na prostą historię:
- skąd są dane,
- jak zbieramy feedback,
- co system z tym robi,
- jak manager podejmuje decyzję.

### 3. Jeden wspólny model danych

Potrzebujemy wspólnego mock data model:
- organizacja,
- zespoły,
- sprinty,
- integracje,
- ankiety,
- pytania,
- odpowiedzi,
- insighty,
- rekomendacje.

### 4. Wyraźny podział na sekcje produktu

Na przykład:
- Integrations
- Surveys
- Teams
- Insights
- Governance

To od razu wygląda bardziej jak gotowy produkt.

## 5. Finalna decyzja

### Decyzja produktowa

Demo ma pokazywać:
- szeroki produkt,
- nie tylko ankiety,
- nie tylko dashboard,
- ale cały flow od danych do decyzji.

### Decyzja techniczna

Najlepszy wybór na dalszą realizację:

**React + mock data + bez backendu**

### Decyzja prezentacyjna

Demo powinno wyglądać jak:
- interaktywny prototyp produktu,
- a nie zwykły statyczny raport.

## 6. Co trzeba przygotować przed implementacją

Przed budową powinniśmy mieć gotowe:
- strukturę ekranów,
- mapę nawigacji,
- model mock data,
- listę komponentów,
- flow prezentacji demo,
- podział ekranów na „must have” i „nice to have”.

To przygotowujemy w kolejnych plikach.
