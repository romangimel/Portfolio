# AGENTS.md

## Purpose

This file defines the working rules for AI-assisted development in this repository.

The portfolio is a recruiter-facing, design-forward personal site for **Roman Gudovich**, a full-stack developer focused on AI-powered products.

Before making meaningful changes, read the relevant project documentation:

- `PROJECT.md`
- `DESIGN_SYSTEM.md`
- `ROADMAP.md`
- `CONTENT_COPY_PLAN.md`
- `ORIONLABS_CASE_STUDY.md`

Treat those files as the source of truth for product direction, visual language, content hierarchy, scope, and current phase.

---

## Product Priorities

Preserve these priorities in this order:

1. Clear recruiter-facing communication
2. Strong UI/UX and visual identity
3. Technical credibility
4. Responsive behavior
5. Accessibility
6. Performance
7. Maintainability
8. Personality

Do not sacrifice clarity or usability just to make the site look more experimental.

---

## Positioning

The current primary positioning is:

> **Full-stack developer focused on AI-powered products**

Supporting line:

> **I build polished, production-ready products with strong UX, reliable AI integrations, and deliberate engineering behind the scenes.**

Broader positioning:

> **Product-minded full-stack developer who uses AI as a serious development tool while taking ownership of architecture, UX, validation, security, and release quality.**

Do not rewrite these without explicit approval.

Do not describe Roman as a "vibe coder" in recruiter-facing copy.

Do not overstate seniority, professional software experience, ownership, client work, or employment history.

---

## Visual Direction

Preserve the approved direction:

- dark black/charcoal foundation
- editorial typography
- teal as the primary system/signature accent
- coral as the expressive counter-accent
- magenta/cyan/ember mainly inside artwork
- asymmetrical but disciplined layouts
- technical micro-details
- strong real project imagery
- purposeful motion
- restrained surfaces and borders
- minimal use of rounded cards
- no generic SaaS-dashboard look
- no cyberpunk/hacker-terminal clichés

The Hero concept is especially important.

Its structure is considered largely locked:

- large editorial title on the left
- Roman's portrait integrated on the right
- expressive teal/coral/magenta artwork around the portrait
- charcoal/black background
- thin technical linework and nodes
- clear CTA hierarchy

Do not redesign the Hero from scratch unless explicitly requested.

---

## Design Rule

Every unusual visual choice should improve at least one of:

- identity
- hierarchy
- storytelling
- interaction

If it exists only to look impressive, remove it.

---

## Working Style

Before making meaningful changes:

1. Inspect the relevant files.
2. Read the relevant planning docs.
3. Explain the proposed plan briefly.
4. Identify the files expected to change.
5. Call out meaningful risks or tradeoffs.
6. Keep the change tightly scoped.

Do not claim to have inspected files you have not actually read.

Do not guess about exact current implementation when inspection is possible.

---

## Scope Discipline

Avoid unrelated refactors.

Do not:

- rename unrelated files
- reorganize directories without need
- replace working libraries just because another option is fashionable
- rewrite stable components outside the task
- redesign unrelated sections
- change copy outside the requested scope
- introduce speculative infrastructure
- add empty future-facing routes
- add dependencies without a concrete reason

Prefer the smallest coherent change that fully solves the requested task.

---

## Implementation Expectations

Use correct technical terminology.

Prefer simple, maintainable implementations over clever abstractions.

Do not introduce abstractions before repeated patterns justify them.

When adding a dependency, explain why the existing stack cannot reasonably handle the task.

Keep data/content separate from layout when that improves maintainability.

Preserve semantic HTML.

Use accessible controls.

Do not make important content depend on animation.

Respect reduced-motion preferences.

---

## Responsive Behavior

Responsive behavior is part of the product, not a cleanup phase.

When changing layout or UI, consider at minimum:

- desktop
- tablet
- 430px mobile
- 375px mobile

Do not merely stack desktop layouts mechanically.

Preserve the portfolio's visual identity on mobile.

No horizontal overflow.

Touch targets must remain usable.

Hover-only interactions must have touch equivalents or degrade gracefully.

---

## Accessibility

Do not claim formal WCAG compliance unless it has actually been audited.

Expected baseline:

- semantic landmarks
- logical heading structure
- keyboard navigation
- visible focus
- reduced-motion support
- correct button/link semantics
- readable type
- meaningful alt text
- decorative visuals hidden from assistive technology when appropriate
- no critical state communicated by color alone

---

## Performance

Visual ambition must be implemented responsibly.

Prefer:

- responsive images
- optimized WebP/AVIF assets when appropriate
- lazy loading for non-critical imagery
- route-level splitting where useful
- minimal animation cost
- careful font loading
- no duplicate Hero image requests
- no unnecessary JavaScript

Do not add heavy libraries for effects that can be implemented simply.

---

## Motion

Motion should:

- clarify hierarchy
- support transitions
- reveal content
- reinforce interaction

Motion should not:

- block reading
- hijack scrolling
- replace normal navigation
- become a loading ritual
- create accessibility problems

Do not replace the system cursor.

---

## Copy

Use `CONTENT_COPY_PLAN.md` as the primary reference.

Copy should be:

- confident
- human
- clear
- product-minded
- technically grounded
- occasionally dry
- restrained

Avoid:

- buzzword soup
- fake inspirational language
- forced jokes
- "rockstar" language
- exaggerated claims
- generic "passionate developer" filler

Do not invent professional metrics.

Only use factual project evidence.

---

## OrionLabs

OrionLabs is the flagship project.

Do not present it as a client project.

Its portfolio case study should focus on:

- product challenge
- user journey
- structured AI architecture
- state lifecycle
- security/provider boundaries
- performance
- problems solved
- verification
- design decisions
- lessons learned

Do not turn the case study into a duplicate of the GitHub README.

See `ORIONLABS_CASE_STUDY.md`.

---

## Testing

After meaningful implementation changes, run the relevant checks available in the repository.

Typical checks may include:

- tests
- typecheck
- lint
- production build

For visual changes, also verify:

- desktop
- mobile
- keyboard/focus behavior when relevant
- reduced motion when relevant

Do not report a check as passed unless it actually ran successfully.

If a check cannot be run, say so.

---

## Git and Commits

Do not commit automatically.

Do not push automatically.

Do not rewrite history.

Do not use destructive Git commands unless explicitly requested.

After implementation work, suggest one concise Conventional Commit message.

Examples:

```text
feat: build portfolio design system foundation
feat: implement portfolio hero
feat: add OrionLabs case study
fix: improve mobile hero composition
docs: refine portfolio design system
```

---

## Communication

Roman is learning development and wants technically correct explanations.

Explain decisions clearly, but do not over-explain basic concepts unless needed.

Push back when a proposed product or technical decision is weak.

Do not agree just to be agreeable.

When there is a better alternative, explain the tradeoff.

When asked for a Codex prompt, provide **one complete ready-to-paste prompt** rather than fragments that must be assembled manually.

---

## Current Phase

The repository begins in planning.

Follow `ROADMAP.md` in order unless there is a clear reason not to.

The next implementation goal after repository setup is the **design-system prototype**, not the full homepage.

Do not jump ahead into unrelated sections before the foundation is stable.
