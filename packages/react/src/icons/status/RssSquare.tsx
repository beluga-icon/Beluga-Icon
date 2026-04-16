// This file is auto-generated. Do not edit manually.
// Source: svgs/status/rss-square.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const RssSquareMeta: IconMeta = {
  name: 'rss-square',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const RssSquareIcon = forwardRef<SVGSVGElement, IconProps>(function RssSquareIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="2"/>
  <circle cx="6" cy="17" r="1"/>
  <path d="M6 11a6 6 0 0 1 6 6"/>
  <path d="M6 7a10 10 0 0 1 10 10"/>
    </Icon>
  )
})

RssSquareIcon.displayName = 'RssSquareIcon'
