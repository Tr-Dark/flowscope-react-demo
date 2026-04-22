# Surveys in the System

Working date: 2026-04-22

## Short answer

Yes, surveys should be part of the system.
But they should be one layer of evidence, not the whole product.

This is important because survey-based signals can help us compete with GetDX, Jellyfish, Swarmia, and Hatica, while also matching the mentor's direction.

## Why surveys matter

System metrics can show:
- cycle time is worse,
- throughput is down,
- review time is up,
- incidents increased.

But system metrics usually cannot explain:
- whether priorities are unclear,
- whether tooling is frustrating,
- whether developers are exhausted,
- whether meetings destroy focus,
- whether code review feels shallow or chaotic,
- whether people feel safe raising problems.

That missing layer is exactly where surveys add value.

## The risk of surveys

If surveys are designed badly, they create new problems:
- low trust,
- low honesty,
- response fatigue,
- weak actionability,
- "we collected feedback and nothing changed."

So our product should not present surveys as:
- HR satisfaction forms,
- manager popularity checks,
- anonymous complaint box only.

Instead, they should be:
- focused,
- regular but lightweight,
- clearly tied to process improvement,
- protected by privacy rules,
- connected to action plans.

## Recommended survey model

We should use a 3-layer survey system.

### Layer 1: Pulse survey

Frequency:
- every 2 weeks or once per sprint

Length:
- 3 to 5 questions

Purpose:
- catch fast changes in workload, clarity, friction, and morale

Examples:
- I had enough uninterrupted time to do meaningful work.
- I understand the team's priorities for this sprint.
- Our current workload feels sustainable.
- Our tools and workflow helped rather than slowed me down.

### Layer 2: Deep survey

Frequency:
- quarterly

Length:
- 10 to 15 questions

Purpose:
- measure deeper patterns and compare change over time

Suggested topics:
- planning clarity
- code review quality
- CI/CD friction
- documentation
- collaboration
- on-call or incident load
- autonomy
- learning and support
- wellbeing / sustainability

### Layer 3: Event-based mini study

Trigger examples:
- after a tool migration
- after a release crisis
- after a process change
- after onboarding changes

Length:
- 3 to 7 focused questions

Purpose:
- understand impact of a specific change

## Recommended survey topics

We should not ask everything.
We should ask what helps explain team effectiveness.

Best topic groups:
- focus time
- clarity of priorities
- workload sustainability
- tooling friction
- code review experience
- release confidence
- collaboration quality
- meeting load
- dependency friction
- psychological safety to raise blockers

## How surveys should appear in the product

### Survey dashboard

Should show:
- topic trends over time
- team-level heatmap
- response rate
- confidence indicator
- anonymous comments grouped by theme

### Correlation view

Should show examples like:
- higher review pain + longer PR review time
- lower focus score + more meeting load
- lower release confidence + higher change failure rate

Important:
- the system should suggest a relationship,
- but it should not claim strict causation without caution.

### Action view

Every survey cycle should produce:
- 1 to 3 recommended actions,
- owner,
- expected improvement,
- check-back date.

Without this, surveys feel fake.

## Privacy and trust rules

This section is critical for our differentiation.

We should define clear rules:
- no individual survey results shown to managers;
- no result shown for groups under a minimum size, for example less than 5 people;
- open comments should be anonymized;
- survey data is for process improvement, not performance review;
- every survey page should display the governance rule clearly.

## What to avoid

We should avoid:
- weekly long surveys,
- vague "Are you happy?" style questions,
- combining survey data with individual performance ratings,
- publishing team comments without protection,
- asking for feedback without publishing actions taken.

## Recommended product stance

The best stance is:

"Surveys help explain the why behind the metrics."

That means:
- metrics show what changed;
- surveys reveal where friction is felt;
- context markers explain what else was happening;
- action planning closes the loop.

## Why this makes us competitive

GetDX proves that surveys can be research-backed and strategic.
Jellyfish proves they can connect to productivity outcomes.
Swarmia proves they fit healthy engineering metrics.
Hatica proves lightweight check-ins can be practical and frequent.

Our advantage should be:
- stronger governance,
- clearer anti-misuse rules,
- less surveillance risk,
- tighter connection from survey insight to team action.

## Recommended feature set for our concept

Minimum useful survey feature set:
- recurring pulse surveys
- quarterly deep survey templates
- event-based mini studies
- response-rate tracking
- anonymous comments
- team-level heatmaps
- trend view
- action recommendations
- survey-to-metric correlation cards
- governance banner on every survey result page

## Example narrative for the documentation

The system uses lightweight recurring surveys to capture friction that operational metrics cannot see directly. Survey results are aggregated at team level, protected by anonymity rules, and combined with delivery and quality metrics to support process improvement rather than individual evaluation.

## Bottom line

Surveys should absolutely be part of the concept.

But the winning version is:
- not surveys alone,
- not metrics alone,
- not management reporting alone.

The winning version is a balanced system where surveys provide human context to engineering metrics and trigger concrete improvement actions.
