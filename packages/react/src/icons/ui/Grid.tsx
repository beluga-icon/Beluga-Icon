// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/grid.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GridMeta: IconMeta = {
  name: 'grid',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const GridIcon = forwardRef<SVGSVGElement, IconProps>(function GridIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="14" y="14" width="7" height="7"/>
  <rect x="3" y="14" width="7" height="7"/>
    </Icon>
  )
})

GridIcon.displayName = 'GridIcon'
