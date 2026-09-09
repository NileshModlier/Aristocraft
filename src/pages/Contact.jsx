import { useState } from 'react'
import { Check, ExternalLink, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { IMAGES, SITE } from '../data/site'
import { PRODUCTS } from '../data/products'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'
import InstagramIcon from '../components/ui/InstagramIcon'

const INTERESTS = PRODUCTS.map((p) => p.name)

const empty = {
  name: '',
  company: '',
  role: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) next.phone = 'Enter a valid phone number.'
    if (!form.message.trim()) next.message = 'Tell us about the project.'
    return next
  }

  const payload = () =>
    [
      `New enquiry from ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.role && `Role: ${form.role}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.interest && `Interest: ${form.interest}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return
    window.open(SITE.whatsappUrl(payload()), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const mailHref = SITE.enquiryMailto('Project enquiry — Aristocraft', payload())

  return (
    <>
      <Seo
        title="Contact Aristocraft"
        description="Contact Aristocraft in Horamavu, Bangalore. Speak with V Praveen Raj, Founder, Chairman & Chief Executive Officer, on +91 9845045186 or fraundc@gmail.com."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Drawings, samples and deadlines — send them here."
        copy="Trade enquiries are answered by the production desk, not a chatbot."
        image={IMAGES.architecture}
        imageAlt="Custom PU-finished furniture by Aristocraft"
      />

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Reach us"
              title="The works are in Horamavu. The desk is on WhatsApp."
            />
            <div className="border border-gold/20 p-6">
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Primary contact</p>
              <p className="font-display text-3xl mt-2 text-ivory">{SITE.founder.name}</p>
              <p className="mt-2 text-sm text-gold leading-relaxed">{SITE.founder.title}</p>
            </div>
            <ul className="space-y-5 text-mist">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Mobile / WhatsApp</p>
                  <a href={SITE.phoneHref} className="hover:text-ivory">{SITE.phone}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Business email</p>
                  <a href={SITE.emailHref} className="hover:text-ivory">{SITE.email}</a>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold mt-3">Personal email</p>
                  <a href={SITE.personalEmailHref} className="hover:text-ivory">{SITE.personalEmail}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold">WhatsApp</p>
                  <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                    {SITE.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <InstagramIcon className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Instagram</p>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ivory"
                  >
                    {SITE.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold">Works</p>
                  <p className="text-ivory">{SITE.address.company}</p>
                  {SITE.address.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p className="text-sm text-muted mt-2">{SITE.hours}</p>
                </div>
              </li>
            </ul>
            <Button href={SITE.whatsappHref}>Chat on WhatsApp</Button>
          </div>

          <div className="lg:col-span-7 border border-gold/20 bg-ink p-8 md:p-10">
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-charcoal">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="font-display text-4xl">Enquiry opened in WhatsApp</h2>
                <p className="mt-3 text-mist/85">If the window was blocked, use email instead — your message is ready to send.</p>
                <div className="mt-8 flex justify-center gap-4">
                  <Button href={mailHref} variant="outline">Send via email</Button>
                  <Button type="button" onClick={() => setSent(false)} variant="ghost">New enquiry</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2 className="font-display text-3xl mb-6">Project enquiry</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Name" error={errors.name}>
                    <input className="input-field" value={form.name} onChange={set('name')} autoComplete="name" />
                  </Field>
                  <Field label="Company">
                    <input className="input-field" value={form.company} onChange={set('company')} autoComplete="organization" />
                  </Field>
                  <Field label="Role">
                    <select className="input-field" value={form.role} onChange={set('role')}>
                      <option value="">Select</option>
                      <option>Interior designer</option>
                      <option>Architect</option>
                      <option>Kitchen manufacturer</option>
                      <option>Wardrobe manufacturer</option>
                      <option>Furniture manufacturer</option>
                      <option>Builder / contractor</option>
                    </select>
                  </Field>
                  <Field label="Product interest">
                    <select className="input-field" value={form.interest} onChange={set('interest')}>
                      <option value="">Select</option>
                      {INTERESTS.map((name) => (
                        <option key={name}>{name}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input className="input-field" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input className="input-field" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  </Field>
                  <div className="md:col-span-2">
                    <Field label="Project notes" error={errors.message}>
                      <textarea className="input-field min-h-32" value={form.message} onChange={set('message')} />
                    </Field>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button type="submit">Send via WhatsApp</Button>
                  <Button href={mailHref} variant="outline">Or email instead</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-ink pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden border border-gold/20 bg-panel">
            <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px] bg-steel">
              <iframe
                title="Fraun Designer Coatings on Google Maps"
                src={SITE.address.embedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-6 border-t border-gold/20 p-6 md:flex-row md:items-end md:justify-between md:p-8">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold">Works</p>
                <p className="font-display text-3xl mt-2 text-ivory md:text-4xl">Horamavu, Bangalore</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist/85">
                  {SITE.address.company}
                  <br />
                  Shed No. 1, Patel Shamanna Layout
                  <br />
                  Railway Parallel Road, Horamavu Village Post
                  <br />
                  Bangalore - 560043
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={SITE.address.directionsUrl} className="w-full sm:w-auto">
                  <Navigation className="h-3.5 w-3.5" />
                  Get Directions
                </Button>
                <Button href={SITE.address.mapsUrl} variant="outline" className="w-full sm:w-auto">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] tracking-[0.2em] uppercase text-gold">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-400">{error}</span> : null}
    </label>
  )
}
