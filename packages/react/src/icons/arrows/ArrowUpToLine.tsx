// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-to-line.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpToLineMeta: IconMeta = {
  name: 'arrow-up-to-line',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpToLineIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowUpToLineIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M4 3h16" />
        <path d="m18 13-6-6-6 6" />
        <path d="M12 7v14" />
      </Icon>
    )
  },
)

ArrowUpToLineIcon.displayName = 'ArrowUpToLineIcon'
