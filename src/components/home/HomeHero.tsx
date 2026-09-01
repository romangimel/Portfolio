import heroArtwork from '../../../design/references/hero-artwork.png'
import { SiteContainer } from '../layout/SiteContainer'
import { ActionLink } from '../ui/Action'
import './HomeHero.css'

/** Renders the approved homepage Hero body without site-level navigation. */
export function HomeHero() {
  return (
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__technical-rail" aria-hidden="true">
          <span className="hero__rail-line" />
          <span className="hero__rail-dot" />

          <svg viewBox="0 0 24 24" role="img">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>

          <svg viewBox="0 0 24 24" role="img">
            <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.9 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.69c0-3.84-2.05-5.63-4.79-5.63a4.13 4.13 0 0 0-3.72 2.05V8.25H9.24V21h3.25v-6.31c0-1.66.31-3.28 2.38-3.28 2.04 0 2.07 1.91 2.07 3.39V21H21v-7.31Z" />
          </svg>

          <svg viewBox="0 0 24 24" role="img" fill="none">
            <path d="M3 5.5h18v13H3v-13Z" />
            <path d="m4 7 8 6 8-6" />
          </svg>

          <span className="hero__rail-line" />

          <svg viewBox="0 0 24 24" role="img" fill="none">
            <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4l-3 16" />
          </svg>
        </div>

        <pre className="hero__code-note" aria-hidden="true">
          <code>
            <span className="code-token code-token--keyword">const</span>{' '}
            <span className="code-token code-token--name">developer</span>
            <span className="code-token code-token--punctuation">
              {' = {\n  '}
            </span>
            <span className="code-token code-token--property">name</span>
            <span className="code-token code-token--punctuation">: </span>
            <span className="code-token code-token--string">
              &apos;Roman Gudovich&apos;
            </span>
            <span className="code-token code-token--punctuation">{',\n  '}</span>
            <span className="code-token code-token--property">focus</span>
            <span className="code-token code-token--punctuation">: </span>
            <span className="code-token code-token--string">
              &apos;AI Products&apos;
            </span>
            <span className="code-token code-token--punctuation">{',\n  '}</span>
            <span className="code-token code-token--property">code</span>
            <span className="code-token code-token--punctuation">: </span>
            <span className="code-token code-token--string">
              &apos;Clean &amp; Intentional&apos;
            </span>
            <span className="code-token code-token--punctuation">{',\n  '}</span>
            <span className="code-token code-token--property">ship</span>
            <span className="code-token code-token--punctuation">: </span>
            <span className="code-token code-token--string">
              &apos;Relentlessly&apos;
            </span>
            <span className="code-token code-token--punctuation">{'\n};'}</span>
          </code>
        </pre>

        <SiteContainer className="hero__layout">
          <div className="hero__copy">
            <p className="hero__eyebrow">// Hello, I&apos;m Roman</p>

            <h1 className="hero__title" id="hero-title">
              <span className="hero__title-line">Full-stack developer </span>
              <span className="hero__title-line">
                focused on <span className="hero__title-accent">AI-powered </span>
              </span>
              <span className="hero__title-accent">products.</span>
            </h1>

            <p className="hero__supporting-copy">
              I build polished, production-ready products with strong UX,
              reliable AI integrations, and deliberate engineering behind the
              scenes.
            </p>

            <div className="hero__actions">
              <ActionLink to="#work" variant="secondary">
                View my work
                <span aria-hidden="true">↗</span>
              </ActionLink>

              <span className="hero__secondary-action" aria-hidden="true">
                Download resume
                <span>↓</span>
              </span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-marker hero__visual-marker--teal" aria-hidden="true" />
            <div className="hero__visual-marker hero__visual-marker--coral" aria-hidden="true" />
            <div className="hero__visual-marker hero__visual-marker--neutral" aria-hidden="true" />

            <img
              className="hero__artwork"
              src={heroArtwork}
              alt="Portrait of Roman Gudovich"
              width="1122"
              height="1402"
              decoding="async"
              fetchPriority="high"
              draggable="false"
            />
          </div>
        </SiteContainer>

        <div className="hero__scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
          <span>↓</span>
        </div>
      </section>
  )
}
