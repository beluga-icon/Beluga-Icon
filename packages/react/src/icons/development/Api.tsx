// This file is auto-generated. Do not edit manually.
// Source: svgs/development/api.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ApiMeta: IconMeta = {
  name: 'api',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const ApiIcon = forwardRef<SVGSVGElement, IconProps>(function ApiIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="8" y="5" width="8" height="14" rx="1" />

      <line x1="10" y1="9" x2="14" y2="9" />
      <line x1="10" y1="12" x2="14" y2="12" />
      <line x1="10" y1="15" x2="14" y2="15" />

      <path d="M2 8 H8" />
      <path d="M5.5 6 L8 8 L5.5 10" />

      <path d="M16 16 H22" />
      <path d="M19.5 14 L22 16 L19.5 18" />
    </Icon>
  )
})

ApiIcon.displayName = 'ApiIcon'
