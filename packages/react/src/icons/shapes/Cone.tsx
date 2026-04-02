// This file is auto-generated. Do not edit manually.
// Source: svgs/shapes/cone.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ConeMeta: IconMeta = {
  name: 'cone',
  category: 'shapes',
  tags: [],
  version: '0.1.0',
}

export const ConeIcon = forwardRef<SVGSVGElement, IconProps>(function ConeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M12 2 3 20h18Z"/>
  <ellipse cx="12" cy="20" rx="9" ry="2"/>
    </Icon>
  )
})

ConeIcon.displayName = 'ConeIcon'
