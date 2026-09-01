import { Route, Routes } from 'react-router'
import { HomeHero } from './components/home/HomeHero'
import { SiteContainer } from './components/layout/SiteContainer'
import { Section } from './components/layout/Section'
import { ActionLink } from './components/ui/Action'
import { SectionLabel } from './components/ui/SectionLabel'
import { Surface } from './components/ui/Surface'

type RoutePlaceholderProps = {
  eyebrow: string
  title: string
  description: string
  actionLabel: string
  actionTo: string
  actionVariant: 'primary' | 'secondary'
}

function RoutePlaceholder({
  eyebrow,
  title,
  description,
  actionLabel,
  actionTo,
  actionVariant,
}: RoutePlaceholderProps) {
  return (
    <main>
      <Section className="route-placeholder" aria-labelledby="route-title">
        <SiteContainer>
          <Surface className="foundation-placeholder">
            <SectionLabel>{eyebrow}</SectionLabel>

            <h1
              id="route-title"
              className="type-page-title foundation-placeholder__title"
            >
              {title}
            </h1>

            <p className="type-body-large foundation-placeholder__copy">
              {description}
            </p>

            <div className="foundation-placeholder__actions">
              <ActionLink to={actionTo} variant={actionVariant}>
                {actionLabel}
              </ActionLink>
            </div>
          </Surface>
        </SiteContainer>
      </Section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomeHero />}
      />
      <Route
        path="/projects/orionlabs"
        element={
          <RoutePlaceholder
            eyebrow="Project / Case-study route"
            title="OrionLabs"
            description="The flagship case-study route is working. Its final content, evidence, and product visuals are intentionally deferred to the dedicated case-study phase."
            actionLabel="Back to homepage"
            actionTo="/"
            actionVariant="secondary"
          />
        }
      />
    </Routes>
  )
}

export default App
