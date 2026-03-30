// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/watch.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const WatchMeta: IconMeta = {
  name: 'watch',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const WatchIcon = forwardRef<SVGSVGElement, IconProps>(function WatchIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="7"/>
  <polyline points="12 9 12 12 13.5 13.5"/>
  <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/>
    </Icon>
  )
})

WatchIcon.displayName = 'WatchIcon'
