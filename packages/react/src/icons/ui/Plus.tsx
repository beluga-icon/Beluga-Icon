// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/plus.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const PlusMeta: IconMeta = {
  name: 'plus',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const PlusIcon = forwardRef<SVGSVGElement, IconProps>(function PlusIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="12" y1="5" x2="12" y2="19"/>
  <line x1="5" y1="12" x2="19" y2="12"/>
    </Icon>
  )
})

PlusIcon.displayName = 'PlusIcon'
