import { Link } from 'react-router-dom'

const variants = {
  gold:
    'bg-gold text-charcoal hover:bg-gold-soft',
  outline:
    'border border-gold/70 text-ivory hover:bg-gold hover:text-charcoal',
  ghost:
    'text-gold hover:text-gold-soft underline-offset-8 hover:underline',
}

export default function Button({
  children,
  to,
  href,
  variant = 'gold',
  className = '',
  download,
  type = 'button',
  onClick,
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} download={download}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
