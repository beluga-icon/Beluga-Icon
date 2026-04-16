// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/stadium.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const StadiumMeta: IconMeta = {
  name: 'stadium',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const StadiumIcon = forwardRef<SVGSVGElement, IconProps>(function StadiumIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M3 21Q3 4 12 4Q21 4 21 21"/>
  <path d="M7 21Q7 9 12 9Q17 9 17 21"/>
  <ellipse cx="12" cy="18" rx="3.5" ry="1.5"/>
  <line x1="2" y1="21" x2="22" y2="21"/>
    </Icon>
  )
})

StadiumIcon.displayName = 'StadiumIcon'
