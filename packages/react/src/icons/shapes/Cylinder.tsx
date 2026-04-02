// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/cylinder.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CylinderMeta: IconMeta = {
  name: 'cylinder',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CylinderIcon = forwardRef<SVGSVGElement, IconProps>(function CylinderIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
  <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
    </Icon>
  )
})

CylinderIcon.displayName = 'CylinderIcon'
