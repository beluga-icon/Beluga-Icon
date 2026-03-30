// This file is auto-generated. Do not edit manually.
// Source: svgs/files/layers.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LayersMeta: IconMeta = {
  name: 'layers',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const LayersIcon = forwardRef<SVGSVGElement, IconProps>(function LayersIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
  <polyline points="2 17 12 22 22 17"/>
  <polyline points="2 12 12 17 22 12"/>
    </Icon>
  )
})

LayersIcon.displayName = 'LayersIcon'
