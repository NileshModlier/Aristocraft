import { useMemo, useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { PROJECT_SECTIONS } from '../data/projects'
import { PHOTOS, SITE } from '../data/site'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Lightbox from '../components/ui/Lightbox'
import Seo from '../components/seo/Seo'

export default function Projects() {
  const [active, setActive] = useState(null)

  const lightboxItems = useMemo(() => {
    if (!active) return []
    return active.project.images.map((image) => ({
      title: active.project.title,
      caption: `${active.project.material} · ${active.project.finish} · ${active.project.design}`,
      categories: [active.sectionName],
      image: image.src,
      width: image.width,
      height: image.height,
    }))
  }, [active])

  const openLightbox = (project, sectionName, imageIndex) => {
    if (!project.images.length) return
    setActive({ project, sectionName, imageIndex })
  }

  return (
    <>
      <Seo
        title="Projects"
        description="Aristocraft projects across residential interiors, wardrobes, modular kitchens, TV units, luxury furniture and commercial installations — with material, finish and design notes."
        path="/projects"
        image={PHOTOS.flutedHdhmr}
      />
      <PageHero
        eyebrow="Projects"
        title="Work organised the way a specification is written."
        copy="Residential interiors, wardrobes, kitchens, TV units, furniture and commercial lots — each with material, finish and design category. Photography slots are ready for finished-site photographs."
        image={PHOTOS.flutedHdhmr}
        imageAlt="Fluted HDHMR wardrobe doors with PU lacquer finish by Aristocraft"
      />

      <div className="sticky top-[64px] z-30 border-b border-gold/15 nav-blur">
        <div className="mx-auto max-w-6xl px-6 py-3 flex gap-4 overflow-x-auto text-[11px] tracking-[0.18em] uppercase">
          {PROJECT_SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="whitespace-nowrap text-mist hover:text-gold">
              {section.name}
            </a>
          ))}
        </div>
      </div>

      {PROJECT_SECTIONS.map((section, sectionIndex) => (
        <section
          id={section.id}
          key={section.id}
          className={`scroll-mt-32 py-20 ${sectionIndex % 2 === 0 ? 'bg-charcoal' : 'bg-ink'}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionHeading eyebrow={section.eyebrow} title={section.name} copy={section.copy} />
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-1">
              {section.projects.map((project, projectIndex) => (
                <Reveal key={project.id} delay={projectIndex * 60}>
                  <article className="border border-gold/20 bg-panel overflow-hidden">
                    <div className="grid lg:grid-cols-12">
                      <div className="lg:col-span-7 grid sm:grid-cols-2">
                        <PhotoSlots
                          project={project}
                          onOpen={(imageIndex) => openLightbox(project, section.name, imageIndex)}
                        />
                      </div>
                      <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between gap-8 border-t lg:border-t-0 lg:border-l border-gold/20">
                        <div>
                          <p className="text-[11px] tracking-[0.28em] uppercase text-gold">{section.name}</p>
                          <h3 className="font-display text-3xl md:text-4xl mt-2">{project.title}</h3>
                          <div className="gold-rule w-16 my-5" />
                          <dl className="space-y-4">
                            <Meta label="Material used" value={project.material} />
                            <Meta label="Finish type" value={project.finish} />
                            <Meta label="Design category" value={project.design} />
                          </dl>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.images.length ? (
                            <Button type="button" onClick={() => openLightbox(project, section.name, 0)}>
                              View photographs
                            </Button>
                          ) : (
                            <p className="text-xs text-muted leading-relaxed">
                              Finished-site photographs for this project will be catalogued here.
                            </p>
                          )}
                          <Button href={SITE.whatsappHref} variant="outline">
                            Enquire
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-charcoal pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border border-gold/20 p-10 text-center">
            <p className="font-display text-3xl md:text-4xl">Have a drawing that belongs in this book?</p>
            <p className="mt-3 text-mist/85">Send elevations, a sample or a WhatsApp sketch. The desk will answer with a manufacturable quote.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact">Start a project</Button>
              <Button href={SITE.whatsappHref} variant="outline">WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>

      {active && lightboxItems.length ? (
        <Lightbox
          item={lightboxItems[active.imageIndex] ?? lightboxItems[0]}
          index={active.imageIndex}
          total={lightboxItems.length}
          onClose={() => setActive(null)}
          onPrev={() =>
            setActive((prev) => ({
              ...prev,
              imageIndex: (prev.imageIndex - 1 + lightboxItems.length) % lightboxItems.length,
            }))
          }
          onNext={() =>
            setActive((prev) => ({
              ...prev,
              imageIndex: (prev.imageIndex + 1) % lightboxItems.length,
            }))
          }
        />
      ) : null}
    </>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <dt className="text-[11px] tracking-[0.22em] uppercase text-gold">{label}</dt>
      <dd className="mt-1 text-mist/90">{value}</dd>
    </div>
  )
}

function PhotoSlots({ project, onOpen }) {
  const slots = project.images.length
    ? project.images
    : [null, null]

  return slots.map((photo, index) =>
    photo ? (
      <button
        key={`${project.id}-${index}`}
        type="button"
        onClick={() => onOpen(index)}
        className={`group relative min-h-[240px] overflow-hidden bg-steel text-left ${slots.length === 1 ? 'sm:col-span-2' : ''}`}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="sr-only">Open photograph {index + 1} of {project.title}</span>
      </button>
    ) : (
      <div
        key={`${project.id}-slot-${index}`}
        className="relative min-h-[240px] flex flex-col items-center justify-center text-center px-6 py-10 bg-steel/60"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(198,163,90,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(198,163,90,.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <ImageIcon className="relative h-8 w-8 text-gold/55" strokeWidth={1.25} />
        <p className="relative mt-4 text-[11px] tracking-[0.22em] uppercase text-gold">Photography to follow</p>
        <p className="relative mt-2 text-xs text-muted max-w-[14rem]">
          Slot {String(index + 1).padStart(2, '0')} — finished-site photograph
        </p>
      </div>
    ),
  )
}
