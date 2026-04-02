// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/circle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleMeta: IconMeta = {
  name: 'circle',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CircleIcon = forwardRef<SVGSVGElement, IconProps>(function CircleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
    </Icon>
  )
})

CircleIcon.displayName = 'CircleIcon'
