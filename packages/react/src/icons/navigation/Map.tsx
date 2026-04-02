// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/map.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MapMeta: IconMeta = {
  name: 'map',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const MapIcon = forwardRef<SVGSVGElement, IconProps>(function MapIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
  <line x1="8" y1="2" x2="8" y2="18"/>
  <line x1="16" y1="6" x2="16" y2="22"/>
    </Icon>
  )
})

MapIcon.displayName = 'MapIcon'
