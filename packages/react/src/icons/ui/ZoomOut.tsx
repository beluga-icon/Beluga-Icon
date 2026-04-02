// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/zoom-out.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ZoomOutMeta: IconMeta = {
  name: 'zoom-out',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const ZoomOutIcon = forwardRef<SVGSVGElement, IconProps>(function ZoomOutIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  <line x1="8" y1="11" x2="14" y2="11"/>
    </Icon>
  )
})

ZoomOutIcon.displayName = 'ZoomOutIcon'
