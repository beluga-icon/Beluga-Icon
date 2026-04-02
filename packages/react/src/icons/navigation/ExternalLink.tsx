// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/external-link.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ExternalLinkMeta: IconMeta = {
  name: 'external-link',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const ExternalLinkIcon = forwardRef<SVGSVGElement, IconProps>(function ExternalLinkIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
    </Icon>
  )
})

ExternalLinkIcon.displayName = 'ExternalLinkIcon'
