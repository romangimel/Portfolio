# Portfolio Content and Copy Plan

## Purpose

This document defines the intended message hierarchy for Roman Gudovich's developer portfolio.

It contains a mix of locked copy, approved implemented copy, preferred drafts, and unimplemented section direction. Each section's status should be respected rather than treating the entire file as either final or provisional.

The goal is to prevent implementation from drifting into generic developer clichés, inflated claims, résumé dumping, excessive technical detail on the homepage, forced humor, or vague AI buzzwords.

## Current Copy and Implementation Status

- **Header / navigation:** currently rendered inside `HomeHero`. The desktop presentation is approved; the narrow/mobile menu direction is chosen but not implemented. Final destinations remain incomplete.
- **Hero:** implemented and approved as a body composition. The title and supporting line are locked; preserve the current eyebrow, CTA hierarchy, code annotation, and visual copy unless a task explicitly targets the Hero.
- **Selected Work, Proof, How I Build, About, Tools, Contact, and Footer:** not implemented. Copy below remains locked, preferred, or draft exactly where labeled.
- **OrionLabs case study:** route placeholder exists; the case-study copy and content remain planned.

Homepage structure:

1. Header / navigation
2. Hero
3. Selected Work
4. Proof / evidence
5. How I Build
6. About
7. Tools
8. Contact
9. Footer

Header and Hero are separate structural concepts even though the current implementation renders them together.

---

## Tone

### Desired

- Confident
- Human
- Curious
- Product-minded
- Technically grounded
- Occasionally dry
- Slightly opinionated when justified
- Clear
- Conversational

### Avoid

- Corporate buzzword soup
- LinkedIn motivational voice
- "rockstar" / "ninja" language
- fake humility
- forced jokes
- exaggerated seniority
- pretending AI was not used
- describing Roman as a "vibe coder"
- generic passion statements

---

# Global Positioning

## Name

**Roman Gudovich**

## Title — locked

> **Full-stack developer focused on AI-powered products**

## Supporting line — locked

> **I build polished, production-ready products with strong UX, reliable AI integrations, and deliberate engineering behind the scenes.**

## Broader positioning — locked

> **Product-minded full-stack developer who uses AI as a serious development tool while taking ownership of architecture, UX, validation, security, and release quality.**

---

# Homepage Copy Hierarchy

## Navbar

Status: **desktop presentation approved; mobile menu chosen but not implemented; destinations incomplete**.

Approved desktop labels:

- Work
- About
- Tech
- Let's connect

Chosen narrow/mobile menu copy:

- Work
- About
- Tech
- distinct CTA: `LET'S CONNECT ↗`

The mobile CTA must remain visually separate from the normal menu items. These labels define copy direction, not working destinations or implemented menu behavior.

Future site-wide navigation may expose Tools, GitHub, LinkedIn, or a `Let's talk` action when those destinations exist and the change is explicitly designed.

The Header/Navbar belongs to the site shell, not to the Hero section. Its current ownership inside `HomeHero` is technical debt.

Do not add labels for nonexistent sections.

---

# Hero

Status: **implemented and approved Hero-body visual surface**.

## H1

Locked direction:

> **Full-stack developer focused on AI-powered products.**

The design may break this across lines.

Possible emphasis:

- `AI-powered products` in coral
- or partial teal/coral contrast

Do not change the actual statement for visual convenience without approval.

## Supporting Copy

Locked:

> **I build polished, production-ready products with strong UX, reliable AI integrations, and deliberate engineering behind the scenes.**

## Primary CTA

Implemented and approved:

> **View my work**

## Secondary

The implemented visual uses a non-interactive `Download resume` placeholder. Its destination and final enabled behavior are not locked. Do not turn it into a live control until a current résumé and delivery decision exist.

GitHub remains a future possible secondary destination, not implemented Hero behavior.

## Small Personality Line

Optional draft:

> Based in Israel. Currently interested in ambitious products, difficult problems, and occasionally giving jokes far more infrastructure than they deserve.

This is not locked.

If location is omitted publicly, remove the first sentence.

---

# Selected Work

Status: **not implemented; preferred copy below remains planned**.

## Heading

Preferred:

> **Selected Work**

Alternative:

> **Work**

Keep simple.

---

# OrionLabs Featured Project

Status: **not implemented; copy remains preferred draft unless explicitly labeled otherwise**.

## Name

**OrionLabs**

## Primary descriptor

Preferred draft:

> **AI-powered satire disguised as a venture-backed astrology laboratory.**

## Short explanation

Preferred draft:

> A production React application that turns a short questionnaire into a personalized AI-generated report — wrapped inside an absurdly serious fictional research company.

## Personality line

Preferred:

> **My attempt to answer an important engineering question: how much infrastructure does a horoscope joke deserve? Apparently quite a lot.**

This line should be used only once.

## Stack

Current likely homepage display:

- React
- TypeScript
- Gemini
- Groq
- Vercel
- Zod

Do not overload the homepage with every package.

## CTAs

Primary:

> **View case study**

Secondary:

> **Live demo**

Tertiary:

> **GitHub**

---

# Proof Strip

Status: **not implemented; every claim must be reverified before publication**.

Use real evidence only.

Preferred four:

### 252
**Automated tests**

### Production
**AI APIs**

### Server-side
**Provider boundaries**

### Physical mobile + Firefox
**Verified**

Alternative phrasing may improve visual composition.

Do not use fake experience/client metrics.

---

# How I Build

Status: **not implemented; the three principles are conceptually locked**.

## Section label

Preferred:

> **How I Build**

### 1. Build the product, not the demo

> A happy path isn't finished. I care about failure states, responsive behavior, validation, deployment, security, and the boring details that turn a prototype into something I can actually ship.

### 2. Use AI aggressively. Trust it selectively.

> AI is a serious part of my development workflow, not my source of truth. I use it to move faster, then inspect, test, challenge, and improve what gets produced.

### 3. Care about what users actually experience

> Architecture matters. So does whether the button feels wrong, the copy sounds robotic, or the mobile layout is irritating. I don't see engineering and product quality as separate jobs.

These principles are currently locked conceptually. Exact punctuation may be refined.

---

# About

Status: **not implemented; draft copy**.

## Headline

Preferred:

> **I came to development through building.**

## Draft

> What hooked me wasn't writing code for its own sake. It was realizing I could take an idea, work through the technical mess, and turn it into something real.
>
> I'm a product-minded full-stack developer who uses AI as a serious development tool while taking ownership of architecture, UX, validation, security, and release quality.
>
> Before software, I worked in technical roles around electronics and systems, which probably explains why I'm drawn to debugging, edge cases, and understanding how the whole thing fits together.
>
> I'm especially interested in products where AI, engineering, product thinking, and good UX overlap.

This draft should be refined for final rhythm and length after the page layout is known.

---

# AI-Assisted Development

The portfolio should not hide AI use.

Preferred supporting idea:

> AI is part of my development workflow, not my source of truth.

Longer variant:

> I use AI heavily as an implementation and research tool, while keeping product direction, architecture, tradeoffs, testing, validation, and release decisions under deliberate human control.

Do not add a defensive essay about AI to the homepage.

The How I Build section should communicate the philosophy naturally.

---

# Tools

Status: **not implemented; planned recruiter-readable grouping**.

## Heading

Preferred:

> **Tools I Work With**

### Frontend

- React
- TypeScript
- HTML/CSS
- Tailwind CSS

### Backend & AI

- Node.js
- Vercel Functions
- REST APIs
- Gemini
- Groq
- Zod

### Development

- Git
- GitHub
- Vitest
- Vite
- Vercel

Do not rate skills numerically.

---

# Contact

Status: **not implemented; draft direction**.

## Headline Options

Preferred:

> **Let's build something good.**

Alternative:

> **Want to talk?**

Avoid generic "let's innovate"-style copy.

## Supporting Copy — draft

> I'm looking for opportunities where I can keep building, learn quickly, and contribute to products people actually care about.

Potential personality variant:

> Recruiters, developers, founders, or anyone who made it this far through a horoscope project's architecture notes — feel free to reach out.

This may be too playful for final placement and should be tested in context.

## CTAs

- Email
- LinkedIn

Optional:

- GitHub

---

# Footer

Status: **not implemented; preferred direction**.

Preferred:

```text
Roman Gudovich
Full-stack developer focused on AI-powered products.

GitHub · LinkedIn · Email
```

Avoid cliché footer statements.

---

# OrionLabs Case Study Copy Hierarchy

Status: **not implemented; `/projects/orionlabs` currently renders a placeholder**.

The case study should use different copy depth for different readers.

## Recruiter layer

Needs to answer quickly:

- What is it?
- Does it look finished?
- What did Roman do?
- Can I try it?
- What technologies are involved?

## Technical layer

Needs to explain:

- architecture
- AI boundaries
- validation
- state lifecycle
- failure handling
- security
- performance
- deployment
- testing
- tradeoffs

Do not make recruiters read the technical layer to understand the project.

See `ORIONLABS_CASE_STUDY.md`.

---

# Copy QA Checklist

Before launch:

- [ ] Every claim is factually supportable
- [ ] No fake metrics
- [ ] No inflated job title
- [ ] No implication of professional software experience that did not occur
- [ ] No hiding AI assistance
- [ ] No defensive AI disclaimer
- [ ] No "passionate developer" filler
- [ ] No repeated adjectives such as polished/robust/scalable everywhere
- [ ] Personality appears naturally
- [ ] Technical terms are understandable in context
- [ ] Recruiter can skim in under 30 seconds
- [ ] Engineer can go deeper without hitting fluff
- [ ] External links are clear
- [ ] CTA language is consistent
- [ ] Mobile copy does not become excessively long
