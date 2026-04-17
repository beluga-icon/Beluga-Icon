// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpMeta: IconMeta = {
  name: 'arrow-up',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowUpIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </Icon>
  )
})

ArrowUpIcon.displayName = 'ArrowUpIcon'
