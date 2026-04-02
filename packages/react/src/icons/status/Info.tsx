// This file is auto-generated. Do not edit manually.
// Source: svgs/status/info.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const InfoMeta: IconMeta = {
  name: 'info',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const InfoIcon = forwardRef<SVGSVGElement, IconProps>(function InfoIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <line x1="12" y1="8" x2="12.01" y2="8"/>
    </Icon>
  )
})

InfoIcon.displayName = 'InfoIcon'
