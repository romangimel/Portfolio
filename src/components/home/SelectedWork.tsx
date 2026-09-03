import desktopScreenshot from '../../assets/projects/orionlabs/desktop-screenshot.png'
import phoneScreenshot from '../../assets/projects/orionlabs/phone-screenshot.png'
import { Section } from '../layout/Section'
import { SiteContainer } from '../layout/SiteContainer'
import { ActionLink } from '../ui/Action'
import { SectionLabel } from '../ui/SectionLabel'
import { Surface } from '../ui/Surface'
import './SelectedWork.css'

const proofItems = [
  { value: '252', label: 'Automated tests' },
  { value: '420', label: 'Signature combinations' },
  { value: '2', label: 'Server-side AI endpoints' },
  { value: '52 → 11', label: 'Runtime dependencies' },
] as const

/** Presents OrionLabs as the homepage's flagship project and evidence surface. */
export function SelectedWork() {
  return (
    <Section
      className="selected-work"
      id="work"
      aria-labelledby="selected-work-title"
    >
      <SiteContainer>
        <Surface className="selected-work__feature">
          <div className="selected-work__main">
            <div className="selected-work__copy">
              <SectionLabel index="01">Selected Work</SectionLabel>

              <h2 className="selected-work__title" id="selected-work-title">
                OrionLabs
                <span className="selected-work__title-mark" aria-hidden="true">
                  ✦
                </span>
              </h2>

              <p className="selected-work__descriptor">
                AI-powered satire disguised as a venture-backed astrology
                laboratory.
              </p>

              <p className="selected-work__description">
                A production React application that turns a short questionnaire
                into a personalized AI-generated report — wrapped inside an
                absurdly serious fictional research company.
              </p>

              <ul className="selected-work__stack" aria-label="Technology stack">
                {['React', 'TypeScript', 'Gemini', 'Groq', 'Vercel', 'Zod'].map(
                  (technology) => <li key={technology}>{technology}</li>,
                )}
              </ul>

              <p className="selected-work__personality">
                My attempt to answer an important engineering question: how much
                infrastructure does a horoscope joke deserve? Apparently quite a
                lot.
              </p>

              <div className="selected-work__actions">
                <ActionLink
                  className="selected-work__primary-action"
                  to="/projects/orionlabs"
                  variant="primary"
                >
                  View case study
                  <span aria-hidden="true">↗</span>
                </ActionLink>

                <span
                  className="selected-work__unavailable-action"
                  aria-disabled="true"
                  title="Live demo URL is not yet confirmed"
                >
                  Live demo
                  <span aria-hidden="true">→</span>
                </span>

                <span
                  className="selected-work__unavailable-action"
                  aria-disabled="true"
                  title="GitHub URL is not yet confirmed"
                >
                  GitHub
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </div>

            <figure className="selected-work__devices">
              <div className="selected-work__atmosphere" aria-hidden="true" />

              <div className="selected-work__laptop">
                <div className="selected-work__laptop-screen">
                  <span className="selected-work__laptop-camera" aria-hidden="true" />
                  <img
                    src={desktopScreenshot}
                    alt="OrionLabs landing page displayed on a laptop"
                    width="1534"
                    height="729"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
                <span className="selected-work__laptop-base" aria-hidden="true" />
              </div>

              <div className="selected-work__phone">
                <span className="selected-work__phone-speaker" aria-hidden="true" />
                <img
                  src={phoneScreenshot}
                  alt="OrionLabs personalized report displayed on a phone"
                  width="311"
                  height="660"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>

              <figcaption className="selected-work__device-caption">
                Landing experience and personalized report
              </figcaption>
            </figure>
          </div>

          <dl className="selected-work__proof" aria-label="OrionLabs evidence">
            {proofItems.map((item) => (
              <div className="selected-work__proof-item" key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </Surface>
      </SiteContainer>
    </Section>
  )
}
