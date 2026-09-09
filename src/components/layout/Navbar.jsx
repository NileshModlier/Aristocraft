import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../data/site'
import Button from '../ui/Button'
import InstagramIcon from '../ui/InstagramIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled || open ? 'nav-blur border-b border-gold/15' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group" aria-label="Aristocraft home" onClick={() => setOpen(false)}>
          <span className="block text-[10px] tracking-[0.45em] text-gold">EST. {SITE.founded}</span>
          <span className="font-display text-2xl tracking-[0.18em] text-ivory group-hover:text-gold transition-colors">
            ARISTOCRAFT
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[11px] tracking-[0.18em] uppercase transition-colors ${isActive ? 'text-gold' : 'text-mist hover:text-ivory'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aristocraft on Instagram"
            className="social-icon p-2 text-mist"
          >
            <InstagramIcon className="h-[22px] w-[22px]" />
          </a>
          <Button href={SITE.brochurePath} download variant="outline" className="!px-4 !py-2">
            <Download className="h-3.5 w-3.5" />
            Brochure
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden text-ivory"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-gold/15 bg-charcoal min-h-[calc(100svh-4.5rem)] px-6 py-10">
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-4xl ${isActive ? 'text-gold' : 'text-ivory'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-4">
            <div className="border border-gold/20 p-5">
              <p className="text-ivory">{SITE.founder.name}</p>
              <p className="mt-1 text-xs text-gold leading-relaxed">{SITE.founder.title}</p>
              <a href={SITE.phoneHref} className="mt-4 block text-sm text-mist hover:text-ivory">{SITE.phone}</a>
              <a href={SITE.emailHref} className="block text-sm text-mist hover:text-ivory">{SITE.email}</a>
              <a href={SITE.personalEmailHref} className="block text-sm text-mist hover:text-ivory">{SITE.personalEmail}</a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 text-sm text-mist hover:text-ivory"
              >
                <InstagramIcon />
                {SITE.instagramHandle}
              </a>
            </div>
            <Button href={SITE.brochurePath} download>
              <Download className="h-4 w-4" />
              Download brochure
            </Button>
            <Button href={SITE.whatsappHref} variant="outline">
              WhatsApp enquiry
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
