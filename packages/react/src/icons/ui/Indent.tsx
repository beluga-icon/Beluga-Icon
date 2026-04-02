// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/indent.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const IndentMeta: IconMeta = {
  name: 'indent',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const IndentIcon = forwardRef<SVGSVGElement, IconProps>(function IndentIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="3 8 7 12 3 16"/>
  <line x1="21" y1="12" x2="11" y2="12"/>
  <line x1="21" y1="6" x2="3" y2="6"/>
  <line x1="21" y1="18" x2="3" y2="18"/>
    </Icon>
  )
})

IndentIcon.displayName = 'IndentIcon'
