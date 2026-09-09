import { useMemo, useState } from 'react'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery'
import { PHOTOS } from '../data/photos'
import PageHero from '../components/ui/PageHero'
import Lightbox from '../components/ui/Lightbox'
import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'
import { SITE } from '../data/site'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [activeId, setActiveId] = useState(null)

  const items = useMemo(
    () =>
      filter === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.categories.includes(filter)),
    [filter],
  )

  const openIndex = items.findIndex((item) => item.id === activeId)
  const active = openIndex >= 0 ? items[openIndex] : null
  const counts = useMemo(() => {
    const map = { All: GALLERY_ITEMS.length }
    GALLERY_CATEGORIES.slice(1).forEach((category) => {
      map[category] = GALLERY_ITEMS.filter((item) => item.categories.includes(category)).length
    })
    return map
  }, [])

  return (
    <>
      <Seo
        title="Project Gallery"
        description="Aristocraft gallery of actual manufactured work — MDF, HDHMR, acrylic, glass, CNC routed, louvre and rattan shutters, plus completed projects."
        path="/gallery"
        image={PHOTOS.flutedHdhmr}
      />
      <PageHero
        eyebrow="Gallery"
        title="Work from the plant. Not a catalogue."
        copy="Photographs of Aristocraft manufacturing and finished elevations — HDHMR, glass, CNC, louvre, rattan and completed furniture."
        image={PHOTOS.flutedHdhmr}
        imageAlt="Fluted HDHMR wardrobe doors with PU lacquer finish by Aristocraft"
      />

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap gap-2 mb-12">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase border transition-colors ${
                  filter === category
                    ? 'border-gold bg-gold text-charcoal'
                    : 'border-gold/25 text-mist hover:border-gold'
                }`}
              >
                {category}
                <span className="ml-2 opacity-70">{counts[category]}</span>
              </button>
            ))}
          </div>

          {items.length === 0 ? (
            <div className="border border-gold/20 px-8 py-20 text-center">
              <p className="font-display text-3xl">Photography for this line is being catalogued.</p>
              <p className="mt-3 text-mist/80 max-w-lg mx-auto">
                Ask the production desk for samples, or WhatsApp a specification and we will send plant photographs of the relevant finish.
              </p>
              <div className="mt-8">
                <Button href={SITE.whatsappHref}>WhatsApp Us</Button>
              </div>
            </div>
          ) : (
            <div className="masonry">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="masonry-item group relative w-full text-left overflow-hidden bg-panel"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 p-5 pr-8">
                    <p className="text-[10px] tracking-[0.22em] uppercase text-gold">{item.categories[0]}</p>
                    <p className="font-display text-2xl mt-1 leading-tight">{item.title}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {active ? (
        <Lightbox
          item={active}
          index={openIndex}
          total={items.length}
          onClose={() => setActiveId(null)}
          onPrev={() => setActiveId(items[(openIndex - 1 + items.length) % items.length].id)}
          onNext={() => setActiveId(items[(openIndex + 1) % items.length].id)}
        />
      ) : null}
    </>
  )
}
