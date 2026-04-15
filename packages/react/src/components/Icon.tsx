import { resolveSize } from '@beluga-icon/core'
import type { IconBaseProps, IconFlip, AnimConfig, AnimationType } from '@beluga-icon/core'
import { forwardRef, useEffect, useRef, type SVGProps } from 'react'
import { useIconContext } from '../IconProvider'
import {
  type AnimKey,
  ANIM_PRIORITY,
  ONCE_BY_DEFAULT,
  WAAPI_ANIMS,
  DRAW_ANIMS,
  animClass,
  ensureAnimStyles,
  resolveAnimDuration,
  resolveEasing,
  ensureDrawStyles,
  buildWaapiKeyframes,
} from '../animations'

export interface IconProps
  extends IconBaseProps,
    Omit<SVGProps<SVGSVGElement>, 'color' | 'style' | 'strokeWidth' | 'rotate' | 'speed' | 'strokeLinecap' | 'strokeLinejoin' | 'opacity'> {}

// ---------------------------------------------------------------------------
// Variant presets
// ---------------------------------------------------------------------------

const VARIANT_PRESETS = {
  outline: { multiplier: 1,    linecap: 'round' as const, linejoin: 'round' as const },
  bold:    { multiplier: 1.25, linecap: 'round' as const, linejoin: 'round' as const },
  sharp:   { multiplier: 1,    linecap: 'butt'  as const, linejoin: 'miter' as const },
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildBaseTransform(rotate?: number, flip?: IconFlip): string {
  const parts: string[] = []
  if (rotate != null && rotate !== 0) parts.push(`rotate(${rotate}deg)`)
  if (flip === 'horizontal') parts.push('scaleX(-1)')
  else if (flip === 'vertical') parts.push('scaleY(-1)')
  else if (flip === 'both') parts.push('scale(-1,-1)')
  return parts.join(' ')
}

/**
 * Normalise the `animate` prop (string | AnimConfig) into a full AnimConfig,
 * or return null when no animate prop is given.
 */
function resolveAnimConfig(
  animate: AnimationType | AnimConfig | undefined,
): AnimConfig | null {
  if (!animate) return null
  if (typeof animate === 'string') return { type: animate }
  return animate
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Base SVG wrapper used by every generated icon component.
 * Handles size, color, accessibility, transforms, animations, and forwards all native SVG props.
 * Prop resolution order: explicit prop > IconProvider context > variant preset > hardcoded default
 */
export const Icon = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  function Icon(
    {
      // ---- New unified animate prop ----
      animate,
      // ---- Layout & appearance ----
      size, color, className, label, strokeWidth, style, children,
      rotate, flip,
      // ---- Timing controls (used both by animate prop and legacy boolean props) ----
      speed, duration, delay, iterationCount, easing,
      trigger, playOnce,
      // ---- Appearance fine-tuning ----
      fill, strokeLinecap, strokeLinejoin, variant, opacity,
      // ---- Legacy boolean animation props (still supported, animate takes priority) ----
      spin, pulse, bounce, shake, wiggle, ping, blink, float,
      heartbeat, flash, tada, jello, swing, rubberBand, flipX, breathe,
      draw, erase, trace, neon, glitch, wobble, roll, zoomIn, fadeUp,
      flicker, hologram, electric, ghost, levitate, burst, heat, crystal,
      springPop, decay, magnetPulse, wobbleSpring,
      ...rest
    },
    ref,
  ) {
    const ctx = useIconContext()
    const { classNamePrefix, classNameSuffix } = ctx

    // Internal ref for draw / WAAPI effects; merges the forwarded ref too.
    const svgRef = useRef<SVGSVGElement>(null)
    const setRef = (el: SVGSVGElement | null) => {
      (svgRef as React.MutableRefObject<SVGSVGElement | null>).current = el
      if (typeof ref === 'function') ref(el)
      else if (ref) (ref as React.MutableRefObject<SVGSVGElement | null>).current = el
    }

    // ---------------------------------------------------------------------------
    // Size & color
    // ---------------------------------------------------------------------------
    const resolvedSize  = size  ?? ctx.size  ?? 'md'
    const resolvedColor = color ?? ctx.color ?? 'currentColor'
    const px = resolveSize(resolvedSize)

    // ---------------------------------------------------------------------------
    // Variant
    // ---------------------------------------------------------------------------
    const resolvedVariant = variant ?? ctx.variant
    const preset = resolvedVariant ? VARIANT_PRESETS[resolvedVariant] : null

    const baseStrokeWidth = ctx.strokeWidth ?? 2
    const resolvedStrokeWidth =
      strokeWidth != null
        ? strokeWidth
        : preset
          ? baseStrokeWidth * preset.multiplier
          : baseStrokeWidth

    const resolvedLinecap  = strokeLinecap  ?? ctx.strokeLinecap  ?? preset?.linecap  ?? 'round'
    const resolvedLinejoin = strokeLinejoin ?? ctx.strokeLinejoin ?? preset?.linejoin ?? 'round'
    const resolvedFill = fill ?? ctx.fill ?? 'none'

    // ---------------------------------------------------------------------------
    // Resolve animate prop (new API) — takes priority over boolean props
    // ---------------------------------------------------------------------------
    const animConfig = resolveAnimConfig(animate ?? ctx.animate)

    // ---------------------------------------------------------------------------
    // Timing — sourced from animate config first, then explicit props, then context
    // ---------------------------------------------------------------------------
    const resolvedSpeed  = animConfig?.speed    ?? speed    ?? ctx.speed    ?? 'normal'
    const resolvedDelay  = animConfig?.delay    ?? delay    ?? ctx.delay
    const resolvedEasing = resolveEasing(
      animConfig?.easing ?? easing ?? ctx.easing,
    )
    const resolvedPlayOnce = animConfig?.playOnce ?? playOnce ?? ctx.playOnce ?? false
    const resolvedTrigger  = animConfig?.trigger  ?? trigger  ?? ctx.trigger  ?? 'auto'
    const resolvedDuration = animConfig?.duration ?? duration ?? ctx.duration
    const resolvedIterationCount = resolvedPlayOnce
      ? 1
      : (animConfig?.iterationCount ?? iterationCount ?? ctx.iterationCount)

    // ---------------------------------------------------------------------------
    // Resolve transforms
    // ---------------------------------------------------------------------------
    const resolvedRotate = rotate ?? ctx.rotate
    const resolvedFlip   = flip   ?? ctx.flip
    const resolvedOpacity = opacity ?? ctx.opacity

    // ---------------------------------------------------------------------------
    // Active animation — animate prop wins; fallback to boolean legacy props
    // ---------------------------------------------------------------------------
    let activeAnim: AnimKey | null = null

    if (animConfig) {
      activeAnim = animConfig.type as AnimKey
    } else {
      // Legacy boolean prop resolution via priority list
      const animFlags: Record<AnimKey, boolean> = {
        spin:         spin         ?? ctx.spin         ?? false,
        pulse:        pulse        ?? ctx.pulse        ?? false,
        bounce:       bounce       ?? ctx.bounce       ?? false,
        shake:        shake        ?? ctx.shake        ?? false,
        wiggle:       wiggle       ?? ctx.wiggle       ?? false,
        ping:         ping         ?? ctx.ping         ?? false,
        blink:        blink        ?? ctx.blink        ?? false,
        float:        float        ?? ctx.float        ?? false,
        heartbeat:    heartbeat    ?? ctx.heartbeat    ?? false,
        flash:        flash        ?? ctx.flash        ?? false,
        tada:         tada         ?? ctx.tada         ?? false,
        jello:        jello        ?? ctx.jello        ?? false,
        swing:        swing        ?? ctx.swing        ?? false,
        rubberBand:   rubberBand   ?? ctx.rubberBand   ?? false,
        flipX:        flipX        ?? ctx.flipX        ?? false,
        breathe:      breathe      ?? ctx.breathe      ?? false,
        draw:         draw         ?? ctx.draw         ?? false,
        erase:        erase        ?? ctx.erase        ?? false,
        trace:        trace        ?? ctx.trace        ?? false,
        neon:         neon         ?? ctx.neon         ?? false,
        glitch:       glitch       ?? ctx.glitch       ?? false,
        wobble:       wobble       ?? ctx.wobble       ?? false,
        roll:         roll         ?? ctx.roll         ?? false,
        zoomIn:       zoomIn       ?? ctx.zoomIn       ?? false,
        fadeUp:       fadeUp       ?? ctx.fadeUp       ?? false,
        flicker:      flicker      ?? ctx.flicker      ?? false,
        hologram:     hologram     ?? ctx.hologram     ?? false,
        electric:     electric     ?? ctx.electric     ?? false,
        ghost:        ghost        ?? ctx.ghost        ?? false,
        levitate:     levitate     ?? ctx.levitate     ?? false,
        burst:        burst        ?? ctx.burst        ?? false,
        heat:         heat         ?? ctx.heat         ?? false,
        crystal:      crystal      ?? ctx.crystal      ?? false,
        springPop:    springPop    ?? ctx.springPop    ?? false,
        decay:        decay        ?? ctx.decay        ?? false,
        magnetPulse:  magnetPulse  ?? ctx.magnetPulse  ?? false,
        wobbleSpring: wobbleSpring ?? ctx.wobbleSpring ?? false,
      }
      activeAnim = ANIM_PRIORITY.find(k => animFlags[k]) ?? null
    }

    const isAnimating    = activeAnim !== null
    const isDrawFamily   = activeAnim !== null && DRAW_ANIMS.has(activeAnim)
    const isWaapi        = activeAnim !== null && WAAPI_ANIMS.has(activeAnim)
    const isCssAnim      = isAnimating && !isDrawFamily && !isWaapi

    if (isCssAnim) ensureAnimStyles()
    if (isDrawFamily) ensureDrawStyles()

    // ---------------------------------------------------------------------------
    // Build base transform (rotate + flip)
    // ---------------------------------------------------------------------------
    const baseTransform = buildBaseTransform(resolvedRotate, resolvedFlip)

    // ---------------------------------------------------------------------------
    // CSS custom properties for animation timing
    // ---------------------------------------------------------------------------
    const computedStyle: Record<string, string | number> = {}

    if (isAnimating && baseTransform) {
      // Trailing space is intentional — CSS var concat: "rotate(90deg) rotate(Xdeg)"
      computedStyle['--ppi-bt'] = baseTransform + ' '
    } else if (baseTransform) {
      computedStyle.transform = baseTransform
    }

    if (isAnimating) {
      const durSource = activeAnim!
      computedStyle['--ppi-dur']   = resolveAnimDuration(durSource, resolvedSpeed, resolvedDuration)
      computedStyle['--ppi-delay'] = resolvedDelay != null ? `${resolvedDelay}ms` : '0s'

      const isOnceByDefault = ONCE_BY_DEFAULT.has(activeAnim!)
        || (isDrawFamily && activeAnim !== 'trace')
      const defaultCount = isOnceByDefault ? 1 : 'infinite'
      computedStyle['--ppi-count'] = String(resolvedIterationCount ?? defaultCount)

      if (resolvedEasing != null) {
        computedStyle['--ppi-ease'] = resolvedEasing
      }
    }

    if (resolvedOpacity != null) {
      computedStyle.opacity = resolvedOpacity
    }

    const finalStyle =
      Object.keys(computedStyle).length > 0
        ? { ...computedStyle, ...style }
        : style

    // ---------------------------------------------------------------------------
    // className composition
    // ---------------------------------------------------------------------------
    const animClasses: string[] = []
    // Draw-family anims use CSS class on the SVG element (`.ppi-draw path { … }` selector pattern)
    if (isCssAnim || isDrawFamily) animClasses.push(animClass(activeAnim!))

    const classParts = [classNamePrefix, className, ...animClasses, classNameSuffix].filter(Boolean)
    const finalClassName = classParts.length > 0 ? classParts.join(' ') : undefined

    // ---------------------------------------------------------------------------
    // Effect: draw / erase / trace — compute per-element path lengths after mount
    // ---------------------------------------------------------------------------
    useEffect(() => {
      if (!isDrawFamily || !svgRef.current) return
      const elements = svgRef.current.querySelectorAll('path, circle, line, polyline, rect, ellipse')
      elements.forEach(el => {
        const len = typeof (el as SVGGeometryElement).getTotalLength === 'function'
          ? (el as SVGGeometryElement).getTotalLength()
          : 100
        const s = (el as SVGElement & { style: CSSStyleDeclaration }).style
        s.setProperty('--ppi-draw-len', String(len))
        if (activeAnim === 'trace') {
          s.setProperty('--ppi-trace-len', String(Math.max(len * 0.3, 20)))
        }
      })
    }, [isDrawFamily, activeAnim])

    // ---------------------------------------------------------------------------
    // Effect: WAAPI physics animations
    // ---------------------------------------------------------------------------
    const waapiAnimRef = useRef<Animation | null>(null)

    useEffect(() => {
      const el = svgRef.current
      if (!el || !isWaapi) {
        waapiAnimRef.current?.cancel()
        waapiAnimRef.current = null
        return
      }

      const durMs = parseFloat(resolveAnimDuration(activeAnim!, resolvedSpeed, resolvedDuration)) * 1000
      const delayMs = resolvedDelay ?? 0
      const isOnce = ONCE_BY_DEFAULT.has(activeAnim!) || resolvedPlayOnce
      const iterations =
        resolvedIterationCount != null
          ? resolvedIterationCount === 'infinite' ? Infinity : Number(resolvedIterationCount)
          : isOnce ? 1 : Infinity

      const keyframes = buildWaapiKeyframes(activeAnim!, baseTransform ?? '')
      const anim = el.animate(keyframes, {
        duration: durMs,
        delay: delayMs,
        iterations,
        fill: isOnce ? 'forwards' : 'none',
        easing: 'linear', // physics is baked into keyframe values
      })

      if (resolvedTrigger !== 'auto') anim.pause()

      waapiAnimRef.current = anim
      return () => { anim.cancel(); waapiAnimRef.current = null }
    }, [activeAnim, isWaapi, resolvedSpeed, resolvedDuration, resolvedDelay,
        resolvedTrigger, resolvedPlayOnce, resolvedIterationCount, baseTransform])

    // ---------------------------------------------------------------------------
    // Effect: trigger — hover / click / visible
    // ---------------------------------------------------------------------------
    useEffect(() => {
      const el = svgRef.current
      if (!el || resolvedTrigger === 'auto' || !isAnimating) return

      const setPlayState = (state: 'running' | 'paused') => {
        el.style.animationPlayState = state
        el.querySelectorAll('path, circle, line, polyline, rect, ellipse').forEach(child => {
          ;(child as HTMLElement).style.animationPlayState = state
        })
        if (state === 'running') waapiAnimRef.current?.play()
        else waapiAnimRef.current?.pause()
      }

      setPlayState('paused')

      let cleanup: () => void

      if (resolvedTrigger === 'hover') {
        let hasPlayed = false
        const onEnter = () => {
          if (resolvedPlayOnce && hasPlayed) return
          hasPlayed = true
          setPlayState('running')
        }
        const onLeave = () => setPlayState('paused')
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
        cleanup = () => {
          el.removeEventListener('mouseenter', onEnter)
          el.removeEventListener('mouseleave', onLeave)
        }
      } else if (resolvedTrigger === 'click') {
        let hasPlayed = false
        const onClick = () => {
          if (resolvedPlayOnce && hasPlayed) return
          hasPlayed = true
          setPlayState('paused')
          void el.getBoundingClientRect()
          setPlayState('running')
        }
        el.addEventListener('click', onClick)
        cleanup = () => el.removeEventListener('click', onClick)
      } else {
        // 'visible'
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setPlayState('running')
              if (resolvedPlayOnce) observer.disconnect()
            } else if (!resolvedPlayOnce) {
              setPlayState('paused')
            }
          },
          { threshold: 0.1 },
        )
        observer.observe(el)
        cleanup = () => observer.disconnect()
      }

      return () => {
        cleanup()
        if (el) {
          el.style.animationPlayState = ''
          el.querySelectorAll('path, circle, line, polyline, rect, ellipse').forEach(child => {
            ;(child as HTMLElement).style.animationPlayState = ''
          })
        }
      }
    }, [resolvedTrigger, resolvedPlayOnce, isAnimating])

    return (
      <svg
        ref={setRef}
        xmlns="http://www.w3.org/2000/svg"
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill={resolvedFill}
        stroke={resolvedColor}
        strokeWidth={resolvedStrokeWidth}
        strokeLinecap={resolvedLinecap}
        strokeLinejoin={resolvedLinejoin}
        className={finalClassName}
        style={finalStyle as React.CSSProperties}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        role={label ? 'img' : undefined}
        {...rest}
      >
        {children}
      </svg>
    )
  },
)
