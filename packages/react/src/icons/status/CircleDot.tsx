// This file is auto-generated. Do not edit manually.
// Source: svgs/status/circle-dot.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CircleDotMeta: IconMeta = {
  name: 'circle-dot',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const CircleDotIcon = forwardRef<SVGSVGElement, IconProps>(function CircleDotIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="1"/>
    </Icon>
  )
})

CircleDotIcon.displayName = 'CircleDotIcon'
