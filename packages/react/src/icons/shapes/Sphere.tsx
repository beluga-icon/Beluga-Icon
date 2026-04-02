// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/sphere.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SphereMeta: IconMeta = {
  name: 'sphere',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const SphereIcon = forwardRef<SVGSVGElement, IconProps>(function SphereIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
  <path d="M2 12h20"/>
    </Icon>
  )
})

SphereIcon.displayName = 'SphereIcon'
