// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/building.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BuildingMeta: IconMeta = {
  name: 'building',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const BuildingIcon = forwardRef<SVGSVGElement, IconProps>(function BuildingIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="2" width="18" height="20" rx="1"/>
  <rect x="6" y="5" width="2" height="3"/>
  <rect x="11" y="5" width="2" height="3"/>
  <rect x="16" y="5" width="2" height="3"/>
  <rect x="6" y="11" width="2" height="3"/>
  <rect x="16" y="11" width="2" height="3"/>
  <path d="M10 22v-5h4v5"/>
    </Icon>
  )
})

BuildingIcon.displayName = 'BuildingIcon'
