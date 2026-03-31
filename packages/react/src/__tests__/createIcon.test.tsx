import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { createIcon } from '../createIcon'

const TestIcon = createIcon({
  displayName: 'TestIcon',
  render: () => <circle data-testid="inner-circle" cx="12" cy="12" r="10" />,
})

describe('createIcon — rendering', () => {
  it('renders an svg element', () => {
    const { container } = render(<TestIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the inner SVG content from render()', () => {
    const { container } = render(<TestIcon />)
    expect(container.querySelector('[data-testid="inner-circle"]')).toBeInTheDocument()
  })
})

describe('createIcon — displayName', () => {
  it('sets the displayName on the returned component', () => {
    expect(TestIcon.displayName).toBe('TestIcon')
  })
})

describe('createIcon — props forwarding', () => {
  it('size prop controls svg width/height', () => {
    const { container } = render(<TestIcon size="xl" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('color prop is applied as stroke', () => {
    const { container } = render(<TestIcon color="#ff0000" />)
    expect(container.querySelector('svg')).toHaveAttribute('stroke', '#ff0000')
  })

  it('strokeWidth prop is forwarded', () => {
    const { container } = render(<TestIcon strokeWidth={1.5} />)
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '1.5')
  })

  it('className is forwarded to svg', () => {
    const { container } = render(<TestIcon className="custom-class" />)
    expect(container.querySelector('svg')).toHaveClass('custom-class')
  })

  it('extra SVG props are forwarded (data-testid)', () => {
    render(<TestIcon data-testid="my-custom-icon" />)
    expect(screen.getByTestId('my-custom-icon')).toBeInTheDocument()
  })
})

describe('createIcon — accessibility', () => {
  it('is decorative (aria-hidden) by default', () => {
    const { container } = render(<TestIcon />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('becomes accessible with label prop', () => {
    const { container } = render(<TestIcon label="Test icon" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('aria-label', 'Test icon')
    expect(svg).toHaveAttribute('role', 'img')
    expect(svg).not.toHaveAttribute('aria-hidden')
  })
})

describe('createIcon — ref forwarding', () => {
  it('ref attaches to the SVGSVGElement', () => {
    const ref = createRef<SVGSVGElement>()
    render(<TestIcon ref={ref} />)
    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })
})
