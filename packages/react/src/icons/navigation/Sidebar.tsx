// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/sidebar.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SidebarMeta: IconMeta = {
  name: 'sidebar',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const SidebarIcon = forwardRef<SVGSVGElement, IconProps>(function SidebarIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <line x1="9" y1="3" x2="9" y2="21"/>
    </Icon>
  )
})

SidebarIcon.displayName = 'SidebarIcon'
