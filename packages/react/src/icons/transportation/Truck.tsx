// This file is auto-generated. Do not edit manually.
// Source: svgs/transportation/truck.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TruckMeta: IconMeta = {
  name: 'truck',
  category: 'transportation',
  tags: [],
  version: '0.1.0',
}

export const TruckIcon = forwardRef<SVGSVGElement, IconProps>(function TruckIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="1" y="3" width="15" height="13" rx="1"/>
  <path d="M16 8h4l3 5v3h-7V8z"/>
  <circle cx="5.5" cy="18.5" r="2.5"/>
  <circle cx="18.5" cy="18.5" r="2.5"/>
    </Icon>
  )
})

TruckIcon.displayName = 'TruckIcon'
