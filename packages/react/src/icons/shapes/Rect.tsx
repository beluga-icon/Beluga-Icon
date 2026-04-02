// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/rect.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const RectMeta: IconMeta = {
  name: 'rect',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const RectIcon = forwardRef<SVGSVGElement, IconProps>(function RectIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2"/>
    </Icon>
  )
})

RectIcon.displayName = 'RectIcon'
