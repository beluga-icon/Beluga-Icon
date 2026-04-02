// This file is auto-generated. Do not edit manually.
// Source: svgs/transportation/bicycle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BicycleMeta: IconMeta = {
  name: 'bicycle',
  category: 'transportation',
  tags: [],
  version: '0.1.0',
}

export const BicycleIcon = forwardRef<SVGSVGElement, IconProps>(function BicycleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="5.5" cy="17.5" r="4.5"/>
  <circle cx="18.5" cy="17.5" r="4.5"/>
  <path d="M9 17.5h5l2-5.5H8"/>
  <path d="M12 12V7h3l2 2"/>
  <path d="M14 7h-4"/>
    </Icon>
  )
})

BicycleIcon.displayName = 'BicycleIcon'
