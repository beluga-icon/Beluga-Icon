// This file is auto-generated. Do not edit manually.
// Source: svgs/transportation/train.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TrainMeta: IconMeta = {
  name: 'train',
  category: 'transportation',
  tags: [],
  version: '0.1.0',
}

export const TrainIcon = forwardRef<SVGSVGElement, IconProps>(function TrainIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="4" y="3" width="16" height="13" rx="3"/>
  <path d="M4 11h16"/>
  <circle cx="8.5" cy="17.5" r="2.5"/>
  <circle cx="15.5" cy="17.5" r="2.5"/>
  <path d="m6 20 2-2.5"/>
  <path d="m18 20-2-2.5"/>
    </Icon>
  )
})

TrainIcon.displayName = 'TrainIcon'
