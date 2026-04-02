// This file is auto-generated. Do not edit manually.
// Source: svgs/development/binary.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BinaryMeta: IconMeta = {
  name: 'binary',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const BinaryIcon = forwardRef<SVGSVGElement, IconProps>(function BinaryIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="14" y="14" width="4" height="6" rx="2"/>
  <rect x="6" y="4" width="4" height="6" rx="2"/>
  <path d="M6 20h4"/>
  <path d="M14 10h4"/>
  <path d="M6 14h2v6"/>
  <path d="M14 4h2v6"/>
    </Icon>
  )
})

BinaryIcon.displayName = 'BinaryIcon'
