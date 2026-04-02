// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/donut.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DonutMeta: IconMeta = {
  name: 'donut',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const DonutIcon = forwardRef<SVGSVGElement, IconProps>(function DonutIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="4"/>
    </Icon>
  )
})

DonutIcon.displayName = 'DonutIcon'
