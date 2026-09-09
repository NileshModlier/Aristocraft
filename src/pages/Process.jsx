import { PROCESS_STEPS } from '../data/process'
import { IMAGES } from '../data/site'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'

export default function Process() {
  return (
    <>
      <Seo
        title="Manufacturing Process"
        description="Aristocraft manufacturing process: customer design, material procurement, CNC machining, surface preparation, painting, quality control, packaging and delivery."
        path="/process"
        image={IMAGES.cnc}
      />
      <PageHero
        eyebrow="Manufacturing process"
        title="From drawing freeze to the crate on your floor."
        copy="Eight controlled stages. The sequence does not change because the finish is glossy or the deadline is short."
        image={IMAGES.cnc}
        imageAlt="CNC-routed fluted HDHMR wardrobe doors by Aristocraft"
      />

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="The line"
            title="Customer design → Delivery"
            copy="Every programme, including crisis replacements, still walks this path. We compress time by protecting capacity — not by skipping coats."
          />

          <ol className="mt-16 space-y-16">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.n} className="grid lg:grid-cols-12 gap-8 items-center">
                <Reveal className={`lg:col-span-5 ${index % 2 ? 'lg:order-2' : ''}`}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full aspect-[5/4] object-cover"
                    loading="lazy"
                  />
                </Reveal>
                <Reveal delay={80} className={`lg:col-span-7 ${index % 2 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                  <p className="font-display text-6xl text-gold/40 leading-none">{step.n}</p>
                  <h2 className="font-display text-4xl mt-4">{step.title}</h2>
                  <div className="gold-rule w-20 my-5" />
                  <p className="text-mist/90 leading-relaxed max-w-xl">{step.text}</p>
                  {index < PROCESS_STEPS.length - 1 ? (
                    <p className="mt-6 text-[11px] tracking-[0.24em] uppercase text-gold">
                      Next → {PROCESS_STEPS[index + 1].title}
                    </p>
                  ) : null}
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-20 border border-gold/20 p-10 text-center">
            <p className="font-display text-3xl">Ready to put a drawing on the line?</p>
            <div className="mt-6 flex justify-center gap-4">
              <Button to="/contact">Start a project</Button>
              <Button to="/projects" variant="outline">View projects</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
