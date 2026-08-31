import type { ComponentPropsWithoutRef } from 'react'

type SiteContainerProps = ComponentPropsWithoutRef<'div'>

/** Keeps page content inside the portfolio's shared width and responsive gutters. */
export function SiteContainer({ className, ...props }: SiteContainerProps) {
  const containerClassName = className
    ? `site-container ${className}`
    : 'site-container'

  return <div className={containerClassName} {...props} />
}
