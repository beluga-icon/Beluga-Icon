// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/a-arrow-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AArrowUpMeta: IconMeta = {
  name: 'a-arrow-up',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const AArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(function AArrowUpIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="m14 11 4-4 4 4" />
      <path d="M18 7v11" />
      <path d="m2 17 4.5-10a.5.5 0 0 1 .923 0L12 17" />
      <path d="M3.7 13.5h5.6" />
    </Icon>
  )
})

AArrowUpIcon.displayName = 'AArrowUpIcon'
