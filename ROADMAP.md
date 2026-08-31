# Roman Gudovich Portfolio Roadmap

## Guiding Rule

This portfolio should be planned before it is coded.

Avoid recreating the early OrionLabs workflow of discovering core product architecture while already implementing it.

Each phase should finish with a clear source of truth before the next begins.

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
Navbar
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
- [ ] Prototype design system in browser and adjust tokens
- [ ] Lock final typography after browser rendering
- [ ] Lock final color values after browser rendering
- [ ] Lock final spacing/type scale after responsive prototype

Reference: `DESIGN_SYSTEM.md`

---

# Phase 3 — Content and Copy

- [ ] Finalize Hero microcopy
- [ ] Finalize navigation labels
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

Evaluate the simplest stack that supports strong visual composition, responsive layout, motion, case-study routes, SEO/metadata, performance, and maintainability.

Recommended starting direction:

- React
- TypeScript
- Vite or an equally justified modern React build setup
- Tailwind CSS or scoped CSS system
- Framer Motion only if the intended motion justifies it

Tasks:

- [ ] Create GitHub repository
- [ ] Add planning documentation
- [ ] Create project-level development instructions
- [ ] Choose final frontend stack
- [ ] Initialize application
- [ ] Configure TypeScript
- [ ] Configure linting
- [ ] Configure testing
- [ ] Configure aliases only if needed
- [ ] Establish route strategy
- [ ] Establish content/data structure
- [ ] Establish asset directories
- [ ] Establish metadata strategy
- [ ] Establish environment strategy if any
- [ ] Add `.gitignore`
- [ ] Add initial README

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
- [ ] Test at desktop width
- [ ] Test at tablet width
- [ ] Test at mobile width
- [ ] Refine DESIGN_SYSTEM tokens from real browser output

Exit criteria: the system should already feel recognizably like the approved art direction before full page content is built.

---

# Phase 7 — Homepage Hero

- [ ] Implement navbar
- [ ] Implement Hero layout
- [ ] Integrate portrait
- [ ] Produce final portrait/art treatment
- [ ] Ensure portrait remains natural
- [ ] Implement technical decorative layer
- [ ] Implement Hero CTA hierarchy
- [ ] Implement desktop social/technical rail if retained
- [ ] Implement scroll cue if retained
- [ ] Implement Hero motion
- [ ] Implement reduced-motion fallback
- [ ] Optimize Hero asset delivery
- [ ] Verify no duplicate downloads
- [ ] Verify mobile composition
- [ ] Verify responsive type scale

---

# Phase 8 — Homepage Work Section

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

# Phase 12 — Responsive UX Audit

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
