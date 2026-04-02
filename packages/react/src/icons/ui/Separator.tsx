// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/separator.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SeparatorMeta: IconMeta = {
  name: 'separator',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const SeparatorIcon = forwardRef<SVGSVGElement, IconProps>(function SeparatorIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="3" y1="12" x2="21" y2="12"/>
  <polyline points="8 8 3 12 8 16"/>
  <polyline points="16 8 21 12 16 16"/>
    </Icon>
  )
})

SeparatorIcon.displayName = 'SeparatorIcon'
