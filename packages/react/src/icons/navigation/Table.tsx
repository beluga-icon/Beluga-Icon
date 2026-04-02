// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/table.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TableMeta: IconMeta = {
  name: 'table',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const TableIcon = forwardRef<SVGSVGElement, IconProps>(function TableIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2"/>
  <line x1="3" y1="9" x2="21" y2="9"/>
  <line x1="3" y1="15" x2="21" y2="15"/>
  <line x1="9" y1="3" x2="9" y2="21"/>
  <line x1="15" y1="3" x2="15" y2="21"/>
    </Icon>
  )
})

TableIcon.displayName = 'TableIcon'
