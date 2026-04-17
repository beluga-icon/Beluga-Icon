// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/bring-to-front.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BringToFrontMeta: IconMeta = {
  name: 'bring-to-front',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const BringToFrontIcon = forwardRef<SVGSVGElement, IconProps>(
  function BringToFrontIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
        <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
      </Icon>
    )
  },
)

BringToFrontIcon.displayName = 'BringToFrontIcon'
