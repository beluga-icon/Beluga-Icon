import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type RefObject,
  type SVGProps,
} from 'react'
import { resolveSize } from '@beluga-icon/core'
import type { IconBaseProps, IconFlip, AnimConfig, AnimationType } from '@beluga-icon/core'
import { useIconContext } from '../IconProvider'
import { ensureIconStyles } from '../styles/icon-styles'
import { useTriggerAnimation } from '../hooks/useTriggerAnimation'
import {
  type AnimKey,
  ANIM_PRIORITY,
  ONCE_BY_DEFAULT,
  WAAPI_ANIMS,
  DRAW_ANIMS,
  ANIMATE_ONLY_KEYS,
  SVG_GEOMETRY_SELECTOR,
  animClass,
  ensureAnimStyles,
  resolveAnimDuration,
  resolveEasing,
  ensureDrawStyles,
  buildWaapiKeyframes,
} from '../animations'

// useLayoutEffect fires synchronously after DOM mutations, before the browser paints,
// ensuring path lengths are measured before the first animation frame.
// Falls back to useEffect in SSR environments where the DOM is unavailable.
const useDrawEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Fraction of total path length used as the travelling segment in trace animation.
const TRACE_SEGMENT_RATIO = 0.3
// Minimum segment length so very short paths still produce a visible trace.
const MIN_TRACE_LEN = 20

export interface IconProps
  extends
    IconBaseProps,
    Omit<
      SVGProps<SVGSVGElement>,
      | 'color'
      | 'style'
      | 'strokeWidth'
      | 'rotate'
      | 'speed'
      | 'strokeLinecap'
      | 'strokeLinejoin'
      | 'opacity'
    > {}

const VARIANT_PRESETS = {
  outline: { multiplier: 1, linecap: 'round' as const, linejoin: 'round' as const },
  bold: { multiplier: 1.25, linecap: 'round' as const, linejoin: 'round' as const },
  sharp: { multiplier: 1, linecap: 'butt' as const, linejoin: 'miter' as const },
}

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
function resolveAnimConfig(animate: AnimationType | AnimConfig | undefined): AnimConfig | null {
  if (!animate) return null
  if (typeof animate === 'string') return { type: animate }
  return animate
}

/**
 * Base SVG wrapper used by every generated icon component.
 * Handles size, color, accessibility, transforms, animations, and forwards all native SVG props.
 * Prop resolution order: explicit prop > IconProvider context > variant preset > hardcoded default
 */
export const Icon = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  function Icon(
    {
      animate,
      size,
      color,
      className,
      label,
      strokeWidth,
      style,
      children,
      rotate,
      flip,
      speed,
      duration,
      delay,
      iterationCount,
      easing,
      trigger,
      playOnce,
      fill,
      strokeLinecap,
      strokeLinejoin,
      variant,
      opacity,
      iconStyle,
      styleColors,
      spin,
      pulse,
      bounce,
      shake,
      wiggle,
      ping,
      blink,
      float,
      heartbeat,
      flash,
      tada,
      jello,
      swing,
      rubberBand,
      flipX,
      breathe,
      draw,
      erase,
      trace,
      neon,
      glitch,
      wobble,
      roll,
      zoomIn,
      fadeUp,
      flicker,
      hologram,
      electric,
      ghost,
      levitate,
      burst,
      heat,
      crystal,
      springPop,
      decay,
      magnetPulse,
      wobbleSpring,
      ...rest
    },
    ref,
  ) {
    const ctx = useIconContext()
    const { classNamePrefix, classNameSuffix } = ctx

    const svgRef = useRef<SVGSVGElement>(null)
    const waapiAnimRef = useRef<Animation | null>(null)
    const setRef = useCallback(
      (el: SVGSVGElement | null) => {
        ;(svgRef as RefObject<SVGSVGElement | null>).current = el
        if (typeof ref === 'function') ref(el)
        else if (ref) (ref as RefObject<SVGSVGElement | null>).current = el
      },
      [ref],
    )

    const resolvedSize = size ?? ctx.size ?? 'md'
    const resolvedColor = color ?? ctx.color ?? 'currentColor'
    const px = resolveSize(resolvedSize)

    const resolvedVariant = variant ?? ctx.variant
    const preset = resolvedVariant ? VARIANT_PRESETS[resolvedVariant] : null

    const baseStrokeWidth = ctx.strokeWidth ?? 2
    const resolvedStrokeWidth =
      strokeWidth != null
        ? strokeWidth
        : preset
          ? baseStrokeWidth * preset.multiplier
          : baseStrokeWidth

    const resolvedLinecap = strokeLinecap ?? ctx.strokeLinecap ?? preset?.linecap ?? 'round'
    const resolvedLinejoin = strokeLinejoin ?? ctx.strokeLinejoin ?? preset?.linejoin ?? 'round'
    const resolvedFill = fill ?? ctx.fill ?? 'none'

    const animConfig = resolveAnimConfig(animate ?? ctx.animate)

    const resolvedSpeed = animConfig?.speed ?? speed ?? ctx.speed ?? 'normal'
    const resolvedDelay = animConfig?.delay ?? delay ?? ctx.delay
    const resolvedEasing = resolveEasing(animConfig?.easing ?? easing ?? ctx.easing)
    const resolvedPlayOnce = animConfig?.playOnce ?? playOnce ?? ctx.playOnce ?? false
    const resolvedTrigger = animConfig?.trigger ?? trigger ?? ctx.trigger ?? 'auto'
    const resolvedDuration = animConfig?.duration ?? duration ?? ctx.duration
    const resolvedIterationCount = resolvedPlayOnce
      ? 1
      : (animConfig?.iterationCount ?? iterationCount ?? ctx.iterationCount)

    const resolvedRotate = rotate ?? ctx.rotate
    const resolvedFlip = flip ?? ctx.flip
    const resolvedOpacity = opacity ?? ctx.opacity

    let activeAnim: AnimKey | null = null

    if (animConfig) {
      activeAnim = animConfig.type as AnimKey
    } else {
      const legacyProps: Partial<Record<AnimKey, boolean | undefined>> = {
        spin,
        pulse,
        bounce,
        shake,
        wiggle,
        ping,
        blink,
        float,
        heartbeat,
        flash,
        tada,
        jello,
        swing,
        rubberBand,
        flipX,
        breathe,
        draw,
        erase,
        trace,
        neon,
        glitch,
        wobble,
        roll,
        zoomIn,
        fadeUp,
        flicker,
        hologram,
        electric,
        ghost,
        levitate,
        burst,
        heat,
        crystal,
        springPop,
        decay,
        magnetPulse,
        wobbleSpring,
      }
      const ctxProps = ctx as Partial<Record<AnimKey, boolean>>
      const animFlags = Object.fromEntries(
        ANIM_PRIORITY.map((k) => [
          k,
          ANIMATE_ONLY_KEYS.has(k) ? false : (legacyProps[k] ?? ctxProps[k] ?? false),
        ]),
      ) as Record<AnimKey, boolean>
      activeAnim = ANIM_PRIORITY.find((k) => animFlags[k]) ?? null
    }

    const isAnimating = activeAnim !== null
    const isDrawFamily = activeAnim !== null && DRAW_ANIMS.has(activeAnim)
    const isWaapi = activeAnim !== null && WAAPI_ANIMS.has(activeAnim)
    const isCssAnim = isAnimating && !isDrawFamily && !isWaapi

    if (isCssAnim) ensureAnimStyles()
    if (isDrawFamily) ensureDrawStyles()

    const baseTransform = buildBaseTransform(resolvedRotate, resolvedFlip)

    const computedStyle: Record<string, string | number> = {}

    if (isAnimating && baseTransform) {
      // Trailing space is intentional — CSS var concat: "rotate(90deg) rotate(Xdeg)"
      computedStyle['--ppi-bt'] = baseTransform + ' '
    } else if (baseTransform) {
      computedStyle.transform = baseTransform
    }

    if (isAnimating && activeAnim) {
      computedStyle['--ppi-dur'] = resolveAnimDuration(activeAnim, resolvedSpeed, resolvedDuration)
      computedStyle['--ppi-delay'] = resolvedDelay != null ? `${resolvedDelay}ms` : '0s'

      const isOnceByDefault =
        ONCE_BY_DEFAULT.has(activeAnim) || (isDrawFamily && activeAnim !== 'trace')
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
      Object.keys(computedStyle).length > 0 ? { ...computedStyle, ...style } : style

    if (iconStyle) ensureIconStyles()

    const animClasses: string[] = []
    // Draw-family anims use CSS class on the SVG element (`.ppi-draw path { … }` selector pattern)
    if ((isCssAnim || isDrawFamily) && activeAnim) animClasses.push(animClass(activeAnim))

    const classParts = [classNamePrefix, className, ...animClasses, classNameSuffix].filter(Boolean)
    const finalClassName = classParts.length > 0 ? classParts.join(' ') : undefined

    useDrawEffect(() => {
      if (!isDrawFamily || !svgRef.current) return
      const elements = svgRef.current.querySelectorAll(SVG_GEOMETRY_SELECTOR)
      elements.forEach((el) => {
        const geom = el as SVGGeometryElement
        const len =
          typeof geom.getTotalLength === 'function'
            ? geom.getTotalLength()
            : (console.warn(
                `[beluga-icon] Could not measure path length for <${el.tagName}>; defaulting to 100.`,
              ),
              100)
        const s = (el as SVGElement & { style: CSSStyleDeclaration }).style
        s.setProperty('--ppi-draw-len', String(len))
        if (activeAnim === 'trace') {
          const traceLen = Math.max(len * TRACE_SEGMENT_RATIO, MIN_TRACE_LEN)
          s.setProperty('--ppi-trace-len', String(traceLen))
          // Pre-compute the negative offset so @keyframes doesn't need calc().
          // calc(-1 * var()) inside @keyframes has uneven browser support.
          s.setProperty('--ppi-trace-offset', String(-len))
        }
      })
    }, [isDrawFamily, activeAnim])

    useEffect(() => {
      const el = svgRef.current
      if (!el || !isWaapi) {
        waapiAnimRef.current?.cancel()
        waapiAnimRef.current = null
        return
      }

      const durMs =
        parseFloat(resolveAnimDuration(activeAnim!, resolvedSpeed, resolvedDuration)) * 1000
      const delayMs = resolvedDelay ?? 0
      const isOnce = ONCE_BY_DEFAULT.has(activeAnim!) || resolvedPlayOnce
      const iterations =
        resolvedIterationCount != null
          ? resolvedIterationCount === 'infinite'
            ? Infinity
            : Number(resolvedIterationCount)
          : isOnce
            ? 1
            : Infinity

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
      return () => {
        anim.cancel()
        waapiAnimRef.current = null
      }
    }, [
      activeAnim,
      isWaapi,
      resolvedSpeed,
      resolvedDuration,
      resolvedDelay,
      resolvedTrigger,
      resolvedPlayOnce,
      resolvedIterationCount,
      baseTransform,
    ])

    useTriggerAnimation(svgRef, waapiAnimRef, resolvedTrigger, resolvedPlayOnce, isAnimating)

    const svgEl = (
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

    if (iconStyle) {
      const colorVars = styleColors
        ? Object.fromEntries(Object.entries(styleColors).map(([k, v]) => [`--ppi-c-${k}`, v]))
        : undefined
      return (
        <span
          className={`ppi-style-wrap ppi-style-${iconStyle}`}
          style={colorVars as React.CSSProperties}
        >
          {svgEl}
        </span>
      )
    }

    return svgEl
  },
)
