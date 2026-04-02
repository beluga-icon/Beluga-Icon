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
      <path d="M4 22V12C4 7 7.6 3 12 3s8 4 8 9v10"/>
  <path d="M2 22h20"/>
  <path d="M7 22v-3"/>
  <path d="M17 22v-3"/>
  <ellipse cx="12" cy="12" rx="4" ry="2"/>
    </Icon>
  )
})

StadiumIcon.displayName = 'StadiumIcon'
