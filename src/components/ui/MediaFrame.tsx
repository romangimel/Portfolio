import type { ComponentPropsWithoutRef } from 'react'

type MediaFrameProps = ComponentPropsWithoutRef<'div'>

/** Frames screenshots and media consistently while letting callers control aspect ratio. */
export function MediaFrame({ className, ...props }: MediaFrameProps) {
  const frameClassName = className ? `media-frame ${className}` : 'media-frame'

  return <div className={frameClassName} {...props} />
}
