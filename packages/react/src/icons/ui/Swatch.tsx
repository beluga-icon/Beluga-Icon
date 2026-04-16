// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/swatch.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SwatchMeta: IconMeta = {
  name: 'swatch',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const SwatchIcon = forwardRef<SVGSVGElement, IconProps>(function SwatchIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="10" y="4" width="4" height="16" rx="1" transform="rotate(-18 12 20)"/>
  <rect x="10" y="4" width="4" height="16" rx="1" transform="rotate(18 12 20)"/>
  <rect x="10" y="4" width="4" height="16" rx="1"/>
    </Icon>
  )
})

SwatchIcon.displayName = 'SwatchIcon'
