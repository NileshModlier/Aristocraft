import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ item, index, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[80] bg-charcoal/96 flex items-center justify-center p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button type="button" onClick={onClose} className="absolute top-5 right-5 text-ivory hover:text-gold" aria-label="Close gallery">
        <X className="h-7 w-7" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-2 md:left-6 text-ivory hover:text-gold p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-10 w-10" strokeWidth={1.25} />
      </button>
      <figure className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          className="w-full max-h-[76vh] object-contain mx-auto"
        />
        <figcaption className="mt-5 text-center max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            {item.categories?.[0] ? ` · ${item.categories[0]}` : ''}
          </p>
          <p className="font-display text-3xl md:text-4xl mt-2">{item.title}</p>
          {item.caption ? <p className="text-sm text-mist/85 mt-3 leading-relaxed">{item.caption}</p> : null}
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-2 md:right-6 text-ivory hover:text-gold p-2"
        aria-label="Next image"
      >
        <ChevronRight className="h-10 w-10" strokeWidth={1.25} />
      </button>
    </div>
  )
}
