import type { IconSize } from '@power-puff/core'

const SIZES: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

interface PropControlsProps {
  size: IconSize
  color: string
  strokeWidth: number
  onSizeChange: (s: IconSize) => void
  onColorChange: (c: string) => void
  onStrokeWidthChange: (w: number) => void
}

export function PropControls({
  size,
  color,
  strokeWidth,
  onSizeChange,
  onColorChange,
  onStrokeWidthChange,
}: PropControlsProps) {
  return (
    <div className="prop-controls">
      <div className="prop-group">
        <label className="prop-label">Size</label>
        <div className="size-buttons">
          {SIZES.map((s) => (
            <button
              key={s}
              className={`size-btn ${size === s ? 'active' : ''}`}
              onClick={() => onSizeChange(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="prop-group">
        <label className="prop-label">Color</label>
        <div className="color-row">
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="color-picker"
            title="Pick icon color"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="color-text"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="prop-group">
        <label className="prop-label">
          <span>Stroke</span>
          <span className="prop-label-value">{strokeWidth}</span>
        </label>
        <input
          type="range"
          min={0.5}
          max={4}
          step={0.25}
          value={strokeWidth}
          onChange={(e) => onStrokeWidthChange(Number(e.target.value))}
          className="stroke-slider"
        />
      </div>
    </div>
  )
}
