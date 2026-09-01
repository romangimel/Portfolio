# Roman Gudovich — Developer Portfolio

Recruiter-facing, design-forward portfolio for **Roman Gudovich**, a full-stack developer focused on AI-powered products.

> **I build polished, production-ready products with strong UX, reliable AI integrations, and deliberate engineering behind the scenes.**

## Status

The application foundation, reusable design-system primitives, and art-directed homepage Hero body are implemented. The Hero body and desktop Header presentation are approved; the chosen mobile Header/navigation direction is not yet implemented.

Current routes:

- `/` — implemented homepage Hero; later homepage sections are not yet built
- `/projects/orionlabs` — established route with a temporary case-study placeholder

Development is active. See [`ROADMAP.md`](./ROADMAP.md) for the current phase, detailed implementation sequence, and outstanding verification.

## Direction

The portfolio uses a dark charcoal foundation, editorial typography, teal system accents, coral expressive accents, technical micro-details, and disciplined asymmetrical composition. It is intended to demonstrate product and UI/UX judgment as well as engineering work.

Approved homepage structure:

```text
App / page shell
├── SiteHeader
└── main
    ├── Hero
    ├── Selected Work / OrionLabs
    ├── Proof / Evidence
    ├── How I Build
    ├── About
    ├── Tools
    ├── Contact
    └── Footer
```

The current Header is still implemented inside `HomeHero`; that ownership and the current narrow navigation are not the target architecture.

## Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- React Router 8
- Instrument Serif, Manrope, and IBM Plex Mono via Fontsource
- Oxlint

## Flagship Project

OrionLabs is a satirical AI horoscope platform presented like a venture-backed research company. Its Portfolio case study will focus on the product journey, structured AI architecture, state lifecycle, security/provider boundaries, performance, verification, design decisions, and lessons learned rather than duplicating its GitHub README.

## Documentation

- [`PROJECT.md`](./PROJECT.md) — product direction, positioning, audience, and scope
- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — visual system and responsive design principles
- [`ROADMAP.md`](./ROADMAP.md) — current implementation status and sequencing
- [`CONTENT_COPY_PLAN.md`](./CONTENT_COPY_PLAN.md) — locked, approved, and draft copy
- [`ORIONLABS_CASE_STUDY.md`](./ORIONLABS_CASE_STUDY.md) — planned case-study narrative and evidence strategy
- [`AGENTS.md`](./AGENTS.md) — AI-assisted development and scope rules

## Local Development

```bash
npm install
npm run dev
```

Available repository checks:

```bash
npm run lint
npm run build
```

An automated application test suite is not currently configured.

## Live Site

A production deployment is not documented in this repository yet.

## License

A license has not been selected yet.
