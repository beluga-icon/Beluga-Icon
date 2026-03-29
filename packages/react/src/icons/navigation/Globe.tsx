// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/globe.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GlobeMeta: IconMeta = {
  name: 'globe',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const GlobeIcon = forwardRef<SVGSVGElement, IconProps>(function GlobeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <line x1="2" y1="12" x2="22" y2="12"/>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </Icon>
  )
})

GlobeIcon.displayName = 'GlobeIcon'
