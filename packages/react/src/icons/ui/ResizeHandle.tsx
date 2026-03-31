// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/resize-handle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
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
      <path d="M21 15v6h-6"/>
  <path d="M21 21 9 9"/>
  <path d="M21 9V3h-6"/>
  <path d="M21 3 9 15"/>
    </Icon>
  )
})

ResizeHandleIcon.displayName = 'ResizeHandleIcon'
