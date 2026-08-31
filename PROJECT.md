# Roman Gudovich Portfolio

## Project Summary

This repository contains the personal developer portfolio of **Roman Gudovich**, a full-stack developer focused on AI-powered products.

The portfolio is designed for two audiences at the same time:

1. **Recruiters and hiring teams**, who need to understand quickly what Roman builds, what he is interested in, and whether his work looks credible and professional.
2. **Developers and technical reviewers**, who may inspect the case studies, GitHub repositories, architecture, testing, deployment decisions, and engineering tradeoffs in more depth.

The portfolio should not behave like a résumé rendered as a website. It should be a product in its own right: distinctive, polished, expressive, fast, accessible, and easy to navigate.

The portfolio itself is also evidence of Roman's UI/UX instincts.

---

## Professional Positioning

### Primary title

> **Full-stack developer focused on AI-powered products**

### Supporting line

> **I build polished, production-ready products with strong UX, reliable AI integrations, and deliberate engineering behind the scenes.**

### Broader positioning

> **Product-minded full-stack developer who uses AI as a serious development tool while taking ownership of architecture, UX, validation, security, and release quality.**

These three statements are the source of truth for the initial portfolio positioning unless deliberately revised later.

---

## Identity

Professional name:

**Roman Gudovich**

The portfolio should lead with current work and product quality rather than with a career-transition narrative.

Roman's previous technical/electronics background may appear in the About section when it strengthens the story, but it should not dominate the homepage.

A suitable framing is:

> Before software, I worked in technical roles around electronics and systems, which gave me a practical bias toward troubleshooting, edge cases, and understanding how the whole thing fits together.

Do not overstate prior work as software-engineering experience.

---

## Primary Product Goal

Within roughly 30 seconds, a visitor should understand:

- Roman is a full-stack developer.
- He is especially interested in AI-powered products.
- He cares strongly about UI/UX and product quality.
- He has shipped at least one substantial, production-ready project.
- He understands and owns technical decisions behind what he builds.
- His development workflow uses AI heavily, but he does not treat generated output as automatically correct.
- He is someone a recruiter, developer, founder, or product team could plausibly want to work with.

The desired psychological impression is:

> **Sharp, thoughtful, technically serious, visually opinionated, and someone I would enjoy working with.**

Personality should be visible, but the portfolio must never become a comedy site or undermine technical credibility.

---

## Portfolio Philosophy

### Projects first

The work should establish credibility before the site asks the visitor to care about Roman's background.

The homepage order should prioritize:

1. Positioning
2. Work
3. Evidence
4. How Roman builds
5. About
6. Tools
7. Contact

### Personality through point of view

Personality should primarily come through:

- copy
- visual direction
- art direction
- microinteractions
- thoughtful details
- dry or self-aware lines used sparingly

Avoid:

- forced jokes
- "rockstar developer" language
- generic motivational copy
- "Hello World" clichés
- fake command-line gimmicks
- fake skill percentages
- fake client logos
- fake testimonials

### UI/UX is part of the proof

The portfolio must demonstrate visual and interaction design ability, not merely host screenshots of other products.

Distinctive visual decisions are encouraged when they improve:

- identity
- hierarchy
- storytelling
- interaction
- comprehension

If an unusual visual choice exists only to look impressive, remove it.

---

## Homepage Information Architecture

### Navbar

Primary structure:

- Roman Gudovich / RG identity
- Work
- About
- Tools
- GitHub
- LinkedIn

A restrained `Let's talk` action may be used if it fits the final composition.

Avoid unnecessary navigation items for pages or sections that do not exist.

### Hero

The hero should include:

- Roman's name/identity
- Primary title
- Supporting line
- `View my work`
- GitHub link
- Portrait/art composition
- Minimal technical/social detail

The approved hero art direction is:

- dark black/charcoal background
- Roman portrait integrated into the layout rather than placed in a rectangular card
- expressive teal + coral/orange + selective magenta/pink artwork around the portrait
- fine technical linework / nodes / diagram-like accents
- editorial typography
- asymmetrical composition

The hero should be visually memorable without becoming difficult to scan.

### Selected Work

The first version should feature **OrionLabs** prominently as the flagship project.

Do not create fake filler projects to make the portfolio appear larger.

The OrionLabs feature should include:

- real product imagery
- short product description
- tech stack
- personality line
- case-study CTA
- live demo
- GitHub repository
- compact evidence/proof strip

Suggested project personality line:

> **My attempt to answer an important engineering question: how much infrastructure does a horoscope joke deserve? Apparently quite a lot.**

The dominant action should be:

**View case study**

### Proof Strip

A restrained evidence row should follow or visually attach to the featured project.

Use real evidence only.

Good candidates:

- 252 automated tests
- Production AI APIs
- Server-side provider boundaries
- Physical mobile + Firefox verified

Do not use fake metrics such as years of experience, client satisfaction, or lines of code unless those metrics later become factually supportable and worth showing.

### How I Build

Three principles are currently locked:

#### Build the product, not the demo

> A happy path isn't finished. I care about failure states, responsive behavior, validation, deployment, security, and the boring details that turn a prototype into something I can actually ship.

#### Use AI aggressively. Trust it selectively.

> AI is a serious part of my development workflow, not my source of truth. I use it to move faster, then inspect, test, challenge, and improve what gets produced.

#### Care about what users actually experience

> Architecture matters. So does whether the button feels wrong, the copy sounds robotic, or the mobile layout is irritating. I don't see engineering and product quality as separate jobs.

Do not invent a fourth principle merely to fill a grid.

### About

The About section should explain Roman's mindset rather than reproduce a résumé.

Working direction:

> **I came to development through building.**
>
> What hooked me wasn't writing code for its own sake. It was realizing I could take an idea, work through the technical mess, and turn it into something real.
>
> I'm a product-minded full-stack developer who uses AI as a serious development tool while taking ownership of architecture, UX, validation, security, and release quality.
>
> Before software, I worked in technical roles around electronics and systems, which probably explains why I'm drawn to debugging, edge cases, and understanding how the whole thing fits together.
>
> I'm especially interested in products where AI, engineering, product thinking, and good UX overlap.

This is draft copy, not frozen copy.

### Tools

The homepage should contain a compact, recruiter-readable technical keyword section.

Suggested groups:

#### Frontend
- React
- TypeScript
- HTML/CSS
- Tailwind CSS

#### Backend & AI
- Node.js
- Vercel Functions
- REST APIs
- Gemini
- Groq
- Zod

#### Development
- Git
- GitHub
- Vitest
- Vite
- Vercel

Do not use subjective percentage bars or skill ratings.

### Contact

The final CTA should feel human and direct.

Avoid generic phrases such as:

- "Let's create something amazing together"
- "Let's build the future"
- "Made with love and coffee"

Preferred direction:

> **Let's build something good.**

or:

> **Want to talk?**

Support copy should communicate openness to opportunities without sounding desperate.

Primary actions:

- Email
- LinkedIn

A contact form is not required for v1 and should not be added unless it provides a real UX benefit.

---

## OrionLabs Case Study

The OrionLabs case study is the flagship technical/product proof.

It should be visual enough for recruiters to skim and deep enough for developers to inspect.

Required sections:

1. Hero
2. The challenge
3. Product journey
4. Engineering highlights
5. Problems solved
6. Quality and verification
7. Design decisions
8. What I learned / what I would do next
9. Live product / GitHub CTA

See `ORIONLABS_CASE_STUDY.md` for the full specification.

---

## Initial Portfolio Routes

Recommended:

```text
/                           Homepage
/projects/orionlabs          OrionLabs case study
```

Future projects can follow:

```text
/projects/<slug>
```

Do not create unnecessary empty routes in v1.

---

## AI-Assisted Development Positioning

Do not hide the role of AI in the workflow.

Do not frame Roman as:

- someone who does not understand the systems he ships
- someone whose value is typing every line manually
- a "vibe coder" as a professional identity

Preferred framing:

> AI is used heavily as an implementation and research tool, while product direction, architecture, tradeoffs, testing, validation, and release decisions remain deliberately owned.

If asked in an interview how much implementation was AI-assisted, answer honestly and be ready to explain the architecture and decisions.

---

## Quality Expectations

The portfolio must eventually be validated for:

- responsive behavior
- physical mobile
- at least one non-Chromium browser
- keyboard navigation
- visible focus
- reduced motion
- reasonable contrast
- semantic HTML
- fast initial load
- optimized imagery
- correct metadata/social preview
- clean production console
- clean production routes
- recruiter-readable README
- no secrets or private data in the client bundle

Do not claim standards or certifications that have not been verified.

---

## Non-Goals for v1

Do not add without a real reason:

- blog
- CMS
- authentication
- database
- testimonials
- services page
- animated skill meters
- résumé timeline as the central homepage experience
- fake terminal
- custom cursor replacing the system cursor
- intro/loading screen
- scroll hijacking
- autoplay audio/video
- large technology-logo cloud
- speculative analytics stack
- unnecessary backend

---

## Repository Documentation

Recommended source-of-truth files:

- `PROJECT.md`
- `DESIGN_SYSTEM.md`
- `ROADMAP.md`
- `CONTENT_COPY_PLAN.md`
- `ORIONLABS_CASE_STUDY.md`

Once implementation begins, add:

- `README.md`
- optional `AGENTS.md` for Codex/project-level development instructions

---

## Status

Planning and art direction are in progress.

Do not begin full implementation until the initial design system, content structure, and OrionLabs case-study plan are accepted.
