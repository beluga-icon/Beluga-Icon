// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/compass.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CompassMeta: IconMeta = {
  name: 'compass',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const CompassIcon = forwardRef<SVGSVGElement, IconProps>(function CompassIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </Icon>
  )
})

CompassIcon.displayName = 'CompassIcon'
