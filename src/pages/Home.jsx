import { ArrowDown, Download } from 'lucide-react'
import { AUDIENCE, IMAGES, SITE, STATS } from '../data/site'
import { FEATURED_PRODUCTS } from '../data/products'
import { TESTIMONIALS, FAQS } from '../data/testimonials'
import { WHY_CHOOSE } from '../data/whyChoose'
import { PROCESS_STEPS } from '../data/process'
import { COMPANY, MANUFACTURED_RANGE, SUBSTRATES } from '../data/company'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import FaqList from '../components/ui/FaqList'
import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Aristocraft | Premium MDF, HDHMR, Acrylic & Designer Shutters Since 1993"
        description="Established August 1993. Three decades of surface finishing on wood, metal, glass, plastic and veneer. Premium PU coatings on MDF and HDHMR, CNC designer shutters, louvre and rattan programmes."
        path="/"
      />

      <section className="relative min-h-svh flex items-end overflow-hidden grain">
        <img
          src={IMAGES.hero}
          alt="Fluted HDHMR wardrobe doors with PU lacquer finish by Aristocraft"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/25" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold mb-5">
            Surface finishing · Est. {COMPANY.established}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-5xl">
            Premium MDF, HDHMR, Acrylic &amp;{' '}
            <span className="italic text-gold-soft">Designer Shutters</span>
            {' '}Since 1993
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mist/90 leading-relaxed">
            {COMPANY.heroSubheading}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact">Request Quote</Button>
            <Button to="/gallery" variant="outline">View Gallery</Button>
            <Button href={SITE.whatsappHref} variant="ghost">WhatsApp Us</Button>
          </div>
          <a href="#overview" className="mt-16 inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-mist hover:text-gold">
            <ArrowDown className="h-4 w-4" />
            Company overview
          </a>
        </div>
      </section>

      <section className="border-y border-gold/15 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl text-gold">{stat.value}</p>
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="overview" className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={IMAGES.workshop}
                alt="French Louvre Shutters with PU painting at the Aristocraft works"
                className="w-full aspect-[4/5] object-cover"
                width={900}
                height={1125}
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-4 hidden md:block bg-gold text-charcoal px-8 py-6 max-w-[220px]">
                <p className="font-display text-4xl leading-none">{SITE.years}+</p>
                <p className="text-[11px] tracking-[0.18em] uppercase mt-2">Years of surface finishing excellence</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Company overview"
              title="Three decades of finishing — on wood, metal, glass, plastic and veneer."
              copy={COMPANY.overviewLead}
            />
            <p className="mt-6 text-mist/80 leading-relaxed">
              {COMPANY.overviewBody}
            </p>
            <p className="mt-4 text-mist/80 leading-relaxed">
              {COMPANY.puLeadership} {COMPANY.lacquer}
            </p>
            <p className="mt-8 text-[11px] tracking-[0.22em] uppercase text-gold">We manufacture and finish</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {MANUFACTURED_RANGE.map((item) => (
                <span key={item} className="border border-gold/25 px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase text-mist">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {SUBSTRATES.map((item) => (
                <span key={item} className="bg-gold/10 px-3 py-1.5 text-[11px] tracking-[0.16em] uppercase text-gold">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {AUDIENCE.map((item) => (
                <span key={item} className="text-[11px] tracking-[0.14em] uppercase text-muted">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Button to="/about" variant="outline">About Aristocraft</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Specification partners"
              title="Why architects and interior designers choose Aristocraft"
              copy="Premium finishing quality, technical expertise and dependable delivery — the reasons practices return with the next elevation."
            />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="border border-gold/15 bg-panel p-8 hover:border-gold/45 transition-colors">
                <p className="text-gold text-xs tracking-[0.28em]">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-2xl mt-4">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/80">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Featured products"
              title="The shutter lines we are known for."
              copy="Eight manufactured programmes — from moisture-resistant kitchen cores to glass display fronts and PU statement walls."
            />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <Reveal key={product.id} delay={i * 80} className="group relative overflow-hidden min-h-[380px]">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-end p-8">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-gold">{product.eyebrow}</p>
                  <h3 className="font-display text-4xl mt-2">{product.name}</h3>
                  <p className="mt-3 text-sm text-mist/90 max-w-md">{product.summary}</p>
                  <Button to={`/products#${product.id}`} variant="ghost" className="mt-4 !px-0 justify-start">
                    View specifications
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/products">All product lines</Button>
            <Button to="/projects" variant="outline">View projects</Button>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img src={IMAGES.darkInterior} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Manufacturing"
              title="Eight steps. No skipped coats."
              copy="From customer design to labelled delivery — the same sequence whether the lot is twelve feature shutters or twelve hundred OEM doors."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="bg-ink p-6">
                <p className="text-gold font-display text-2xl">{step.n}</p>
                <p className="mt-3 text-sm tracking-wide">{step.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/process" variant="outline">See the process</Button>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 text-charcoal">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Trade voices"
              title="Specified by the people who cannot afford a second mock-up."
            />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, i) => (
              <Reveal key={item.name} delay={i * 90} className="border border-charcoal/10 p-8 bg-white">
                <p className="text-gold tracking-[0.3em] text-xs">★★★★★</p>
                <blockquote className="mt-4 font-display text-xl leading-snug text-ink">“{item.quote}”</blockquote>
                <p className="mt-6 text-sm font-medium">{item.name}</p>
                <p className="text-xs text-steel mt-1">{item.role}, {item.firm}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions from the specification desk." />
          </div>
          <div className="lg:col-span-8">
            <FaqList items={FAQS} />
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden grain">
        <img src={IMAGES.architecture} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-gold">Start a programme</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">Send drawings. Get a manufacturable quote.</h2>
          <p className="mt-5 text-mist/90">WhatsApp a sketch, email a CAD pack, or book a plant visit in Horamavu, Bangalore.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact">Enquire now</Button>
            <Button href={SITE.whatsappHref} variant="outline">WhatsApp</Button>
            <Button href={SITE.brochurePath} download variant="ghost">
              <Download className="h-4 w-4" />
              Brochure
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
