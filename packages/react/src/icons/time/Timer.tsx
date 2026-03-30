// This file is auto-generated. Do not edit manually.
// Source: svgs/time/timer.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TimerMeta: IconMeta = {
  name: 'timer',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const TimerIcon = forwardRef<SVGSVGElement, IconProps>(function TimerIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="13" r="8"/>
  <polyline points="12 9 12 13 15 13"/>
  <line x1="10" y1="3" x2="14" y2="3"/>
    </Icon>
  )
})

TimerIcon.displayName = 'TimerIcon'
