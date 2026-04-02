// This file is auto-generated. Do not edit manually.
// Source: svgs/layout/sidebar-open.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SidebarOpenMeta: IconMeta = {
  name: 'sidebar-open',
  category: 'layout',
  tags: [],
  version: '0.1.0',
}

export const SidebarOpenIcon = forwardRef<SVGSVGElement, IconProps>(function SidebarOpenIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <line x1="9" y1="3" x2="9" y2="21"/>
  <path d="m14 9 3 3-3 3"/>
    </Icon>
  )
})

SidebarOpenIcon.displayName = 'SidebarOpenIcon'
