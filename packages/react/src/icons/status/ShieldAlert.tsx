// This file is auto-generated. Do not edit manually.
// Source: svgs/status/shield-alert.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ShieldAlertMeta: IconMeta = {
  name: 'shield-alert',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const ShieldAlertIcon = forwardRef<SVGSVGElement, IconProps>(function ShieldAlertIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  <line x1="12" y1="8" x2="12" y2="12"/>
  <circle cx="12" cy="15" r="1"/>
    </Icon>
  )
})

ShieldAlertIcon.displayName = 'ShieldAlertIcon'
