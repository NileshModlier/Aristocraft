import { IMAGES, SITE } from '../data/site'
import { WHY_CHOOSE } from '../data/whyChoose'
import { COMPANY, MANUFACTURED_RANGE, SUBSTRATES, TEAM } from '../data/company'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'

const CAPABILITIES = [
  {
    title: 'Surface finishing',
    text: 'Over three decades finishing wood, metal, glass, plastic and veneer with high-quality lacquer systems for seamless, premium results.',
  },
  {
    title: 'PU on MDF & HDHMR',
    text: 'A leading name in PU finishing on MDF and HDHMR panels — plain, designer and CNC-routed 3D shutter panels.',
  },
  {
    title: 'CNC designer shutters',
    text: 'CNC routed designer shutters manufactured and finished in-house so machining and coating remain one controlled sequence.',
  },
  {
    title: 'Louvre & rattan',
    text: 'Louvre shutters and rattan inserted sandwich shutters produced as complete furniture elevations, not afterthought inserts.',
  },
  {
    title: 'Modular furniture',
    text: 'Cabinet shutters, vanity cabinets, TV units, book racks, shoe racks, coffee tables, wine racks and free standing shelving systems.',
  },
  {
    title: 'High-gloss polishing',
    text: 'Polishing experts capable of high-gloss buffed finishes, supported by skilled spray painters and trained surface-preparation specialists.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Aristocraft"
        description="Established August 1993. Aristocraft is a leading name in PU finishing on MDF and HDHMR, with over three decades of surface finishing on wood, metal, glass, plastic and veneer."
        path="/about"
        image={IMAGES.workshop}
      />
      <PageHero
        eyebrow="About us"
        title="Established August 1993. Still defined by the finish."
        copy="Premium finishing quality, technical expertise and dependable delivery — for architects, interior designers and furniture manufacturers."
        image={IMAGES.workshop}
        imageAlt="French Louvre Shutters with PU painting at the Aristocraft works"
      />

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={`Est. ${COMPANY.established}`}
              title={`${SITE.years}+ years in surface finishing.`}
              copy={COMPANY.overviewLead}
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-mist/85 leading-relaxed text-lg">
              {COMPANY.overviewBody}
            </p>
            <p className="mt-5 text-mist/80 leading-relaxed">
              {COMPANY.puLeadership}
            </p>
            <p className="mt-5 text-mist/80 leading-relaxed">
              {COMPANY.lacquer}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="The team"
            title="Painters, preparators, fabricators and polishers — in one plant."
            copy="High-gloss buffed finishes are only possible when spray, preparation, fabrication and polishing sit under the same discipline."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((role, i) => (
              <Reveal key={role} delay={i * 60} className="border border-gold/15 p-6">
                <p className="text-gold text-xs tracking-[0.28em]">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-2xl mt-3">{role}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Manufacture & finish"
            title="From cabinet shutters to free standing shelving."
            copy="Every piece below is manufactured and finished by Aristocraft, using high-quality lacquer systems for a seamless premium surface."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20">
            {MANUFACTURED_RANGE.map((item) => (
              <div key={item} className="bg-ink px-6 py-5 text-mist">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-4">Substrates we finish</p>
            <div className="flex flex-wrap gap-3">
              {SUBSTRATES.map((item) => (
                <span key={item} className="border border-gold px-4 py-2 text-sm tracking-wide text-ivory">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <img src={IMAGES.paint} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="PU finishing"
            title="A leading name in PU on MDF and HDHMR."
            copy="Plain panels, designer panels and CNC-routed 3D shutter panels — coated to a specification architects can stand in front of with a client."
          />
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Capabilities" title="What the works is built to do." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="bg-panel border border-gold/15 p-8">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-mist/80 leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Trade specification"
            title="Why architects and interior designers choose Aristocraft"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="border-l border-gold pl-6">
                <p className="font-display text-2xl text-ivory">{item.title}</p>
                <p className="mt-2 text-sm text-mist/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button to="/process">Manufacturing process</Button>
            <Button to="/contact" variant="outline">Request a quote</Button>
          </div>
        </div>
      </section>
    </>
  )
}
