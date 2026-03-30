// This file is auto-generated. Do not edit manually.
// Source: svgs/layout/panel-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PanelLeftMeta: IconMeta = {
  name: 'panel-left',
  category: 'layout',
  tags: [],
  version: '0.1.0',
}

export const PanelLeftIcon = forwardRef<SVGSVGElement, IconProps>(function PanelLeftIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <line x1="9" y1="3" x2="9" y2="21"/>
    </Icon>
  )
})

PanelLeftIcon.displayName = 'PanelLeftIcon'
