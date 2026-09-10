import { track } from '@vercel/analytics'

export const CONVERSION_EVENTS = {
  whatsapp: 'WhatsApp Click',
  brochure: 'Brochure Download',
  instagram: 'Instagram Visit',
  inquiry: 'Inquiry Submit',
}

function currentPage() {
  if (typeof window === 'undefined') return '/'
  const { origin, pathname, hash } = window.location
  return `${origin}${pathname}${hash}`.slice(0, 255)
}

export function trackConversion(name) {
  try {
    track(name, {
      page: currentPage(),
      timestamp: new Date().toISOString(),
    })
  } catch {
    // Analytics must never interrupt a conversion.
  }
}

export function conversionFromHref(href) {
  if (!href) return null
  const value = href.toLowerCase()
  if (value.includes('wa.me/') || value.includes('api.whatsapp.com')) return CONVERSION_EVENTS.whatsapp
  if (value.includes('aristocraft-brochure')) return CONVERSION_EVENTS.brochure
  if (value.includes('instagram.com')) return CONVERSION_EVENTS.instagram
  return null
}
