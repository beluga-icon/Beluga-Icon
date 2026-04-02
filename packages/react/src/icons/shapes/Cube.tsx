// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/cube.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CubeMeta: IconMeta = {
  name: 'cube',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const CubeIcon = forwardRef<SVGSVGElement, IconProps>(function CubeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
  <polyline points="3.29 7 12 12 20.71 7"/>
  <line x1="12" y1="22" x2="12" y2="12"/>
    </Icon>
  )
})

CubeIcon.displayName = 'CubeIcon'
