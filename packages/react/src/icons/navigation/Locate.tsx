// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/locate.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LocateMeta: IconMeta = {
  name: 'locate',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const LocateIcon = forwardRef<SVGSVGElement, IconProps>(function LocateIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="2" y1="12" x2="8" y2="12"/>
  <line x1="16" y1="12" x2="22" y2="12"/>
  <line x1="12" y1="2" x2="12" y2="8"/>
  <line x1="12" y1="16" x2="12" y2="22"/>
  <circle cx="12" cy="12" r="4"/>
    </Icon>
  )
})

LocateIcon.displayName = 'LocateIcon'
