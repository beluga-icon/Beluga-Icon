// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevron-first.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronFirstMeta: IconMeta = {
  name: 'chevron-first',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronFirstIcon = forwardRef<SVGSVGElement, IconProps>(function ChevronFirstIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="17 18 11 12 17 6"/>
  <line x1="7" y1="6" x2="7" y2="18"/>
    </Icon>
  )
})

ChevronFirstIcon.displayName = 'ChevronFirstIcon'
