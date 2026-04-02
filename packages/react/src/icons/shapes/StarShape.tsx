// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/star-shape.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const StarShapeMeta: IconMeta = {
  name: 'star-shape',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const StarShapeIcon = forwardRef<SVGSVGElement, IconProps>(function StarShapeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </Icon>
  )
})

StarShapeIcon.displayName = 'StarShapeIcon'
