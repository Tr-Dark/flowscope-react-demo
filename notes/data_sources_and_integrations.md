# Data Sources and Integrations

Working date: 2026-04-22

## Short answer

No, our product should not be only about surveys.

The right concept is:
- metrics from work systems,
- feedback from surveys,
- context from team events,
- interpretation layer on top.

So surveys are only one part of the system.

## Do we need Git, Jira, and other integrations?

For a real product: yes.

For our student demo: conceptually yes, technically not necessarily.

That means:
- in the product idea, we should clearly show integrations as data sources;
- in the demo app, we can use mocked data and pretend the data came from those integrations;
- we do not need to build real backend connectors unless we want to.

## Why integrations matter

Without integrations, the system cannot calculate many useful engineering metrics.

Example:
- Git data helps with PR flow, code review timing, merge patterns;
- Jira or Linear data helps with work stages, issue flow, planning stability;
- CI/CD data helps with deployment frequency, build health, pipeline reliability;
- incident tools help with failure and recovery metrics;
- surveys explain what the raw telemetry cannot explain.

So the strongest version of the concept is:
- automatic operational metrics,
- plus lightweight human feedback,
- plus interpretation and recommendations.

## What data sources we should include in the concept

### 1. Version control systems

Examples:
- GitHub
- GitLab
- Bitbucket
- Azure DevOps Repos

What they give us:
- pull requests,
- review time,
- merge time,
- PR size,
- code review participation,
- rework patterns,
- lead time components.

### 2. Work management systems

Examples:
- Jira
- Linear
- Azure Boards
- ClickUp

What they give us:
- issue lifecycle,
- cycle time,
- throughput,
- work item type,
- unplanned work share,
- sprint completion stability,
- spillover trends,
- priority changes.

### 3. CI/CD systems

Examples:
- GitHub Actions
- GitLab CI
- Jenkins
- CircleCI
- Azure Pipelines

What they give us:
- deployment frequency,
- pipeline duration,
- failed build rate,
- release reliability,
- release bottlenecks.

### 4. Incident / quality systems

Examples:
- Jira Service Management
- PagerDuty
- Opsgenie
- Sentry
- bug tracking layers in Jira / Linear

What they give us:
- change failure rate,
- incident count,
- severity trends,
- mean time to restore,
- escaped defects,
- quality instability after releases.

### 5. Communication and collaboration systems

Examples:
- Slack
- Microsoft Teams
- Calendar systems

What they give us:
- survey delivery channel,
- async check-ins,
- optional meeting load context,
- reminders,
- discussion prompts.

Important:
- we should be careful here;
- these tools should support team context, not become surveillance feeds.

### 6. Survey and check-in layer

Examples:
- in-app pulse survey,
- Slack survey,
- Teams survey,
- retrospective check-in.

What they give us:
- perceived focus time,
- workload sustainability,
- clarity of priorities,
- tooling friction,
- code review pain,
- stress and burnout risk signals.

## Our measurement model by source

### Operational metrics from integrations

These should be mostly automatic.

Examples:
- cycle time,
- lead time,
- throughput,
- deployment frequency,
- change failure rate,
- review time,
- incident count,
- unplanned work ratio.

### Human-context metrics from surveys

These should be lightweight and recurring.

Examples:
- perceived focus time,
- perceived priority clarity,
- perceived workflow friction,
- confidence in release process,
- workload sustainability,
- morale pulse.

### Context markers

These explain anomalies.

Examples:
- major release,
- org restructure,
- production incident week,
- tool migration,
- on-call rotation change,
- new team lead.

## So what is our product actually?

Not a survey app.
Not a dashboard-only app.

It is better described as:

an engineering effectiveness platform that combines telemetry, team feedback, and interpretation.

## What should be the default architecture in our concept

### Layer 1: Connectors

Input from:
- Git
- Jira / Linear
- CI/CD
- incident systems
- communication tools

### Layer 2: Survey engine

Input from:
- pulse surveys
- deep surveys
- event-based mini studies

### Layer 3: Analytics engine

Combines:
- delivery,
- quality,
- predictability,
- team health.

### Layer 4: Interpretation layer

Produces:
- insights,
- warnings,
- anti-pattern alerts,
- recommended actions.

### Layer 5: UI

Shows:
- dashboard,
- team view,
- survey view,
- insight view,
- KPI anti-pattern view.

## What we should say in the documentation

Recommended wording:

"The system combines automatic data from engineering tools such as Git repositories, task tracking systems, CI/CD pipelines, and incident platforms with lightweight team surveys. This allows the product to measure both operational efficiency and human factors influencing team performance."

## What we should do in the demo

For the demo version:
- no real integrations are required;
- we can use mocked connectors and prepared sample datasets;
- we should visually show where the data would come from;
- we should make it obvious which metrics are automatic and which come from surveys.

This is enough for a convincing student prototype.

## Suggested scope for our demo integrations

If we want the demo to feel realistic, we can pretend to integrate with:
- GitHub,
- Jira,
- Slack.

That is enough to explain almost the whole product story:
- GitHub for PR and code review metrics;
- Jira for task flow and sprint metrics;
- Slack for pulse surveys and check-ins.

## Recommended stance

The best answer to the mentor or to reviewers is:

"No, the product is not based only on surveys. Surveys are used to explain the human side of the process, while the core metrics come from engineering tools such as Git, Jira, and CI/CD systems."

## Bottom line

Yes, integrations are important in the concept.

But:
- we do not need to build them for the demo,
- we do need to show them in the product logic,
- and surveys should be a complementary layer, not the whole system.
