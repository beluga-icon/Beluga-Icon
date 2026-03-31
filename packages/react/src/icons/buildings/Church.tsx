// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/church.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChurchMeta: IconMeta = {
  name: 'church',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const ChurchIcon = forwardRef<SVGSVGElement, IconProps>(function ChurchIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M10 9h4"/>
  <path d="M12 7v4"/>
  <path d="M8 22V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16"/>
  <path d="M14 22v-4a2 2 0 0 0-4 0v4"/>
  <path d="M4 22V11l4-4"/>
  <path d="M20 22V11l-4-4"/>
  <path d="M4 11H2"/>
  <path d="M22 11h-2"/>
    </Icon>
  )
})

ChurchIcon.displayName = 'ChurchIcon'
