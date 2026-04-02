// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevron-last.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronLastMeta: IconMeta = {
  name: 'chevron-last',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronLastIcon = forwardRef<SVGSVGElement, IconProps>(function ChevronLastIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="7 18 13 12 7 6"/>
  <line x1="17" y1="6" x2="17" y2="18"/>
    </Icon>
  )
})

ChevronLastIcon.displayName = 'ChevronLastIcon'
