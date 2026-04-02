// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/type.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TypeMeta: IconMeta = {
  name: 'type',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const TypeIcon = forwardRef<SVGSVGElement, IconProps>(function TypeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="4 7 4 4 20 4 20 7"/>
  <line x1="9" y1="20" x2="15" y2="20"/>
  <line x1="12" y1="4" x2="12" y2="20"/>
    </Icon>
  )
})

TypeIcon.displayName = 'TypeIcon'
