import type { ComponentPropsWithoutRef } from 'react'

type SurfaceProps = ComponentPropsWithoutRef<'div'>

/** Adds the restrained shared surface treatment without prescribing content layout. */
export function Surface({ className, ...props }: SurfaceProps) {
  const surfaceClassName = className ? `surface ${className}` : 'surface'

  return <div className={surfaceClassName} {...props} />
}
