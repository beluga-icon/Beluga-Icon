import { useState, useMemo, useRef } from 'react'
import type { IconSize, IconFlip, IconVariant, AnimationSpeed, AnimationType, AnimationTrigger } from '@beluga-icon/core'
import { SearchIcon, CheckIcon, EyeIcon, PenToolIcon, MoveIcon, ZapIcon, RefreshIcon, CopyIcon } from '@beluga-icon/react'
import { icons } from '../data/iconRegistry'
import type { IconEntry } from '../data/iconRegistry'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toPascalCase(str: string): string {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

interface PropState {
  variant?: IconVariant
  size: IconSize
  color: string
  fill: string
  strokeWidth: number
  strokeLinecap: 'butt' | 'round' | 'square'
  strokeLinejoin: 'miter' | 'round' | 'bevel'
  rotate: number
  flip?: IconFlip
  animation: AnimationType | 'none'
  speed: AnimationSpeed
  duration: string
  delay: string
  iterationCount: string
  easing: string
  trigger: AnimationTrigger
  opacity: number
}

const SPRING_EASING_PRESETS = [
  { label: 'default', value: '' },
  { label: 'spring-soft', value: 'spring-soft' },
  { label: 'spring-medium', value: 'spring-medium' },
  { label: 'spring-stiff', value: 'spring-stiff' },
  { label: 'bounce-soft', value: 'bounce-soft' },
  { label: 'elastic', value: 'elastic' },
] as const

const DEFAULTS: PropState = {
  variant: undefined,
  size: '2xl',
  color: 'currentColor',
  fill: 'none',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: 0,
  flip: undefined,
  animation: 'none',
  speed: 'normal',
  duration: '',
  delay: '',
  iterationCount: 'infinite',
  easing: '',
  trigger: 'auto',
  opacity: 1,

}

function buildSnippet(name: string, s: PropState): string {
  const attrs: string[] = []
  if (s.variant) attrs.push(`variant="${s.variant}"`)
  if (s.size !== 'md') attrs.push(`size="${s.size}"`)
  if (s.color !== 'currentColor') attrs.push(`color="${s.color}"`)
  if (s.fill !== 'none') attrs.push(`fill="${s.fill}"`)
  if (s.strokeWidth !== 2) attrs.push(`strokeWidth={${s.strokeWidth}}`)
  if (s.strokeLinecap !== 'round') attrs.push(`strokeLinecap="${s.strokeLinecap}"`)
  if (s.strokeLinejoin !== 'round') attrs.push(`strokeLinejoin="${s.strokeLinejoin}"`)
  if (s.rotate !== 0) attrs.push(`rotate={${s.rotate}}`)
  if (s.flip) attrs.push(`flip="${s.flip}"`)

  if (s.animation !== 'none') {
    attrs.push(s.animation)
    const durNum = s.duration ? parseInt(s.duration, 10) : null
    const delNum = s.delay ? parseInt(s.delay, 10) : null
    if (durNum == null && s.speed !== 'normal') attrs.push(`speed="${s.speed}"`)
    if (durNum != null) attrs.push(`duration={${durNum}}`)
    if (delNum != null && delNum > 0) attrs.push(`delay={${delNum}}`)
    if (s.iterationCount !== 'infinite') attrs.push(`iterationCount={${s.iterationCount}}`)
    if (s.easing) attrs.push(`easing="${s.easing}"`)
    if (s.trigger !== 'auto') attrs.push(`trigger="${s.trigger}"`)
  }
  if (s.opacity !== 1) attrs.push(`opacity={${s.opacity}}`)

  if (attrs.length === 0) return `<${name} />`
  if (attrs.length <= 2) return `<${name} ${attrs.join(' ')} />`
  return `<${name}\n  ${attrs.join('\n  ')}\n/>`
}

const SIZES: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
const ANIM_TYPES = [
  'none', 'spin', 'pulse', 'bounce', 'shake', 'wiggle', 'ping', 'blink', 'float',
  'heartbeat', 'flash', 'tada', 'jello', 'swing', 'rubberBand', 'flipX', 'breathe',
  'draw', 'neon', 'glitch', 'wobble', 'roll', 'zoomIn', 'fadeUp', 'erase', 'trace',
  'flicker', 'hologram', 'electric', 'ghost', 'levitate', 'burst', 'heat', 'crystal',
  'springPop', 'decay', 'magnetPulse', 'wobbleSpring',
] as const

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Playground() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<IconEntry>(icons[0])
  const [state, setState] = useState<PropState>(DEFAULTS)
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  function set<K extends keyof PropState>(key: K, value: PropState[K]) {
    setState(prev => ({ ...prev, [key]: value }))
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return icons
    return icons.filter(i =>
      i.meta.name.includes(q) ||
      i.meta.category.includes(q) ||
      i.meta.tags.some(t => t.includes(q))
    )
  }, [search])

  const iconName = `${toPascalCase(selected.meta.name)}Icon`
  const snippet = buildSnippet(iconName, state)
  const IconComponent = selected.component

  const durNum = state.duration ? parseInt(state.duration, 10) : undefined
  const delNum = state.delay ? parseInt(state.delay, 10) : undefined
  const iterCount: number | 'infinite' | undefined =
    state.iterationCount === 'infinite' ? 'infinite'
    : state.iterationCount ? parseInt(state.iterationCount, 10)
    : undefined

  function handleCopy() {
    navigator.clipboard.writeText(snippet).catch(() => {})
    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="playground">

      {/* ── Icon Picker ─────────────────────────────── */}
      <div className="pg-picker">
        <div className="pg-picker-top">
          <div className="pg-search-wrap">
            <div className="pg-search-icon-wrap">
              <SearchIcon size="xs" />
            </div>
            <input
              className="pg-search-input"
              placeholder="Search icons…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <span className="pg-picker-count">{filtered.length} of {icons.length}</span>
        </div>

        <div className="pg-picker-grid">
          {filtered.map(entry => {
            const Ic = entry.component
            const active = entry.meta.name === selected.meta.name
            return (
              <button
                key={entry.meta.name}
                className={`pg-picker-item${active ? ' active' : ''}`}
                onClick={() => setSelected(entry)}
                title={entry.meta.name}
              >
                <Ic size="sm" />
                <span className="pg-picker-name">{entry.meta.name}</span>
              </button>
            )
          })}
          {filtered.length === 0 && (
            <p className="pg-picker-empty">No icons found</p>
          )}
        </div>
      </div>

      {/* ── Panel ───────────────────────────────────── */}
      <div className="pg-panel">

        {/* ── Orta: kontroller ── */}
        <div className="pg-panel-controls">
          <div className="pg-controls">

            {/* ── Appearance ──────────────────────────── */}
            <div className="pg-section">
              <div className="pg-section-header">
                <span className="pg-section-icon"><EyeIcon size="xs" /></span>
                <span className="pg-section-title">Appearance</span>
                <button className="pg-reset-btn" onClick={() => setState(DEFAULTS)}>
                  <RefreshIcon size="xs" /> Reset
                </button>
              </div>
              <div className="pg-section-grid">

                <div className="pg-group">
                  <span className="pg-label">Variant</span>
                  <div className="pg-row">
                    {(['outline', 'bold', 'sharp'] as IconVariant[]).map(v => (
                      <button
                        key={v}
                        className={`pg-btn${(state.variant ?? 'outline') === v ? ' active' : ''}`}
                        onClick={() => set('variant', v === 'outline' ? undefined : v)}
                      >{v}</button>
                    ))}
                  </div>
                </div>

                <div className="pg-group">
                  <span className="pg-label">Size</span>
                  <div className="pg-row">
                    {SIZES.map(s => (
                      <button
                        key={String(s)}
                        className={`pg-btn${state.size === s ? ' active' : ''}`}
                        onClick={() => set('size', s)}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                <div className="pg-group pg-section-grid--full">
                  <span className="pg-label">Color <em style={{ fontSize: 10, fontStyle: 'normal', color: 'var(--text-3)' }}>(stroke)</em></span>
                  <div className="pg-color-row">
                    <input
                      type="color"
                      className="pg-color-swatch"
                      value={state.color === 'currentColor' ? '#000000' : state.color}
                      onChange={e => set('color', e.target.value)}
                    />
                    <input
                      type="text"
                      className="pg-color-text"
                      value={state.color}
                      onChange={e => set('color', e.target.value)}
                    />
                    <button
                      className={`pg-btn${state.color === 'currentColor' ? ' active' : ''}`}
                      onClick={() => set('color', 'currentColor')}
                    >inherit</button>
                  </div>
                </div>

                <div className="pg-group pg-section-grid--full">
                  <span className="pg-label">Fill <em style={{ fontSize: 10, fontStyle: 'normal', color: 'var(--text-3)' }}>(inside)</em></span>
                  <div className="pg-color-row">
                    <input
                      type="color"
                      className="pg-color-swatch"
                      style={{ opacity: state.fill === 'none' ? 0.4 : 1 }}
                      value={state.fill === 'none' ? '#ff4444' : state.fill}
                      onChange={e => set('fill', e.target.value)}
                    />
                    <input
                      type="text"
                      className="pg-color-text"
                      value={state.fill}
                      onChange={e => set('fill', e.target.value)}
                    />
                    <button
                      className={`pg-btn${state.fill === 'none' ? ' active' : ''}`}
                      onClick={() => set('fill', state.fill === 'none' ? '#ff4444' : 'none')}
                    >none</button>
                  </div>
                </div>

                <div className="pg-group pg-section-grid--full">
                  <span className="pg-label">
                    Opacity <em className="pg-value">{state.opacity}</em>
                  </span>
                  <input
                    type="range"
                    className="stroke-slider"
                    min={0} max={1} step={0.05}
                    value={state.opacity}
                    onChange={e => set('opacity', parseFloat(e.target.value))}
                  />
                </div>

              </div>
            </div>

            {/* ── Stroke ──────────────────────────────── */}
            <div className="pg-section">
              <div className="pg-section-header">
                <span className="pg-section-icon"><PenToolIcon size="xs" /></span>
                <span className="pg-section-title">Stroke</span>
              </div>
              <div className="pg-section-grid">

                <div className="pg-group pg-section-grid--full">
                  <span className="pg-label">
                    Stroke Width <em className="pg-value">{state.strokeWidth}</em>
                  </span>
                  <input
                    type="range"
                    className="stroke-slider"
                    min={0.5} max={4} step={0.25}
                    value={state.strokeWidth}
                    onChange={e => set('strokeWidth', parseFloat(e.target.value))}
                  />
                </div>

                <div className="pg-group">
                  <span className="pg-label">Linecap</span>
                  <div className="pg-row">
                    {(['round', 'butt', 'square'] as const).map(v => (
                      <button
                        key={v}
                        className={`pg-btn${state.strokeLinecap === v ? ' active' : ''}`}
                        onClick={() => set('strokeLinecap', v)}
                      >{v}</button>
                    ))}
                  </div>
                </div>

                <div className="pg-group">
                  <span className="pg-label">Linejoin</span>
                  <div className="pg-row">
                    {(['round', 'miter', 'bevel'] as const).map(v => (
                      <button
                        key={v}
                        className={`pg-btn${state.strokeLinejoin === v ? ' active' : ''}`}
                        onClick={() => set('strokeLinejoin', v)}
                      >{v}</button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* ── Transform ───────────────────────────── */}
            <div className="pg-section">
              <div className="pg-section-header">
                <span className="pg-section-icon"><MoveIcon size="xs" /></span>
                <span className="pg-section-title">Transform</span>
              </div>
              <div className="pg-section-grid">

                <div className="pg-group pg-section-grid--full">
                  <span className="pg-label">
                    Rotate <em className="pg-value">{state.rotate}°</em>
                  </span>
                  <input
                    type="range"
                    className="stroke-slider"
                    min={0} max={359} step={1}
                    value={state.rotate}
                    onChange={e => set('rotate', parseInt(e.target.value, 10))}
                  />
                </div>

                <div className="pg-group pg-section-grid--full">
                  <span className="pg-label">Flip</span>
                  <div className="pg-row">
                    {(['none', 'horizontal', 'vertical', 'both'] as const).map(v => (
                      <button
                        key={v}
                        className={`pg-btn${(!state.flip && v === 'none') || state.flip === v ? ' active' : ''}`}
                        onClick={() => set('flip', v === 'none' ? undefined : v as IconFlip)}
                      >{v}</button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* ── Animation & Effects ─────────────────── */}
            <div className="pg-section">
              <div className="pg-section-header">
                <span className="pg-section-icon"><ZapIcon size="xs" /></span>
                <span className="pg-section-title">Animation & Effects</span>
              </div>
              <div className="pg-section-grid">

                <div className="pg-group pg-section-grid--full">
                  <span className="pg-label">Animation</span>
                  <div className="pg-row" style={{ flexWrap: 'wrap' }}>
                    {ANIM_TYPES.map(v => (
                      <button
                        key={v}
                        className={`pg-btn${state.animation === v ? ' active' : ''}`}
                        onClick={() => set('animation', v as AnimationType | 'none')}
                      >{v}</button>
                    ))}
                  </div>
                </div>

                {state.animation !== 'none' && (
                  <div className="pg-anim-sub">
                    {!state.duration && (
                      <div className="pg-group">
                        <span className="pg-label">Speed</span>
                        <div className="pg-row">
                          {(['slow', 'normal', 'fast'] as AnimationSpeed[]).map(v => (
                            <button
                              key={v}
                              className={`pg-btn${state.speed === v ? ' active' : ''}`}
                              onClick={() => set('speed', v)}
                            >{v}</button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="pg-group">
                      <span className="pg-label">
                        Duration (ms) <em className="pg-value">{state.duration || '—'}</em>
                      </span>
                      <div className="pg-number-wrap">
                        <input
                          type="number"
                          className="pg-color-text"
                          min={0} step={100}
                          placeholder="e.g. 800"
                          value={state.duration}
                          onChange={e => set('duration', e.target.value)}
                        />
                        <div className="pg-number-spin">
                          <button onClick={() => set('duration', String(Math.max(0, (parseInt(state.duration || '0') || 0) + 100)))}>▲</button>
                          <button onClick={() => set('duration', String(Math.max(0, (parseInt(state.duration || '0') || 0) - 100)))}>▼</button>
                        </div>
                      </div>
                    </div>
                    <div className="pg-group">
                      <span className="pg-label">
                        Delay (ms) <em className="pg-value">{state.delay || '0'}</em>
                      </span>
                      <div className="pg-number-wrap">
                        <input
                          type="number"
                          className="pg-color-text"
                          min={0} step={100}
                          placeholder="e.g. 200"
                          value={state.delay}
                          onChange={e => set('delay', e.target.value)}
                        />
                        <div className="pg-number-spin">
                          <button onClick={() => set('delay', String(Math.max(0, (parseInt(state.delay || '0') || 0) + 100)))}>▲</button>
                          <button onClick={() => set('delay', String(Math.max(0, (parseInt(state.delay || '0') || 0) - 100)))}>▼</button>
                        </div>
                      </div>
                    </div>
                    <div className="pg-group">
                      <span className="pg-label">Iterations</span>
                      <div className="pg-row">
                        {(['infinite', '1', '2', '3'] as const).map(v => (
                          <button
                            key={v}
                            className={`pg-btn${state.iterationCount === v ? ' active' : ''}`}
                            onClick={() => set('iterationCount', v)}
                          >{v}</button>
                        ))}
                      </div>
                    </div>
                    <div className="pg-group">
                      <span className="pg-label">Trigger</span>
                      <div className="pg-row">
                        {(['auto', 'hover', 'click', 'visible'] as AnimationTrigger[]).map(v => (
                          <button
                            key={v}
                            className={`pg-btn${state.trigger === v ? ' active' : ''}`}
                            onClick={() => set('trigger', v)}
                          >{v}</button>
                        ))}
                      </div>
                    </div>
                    <div className="pg-group">
                      <span className="pg-label">Easing Preset</span>
                      <div className="pg-row" style={{ flexWrap: 'wrap' }}>
                        {SPRING_EASING_PRESETS.map(p => (
                          <button
                            key={p.value}
                            className={`pg-btn${state.easing === p.value ? ' active' : ''}`}
                            onClick={() => set('easing', p.value)}
                          >{p.label}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* ── Sağ sticky: preview + kod ── */}
        <div className="pg-panel-preview">

          <div className="pg-preview">
            <div className="pg-preview-icon">
              <IconComponent
                size={state.size}
                color={state.color !== 'currentColor' ? state.color : undefined}
                fill={state.fill !== 'none' ? state.fill : undefined}
                strokeWidth={state.strokeWidth}
                strokeLinecap={state.strokeLinecap}
                strokeLinejoin={state.strokeLinejoin}
                rotate={state.rotate !== 0 ? state.rotate : undefined}
                flip={state.flip}
                variant={state.variant}
                spin={state.animation === 'spin' || undefined}
                pulse={state.animation === 'pulse' || undefined}
                bounce={state.animation === 'bounce' || undefined}
                shake={state.animation === 'shake' || undefined}
                wiggle={state.animation === 'wiggle' || undefined}
                ping={state.animation === 'ping' || undefined}
                blink={state.animation === 'blink' || undefined}
                float={state.animation === 'float' || undefined}
                heartbeat={state.animation === 'heartbeat' || undefined}
                flash={state.animation === 'flash' || undefined}
                tada={state.animation === 'tada' || undefined}
                jello={state.animation === 'jello' || undefined}
                swing={state.animation === 'swing' || undefined}
                rubberBand={state.animation === 'rubberBand' || undefined}
                flipX={state.animation === 'flipX' || undefined}
                breathe={state.animation === 'breathe' || undefined}
                neon={state.animation === 'neon' || undefined}
                glitch={state.animation === 'glitch' || undefined}
                wobble={state.animation === 'wobble' || undefined}
                roll={state.animation === 'roll' || undefined}
                zoomIn={state.animation === 'zoomIn' || undefined}
                fadeUp={state.animation === 'fadeUp' || undefined}
                erase={state.animation === 'erase' || undefined}
                trace={state.animation === 'trace' || undefined}
                flicker={state.animation === 'flicker' || undefined}
                hologram={state.animation === 'hologram' || undefined}
                electric={state.animation === 'electric' || undefined}
                ghost={state.animation === 'ghost' || undefined}
                levitate={state.animation === 'levitate' || undefined}
                burst={state.animation === 'burst' || undefined}
                heat={state.animation === 'heat' || undefined}
                crystal={state.animation === 'crystal' || undefined}
                springPop={state.animation === 'springPop' || undefined}
                decay={state.animation === 'decay' || undefined}
                magnetPulse={state.animation === 'magnetPulse' || undefined}
                wobbleSpring={state.animation === 'wobbleSpring' || undefined}
                draw={state.animation === 'draw' || undefined}
                trigger={state.trigger !== 'auto' ? state.trigger : undefined}
                speed={state.speed}
                duration={durNum}
                delay={delNum}
                iterationCount={iterCount}
                easing={state.easing || undefined}
                opacity={state.opacity !== 1 ? state.opacity : undefined}
              />
            </div>
            <div className="pg-preview-meta">
              <span className="pg-preview-name">{iconName}</span>
              <span className="pg-preview-cat">{selected.meta.category}</span>
            </div>
          </div>

          <div className="pg-code-wrap">
            <div className="pg-code-header">
              <span className="pg-code-label">JSX</span>
              <button className="pg-copy-btn" onClick={handleCopy}>
                {copied ? <CheckIcon size="xs" /> : <CopyIcon size="xs" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="pg-code"><code>{snippet}</code></pre>
          </div>

        </div>

      </div>
    </div>
  )
}
