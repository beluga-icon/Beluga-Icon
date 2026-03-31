// This file is auto-generated. Do not edit manually.
// Source: svgs/commerce/coin.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const CoinMeta: IconMeta = {
  name: 'coin',
  category: 'commerce',
  tags: [],
  version: '0.1.0',
}

export const CoinIcon = forwardRef<SVGSVGElement, IconProps>(function CoinIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <path d="M12 8v8"/>
  <path d="M8 12h8"/>
    </Icon>
  )
})

CoinIcon.displayName = 'CoinIcon'
