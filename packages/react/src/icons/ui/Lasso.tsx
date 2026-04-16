// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/lasso.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LassoMeta: IconMeta = {
  name: 'lasso',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const LassoIcon = forwardRef<SVGSVGElement, IconProps>(function LassoIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <ellipse cx="13" cy="9" rx="8" ry="6"/>
  <path d="M7 13 C5 16 4 18 5 19"/>
  <circle cx="5" cy="21" r="2"/>
    </Icon>
  )
})

LassoIcon.displayName = 'LassoIcon'
