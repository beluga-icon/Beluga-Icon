// This file is auto-generated. Do not edit manually.
// Source: svgs/productivity/kanban-square.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const KanbanSquareMeta: IconMeta = {
  name: 'kanban-square',
  category: 'productivity',
  tags: [],
  version: '0.1.0',
}

export const KanbanSquareIcon = forwardRef<SVGSVGElement, IconProps>(function KanbanSquareIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="2"/>
  <path d="M8 7v7"/>
  <path d="M12 7v4"/>
  <path d="M16 7v9"/>
    </Icon>
  )
})

KanbanSquareIcon.displayName = 'KanbanSquareIcon'
