# Model mock data do demo

Data opracowania: 2026-05-06

## Założenie

Mock data mają wyglądać jak dane z prawdziwej organizacji IT.

Nie chcemy losowych liczb.
Chcemy danych, które opowiadają historię.

## Organizacja

### Nazwa robocza

**Northstar Digital**

### Profil firmy

- średnia firma produktowo-usługowa,
- około 180 osób w IT,
- kilka zespołów developerskich,
- używa GitHub, Jira, Slack i CI/CD,
- ma problem z przeciążeniem części zespołów i słabą interpretacją KPI.

## Zespoły w demo

### 1. Team Alpha

Rola:
- rozwój głównej platformy klienta

Charakter:
- dużo zmian produktowych,
- duża presja release,
- rosnące ryzyko jakości i przeciążenia.

To jest główny zespół pokazowy w demie.

### 2. Team Beta

Rola:
- zespół integracyjny / platformowy

Charakter:
- bardziej stabilny,
- mniej release pressure,
- lepszy poziom przewidywalności,
- trochę problemów z zależnościami od innych zespołów.

### 3. Team Gamma

Rola:
- zespół odpowiedzialny za nowe funkcje biznesowe

Charakter:
- szybkie tempo pracy,
- dobre throughput,
- średnia jakość procesu review,
- mieszane sygnały z ankiet.

## Sprinty

W demie najlepiej pokazać 3 ostatnie sprinty.

### Zakres

- Sprint 1
- Sprint 2
- Sprint 3

To wystarczy, żeby:
- pokazać trend,
- pokazać zmianę,
- opowiedzieć historię.

## Integracje

### GitHub

Dane:
- PR review time
- merge flow
- PR volume
- PR size

### Jira

Dane:
- throughput
- cycle time
- lead time
- planned vs unplanned work
- sprint completion

### Slack

Dane:
- ankieta po sprincie
- response rate
- komentarze otwarte

### CI/CD

Dane:
- deployment frequency
- failed deployments
- release stability

## Metryki dla zespołów

### Delivery

- throughput
- cycle time
- lead time
- deployment frequency

### Quality

- escaped defects
- defect reopen rate
- release issues
- review quality proxy

### Predictability

- planned vs unplanned work
- sprint spillover
- priority changes

### Team health

- workload sustainability
- focus time
- clarity of priorities
- tooling friction
- review confidence

## Główna historia danych

### Team Alpha

To jest najważniejsza historia w całym demie.

#### Sprint 1

- sytuacja stabilna,
- throughput dobry,
- jakość stabilna,
- survey neutralny,
- workload akceptowalny.

#### Sprint 2

- rośnie presja na release,
- throughput idzie w górę,
- review time zaczyna spadać,
- pojawia się więcej pracy pilnej,
- focus time się pogarsza.

#### Sprint 3

- throughput nadal rośnie,
- escaped defects rosną,
- review staje się zbyt szybkie,
- workload spada,
- komentarze mówią o chaosie priorytetów i przeciążeniu.

#### Wniosek

Zespół wygląda lepiej tylko wtedy, gdy patrzymy na jedną liczbę.

Jeśli spojrzymy szerzej:
- delivery przyspiesza,
- ale jakość i sustainability spadają.

To jest idealna historia dla naszego produktu.

### Team Beta

#### Sprint 1-3

- stabilne delivery,
- mało defektów,
- dobre review,
- neutralny albo dobry survey,
- jedna główna trudność: zależności od innych zespołów.

#### Wniosek

Team Beta ma status raczej healthy.
Może być dobrym kontrastem dla Team Alpha.

### Team Gamma

#### Sprint 1-3

- mocny throughput,
- trochę pogarszający się review process,
- średnie workload sustainability,
- mixed signals w survey,
- potencjalne ryzyko na przyszłość, ale nie tak duże jak w Alpha.

#### Wniosek

Team Gamma daje nam trzeci przypadek:
- nie jest tak spokojny jak Beta,
- nie jest tak alarmowy jak Alpha.

## Ankiety

### Ankieta główna

Najważniejsza ankieta to:

**Sprint Survey**

### Pytania stałe

1. Czy workload w tym sprincie był do utrzymania?
2. Czy zespół miał wystarczająco dużo czasu na skupioną pracę?
3. Czy priorytety sprintu były jasne?
4. Czy proces code review działał dobrze?
5. Czy narzędzia wspierały pracę zamiast ją spowalniać?
6. Czy sprint był przewidywalny?

### Skala

Najlepiej 1-5 albo 1-10.

Do demo lepiej użyć:
- 1-5 dla prostoty,
- a w dashboardzie przeliczać to na score 0-100.

## Komentarze otwarte

Warto przygotować po 2-4 komentarze dla każdego zespołu.

### Team Alpha

Tematy:
- za dużo pracy pilnej,
- zbyt szybkie review,
- chaos priorytetów,
- za mało czasu na fokus.

### Team Beta

Tematy:
- dobra stabilność,
- czasem blokady od innych zespołów,
- dobra współpraca wewnętrzna.

### Team Gamma

Tematy:
- szybkie delivery,
- napięcie przed release,
- mieszana jakość review,
- czasem zbyt dużo zmian w środku sprintu.

## Insighty

Dla dema najlepiej przygotować 5-8 gotowych insightów.

### Przykłady

1. Team Alpha przyspiesza kosztem jakości.
2. Team Alpha ma rosnące przeciążenie i mniej focus time.
3. Team Beta jest stabilny, ale zależny od innych zespołów.
4. Team Gamma wygląda dobrze na throughput, ale ma ryzyko pogorszenia review quality.
5. W organizacji rośnie udział pracy pilnej w dwóch zespołach.

## Rekomendacje

Każdy główny insight powinien mieć rekomendację.

### Przykłady

- ograniczyć interrupt work w Team Alpha,
- rozłożyć review load,
- poprawić planowanie sprintu,
- sprawdzić źródła zależności między zespołami,
- monitorować release pressure w Team Gamma.

## Statusy zespołów

W demie każdy zespół powinien mieć status.

### Team Alpha

- status: investigate

### Team Beta

- status: healthy

### Team Gamma

- status: caution

## Dlaczego taki model danych jest dobry

Bo daje:
- realistyczną organizację,
- różne typy zespołów,
- wyraźny kontrast,
- prawdziwie wyglądające problemy,
- dobry materiał do ekranów i analiz AI.

## Najkrótsze podsumowanie

Mock data powinny pokazywać nie jeden idealny zespół, tylko całą organizację z różnymi sytuacjami.

Najważniejszy jest Team Alpha, bo na nim najlepiej pokażemy sens produktu.
