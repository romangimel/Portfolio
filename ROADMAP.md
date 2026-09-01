# Roman Gudovich Portfolio Roadmap

## Guiding Rule

This portfolio is planned and implemented in deliberate, evidence-backed phases.

Avoid discovering or changing core product architecture casually while implementing an unrelated surface.

Each phase should finish with a clear source of truth before the next begins.

## Status Ownership

This file is the only detailed source of truth for current implementation status, completed versus incomplete work, immediate sequencing, the next engineering task, the next major product phase, and outstanding verification.

Other documents own their subject areas but should not independently define what happens next.

## Current State and Near-Term Sequence

Implemented and approved:

- React + TypeScript + Vite application foundation
- Tailwind design tokens, local typography, and reusable layout/UI primitives
- React Router routes for `/` and `/projects/orionlabs`
- homepage Hero body visual direction and responsive composition
- desktop Header/Navbar visual presentation

Not final or not implemented:

- `SiteHeader` extraction and site-level ownership
- sticky Header behavior
- narrow/mobile hamburger and popover behavior defined in `DESIGN_SYSTEM.md`
- most homepage sections and the full OrionLabs case study; `/projects/orionlabs` remains a placeholder
- final responsive, accessibility, performance, and release QA

Near-term sequence:

A. Establish a minimal browser regression baseline for the approved Hero body.
B. Extract the Header/Navbar from `HomeHero` into a distinct site-level `SiteHeader`.
C. Implement sticky desktop behavior and the chosen narrow/mobile hamburger/popover direction.
D. Re-verify Header/Hero composition and interaction at the affected responsive widths.
E. Implement Selected Work / the OrionLabs featured project.

These are separate reviewable milestones, not one combined implementation task. Hero motion and responsive image/format optimization remain separately tracked work.

---

# Phase 0 — Product Direction

- [x] Define primary audience: recruiters + technical reviewers
- [x] Lock professional name: Roman Gudovich
- [x] Lock title: Full-stack developer focused on AI-powered products
- [x] Lock supporting line
- [x] Lock broader positioning statement
- [x] Decide projects should establish credibility before career-transition narrative
- [x] Decide portfolio should showcase UI/UX ability directly
- [x] Reject generic junior-portfolio patterns
- [x] Define personality/professional balance
- [x] Define AI-assisted development positioning

---

# Phase 1 — Information Architecture

- [x] Define homepage section order
- [x] Define navigation
- [x] Define flagship OrionLabs placement
- [x] Define proof/evidence strip
- [x] Define How I Build principles
- [x] Define About strategy
- [x] Define Tools section
- [x] Define Contact strategy
- [x] Define initial route structure
- [x] Define OrionLabs case-study structure

Current homepage structure:

```text
Header / navigation
Hero
Selected Work / OrionLabs
Proof strip
How I Build
About
Tools
Contact
Footer
```

Initial routes:

```text
/
/projects/orionlabs
```

---

# Phase 2 — Art Direction and Design System

- [x] Establish dark art-directed product-studio direction
- [x] Choose Hero portrait-led concept
- [x] Choose charcoal/black foundation
- [x] Establish teal as system/signature color
- [x] Establish coral as personality counter-accent
- [x] Establish magenta/cyan/ember as artwork-only supporting palette
- [x] Choose editorial + modern UI + mono typography strategy
- [x] Define layout/grid philosophy
- [x] Define border/surface/radius direction
- [x] Define section-label language
- [x] Define motion principles
- [x] Define project-page color adaptation
- [x] Define mobile design philosophy
- [x] Prototype design system in browser and adjust tokens
- [x] Establish typography choices in browser implementation
- [x] Establish implemented color values
- [ ] Finalize spacing/type scale after complete responsive review

Reference: `DESIGN_SYSTEM.md`

---

# Phase 3 — Content and Copy

- [x] Finalize and lock Hero title and supporting positioning copy
- [ ] Finalize unresolved Hero action destinations and supporting microcopy
- [ ] Finalize site-wide navigation destinations and labels beyond the current Hero presentation
- [ ] Finalize OrionLabs featured-project copy
- [ ] Finalize proof-strip language
- [ ] Finalize How I Build copy
- [ ] Finalize About copy
- [ ] Finalize Tools wording
- [ ] Finalize Contact CTA
- [ ] Decide whether location appears publicly
- [ ] Confirm GitHub URL
- [ ] Confirm LinkedIn URL
- [ ] Confirm public email
- [ ] Decide résumé download behavior
- [ ] Review all copy for recruiter clarity
- [ ] Review all copy for personality without gimmick

Reference: `CONTENT_COPY_PLAN.md`

---

# Phase 4 — OrionLabs Case Study Content

- [x] Define case-study structure
- [x] Define five-visual maximum
- [x] Choose Hero visual
- [x] Choose Questionnaire Step 1 visual
- [x] Choose Report-top visual
- [x] Choose Research-article-top visual
- [x] Replace Calibration screenshot with architecture diagram
- [ ] Capture final Hero screenshot
- [ ] Capture final Questionnaire screenshot
- [ ] Capture final Report screenshot
- [ ] Capture final Research screenshot
- [ ] Create architecture diagram
- [ ] Finalize case-study copy
- [ ] Verify every technical claim against OrionLabs source/docs
- [ ] Confirm all metrics are current
- [ ] Confirm live-demo and repository URLs
- [ ] Optimize all case-study images for the portfolio

Reference: `ORIONLABS_CASE_STUDY.md`

---

# Phase 5 — Repository and Technical Foundation

The implemented stack supports strong visual composition, responsive layout, case-study routes, performance, and maintainability without speculative infrastructure.

Implemented foundation:

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4 through `@tailwindcss/vite`
- React Router 8
- Fontsource typography
- Oxlint

No motion library or automated application test suite is currently configured.

Tasks:

- [x] Create GitHub repository
- [x] Add planning documentation
- [x] Create project-level development instructions
- [x] Choose final frontend stack
- [x] Initialize application
- [x] Configure TypeScript
- [x] Configure linting
- [ ] Establish broader automated application testing after the focused Phase 7A browser harness when feature behavior justifies it
- [ ] Configure aliases only if needed
- [x] Establish route strategy
- [ ] Establish content/data structure
- [x] Establish asset directories
- [ ] Establish metadata strategy
- [ ] Establish environment strategy if any
- [x] Add `.gitignore`
- [x] Add initial README

---

# Phase 6 — Design-System Prototype

- [x] Load final fonts
- [x] Implement color tokens
- [x] Implement typography scale
- [x] Implement content width/grid
- [x] Implement section label
- [x] Implement primary button
- [x] Implement secondary button
- [x] Implement card/surface primitive
- [x] Implement media frame
- [x] Implement focus treatment
- [x] Implement base motion utilities
- [x] Implement reduced-motion behavior
- [x] Complete initial development browser review at representative desktop and responsive widths
- [ ] Revalidate tokens during the final responsive UX audit and refine only where evidence requires it

Exit criteria: the system should already feel recognizably like the approved art direction before full page content is built.

---

# Phase 7 — Homepage Hero

- [x] Implement the approved desktop Navbar presentation inside current `HomeHero`
- [x] Implement Hero layout
- [x] Integrate portrait
- [x] Produce final portrait/art treatment
- [x] Ensure portrait remains natural
- [x] Implement technical decorative layer
- [x] Implement Hero CTA hierarchy
- [x] Implement desktop social/technical rail if retained
- [x] Implement scroll cue if retained
- [ ] Implement Hero motion
- [x] Implement reduced-motion fallback
- [ ] Optimize Hero asset format and responsive delivery
- [x] Verify no duplicate downloads
- [x] Complete initial Hero-body visual-direction review at representative desktop and mobile widths

The Hero body is an approved visual surface. This initial review is not final responsive QA, and it does not approve the current narrow/mobile Header. Later verification does not authorize a Hero redesign; any correction should be surgical and evidence-led.

---

# Phase 7A — Minimal Browser Regression Foundation

Purpose: catch collateral visual regressions that lint and build checks cannot detect before more approved surfaces are added.

Preferred tool direction: Playwright, unless repository inspection at implementation time reveals a concrete reason to choose another lightweight browser harness.

- [x] Confirm the smallest suitable browser-regression setup
- [x] Add one desktop baseline covering the approved desktop Header + Hero composition together, while keeping the 430px and 375px baselines scoped to the Hero body only
- [x] Add an approved Hero-body visual baseline around 430px
- [x] Add an approved Hero-body visual baseline around 375px
- [x] Scope narrow baselines to the approved Hero body so the unfinished current mobile Header is not frozen
- [x] Keep the harness focused on stable approved surfaces rather than broad end-to-end coverage
- [x] Document the focused command and intentional baseline-update workflow

After the mobile Header is implemented, extend the harness with focused coverage for toggle behavior, outside click, `Escape`, keyboard/focus behavior, and obvious horizontal overflow. Do not turn this milestone into a comprehensive testing project.

Exit criteria: a small repeatable browser check can detect obvious collateral movement or breakage of the approved Hero body.

---

# Phase 7B — Site Header Extraction

- [x] Extract Header/Navbar markup from `HomeHero`
- [x] Create a distinct site-level `SiteHeader` component
- [x] Render the Header as a sibling of page `<main>` content
- [x] Preserve the approved Hero body and desktop Header presentation during extraction
- [x] Do not preserve the current cramped narrow/mobile navigation as a design constraint
- [x] Keep Header navigation usable independently of the Hero

Exit criteria: Header ownership matches the target site architecture without collateral changes to the approved Hero body or desktop Header presentation.

---

# Phase 7C — Sticky Header and Mobile Navigation

Implement the chosen direction in `DESIGN_SYSTEM.md` as a separate reviewable milestone.

- [x] Implement sticky Header behavior that remains visually integrated with the site
- [x] Replace squeezed narrow navigation with RG identity plus an accessible teal hamburger button
- [x] Implement the compact right-aligned mobile popover and distinct `LET'S CONNECT ↗` CTA area
- [x] Support toggle-close, outside-click close, and `Escape` close with focus returned to the toggle
- [x] Close after choosing a real destination
- [x] Clear stale open state when returning to desktop layout
- [x] Preserve visible focus, logical keyboard order, and approximately 44 × 44px toggle target
- [x] Do not invent functional destinations

Exit criteria: desktop and mobile Header behavior matches the chosen design direction without becoming a fullscreen menu, side drawer, or second navigation row.

---

# Phase 7D — Header/Hero Responsive Re-verification

- [x] Re-verify Header/Hero composition at 768px after `SiteHeader` extraction
- [x] Re-verify Header/Hero composition around 430px after mobile navigation implementation
- [x] Re-verify Header/Hero composition around 375px after mobile navigation implementation
- [x] Verify hamburger open/close, outside click, `Escape`, keyboard/focus behavior, and real-destination close behavior
- [x] Extend the Playwright harness with focused mobile Header behavior coverage: toggle, outside click, Escape/focus restoration, real-destination close, stale-state reset, and horizontal overflow
- [x] Verify no obvious horizontal overflow or stale desktop/mobile menu state
- [x] Confirm approved Hero-body baselines remain stable; update baselines only for reviewed intentional changes

Exit criteria: the architecture and navigation changes are re-verified at affected widths. This is focused development verification, not the final full-site responsive QA in Phase 12.

---

# Phase 8 — Homepage Work Section — Current

- [ ] Implement Selected Work section
- [ ] Implement OrionLabs featured composition
- [ ] Use real OrionLabs product imagery
- [ ] Add case-study CTA
- [ ] Add live-demo CTA
- [ ] Add GitHub CTA
- [ ] Add tech metadata
- [ ] Add project personality line
- [ ] Implement evidence/proof strip
- [ ] Ensure all evidence is factual
- [ ] Add hover/motion treatment
- [ ] Verify responsive media composition

---

# Phase 9 — Homepage Supporting Sections

## How I Build

- [ ] Implement three principles
- [ ] Create custom or restrained icons
- [ ] Implement responsive behavior
- [ ] Implement hover details

## About

- [ ] Implement editorial layout
- [ ] Decide whether additional personal image/art is needed
- [ ] Add final About copy
- [ ] Add optional secondary CTA

## Tools

- [ ] Implement grouped recruiter-readable skills
- [ ] Avoid skill percentages
- [ ] Avoid giant logo cloud

## Contact

- [ ] Implement final CTA
- [ ] Add email
- [ ] Add LinkedIn
- [ ] Add GitHub if appropriate
- [ ] Do not add form unless deliberately approved

## Footer

- [ ] Add Roman Gudovich
- [ ] Add title
- [ ] Add links
- [ ] Add current year dynamically or deliberately
- [ ] Avoid cliché footer copy

---

# Phase 10 — OrionLabs Case Study

- [ ] Implement case-study Hero
- [ ] Add Live Product CTA
- [ ] Add View Source CTA
- [ ] Add quick facts
- [ ] Add challenge section
- [ ] Add product journey
- [ ] Integrate Questionnaire visual
- [ ] Build architecture diagram
- [ ] Animate diagram accessibly
- [ ] Add Engineering Highlights
- [ ] Add Report visual
- [ ] Add Problems I Solved
- [ ] Add Quality & Verification
- [ ] Add Design Decisions
- [ ] Add Research visual
- [ ] Add What I Learned
- [ ] Add What I'd Do Next
- [ ] Add closing CTAs
- [ ] Integrate OrionLabs purple/gold without losing portfolio identity
- [ ] Verify every technical claim
- [ ] Verify every metric
- [ ] Verify responsive layout

---

# Phase 11 — Motion and Interaction Pass

- [ ] Hero staged reveal
- [ ] Section reveals
- [ ] Screenshot mask reveals
- [ ] Technical line animation
- [ ] Architecture diagram progression
- [ ] Project media hover response
- [ ] Button microinteraction
- [ ] Consider case-study transition
- [ ] Verify touch behavior
- [ ] Verify no interaction depends on hover
- [ ] Verify reduced motion
- [ ] Remove any animation that feels decorative-only or distracting

---

# Phase 12 — Final Responsive UX Audit

This is the full-site release-oriented responsive QA pass, separate from initial development review and the focused post-Header re-verification in Phase 7D.

Verify at minimum:

- [ ] 1440×900
- [ ] 1280×800
- [ ] 1024×768
- [ ] 768×1024
- [ ] 430×932
- [ ] 375×812

Audit navbar, Hero hierarchy, portrait/art crop, typography wrapping, CTA hierarchy, project imagery, proof strip, supporting sections, case-study imagery, architecture diagram, horizontal overflow, touch target sizes, and readability.

---

# Phase 13 — Accessibility

- [ ] Semantic landmarks
- [ ] Logical headings
- [ ] Keyboard navigation
- [ ] Visible focus
- [ ] Accessible mobile navigation
- [ ] Correct button/link semantics
- [ ] Descriptive image alt text
- [ ] Decorative art hidden appropriately
- [ ] Reduced-motion support
- [ ] Color is not the only critical state indicator
- [ ] Contrast audit
- [ ] Zoom/reflow sanity
- [ ] Screen-reader sanity

Do not claim WCAG compliance without evidence.

---

# Phase 14 — Performance

- [ ] Measure baseline
- [ ] Optimize Hero imagery
- [ ] Optimize project screenshots
- [ ] Responsive image sources
- [ ] Lazy non-critical visuals
- [ ] Route-level splitting where valuable
- [ ] Audit animation cost
- [ ] Audit font loading
- [ ] Avoid layout shift
- [ ] Check LCP
- [ ] Check duplicate media requests
- [ ] Production bundle inspection
- [ ] No unnecessary dependencies

---

# Phase 15 — Metadata and SEO

- [ ] Page title
- [ ] Description
- [ ] Canonical URL
- [ ] Open Graph
- [ ] Social preview
- [ ] Favicon/app icons
- [ ] Case-study metadata
- [ ] Robots behavior
- [ ] Sitemap if justified
- [ ] Structured data only if useful

---

# Phase 16 — GitHub / Recruiter Presentation

## Repository

- [ ] Final README
- [ ] Live URL
- [ ] Product preview
- [ ] Local setup
- [ ] Stack
- [ ] Architecture summary
- [ ] Testing commands
- [ ] No stale scaffolding
- [ ] No generated junk
- [ ] No secrets
- [ ] Clean tracked tree

## GitHub Profile

- [ ] Profile bio
- [ ] Portfolio URL
- [ ] LinkedIn
- [ ] Pin OrionLabs
- [ ] Pin portfolio
- [ ] Add future strongest projects only
- [ ] Optional profile README

---

# Phase 17 — Testing and Release Candidate

- [ ] Clean install
- [ ] Tests
- [ ] Typecheck
- [ ] Lint
- [ ] Production build
- [ ] Dependency tree health
- [ ] Dependency audit
- [ ] Browser console
- [ ] Network
- [ ] Route checks
- [ ] Broken-link checks
- [ ] Physical mobile verification
- [ ] Firefox or other non-Chromium verification
- [ ] Final copy review
- [ ] Recruiter 30-second test
- [ ] Technical reviewer test

---

# Phase 18 — Deployment and Launch

- [ ] Choose deployment platform
- [ ] Configure Production
- [ ] Configure Preview deployments
- [ ] Choose personal domain
- [ ] Connect domain
- [ ] Verify HTTPS
- [ ] Verify production metadata
- [ ] Verify production routes
- [ ] Verify production console
- [ ] Verify mobile Production
- [ ] Verify Firefox Production
- [ ] Add portfolio URL to GitHub profile
- [ ] Add portfolio URL to LinkedIn
- [ ] Add portfolio URL to CV
- [ ] Confirm OrionLabs case-study links
- [ ] Mark OrionLabs roadmap item `Add OrionLabs to the portfolio` complete

---

# Future Work

Only after v1 is strong:

- [ ] Add second serious project
- [ ] Add third serious project
- [ ] Decide whether standalone About page is useful
- [ ] Decide whether résumé page/download is useful
- [ ] Decide whether writing/notes are worth adding
- [ ] Revisit project navigation once multiple case studies exist

Do not build empty structures today for hypothetical future content.
