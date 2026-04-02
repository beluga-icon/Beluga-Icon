// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/focus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FocusMeta: IconMeta = {
  name: 'focus',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const FocusIcon = forwardRef<SVGSVGElement, IconProps>(function FocusIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
  <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
  <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
  <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
  <circle cx="12" cy="12" r="3"/>
    </Icon>
  )
})

FocusIcon.displayName = 'FocusIcon'
