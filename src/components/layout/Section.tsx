import type { ComponentPropsWithoutRef } from 'react'

type SectionProps = ComponentPropsWithoutRef<'section'>

/** Provides consistent vertical rhythm while preserving semantic section markup. */
export function Section({ className, ...props }: SectionProps) {
  const sectionClassName = className ? `section ${className}` : 'section'

  return <section className={sectionClassName} {...props} />
}
