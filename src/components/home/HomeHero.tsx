import heroArtwork from '../../../design/references/hero-artwork.png'
import { SiteContainer } from '../layout/SiteContainer'
import { ActionLink } from '../ui/Action'
import { HomepageIcon } from './HomepageIcon'
import './HomeHero.css'

/** Renders the approved homepage Hero body without site-level navigation. */
export function HomeHero() {
  return (
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__technical-rail" aria-hidden="true">
          <span className="hero__rail-line" />
          <span className="hero__rail-dot" />

          <HomepageIcon name="github" />
          <HomepageIcon name="linkedin" />
          <HomepageIcon name="mail" />

          <span className="hero__rail-line" />

          <HomepageIcon name="code" />
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
                <HomepageIcon className="hero__download-icon" name="download" />
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
