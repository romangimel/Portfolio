import type { ComponentPropsWithoutRef } from 'react'

type SectionLabelProps = ComponentPropsWithoutRef<'p'> & {
  index?: string
}

/** Reuses the portfolio's compact mono label language across sections. */
export function SectionLabel({
  index,
  className,
  children,
  ...props
}: SectionLabelProps) {
  const labelClassName = className
    ? `section-label ${className}`
    : 'section-label'

  return (
    <p className={labelClassName} {...props}>
      {index ? `${index} / ` : null}
      {children}
    </p>
  )
}
