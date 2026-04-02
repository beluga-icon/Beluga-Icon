// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/eye.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const EyeMeta: IconMeta = {
  name: 'eye',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const EyeIcon = forwardRef<SVGSVGElement, IconProps>(function EyeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
    </Icon>
  )
})

EyeIcon.displayName = 'EyeIcon'
