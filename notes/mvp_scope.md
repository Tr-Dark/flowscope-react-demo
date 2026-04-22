# MVP Scope

Working date: 2026-04-22

## MVP goal

The MVP should prove one core idea:

it is possible to measure IT team effectiveness in a way that is useful for managers and still safe for employees.

So the MVP does not need to be a full enterprise platform.
It only needs to show:
- where the data comes from,
- what metrics are combined,
- how surveys add human context,
- how the system prevents bad KPI interpretation,
- what actions a manager or team should take next.

## MVP one-sentence definition

An interactive demo platform that combines mocked engineering metrics and team survey signals into balanced team-level insights with anti-misuse guardrails.

## Primary MVP audience

The MVP should be understandable to:
- mentor,
- reviewers,
- IT company representatives,
- engineering managers,
- team leads.

## Primary MVP user

The main demo user should be:
- Engineering Manager or Team Lead.

Why:
- this user best matches the business problem;
- this user naturally needs both metrics and context;
- this user can benefit from recommendations and alerts.

Secondary audience in the narrative:
- CTO / Head of Engineering,
- team members who want transparency,
- HR only in aggregated insight mode.

## Core MVP promise

The product helps answer:
- Is the team delivering effectively?
- Is speed hurting quality?
- Is the way of working becoming unsustainable?
- What should we improve next?

## MVP scope summary

The MVP should include 5 essential modules.

### 1. Data source layer

Purpose:
- show that the product is not only based on surveys.

What the MVP should show:
- mocked connection to GitHub,
- mocked connection to Jira,
- mocked connection to Slack,
- visible label explaining which signals come from which source.

Minimum content:
- GitHub -> PRs, review time, merge flow
- Jira -> cycle time, throughput, sprint stability
- Slack -> pulse survey and check-ins

### 2. Executive / team overview dashboard

Purpose:
- give one balanced view of team effectiveness.

What the MVP should show:
- 4 pillars:
  - delivery flow,
  - quality and stability,
  - predictability and focus,
  - team health and experience;
- each pillar shown as:
  - healthy,
  - caution,
  - investigate.

Minimum widgets:
- throughput trend,
- cycle time trend,
- escaped defects trend,
- workload pulse,
- current top risks,
- top recommendation.

### 3. Survey and team health module

Purpose:
- show the human context behind operational metrics.

What the MVP should show:
- pulse survey score trends,
- workload sustainability,
- focus time,
- clarity of priorities,
- tooling friction,
- anonymous comment themes.

Minimum features:
- aggregated team view only,
- response rate indicator,
- privacy banner:
  - no individual visibility,
  - data used for improvement, not performance review.

### 4. Insight and interpretation module

Purpose:
- explain what the data means.

What the MVP should show:
- linked signals across metrics and surveys,
- short plain-language interpretation,
- recommended next action,
- caution against wrong conclusions.

Example insight:
- throughput increased,
- defects increased,
- focus score dropped,
- therefore the team may be shipping faster at the cost of review quality and sustainability.

### 5. KPI anti-pattern and guardrails module

Purpose:
- make the product clearly different from toxic KPI tools.

What the MVP should show:
- harmful metrics:
  - lines of code,
  - commits per developer,
  - tickets closed per person,
  - story points per person;
- why they are dangerous;
- safer alternatives;
- governance rule:
  - this system is not designed for individual ranking.

## Recommended MVP screens

We should keep the MVP to 5 screens.

### Screen 1: Home dashboard

Shows:
- 4 pillars overview,
- top 3 risk signals,
- top 3 positive signals,
- one main recommendation,
- active context markers.

Main question answered:
- "What is happening in the team right now?"

### Screen 2: Delivery and quality

Shows:
- throughput,
- cycle time,
- lead time,
- review time,
- deployment frequency,
- escaped defects,
- incidents / release markers.

Main question answered:
- "Are we shipping effectively and safely?"

### Screen 3: Team health and surveys

Shows:
- pulse trends,
- workload score,
- focus time score,
- clarity score,
- tooling friction score,
- anonymized comment themes,
- survey response rate.

Main question answered:
- "How does the team experience the process?"

### Screen 4: Insights and actions

Shows:
- linked interpretation cards,
- recommended actions,
- action owner,
- review date,
- confidence / caution marker.

Main question answered:
- "What should we do next?"

### Screen 5: KPI anti-patterns

Shows:
- list of bad KPI examples,
- explanation of harm,
- safer metric alternatives,
- governance and trust rules.

Main question answered:
- "How do we avoid turning metrics into surveillance?"

## Minimal feature list

The MVP must have:
- mocked data integrations,
- team-level dashboard,
- survey module,
- insight cards,
- anti-pattern library,
- privacy / governance message.

The MVP should have:
- period comparison,
- one example team story,
- alerts when multiple signals deteriorate together.

The MVP may have if time allows:
- filter by team,
- compare two teams,
- export summary,
- role-based view switch.

## What is explicitly out of scope

To stay realistic, the MVP should not include:
- real backend integrations,
- real authentication,
- employee-level performance pages,
- advanced admin settings,
- billing,
- full benchmarking against market,
- AI chatbot,
- complex forecasting engine,
- mobile app.

## Mock data scenario

The MVP should not use random numbers.
It should tell one coherent story.

Recommended scenario:

### Team Alpha

Sprint 1:
- throughput stable,
- cycle time acceptable,
- quality stable,
- survey pulse neutral.

Sprint 2:
- management pushes faster release tempo,
- throughput rises,
- review time drops,
- more work becomes urgent,
- focus time worsens.

Sprint 3:
- escaped defects rise,
- workload pulse drops,
- comments mention frequent interrupts and shallow reviews.

System conclusion:
- output increased, but sustainability and quality weakened.

Recommended action:
- reduce interrupt work,
- rebalance reviewer load,
- protect focus blocks,
- inspect PR size and review process.

This scenario is strong because it proves why one metric alone is dangerous.

## MVP logic flow

The product logic should feel like this:

1. Collect signals from tools and surveys.
2. Group them into 4 pillars.
3. Detect unusual changes and risky combinations.
4. Explain what changed in human language.
5. Recommend next actions.
6. Warn against harmful interpretation.

## Example user flow for the demo

### Demo story

1. Open Home dashboard.
- show that the team looks mixed, not simply "good" or "bad".

2. Open Delivery and quality screen.
- show throughput improvement and quality deterioration.

3. Open Team health screen.
- show workload and focus decline from surveys.

4. Open Insights screen.
- show the system connecting the signals and recommending action.

5. Open KPI anti-pattern screen.
- explain why a manager should not celebrate raw throughput alone.

This creates a clean story for presentation.

## MVP differentiation

The MVP should feel different from ordinary dashboards because it has:
- trust-first design,
- team-level measurement,
- explicit anti-surveillance guardrails,
- survey plus telemetry combination,
- interpretation and action guidance.

## Suggested wording for documentation

The MVP of the proposed system focuses on balanced team-level engineering effectiveness. It integrates mocked operational data from software development tools with lightweight survey feedback and presents the results through interpretable dashboards, risk alerts, and anti-pattern warnings. The purpose of the MVP is not to evaluate individual employees, but to support healthier and more effective team-level improvement.

## Suggested wording for presentation

Our MVP demonstrates that engineering effectiveness can be measured using a balanced model that combines delivery, quality, predictability, and team health. Instead of ranking developers, the system highlights process risks, explains trends, and recommends actions that improve both performance and wellbeing.

## Bottom line

If we build or describe only these 5 screens well, with one coherent team story and clear data sources, the MVP will already be strong enough for a student demo and a convincing product concept.
