import { Helmet } from 'react-helmet-async'
import { SITE } from '../../data/site'

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Manufacturer',
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    foundingDate: '1993-08',
    description: SITE.tagline,
    telephone: SITE.phone,
    email: SITE.email,
    hasMap: SITE.address.mapsUrl,
    sameAs: [SITE.instagram, SITE.address.mapsUrl],
    address: {
      '@type': 'PostalAddress',
      name: SITE.address.company,
      streetAddress: 'Shed No. 1, Patel Shamanna Layout, Railway Parallel Road, Horamavu Village Post',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: SITE.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.address.lat,
      longitude: SITE.address.lng,
    },
    areaServed: 'IN',
    founder: {
      '@type': 'Person',
      name: SITE.founder.name,
      jobTitle: SITE.founder.title,
      email: SITE.personalEmail,
      telephone: SITE.phone,
      worksFor: {
        '@type': 'Organization',
        name: SITE.name,
      },
    },
    employee: {
      '@type': 'Person',
      name: SITE.founder.name,
      jobTitle: SITE.founder.title,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        name: SITE.founder.name,
        telephone: SITE.phone,
        email: SITE.email,
        areaServed: 'IN',
        availableLanguage: 'English',
      },
    ],
    knowsAbout: [
      'PU finishing on MDF and HDHMR',
      'CNC routed designer shutters',
      'Louvre shutters',
      'Rattan inserted sandwich shutters',
      'Surface finishing of wood, metal, glass, plastic and veneer',
      'High-gloss buffed finishes',
      'Acrylic shutters',
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
