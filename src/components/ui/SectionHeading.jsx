export default function SectionHeading({ eyebrow, title, copy, light = false, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-gold mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-4xl md:text-5xl leading-[1.1] ${light ? 'text-charcoal' : 'text-ivory'}`}>
        {title}
      </h2>
      <div className={`gold-rule mt-6 mb-6 ${align === 'center' ? 'mx-auto w-28' : 'w-28'}`} />
      {copy ? (
        <p className={`text-base leading-relaxed ${light ? 'text-steel' : 'text-mist/90'}`}>
          {copy}
        </p>
      ) : null}
    </div>
  )
}
