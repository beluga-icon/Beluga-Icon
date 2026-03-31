// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/flag-triangle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FlagTriangleMeta: IconMeta = {
  name: 'flag-triangle',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const FlagTriangleIcon = forwardRef<SVGSVGElement, IconProps>(function FlagTriangleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M4 22V4"/>
  <path d="M4 4l16 8-16 8Z"/>
    </Icon>
  )
})

FlagTriangleIcon.displayName = 'FlagTriangleIcon'
