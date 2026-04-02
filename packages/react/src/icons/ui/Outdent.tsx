// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/outdent.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const OutdentMeta: IconMeta = {
  name: 'outdent',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const OutdentIcon = forwardRef<SVGSVGElement, IconProps>(function OutdentIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="7 8 3 12 7 16"/>
  <line x1="3" y1="12" x2="13" y2="12"/>
  <line x1="21" y1="6" x2="3" y2="6"/>
  <line x1="21" y1="18" x2="3" y2="18"/>
    </Icon>
  )
})

OutdentIcon.displayName = 'OutdentIcon'
