import workSectionArtwork from '../../assets/projects/orionlabs/work-section-art.png'
import { Section } from '../layout/Section'
import { SiteContainer } from '../layout/SiteContainer'
import { ActionLink } from '../ui/Action'
import { SectionLabel } from '../ui/SectionLabel'
import { Surface } from '../ui/Surface'
import { HomepageIcon } from './HomepageIcon'
import './SelectedWork.css'

const proofItems = [
  { value: '252', label: 'Automated tests', icon: 'shield-check' },
  { value: '420', label: 'Signature combinations', icon: 'constellation' },
  { value: '2', label: 'Server-side AI endpoints', icon: 'code' },
  { value: '52 → 11', label: 'Runtime dependencies', icon: 'package' },
] as const

const stackItems = [
  { label: 'React', icon: 'react' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Gemini', icon: 'gemini' },
  { label: 'Groq', icon: 'groq' },
  { label: 'Vercel', icon: 'vercel' },
  { label: 'Zod', icon: 'zod' },
] as const

/** Presents OrionLabs as the homepage's flagship project and evidence surface. */
export function SelectedWork() {
  return (
    <Section
      className="selected-work"
      id="work"
      aria-labelledby="selected-work-title"
    >
      <SiteContainer className="selected-work__container">
        <Surface className="selected-work__feature">
          <div className="selected-work__main">
            <div className="selected-work__copy">
              <SectionLabel index="01">Selected Work</SectionLabel>

              <h2 className="selected-work__title" id="selected-work-title">
                OrionLabs
                <HomepageIcon
                  className="selected-work__title-mark"
                  name="sparkle"
                />
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
                {stackItems.map((technology) => (
                  <li key={technology.label}>
                    <HomepageIcon name={technology.icon} />
                    <span>{technology.label}</span>
                  </li>
                ))}
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

            <figure className="selected-work__media">
              <img
                className="selected-work__artwork"
                src={workSectionArtwork}
                alt="OrionLabs landing page and personalized report shown on laptop and phone mockups"
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <figcaption className="selected-work__device-caption">
                Landing experience and personalized report
              </figcaption>
            </figure>
          </div>

          <dl className="selected-work__proof" aria-label="OrionLabs evidence">
            {proofItems.map((item) => (
              <div className="selected-work__proof-item" key={item.label}>
                <HomepageIcon
                  className="selected-work__proof-icon"
                  name={item.icon}
                />
                <div className="selected-work__proof-copy">
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Surface>
      </SiteContainer>
    </Section>
  )
}
