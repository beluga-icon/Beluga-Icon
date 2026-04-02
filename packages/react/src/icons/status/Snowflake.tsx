// This file is auto-generated. Do not edit manually.
// Source: svgs/status/snowflake.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SnowflakeMeta: IconMeta = {
  name: 'snowflake',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const SnowflakeIcon = forwardRef<SVGSVGElement, IconProps>(function SnowflakeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="12" y1="2" x2="12" y2="22"/>
  <line x1="2" y1="12" x2="22" y2="12"/>
  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/>
  <path d="m9 3 3 3 3-3"/>
  <path d="m3 9 3 3-3 3"/>
  <path d="m15 21-3-3-3 3"/>
  <path d="m21 15-3-3 3-3"/>
    </Icon>
  )
})

SnowflakeIcon.displayName = 'SnowflakeIcon'
