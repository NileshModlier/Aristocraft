import { useCallback, useRef, useState } from 'react'

export default function BeforeAfter({ before, after, beforeLabel = 'Before', afterLabel = 'After', title, caption }) {
  const [pos, setPos] = useState(52)
  const wrapRef = useRef(null)

  const update = useCallback((clientX) => {
    const box = wrapRef.current?.getBoundingClientRect()
    if (!box) return
    const next = ((clientX - box.left) / box.width) * 100
    setPos(Math.min(96, Math.max(4, next)))
  }, [])

  return (
    <figure className="group">
      <div
        ref={wrapRef}
        className="relative aspect-[16/10] overflow-hidden bg-panel cursor-ew-resize select-none"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          update(e.clientX)
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) update(e.clientX)
        }}
      >
        <img src={after} alt={`${title} after`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt={`${title} before`} className="h-full w-full object-cover" />
        </div>
        <div
          className="absolute top-0 bottom-0 w-px bg-gold"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold bg-charcoal/80 text-[10px] tracking-widest text-gold flex items-center justify-center">
            ⟷
          </div>
        </div>
        <span className="absolute left-4 top-4 bg-charcoal/70 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-ivory">
          {beforeLabel}
        </span>
        <span className="absolute right-4 top-4 bg-charcoal/70 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-ivory">
          {afterLabel}
        </span>
      </div>
      {(title || caption) && (
        <figcaption className="mt-4">
          {title ? <p className="font-display text-2xl text-ivory">{title}</p> : null}
          {caption ? <p className="mt-1 text-sm text-mist/80">{caption}</p> : null}
        </figcaption>
      )}
    </figure>
  )
}
