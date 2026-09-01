import { Link } from 'react-router'
import { ActionLink } from '../ui/Action'
import { SiteContainer } from './SiteContainer'
import './SiteHeader.css'

/** Owns the site-wide identity and primary navigation outside page content. */
export function SiteHeader() {
  return (
    <header className="site-header">
      <SiteContainer className="site-header__inner">
        <Link className="site-identity" to="/" aria-label="Roman Gudovich home">
          <span className="site-identity__mark" aria-hidden="true">
            RG
          </span>
          <span className="site-identity__name">Roman Gudovich</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <ActionLink
            className="site-nav__link site-nav__link--active"
            to="#work"
            variant="tertiary"
          >
            Work
          </ActionLink>

          <span className="site-nav__placeholder" aria-disabled="true">
            About
          </span>
          <span className="site-nav__placeholder" aria-disabled="true">
            Tech
          </span>
        </nav>

        <span className="site-header__connect" aria-hidden="true">
          Let’s connect <span>↗</span>
        </span>
      </SiteContainer>
    </header>
  )
}
