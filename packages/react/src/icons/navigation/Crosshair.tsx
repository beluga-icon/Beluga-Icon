// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/crosshair.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CrosshairMeta: IconMeta = {
  name: 'crosshair',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const CrosshairIcon = forwardRef<SVGSVGElement, IconProps>(function CrosshairIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <line x1="22" y1="12" x2="18" y2="12"/>
  <line x1="6" y1="12" x2="2" y2="12"/>
  <line x1="12" y1="6" x2="12" y2="2"/>
  <line x1="12" y1="22" x2="12" y2="18"/>
    </Icon>
  )
})

CrosshairIcon.displayName = 'CrosshairIcon'
