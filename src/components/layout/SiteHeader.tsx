import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ActionLink } from '../ui/Action'
import { SiteContainer } from './SiteContainer'
import './SiteHeader.css'

/** Owns the site-wide identity and primary navigation outside page content. */
export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateScrolledState = () => {
      const nextIsScrolled = window.scrollY > 8

      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled
          ? currentIsScrolled
          : nextIsScrolled,
      )
    }

    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolledState)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const desktopLayout = window.matchMedia('(min-width: 48.0625rem)')
    const closeMenuForDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false)
      }
    }

    desktopLayout.addEventListener('change', closeMenuForDesktop)

    return () => {
      desktopLayout.removeEventListener('change', closeMenuForDesktop)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}
    >
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

        <button
          ref={menuToggleRef}
          className="site-menu-toggle"
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="site-mobile-navigation"
          aria-label={
            isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="site-menu-toggle__icon" aria-hidden="true">
            <span className="site-menu-toggle__line" />
            <span className="site-menu-toggle__line" />
            <span className="site-menu-toggle__line" />
          </span>
        </button>

        {isMobileMenuOpen && (
          <nav
            className="site-mobile-nav"
            id="site-mobile-navigation"
            aria-label="Mobile navigation"
          >
            <ActionLink
              className="site-mobile-nav__item site-mobile-nav__link"
              to="#work"
              variant="tertiary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </ActionLink>

            <span
              className="site-mobile-nav__item site-mobile-nav__placeholder"
              aria-disabled="true"
            >
              About
            </span>
            <span
              className="site-mobile-nav__item site-mobile-nav__placeholder"
              aria-disabled="true"
            >
              Tech
            </span>

            <span className="site-mobile-nav__connect" aria-disabled="true">
              Let’s connect <span aria-hidden="true">↗</span>
            </span>
          </nav>
        )}
      </SiteContainer>
    </header>
  )
}
