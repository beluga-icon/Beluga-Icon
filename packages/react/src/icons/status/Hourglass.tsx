// This file is auto-generated. Do not edit manually.
// Source: svgs/status/hourglass.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const HourglassMeta: IconMeta = {
  name: 'hourglass',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const HourglassIcon = forwardRef<SVGSVGElement, IconProps>(function HourglassIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M5 22h14"/>
  <path d="M5 2h14"/>
  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/>
  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>
    </Icon>
  )
})

HourglassIcon.displayName = 'HourglassIcon'
