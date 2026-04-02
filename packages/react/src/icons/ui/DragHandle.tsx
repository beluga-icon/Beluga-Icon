// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/drag-handle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const DragHandleMeta: IconMeta = {
  name: 'drag-handle',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const DragHandleIcon = forwardRef<SVGSVGElement, IconProps>(function DragHandleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="9" cy="8" r="1"/>
  <circle cx="15" cy="8" r="1"/>
  <circle cx="9" cy="12" r="1"/>
  <circle cx="15" cy="12" r="1"/>
  <circle cx="9" cy="16" r="1"/>
  <circle cx="15" cy="16" r="1"/>
    </Icon>
  )
})

DragHandleIcon.displayName = 'DragHandleIcon'
