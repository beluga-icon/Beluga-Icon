// This file is auto-generated. Do not edit manually.
// Source: svgs/productivity/task-square.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TaskSquareMeta: IconMeta = {
  name: 'task-square',
  category: 'productivity',
  tags: [],
  version: '0.1.0',
}

export const TaskSquareIcon = forwardRef<SVGSVGElement, IconProps>(function TaskSquareIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="m9 12 2 2 4-4"/>
  <path d="M9 8h4"/>
  <path d="M9 16h4"/>
    </Icon>
  )
})

TaskSquareIcon.displayName = 'TaskSquareIcon'
