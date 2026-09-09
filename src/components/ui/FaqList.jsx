import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-gold/15 border-y border-gold/15">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="font-display text-xl md:text-2xl text-ivory">{item.q}</span>
              <ChevronDown className={`h-5 w-5 text-gold shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? <p className="pb-5 text-mist/90 leading-relaxed max-w-3xl">{item.a}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
