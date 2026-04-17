// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-circle-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowCircleUpMeta: IconMeta = {
  name: 'arrow-circle-up',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowCircleUpIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowCircleUpIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16V8" />
        <path d="m8 12 4-4 4 4" />
      </Icon>
    )
  },
)

ArrowCircleUpIcon.displayName = 'ArrowCircleUpIcon'
