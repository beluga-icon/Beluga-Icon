// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/resize-handle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ResizeHandleMeta: IconMeta = {
  name: 'resize-handle',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const ResizeHandleIcon = forwardRef<SVGSVGElement, IconProps>(function ResizeHandleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="5" y1="19" x2="19" y2="5"/>
  <polyline points="13,5 19,5 19,11"/>
  <polyline points="11,19 5,19 5,13"/>
    </Icon>
  )
})

ResizeHandleIcon.displayName = 'ResizeHandleIcon'
