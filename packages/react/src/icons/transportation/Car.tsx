// This file is auto-generated. Do not edit manually.
// Source: svgs/transportation/car.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CarMeta: IconMeta = {
  name: 'car',
  category: 'transportation',
  tags: [],
  version: '0.1.0',
}

export const CarIcon = forwardRef<SVGSVGElement, IconProps>(function CarIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M5 11 7 5h10l2 6H5z"/>
  <path d="M2 11h20v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z"/>
  <circle cx="7" cy="18" r="1.5"/>
  <circle cx="17" cy="18" r="1.5"/>
    </Icon>
  )
})

CarIcon.displayName = 'CarIcon'
