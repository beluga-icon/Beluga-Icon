import { describe, it, expect, vi, } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { createRef } from 'react'
import { Icon } from '../components/Icon'

describe('Icon — rendering', () => {
  it('renders an svg element', () => {
    const { container } = render(<Icon>
      <circle cx="12" cy="12" r="10" />
    </Icon>)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders children inside the svg', () => {
    const { container } = render(
      <Icon>
        <circle data-testid="inner" cx="12" cy="12" r="10" />
      </Icon>,
    )
    expect(container.querySelector('[data-testid="inner"]')).toBeInTheDocument()
  })
})

describe('Icon — size prop', () => {
  it('default size is md → 20px', () => {
    const { container } = render(<Icon><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '20')
    expect(svg).toHaveAttribute('height', '20')
  })

  it('size="xs" → 12px', () => {
    const { container } = render(<Icon size="xs"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '12')
    expect(svg).toHaveAttribute('height', '12')
  })

  it('size="sm" → 16px', () => {
    const { container } = render(<Icon size="sm"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')
  })

  it('size="lg" → 24px', () => {
    const { container } = render(<Icon size="lg"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
  })

  it('size="xl" → 32px', () => {
    const { container } = render(<Icon size="xl"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('size="2xl" → 48px', () => {
    const { container } = render(<Icon size="2xl"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '48')
    expect(svg).toHaveAttribute('height', '48')
  })

  it('numeric size passes through', () => {
    const { container } = render(<Icon size={36}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '36')
    expect(svg).toHaveAttribute('height', '36')
  })
})

describe('Icon — color prop', () => {
  it('default color is currentColor', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'currentColor')
  })

  it('custom color is applied as stroke', () => {
    const { container } = render(<Icon color="red"><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'red')
  })
})

describe('Icon — strokeWidth prop', () => {
  it('default strokeWidth is 2', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '2')
  })

  it('custom strokeWidth is applied', () => {
    const { container } = render(<Icon strokeWidth={1.5}><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '1.5')
  })
})

describe('Icon — className & extra props', () => {
  it('className is forwarded', () => {
    const { container } = render(<Icon className="my-icon"><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('my-icon')
  })

  it('extra SVG props are forwarded (data-testid)', () => {
    render(<Icon data-testid="my-svg"><circle /></Icon>)
    expect(screen.getByTestId('my-svg')).toBeInTheDocument()
  })
})

describe('Icon — ref forwarding', () => {
  it('ref attaches to the SVGSVGElement', () => {
    const ref = createRef<SVGSVGElement>()
    render(<Icon ref={ref}><circle /></Icon>)
    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })
})

describe('Icon — new animation classes', () => {
  it('applies ppi-spin class when spin=true', () => {
    const { container } = render(<Icon spin><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-spin')
  })

  it('applies ppi-pulse class when pulse=true', () => {
    const { container } = render(<Icon pulse><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-pulse')
  })

  it('applies ppi-bounce class when bounce=true', () => {
    const { container } = render(<Icon bounce><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-bounce')
  })

  it('applies ppi-shake class when shake=true', () => {
    const { container } = render(<Icon shake><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-shake')
  })

  it('applies ppi-wiggle class when wiggle=true', () => {
    const { container } = render(<Icon wiggle><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-wiggle')
  })

  it('applies ppi-ping class when ping=true', () => {
    const { container } = render(<Icon ping><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-ping')
  })

  it('applies ppi-blink class when blink=true', () => {
    const { container } = render(<Icon blink><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-blink')
  })

  it('applies ppi-float class when float=true', () => {
    const { container } = render(<Icon float><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-float')
  })

  it('spin takes priority over bounce when both are true', () => {
    const { container } = render(<Icon spin bounce><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveClass('ppi-spin')
    expect(svg).not.toHaveClass('ppi-bounce')
  })

  it('no animation class when no animation prop is set', () => {
    const { container } = render(<Icon><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('class') ?? '').not.toMatch(/ppi-/)
  })
})

describe('Icon — animation fine-tuning props', () => {
  it('sets --ppi-dur custom property when duration prop is given', () => {
    const { container } = render(<Icon spin duration={300}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-dur')).toBe('300ms')
  })

  it('sets --ppi-delay custom property when delay prop is given', () => {
    const { container } = render(<Icon spin delay={500}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-delay')).toBe('500ms')
  })

  it('sets --ppi-count to the numeric iterationCount', () => {
    const { container } = render(<Icon spin iterationCount={3}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-count')).toBe('3')
  })

  it('sets --ppi-count to infinite when iterationCount is infinite', () => {
    const { container } = render(<Icon spin iterationCount="infinite"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-count')).toBe('infinite')
  })

  it('sets --ppi-ease when easing prop is given', () => {
    const { container } = render(<Icon spin easing="cubic-bezier(0.4,0,0.2,1)"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-ease')).toBe('cubic-bezier(0.4,0,0.2,1)')
  })
})

describe('Icon — style enhancement props', () => {
  it('sets opacity style when opacity prop is given', () => {
    const { container } = render(<Icon opacity={0.5}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.opacity).toBe('0.5')
  })

  it('applies drop-shadow filter when shadow=true', () => {
    const { container } = render(<Icon shadow><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.filter).toContain('drop-shadow')
  })

  it('composes shadow with existing style.filter', () => {
    const { container } = render(
      <Icon shadow style={{ filter: 'blur(2px)' }}><circle /></Icon>
    )
    const svg = container.querySelector('svg')!
    const filter = svg.style.filter
    expect(filter).toContain('blur(2px)')
    expect(filter).toContain('drop-shadow')
  })
})

describe('Icon — new animations (wave 2)', () => {
  it('applies ppi-heartbeat class when heartbeat=true', () => {
    const { container } = render(<Icon heartbeat><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-heartbeat')
  })

  it('applies ppi-flash class when flash=true', () => {
    const { container } = render(<Icon flash><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-flash')
  })

  it('applies ppi-tada class when tada=true', () => {
    const { container } = render(<Icon tada><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-tada')
  })

  it('applies ppi-jello class when jello=true', () => {
    const { container } = render(<Icon jello><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-jello')
  })

  it('applies ppi-swing class when swing=true', () => {
    const { container } = render(<Icon swing><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-swing')
  })

  it('applies ppi-rubber-band class when rubberBand=true', () => {
    const { container } = render(<Icon rubberBand><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-rubber-band')
  })

  it('applies ppi-flip-x class when flipX=true', () => {
    const { container } = render(<Icon flipX><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-flip-x')
  })

  it('applies ppi-breathe class when breathe=true', () => {
    const { container } = render(<Icon breathe><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-breathe')
  })

  it('spin takes priority over heartbeat when both are true', () => {
    const { container } = render(<Icon spin heartbeat><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveClass('ppi-spin')
    expect(svg).not.toHaveClass('ppi-heartbeat')
  })

  it('heartbeat takes priority over breathe when both are true', () => {
    const { container } = render(<Icon heartbeat breathe><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveClass('ppi-heartbeat')
    expect(svg).not.toHaveClass('ppi-breathe')
  })

  it('sets --ppi-dur correctly for rubberBand normal speed', () => {
    const { container } = render(<Icon rubberBand speed="normal"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-dur')).toBe('0.9s')
  })

  it('sets --ppi-dur correctly for breathe slow speed', () => {
    const { container } = render(<Icon breathe speed="slow"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-dur')).toBe('6s')
  })

  it('sets --ppi-dur correctly for flipX fast speed', () => {
    const { container } = render(<Icon flipX speed="fast"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-dur')).toBe('0.5s')
  })
})

describe('Icon — draw animation', () => {
  it('adds ppi-draw class when draw=true', () => {
    const { container } = render(<Icon draw><circle /></Icon>)
    expect(container.querySelector('svg')).toHaveClass('ppi-draw')
  })

  it('does not add ppi-draw class when draw is not set', () => {
    const { container } = render(<Icon><circle /></Icon>)
    expect(container.querySelector('svg')).not.toHaveClass('ppi-draw')
  })

  it('sets --ppi-dur to 1s for draw at normal speed', () => {
    const { container } = render(<Icon draw speed="normal"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-dur')).toBe('1s')
  })

  it('sets --ppi-dur to 2s for draw at slow speed', () => {
    const { container } = render(<Icon draw speed="slow"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-dur')).toBe('2s')
  })

  it('sets --ppi-dur to 0.5s for draw at fast speed', () => {
    const { container } = render(<Icon draw speed="fast"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-dur')).toBe('0.5s')
  })

  it('defaults --ppi-count to 1 for draw (plays once)', () => {
    const { container } = render(<Icon draw><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-count')).toBe('1')
  })

  it('can combine draw with a regular animation', () => {
    const { container } = render(<Icon draw spin><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveClass('ppi-draw')
    expect(svg).toHaveClass('ppi-spin')
  })
})

describe('Icon — spring easing presets', () => {
  it('resolves spring-soft to its cubic-bezier', () => {
    const { container } = render(<Icon spin easing="spring-soft"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-ease')).toBe('cubic-bezier(0.34, 1.56, 0.64, 1)')
  })

  it('resolves spring-medium to its cubic-bezier', () => {
    const { container } = render(<Icon spin easing="spring-medium"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-ease')).toBe('cubic-bezier(0.68, -0.55, 0.265, 1.55)')
  })

  it('resolves spring-stiff to its cubic-bezier', () => {
    const { container } = render(<Icon spin easing="spring-stiff"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-ease')).toBe('cubic-bezier(0.175, 0.885, 0.32, 1.275)')
  })

  it('resolves elastic to its cubic-bezier', () => {
    const { container } = render(<Icon spin easing="elastic"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-ease')).toBe('cubic-bezier(0.68, -0.6, 0.32, 1.6)')
  })

  it('passes through raw cubic-bezier strings unchanged', () => {
    const { container } = render(<Icon spin easing="cubic-bezier(0.4,0,0.2,1)"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-ease')).toBe('cubic-bezier(0.4,0,0.2,1)')
  })
})

describe('Icon — playOnce', () => {
  it('sets --ppi-count to 1 when playOnce=true', () => {
    const { container } = render(<Icon spin playOnce><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-count')).toBe('1')
  })

  it('playOnce overrides explicit iterationCount', () => {
    const { container } = render(<Icon spin playOnce iterationCount={5}><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.getPropertyValue('--ppi-count')).toBe('1')
  })
})

describe('Icon — trigger control', () => {
  it('trigger="hover" starts animation paused', () => {
    const { container } = render(<Icon spin trigger="hover"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.animationPlayState).toBe('paused')
  })

  it('trigger="hover" plays on mouseenter', () => {
    const { container } = render(<Icon spin trigger="hover"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    fireEvent.mouseEnter(svg)
    expect(svg.style.animationPlayState).toBe('running')
  })

  it('trigger="hover" pauses on mouseleave', () => {
    const { container } = render(<Icon spin trigger="hover"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    fireEvent.mouseEnter(svg)
    fireEvent.mouseLeave(svg)
    expect(svg.style.animationPlayState).toBe('paused')
  })

  it('trigger="click" starts animation paused', () => {
    const { container } = render(<Icon spin trigger="click"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.animationPlayState).toBe('paused')
  })

  it('trigger="click" plays on click', () => {
    const { container } = render(<Icon spin trigger="click"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    fireEvent.click(svg)
    expect(svg.style.animationPlayState).toBe('running')
  })

  it('trigger="auto" does not set animationPlayState', () => {
    const { container } = render(<Icon spin trigger="auto"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.animationPlayState).toBe('')
  })

  it('trigger="visible" starts paused and plays when intersecting', () => {
    let observerCallback: IntersectionObserverCallback = () => {}
    const mockObserver = {
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    }

    // Must be a real constructor function so `new IntersectionObserver(...)` works
    function MockIntersectionObserver(cb: IntersectionObserverCallback) {
      observerCallback = cb
      return mockObserver
    }
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    const { container } = render(<Icon spin trigger="visible"><circle /></Icon>)
    const svg = container.querySelector('svg')!
    expect(svg.style.animationPlayState).toBe('paused')

    // Simulate entering viewport
    observerCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
    expect(svg.style.animationPlayState).toBe('running')

    vi.unstubAllGlobals()
  })
})
