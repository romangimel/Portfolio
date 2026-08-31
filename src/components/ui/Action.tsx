import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router'
import type { LinkProps } from 'react-router'

type ActionVariant = 'primary' | 'secondary' | 'tertiary'

type SharedActionProps = {
  variant?: ActionVariant
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & SharedActionProps
type ActionLinkProps = LinkProps & SharedActionProps
type ExternalActionLinkProps = Omit<
  ComponentPropsWithoutRef<'a'>,
  'href'
> &
  SharedActionProps & {
    href: string
  }

function getActionClassName(variant: ActionVariant, className?: string) {
  const baseClassName = `action action-${variant}`

  return className ? `${baseClassName} ${className}` : baseClassName
}

/** Renders an actual button so click actions retain native button behavior. */
export function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getActionClassName(variant, className)}
      {...props}
    />
  )
}

/** Uses React Router for internal navigation without changing link semantics. */
export function ActionLink({
  variant = 'primary',
  className,
  ...props
}: ActionLinkProps) {
  return (
    <Link className={getActionClassName(variant, className)} {...props} />
  )
}

/** Uses a native anchor for external URLs, downloads, email, and phone links. */
export function ExternalActionLink({
  variant = 'primary',
  className,
  ...props
}: ExternalActionLinkProps) {
  return <a className={getActionClassName(variant, className)} {...props} />
}
