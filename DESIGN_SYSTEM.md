# Portfolio Design System

## Approved Scope

This document records the approved visual direction, tokens, layout principles, responsive rules, interaction direction, and protected visual surfaces. Code is the source of truth for exact implementation behavior; `ROADMAP.md` owns implementation progress and sequencing.

The Hero body is an approved visual surface. Its composition, typography, portrait artwork, copy, responsive behavior, and decorative system should not be reinterpreted outside an explicitly scoped Hero task. The desktop and narrow/mobile Header directions are also approved. Tokens may be refined when browser evidence identifies a concrete problem, but should not drift through unrelated work.

The visual north star is the approved dark portfolio mock featuring:

- Roman's portrait on the right side of the Hero
- expressive teal + coral/orange + selective magenta artwork
- dark black/charcoal foundation
- editorial display typography
- technical micro-details
- asymmetrical but disciplined layouts
- a strong featured-project composition

---

## Art Direction

### Core brief

> **A dark, art-directed developer portfolio that feels more like a contemporary digital product studio than a traditional junior developer site. It should use expressive typography, strong composition, distinctive color, and purposeful motion to showcase Roman's UI/UX instincts while remaining fast, readable, intuitive, and technically disciplined.**

### Desired qualities

- Distinctive
- Authored
- Editorial
- Technical
- Product-minded
- Expressive
- Controlled
- High contrast
- Visually memorable

### Avoid

- Generic SaaS dashboard aesthetic
- Cyberpunk cliché
- Neon rainbow
- "hacker terminal" portfolio
- Glassmorphism everywhere
- Oversized pill UI
- excessive rounded cards
- decorative effects with no hierarchy/storytelling purpose
- scroll hijacking
- animation required to understand content

---

## Color Philosophy

### Teal = system
Use teal for navigation state, interaction, links, metadata, focus, diagrams, technical lines, and small system markers.

### Coral = personality
Use coral for primary case-study CTA, expressive emphasis, selected typography, occasional icons, project numbers, and visual tension.

### Magenta / ember / deep cyan = artwork
Use these primarily for Hero artwork, atmospheric visuals, project transitions, graphic accents, and illustrations.

Do not turn every art color into a UI state.

---

## Core Color Tokens

### Background

```css
--bg-canvas: #090B0B;
--bg-deep: #050707;
--surface: #0E1111;
--surface-high: #121616;
```

### Text

```css
--text-primary: #F2F0EA;
--text-secondary: #A5AAA7;
--text-muted: #6F7773;
```

### Primary accents

```css
--accent-teal: #20C7BA;
--accent-coral: #FF654A;
```

### Artwork accents

```css
--art-magenta: #D92D83;
--art-cyan-deep: #057C83;
--art-ember: #FF8B3D;
```

### Borders

```css
--border-default: rgba(255, 255, 255, 0.09);
--border-hover: rgba(32, 199, 186, 0.35);
```

These values define the source tokens in `src/index.css`. Any adjustment should be driven by scoped browser evidence and reviewed across the relevant breakpoints.

---

## Typography

### Display

**Instrument Serif**

Use for Hero H1, project names, major section statements, case-study headlines, and editorial pull quotes.

### UI / Body

**Manrope**

Use for body text, navigation, controls, buttons, cards, supporting copy, and case-study explanations.

### Technical Metadata

**IBM Plex Mono**

Use sparingly for section labels, project indices, stack metadata, diagram annotations, statuses, and technical microcopy.

Do not use it for body paragraphs.

---

## Type Scale — Desktop Starting Point

```text
Hero H1            72–88px   Instrument Serif
Project title      52–64px   Instrument Serif
Section H2         44–56px   Instrument Serif
Statement          36–44px   Instrument Serif

Body large         18–20px   Manrope
Body               15–17px   Manrope
UI / button        13–14px   Manrope
Metadata           10–12px   IBM Plex Mono
```

Responsive typography should be tuned per breakpoint rather than applying a flat percentage reduction.

---

## Layout Grid

### Desktop

```text
Maximum viewport canvas: ~1440px
Main content width: 1200–1280px
Grid: 12 columns
Gutter: 24px
```

The underlying layout should be disciplined.

Visible composition may intentionally break the grid through Hero portrait bleed, oversized screenshot media, architecture diagrams, section-number margin placement, and decorative linework.

Breaking the grid should feel intentional, not accidental.

---

## Spacing

Start from an 8px rhythm but allow editorial exceptions.

Suggested token family:

```text
4
8
12
16
24
32
48
64
80
96
128
```

Large sections should breathe.

Avoid compensating for weak hierarchy by adding more boxes.

---

## Radius

```css
--radius-control: 6px;
--radius-card: 10px;
--radius-media: 14px;
```

Avoid overly soft or pill-shaped UI.

---

## Borders and Surfaces

Preferred cards:

- deep charcoal
- 1px border
- minimal shadow
- very slight inner highlight
- low elevation

Default border:

```css
1px solid rgba(255,255,255,.09)
```

Interactive hover border:

```css
rgba(32,199,186,.35)
```

Do not depend on heavy shadows for hierarchy.

---

## Texture

Subtle texture is encouraged:

- film grain
- graphite/cement variation
- paper-like noise
- faint grids
- thin technical lines
- tiny coordinate markers

Texture must stay behind content and never reduce readability.

---

## Hero

### Site-level relationship

The Header/Navbar and Hero are separate structural concepts:

```text
App / page shell
├── SiteHeader
└── main
    └── Hero
```

The Header should support sticky, site-wide behavior without being owned by the Hero. `ROADMAP.md` owns implementation status and sequencing.

### Structure

Desktop concept:

```text
LEFT
- technical eyebrow
- large title
- supporting line
- View my work
- Download resume (visual placeholder; non-interactive until delivery is finalized)
- social/technical rail

RIGHT
- Roman portrait
- expressive artwork
- technical linework
- small interface annotation

SCROLL indicator
```

The Hero body follows this approved art direction. Surgical changes remain possible when explicitly requested; unrelated sections must not redesign it.

### Hero Copy

Primary:

> Full-stack developer focused on AI-powered products.

Supporting:

> I build polished, production-ready products with strong UX, reliable AI integrations, and deliberate engineering behind the scenes.

### Portrait Treatment

Do not show the source portrait as a rectangular card.

Preferred treatment:

- isolate subject
- blend into page
- charcoal/black background
- teal dominant energy
- coral/orange counter-energy
- selective magenta/pink pockets
- thin technical lines
- small nodes/crosshairs
- subtle textured decay

The portrait itself must remain recognizably natural and credible.

Do not over-retouch the face.

### Hero Motion

Allowed:

- staged text reveal
- subtle portrait/art arrival
- tiny pointer-reactive art displacement
- small technical-node response
- restrained scroll indicator

Avoid blocking intro, forced animation sequence, extreme parallax, and custom cursor replacement.

---

## Navigation

`SiteHeader` is a site-level component, independent from the Hero section.

### Desktop Header — approved

Approved presentation:

```text
RG / Roman Gudovich
Work
About
Tech
Let's connect
```

Only real destinations should become interactive. The site-level Header may later expose Tools, GitHub, LinkedIn, or a restrained `Let's talk` action as those destinations become available, but copy and layout should not drift through unrelated work.

On scroll:

- preserve the approved Header height, horizontal alignment, identity, navigation, CTA, typography, spacing, and overall geometry
- remain transparent while the page is at the top
- subtle translucent charcoal background
- modest blur
- thin lower border
- transition the surface treatment subtly without shrinking or compressing the Header

Do not turn the Header into a floating pill, add a large shadow or glow, or introduce a separate compact scrolled state.

### Narrow/mobile Header — approved direction

Collapsed Header:

```text
LEFT                 RIGHT
RG identity          teal hamburger button
```

- Use one compact row; do not create a second navigation row.
- Hide the desktop center navigation and desktop top-right CTA at narrow widths.
- The hamburger must be a real accessible button with an approximately `44 × 44px` usable touch target.
- Keep the control teal, minimal, and consistent with the technical/editorial visual language.
- The hamburger may transition into a teal X while open.

Open-menu composition:

```text
Work
──────── coral/orange divider
About
──────── coral/orange divider
Tech
──────── coral/orange divider
LET'S CONNECT ↗
```

- Use a compact right-aligned popover beneath the toggle.
- Make the popover as narrow as practical with content-driven sizing. It should fit `LET'S CONNECT ↗`, reasonable horizontal padding, and comfortable touch targets without awkward wrapping at `375px`.
- Do not use an arbitrary large fixed width for visual presence; the panel should visually hug its content.
- Center the `Work`, `About`, and `Tech` labels, and center the CTA text inside its outlined control.
- Place a thin, restrained coral/orange divider between every menu item: between `Work` and `About`, between `About` and `Tech`, and between `Tech` and the CTA area.
- Use a charcoal/near-black surface, restrained portfolio border, modest radius, and compact spacing.
- Keep `LET'S CONNECT ↗` in a distinct outlined teal CTA area; it must not look like another normal menu item.
- Do not use a fullscreen menu, side drawer, second navigation row, glassmorphism-heavy surface, generic oversized mobile menu, or giant shadow.
- Do not invent functional destinations. Render only destinations backed by real page sections, routes, or external URLs.

Required interaction direction:

- Toggle the popover from the hamburger; activating the open toggle closes it.
- Close on outside click.
- Close on `Escape`, then return focus to the toggle.
- Close after choosing a real navigation destination.
- Clear stale open state when returning to the desktop layout.
- Preserve logical keyboard order, visible focus, and correct toggle relationships such as `aria-expanded` and `aria-controls`.

This section defines the approved design and interaction behavior. `ROADMAP.md` owns implementation status and sequencing.

---

## Buttons

### Primary Project CTA

Coral-filled:

> VIEW CASE STUDY ↗

Behavior:

- small brightness shift
- arrow translation ~3–4px
- optional restrained pointer attraction

### Secondary CTA

Transparent / teal border:

> VIEW MY WORK ↗

### Tertiary

Text-only:

> LIVE DEMO →

Keep the number of button variants small.

---

## Section Labels

Use small mono labels as recurring identity elements.

Examples:

```text
01 / SELECTED WORK
02 / HOW I BUILD
03 / ABOUT
04 / TOOLS
05 / CONTACT
```

Possible companions:

- line
- dot
- crosshair
- index number
- tiny coordinate marker

Use teal by default.

---

## Featured Project

OrionLabs should be a large composition, not a standard portfolio card.

Desktop pattern:

```text
LEFT
FEATURED PROJECT
OrionLabs
description
stack
View Case Study
Live Demo
GitHub

RIGHT
large real OrionLabs image/composition
```

Below/attached:

```text
252 automated tests
Production AI APIs
Server-side provider boundaries
Physical mobile + Firefox verified
```

Only real evidence is allowed.

---

## How I Build

Exactly three principles unless deliberately revised.

Desktop:

- three wide cells/cards
- custom small icon or line illustration
- index
- heading
- short body

Hover effects should affect accent/graphic details rather than dramatically moving the entire card.

---

## About

Prefer an editorial split rather than another conventional card grid.

Avoid duplicating the exact Hero portrait unless a clearly different visual treatment justifies it.

---

## Tools Section

Keep recruiter-scannable.

Do not make a giant logo cloud.

Potential visual treatment:

- grouped columns
- thin lines
- technical labels
- selective mono
- muted text with small teal markers

---

## Contact

No form required in v1.

Preferred:

- statement
- email
- LinkedIn
- perhaps GitHub

Visual treatment should feel like a strong closing composition, not a generic boxed form.

---

## Motion System

### Principles

Motion should clarify hierarchy, reveal content, reinforce interaction, and make project storytelling feel intentional.

Motion should not delay reading, hijack scrolling, become a loading ritual, or be required to understand content.

### Page Load

Hero:

- 2–3 staged reveals
- total target around 600–800ms
- portrait/art slightly delayed

### Scroll

Allowed:

- 12–18px reveal translations
- clipping/mask reveals
- technical line drawing
- subtle screenshot depth
- architecture diagram progression
- mild background atmosphere changes

### Pointer — desktop only

Allowed:

- 3–6px image response
- subtle node movement
- slight button attraction

Do not replace the native cursor.

### Reduced Motion

All major interactions must remain understandable with motion removed.

Fallback: immediate state or simple opacity fade where appropriate.

---

## Project Page Art Direction

The portfolio shell remains charcoal, teal, and coral.

Individual projects may introduce their own palettes.

For OrionLabs:

- purple/gold product identity may enter
- screenshots may have subtle gold framing
- Roman-owned diagrams stay teal/systematic
- case-study prose remains portfolio-branded

The page should feel like Roman explaining OrionLabs, not OrionLabs embedded inside Roman's site.

---

## Mobile

Do not merely stack desktop mechanically.

### Hero

Preferred order:

1. Hero copy
2. CTA
3. Portrait/art

Keep the artwork substantial.

The site-level Header precedes this sequence and remains structurally separate even when the mobile composition visually flows directly into the Hero.

### Featured Project

Preferred:

1. label
2. title
3. short copy
4. CTA
5. real product visual
6. evidence metrics in 2×2 layout

### How I Build

Use single-column cards, or horizontal snap only if user testing shows it improves the experience.

Do not sacrifice clarity to preserve desktop composition.

---

## Accessibility

Design targets:

- visible keyboard focus
- semantic controls
- no color-only critical interaction state
- reduced-motion support
- readable text sizing
- strong contrast where practical
- meaningful alt text
- decorative art hidden from assistive technology where appropriate

Do not claim formal WCAG conformance until audited.

---

## Performance

Art direction must be implemented with production discipline.

Requirements:

- responsive images
- WebP/AVIF where appropriate
- separate mobile imagery if needed
- lazy non-critical media
- avoid large animation libraries unless justified
- avoid video for decorative Hero motion unless highly optimized
- preserve LCP
- no duplicate Hero downloads
- no layout shift from media

---

## Design Review Rule

Every unusual visual choice must answer at least one:

- Does it improve identity?
- Does it improve hierarchy?
- Does it improve storytelling?
- Does it improve interaction?

If the answer to all four is no, remove it.
