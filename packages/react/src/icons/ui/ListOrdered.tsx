// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/list-ordered.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ListOrderedMeta: IconMeta = {
  name: 'list-ordered',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const ListOrderedIcon = forwardRef<SVGSVGElement, IconProps>(function ListOrderedIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="10" y1="6" x2="21" y2="6"/>
  <line x1="10" y1="12" x2="21" y2="12"/>
  <line x1="10" y1="18" x2="21" y2="18"/>
  <path d="M4 6h1v4"/>
  <path d="M4 10h2"/>
  <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>
    </Icon>
  )
})

ListOrderedIcon.displayName = 'ListOrderedIcon'
