import { PRODUCTS } from '../data/products'
import { IMAGES, SITE } from '../data/site'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import Seo from '../components/seo/Seo'

export default function Products() {
  return (
    <>
      <Seo
        title="Shutter Products"
        description="MDF, HDHMR, acrylic and glass shutters, cornices, CNC designs, PU paint finishes and custom OEM projects from Aristocraft."
        path="/products"
        image={IMAGES.luxuryKitchen}
      />
      <PageHero
        eyebrow="Product lines"
        title="Eight programmes. One manufacturing standard."
        copy="Specify a material, a profile and a finish. We return a labelled lot that belongs on the drawing."
        image={IMAGES.luxuryKitchen}
        imageAlt="French glass kitchen shutters with PU lacquer by Aristocraft"
      />

      <div className="sticky top-[64px] z-30 border-b border-gold/15 nav-blur">
        <div className="mx-auto max-w-6xl px-6 py-3 flex gap-4 overflow-x-auto text-[11px] tracking-[0.18em] uppercase">
          {PRODUCTS.map((product) => (
            <a key={product.id} href={`#${product.id}`} className="whitespace-nowrap text-mist hover:text-gold">
              {product.name}
            </a>
          ))}
        </div>
      </div>

      {PRODUCTS.map((product, index) => (
        <section
          id={product.id}
          key={product.id}
          className={`scroll-mt-32 py-20 ${index % 2 === 0 ? 'bg-charcoal' : 'bg-ink'}`}
        >
          <div className={`mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center ${index % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
            <Reveal>
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full aspect-[4/3] object-cover"
                width={1200}
                height={900}
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[11px] tracking-[0.32em] uppercase text-gold">{product.eyebrow}</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3">{product.name}</h2>
              <div className="gold-rule w-24 my-6" />
              <p className="text-mist/90 leading-relaxed">{product.description}</p>
              <ul className="mt-6 space-y-2">
                {product.points.map((point) => (
                  <li key={point} className="text-sm text-mist/85 flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span key={app} className="border border-gold/20 px-3 py-1 text-[11px] tracking-wide uppercase text-mist">
                    {app}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact">Enquire about {product.name}</Button>
                <Button href={SITE.whatsappHref} variant="outline">WhatsApp</Button>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  )
}
