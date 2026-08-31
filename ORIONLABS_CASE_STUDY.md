# OrionLabs Portfolio Case Study Specification

## Purpose

The OrionLabs case study is the flagship proof piece in Roman Gudovich's portfolio.

It must work for two readers:

### Recruiter

Needs to understand quickly:

- what OrionLabs is
- that it is real and live
- that it looks polished
- that Roman designed and built a substantial product
- that the project involves more than a simple AI API call

### Developer / technical reviewer

Needs enough depth to judge:

- architecture
- state design
- AI boundaries
- validation
- failure handling
- security
- performance
- testing
- deployment
- engineering judgment

The case study should not duplicate the repository README.

The GitHub README explains the repository.

The portfolio case study explains the product, decisions, problems solved, and what the project demonstrates about Roman as a developer.

---

# Case Study Route

Recommended:

```text
/projects/orionlabs
```

---

# Hero

## Title

**OrionLabs**

## Descriptor

Preferred:

> **A satirical AI horoscope platform presented like a venture-backed research company.**

## Explanation

Draft:

> Users answer a short questionnaire, OrionLabs generates a personalized report with Gemini, and the whole experience is wrapped in an intentionally over-serious fictional AI institution.

## Primary CTAs

- Live Product
- View Source

## Quick Facts

Suggested:

```text
Role        Product design & full-stack development
Stack       React, TypeScript, Gemini, Groq, Vercel, Zod
Status      Production
Tests       252
```

Do not imply client/employer ownership.

---

# Hero Visual

Use a strong real OrionLabs screenshot.

Preferred:

**OrionLabs Landing Hero**

Caption direction:

> OrionLabs presents itself with the visual confidence of a serious AI research company before the satire starts showing through.

Keep captions short.

---

# Section 1 — The Challenge

## Goal

Explain why the product exists beyond "AI horoscope app."

Draft:

> Most joke horoscope generators feel disposable. I wanted OrionLabs to feel like a polished, credible AI startup first — and only gradually reveal how absurd the premise really is.
>
> The challenge was to make the satire work at the product, copy, interaction, and engineering levels without turning the experience into a gimmick.

This section should remain short.

---

# Section 2 — The Product Journey

The product journey should be visually led.

Sequence:

```text
Landing
→ Questionnaire
→ Calibration
→ Personalized Report
```

## Selected visual

**Questionnaire — Step 1**

Reason:

- demonstrates UX
- form quality
- visual system
- responsive interaction
- personalization entry

Caption direction:

> The questionnaire keeps the interaction simple and polished while collecting only the information needed for personalization.

---

# Section 3 — Architecture

Use the architecture diagram instead of a Calibration screenshot.

This is the technical anchor of the case study.

## Main Flow

```text
Browser
  ↓
Questionnaire state
  ↓
Validated ReportGenerationInput
  ↓
Vercel Function
  ↓
Gemini 3.6 Flash
  ↓
Structured JSON output
  ↓
Zod validation + identity/focus checks
  ↓
Immutable report snapshot
  ↓
Report UI
```

## Optional Context Branch

```text
Optional context
  ↓
/api/enhance-context
  ↓
Groq
  ↓
Returned as editable questionnaire text
```

The diagram must make clear that Groq enhancement returns to the normal editable context field.

## Diagram Caption

> User input passes through strict client/server boundaries, structured provider output, runtime validation, and persistence before a report is accepted by the UI.

## Visual Direction

Use Roman portfolio styling:

- charcoal
- teal lines
- coral emphasis where useful
- IBM Plex Mono labels
- restrained animation
- no fake "AI brain" illustration

OrionLabs purple/gold can appear only where it represents the product layer.

---

# Section 4 — Engineering Highlights

Use approximately four highlights.

Do not create fifteen tiny cards.

## Highlight A — Structured AI Generation

Core idea:

> Gemini never writes directly into the interface.

Explain:

- browser sends minimized validated input
- Vercel Function owns provider call
- structured output is constrained
- Zod validates runtime output
- identity/focus checks are application-controlled
- only complete validated reports enter application state

Avoid dumping the schema.

## Highlight B — Safe Report Lifecycle

Core invariant:

> A previous completed report remains active until its replacement has successfully generated, validated, persisted, and been activated.

Explain draft-vs-report state, immutable report snapshots, failed replacement safety, and invalid storage recovery.

## Highlight C — AI and Security Boundary

Explain:

- provider keys server-side
- prompt implementation server-side
- JSON-only API requests
- strict request schemas
- bounded bodies
- controlled errors
- `no-store`
- no provider secrets/client bundle leakage
- Production Gemini rate limiting verified externally

Do not turn the case study into a security audit.

## Highlight D — Performance and Responsive Delivery

Explain:

- Hero image optimization
- mobile-specific Hero source
- optimized logo/research/signature imagery
- lazy secondary routes
- lightweight research catalog
- deferred TrustBar asset loading
- performance improvements made without changing the product's visual identity

Use only current verified numbers if metrics are shown.

---

# Section 5 — Report Visual

## Selected Visual

**Top of a generated personalized report**

Caption:

> The report is the payoff: personalized AI output presented as a finished product surface, not raw model text.

Do not expose private real-user input.

Use synthetic/test subject data if needed.

---

# Section 6 — Problems I Solved

Use 4–6 concise problems.

## SPA Routing vs Vercel Functions

Explain client-side routes, SPA fallback, static assets, and `/api/*` Function exclusion.

## AI Failure Handling

Explain timeout, malformed output, transient failures, provider capacity, retry deadlines, no partial report acceptance, and draft preservation.

## Persistence Invariants

Explain draft state versus completed-report state, active pointer, immutable snapshots, and safe replacement behavior.

## Production Abuse Controls

Explain request bounds, strict schemas, JSON-only requests, and the verified 5 requests / 60 seconds / IP Vercel Firewall rule with sixth request denied before provider execution.

## Toolchain Cleanup

Explain the mixed Vite 5/Vite 8 tree, final coherent Vite 6 alignment, native ESM config fix, and clean dependency-tree verification.

---

# Section 7 — Quality & Verification

Make this highly scannable.

Current verified evidence:

```text
252 automated tests
TypeScript clean
ESLint clean
Production Vercel deployment
Physical mobile verified
Firefox verified
0 production dependency vulnerabilities
Server-only AI credentials
Production rate limiting verified
```

Do not style as fake certification badges.

Possible heading:

> **Built beyond the happy path**

or:

> **Production validation**

---

# Section 8 — Design Decisions

Discuss:

- fictional institutional seriousness
- premium cosmic design language
- satire through visual credibility
- restraint in motion
- responsive composition
- consistent supporting institutional routes
- research ecosystem

Avoid treating this like a design-system changelog.

---

# Research Visual

## Selected Visual

**Top of one OrionLabs research article**

Caption:

> OrionLabs extends beyond the main journey into a fictional research ecosystem, reinforcing the same institutional tone and visual system across the product.

---

# Section 9 — What I Learned

Preferred central idea:

> The difficult part of building an AI product isn't calling a model. It's designing the boundaries around it.

Draft:

> OrionLabs taught me that the difficult part of AI product development isn't calling a model — it's designing the boundaries around it: validation, failure handling, state, security, UX, and knowing when the product is actually ready to ship.

---

# Section 10 — What I'd Do Next

Suggested:

> A future production iteration could add authenticated report history and server-side persistence. The current release intentionally keeps completed reports session-scoped.

Potential future areas:

- authenticated history
- stable report URLs/sharing
- deletion/privacy controls

Do not imply these are missing bugs if they are deliberate v1 scope exclusions.

---

# Closing CTA

Primary:

> **Try OrionLabs**

Secondary:

> **View GitHub**

Optional line:

> The live version is the best way to understand the project.

---

# Visual Inventory — Locked v1

Maximum five primary visuals.

## 1. Landing Hero
Purpose: brand / polish / first impression

## 2. Questionnaire Step 1
Purpose: UX / interaction / form quality

## 3. Architecture Diagram
Purpose: technical mental model

## 4. Report Top
Purpose: AI payoff / personalization

## 5. Research Article Top
Purpose: world-building / design depth

Do not add Calibration screenshot unless later testing shows the page needs another visual.

---

# Visual Capture Requirements

Screenshots should:

- use Production or a verified equivalent build
- contain no private/personal user data
- be current
- avoid browser chrome unless intentionally framed
- use consistent viewport dimensions
- be optimized for web delivery
- preserve text readability
- avoid mock devices unless the composition benefits materially

---

# Technical Claim Verification Checklist

Before publishing:

- [ ] Current Gemini model name
- [ ] Current Groq model name
- [ ] Current test count
- [ ] Current rate-limit policy
- [ ] Current route names
- [ ] Current persistence behavior
- [ ] Current security boundary
- [ ] Current toolchain
- [ ] Production deployment URL
- [ ] GitHub URL
- [ ] Physical mobile verification
- [ ] Firefox verification
- [ ] Production-only dependency audit claim
- [ ] Performance numbers if any are displayed

Source of truth should be the final OrionLabs repository/docs, not memory.

---

# What Does Not Belong in the Case Study

Do not include:

- full API schemas
- long code snippets
- exhaustive test list
- raw Vercel logs
- giant dependency tables
- every roadmap phase
- every security header
- full prompt text
- Git history narrative
- internal Codex process
- token/quota discussions
- verbose debugging chronology

These are repository/development details, not portfolio storytelling.

---

# Success Test

A recruiter should be able to skim the case study in 2–3 minutes and conclude:

> This is a polished, real product built by someone who cares about both UX and engineering.

A developer should be able to read deeper and conclude:

> The architecture and release process support the claims; this isn't just an AI-generated frontend demo.
