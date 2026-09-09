import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../../data/site'
import { PRODUCTS } from '../../data/products'
import InstagramIcon from '../ui/InstagramIcon'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/15">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-[10px] tracking-[0.4em] text-gold">EST. {SITE.founded}</p>
          <p className="font-display text-3xl tracking-[0.12em] mt-2">ARISTOCRAFT</p>
          <p className="mt-4 text-sm leading-relaxed text-mist/80">{SITE.tagline}</p>
          <p className="mt-6 text-ivory">{SITE.founder.name}</p>
          <p className="mt-1 text-xs text-gold leading-relaxed">{SITE.founder.title}</p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold mb-4">Navigate</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-mist hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold mb-4">Products</p>
          <ul className="space-y-2">
            {PRODUCTS.slice(0, 6).map((product) => (
              <li key={product.id}>
                <Link to={`/products#${product.id}`} className="text-sm text-mist hover:text-ivory">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-mist">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <a href={SITE.address.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-ivory">
                {SITE.address.company}
                <br />
                {SITE.address.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-gold shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-ivory">{SITE.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-gold shrink-0" />
              <span>
                <a href={SITE.emailHref} className="hover:text-ivory block">{SITE.email}</a>
                <a href={SITE.personalEmailHref} className="hover:text-ivory block">{SITE.personalEmail}</a>
              </span>
            </li>
            <li className="flex gap-2">
              <InstagramIcon className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory"
              >
                {SITE.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted tracking-wide">
          <p>© {new Date().getFullYear()} Aristocraft · {SITE.legalName}. All rights reserved.</p>
          <p>Premium shutters & surface finishing · Horamavu, Bangalore</p>
        </div>
      </div>
    </footer>
  )
}
