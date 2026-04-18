import { useEffect, type RefObject } from 'react'
import type { AnimationTrigger } from '@beluga-icon/core'
import { SVG_GEOMETRY_SELECTOR } from '../animations'

/**
 * Wires up hover / click / visible trigger behaviour for an animated SVG element.
 * When trigger is 'auto' or the element is not yet mounted this is a no-op.
 */
export function useTriggerAnimation(
  elRef: RefObject<SVGSVGElement | null>,
  waapiAnimRef: RefObject<Animation | null>,
  trigger: AnimationTrigger,
  playOnce: boolean,
  isAnimating: boolean,
): void {
  // Refs are stable across renders — omitting them from deps is intentional.
  // Only reactive values (trigger, playOnce, isAnimating) should re-run the effect.
  useEffect(() => {
    const el = elRef.current
    if (!el || trigger === 'auto' || !isAnimating) return

    const setPlayState = (state: 'running' | 'paused') => {
      el.style.animationPlayState = state
      el.querySelectorAll(SVG_GEOMETRY_SELECTOR).forEach((child) => {
        ;(child as SVGElement).style.animationPlayState = state
      })
      if (state === 'running') waapiAnimRef.current?.play()
      else waapiAnimRef.current?.pause()
    }

    const clearPlayState = () => {
      el.style.animationPlayState = ''
      el.querySelectorAll(SVG_GEOMETRY_SELECTOR).forEach((child) => {
        ;(child as SVGElement).style.animationPlayState = ''
      })
    }

    setPlayState('paused')

    let cleanup: () => void

    if (trigger === 'hover') {
      let hasPlayed = false
      const onEnter = () => {
        if (playOnce && hasPlayed) return
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
    } else if (trigger === 'click') {
      let hasPlayed = false
      const onClick = () => {
        if (playOnce && hasPlayed) return
        hasPlayed = true
        setPlayState('paused')
        void el.getBoundingClientRect() // force reflow so CSS animation restarts cleanly
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
            if (playOnce) observer.disconnect()
          } else if (!playOnce) {
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
      clearPlayState()
    }
  }, [trigger, playOnce, isAnimating])
}
