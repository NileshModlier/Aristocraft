import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, copy, image, imageAlt }) {
  return (
    <section className="relative min-h-[58vh] flex items-end overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover ken-burns"
        width={1920}
        height={900}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/25" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-36">
        <p className="text-[11px] tracking-[0.32em] uppercase text-gold mb-4">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">{title}</h1>
        {copy ? <p className="mt-6 max-w-xl text-mist/90 leading-relaxed">{copy}</p> : null}
        <nav className="mt-8 text-xs tracking-[0.2em] uppercase text-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-3 text-gold/50">/</span>
          <span className="text-ivory">{title}</span>
        </nav>
      </div>
    </section>
  )
}
