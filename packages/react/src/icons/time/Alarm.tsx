// This file is auto-generated. Do not edit manually.
// Source: svgs/time/alarm.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AlarmMeta: IconMeta = {
  name: 'alarm',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const AlarmIcon = forwardRef<SVGSVGElement, IconProps>(function AlarmIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="13" r="8"/>
  <path d="M5 3L2 6"/>
  <path d="M22 6l-3-3"/>
  <line x1="12" y1="9" x2="12" y2="13"/>
  <line x1="12" y1="13" x2="14" y2="15"/>
    </Icon>
  )
})

AlarmIcon.displayName = 'AlarmIcon'
