import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { HeartIcon } from '../icons'
import { IconProvider, useIconContext } from '../IconProvider'
import { createIcon } from '../createIcon'

describe('IconProvider — size', () => {
  it('provides default size to nested icons', () => {
    const { container } = render(
      <IconProvider value={{ size: 'xl' }}>
        <HeartIcon />
      </IconProvider>,
    )
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('explicit size prop overrides provider default', () => {
    const { container } = render(
      <IconProvider value={{ size: 'xl' }}>
        <HeartIcon size="sm" />
      </IconProvider>,
    )
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '16')
  })
})

describe('IconProvider — color', () => {
  it('provides default color to nested icons', () => {
    const { container } = render(
      <IconProvider value={{ color: '#abc123' }}>
        <HeartIcon />
      </IconProvider>,
    )
    expect(container.querySelector('svg')).toHaveAttribute('stroke', '#abc123')
  })

  it('explicit color prop overrides provider default', () => {
    const { container } = render(
      <IconProvider value={{ color: '#abc123' }}>
        <HeartIcon color="red" />
      </IconProvider>,
    )
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'red')
  })
})

describe('IconProvider — strokeWidth', () => {
  it('provides default strokeWidth to nested icons', () => {
    const { container } = render(
      <IconProvider value={{ strokeWidth: 1 }}>
        <HeartIcon />
      </IconProvider>,
    )
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '1')
  })

  it('explicit strokeWidth overrides provider', () => {
    const { container } = render(
      <IconProvider value={{ strokeWidth: 1 }}>
        <HeartIcon strokeWidth={3} />
      </IconProvider>,
    )
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '3')
  })
})

describe('IconProvider — no provider fallback', () => {
  it('icons outside a provider use hardcoded defaults (no regression)', () => {
    const { container } = render(<HeartIcon />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '20')   // md default
    expect(svg).toHaveAttribute('stroke', 'currentColor')
    expect(svg).toHaveAttribute('stroke-width', '2')
  })
})

describe('IconProvider — nested providers', () => {
  it('inner provider overrides outer for matching props', () => {
    const { container } = render(
      <IconProvider value={{ size: 'md', color: 'blue' }}>
        <IconProvider value={{ color: 'red' }}>
          <HeartIcon />
        </IconProvider>
      </IconProvider>,
    )
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'red')
  })

  it('outer provider value still applies for props not overridden by inner', () => {
    const { container } = render(
      <IconProvider value={{ size: 'xl', color: 'blue' }}>
        <IconProvider value={{ color: 'red' }}>
          <HeartIcon />
        </IconProvider>
      </IconProvider>,
    )
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '32')   // xl from outer
    expect(svg).toHaveAttribute('stroke', 'red') // red from inner
  })
})

describe('IconProvider — useIconContext hook', () => {
  it('returns empty object when no provider is present', () => {
    let contextValue: ReturnType<typeof useIconContext> | undefined
    function Reader() {
      contextValue = useIconContext()
      return null
    }
    render(<Reader />)
    expect(contextValue).toEqual({})
  })
})

describe('IconProvider — createIcon compatibility', () => {
  it('createIcon-created icons also respect IconProvider defaults', () => {
    const CustomIcon = createIcon({
      displayName: 'CustomIcon',
      render: () => <circle cx="12" cy="12" r="10" />,
    })
    const { container } = render(
      <IconProvider value={{ size: '2xl', color: 'green' }}>
        <CustomIcon />
      </IconProvider>,
    )
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '48')
    expect(svg).toHaveAttribute('stroke', 'green')
  })
})
