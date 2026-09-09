export const SITE = {
  name: 'Aristocraft',
  legalName: 'Fraun Designer Coatings',
  tagline: 'Premium MDF, HDHMR, Acrylic & Designer Shutters Since 1993',
  shortTagline: 'Surface Finishing, CNC Design & Premium PU Coatings',
  founded: 1993,
  years: new Date().getFullYear() - 1993,
  url: 'https://aristocraft.in',
  founder: {
    name: 'V Praveen Raj',
    title: 'Founder, Chairman & Chief Executive Officer',
  },
  phone: '+91 9845045186',
  phoneHref: 'tel:+919845045186',
  whatsapp: '+91 9845045186',
  whatsappDigits: '919845045186',
  whatsappHref:
    'https://wa.me/919845045186?text=Hello%20Aristocraft%2C%20I%20would%20like%20to%20enquire%20about%20premium%20shutters.',
  email: 'fraundc@gmail.com',
  emailHref: 'mailto:fraundc@gmail.com',
  personalEmail: 'vpraveenraj64@gmail.com',
  personalEmailHref: 'mailto:vpraveenraj64@gmail.com',
  enquiryMailto: (subject, body) =>
    `mailto:fraundc@gmail.com?cc=${encodeURIComponent('vpraveenraj64@gmail.com')}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  instagram: 'https://www.instagram.com/aristocraft.in/',
  instagramHandle: '@aristocraft.in',
  brochurePath: '/aristocraft-brochure.pdf',
  address: {
    company: 'Fraun Designer Coatings',
    lines: [
      'Shed No. 1',
      'Patel Shamanna Layout',
      'Railway Parallel Road',
      'Horamavu Village Post',
      'Bangalore - 560043',
      'India',
    ],
    locality: 'Bangalore',
    region: 'Karnataka',
    postalCode: '560043',
    country: 'India',
    mapsUrl: 'https://maps.app.goo.gl/w3SnsBK4sfQvystRA?g_st=aw',
    placeId: '0x3bae10d1f585b1e7:0x9af7ebc9f1fb3f9f',
    lat: 13.0284924,
    lng: 77.6577738,
  },
  hours: 'Monday – Saturday, 9:00 AM – 6:30 PM',
}

SITE.address.query = [
  SITE.address.company,
  'Shed No. 1',
  'Patel Shamanna Layout',
  'Railway Parallel Road',
  'Horamavu Village Post',
  'Bangalore 560043',
].join(', ')

SITE.address.embedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d77.6577738!3d13.0284924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10d1f585b1e7%3A0x9af7ebc9f1fb3f9f!2sFraun%20Designer%20Coatings!5e0!3m2!1sen!2sin'
SITE.address.directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.query)}`

SITE.whatsappUrl = (text) =>
  `https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(text)}`

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Projects', to: '/projects' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export const AUDIENCE = [
  'Interior designers',
  'Architects',
  'Modular kitchen manufacturers',
  'Wardrobe manufacturers',
  'Furniture manufacturers',
  'Builders & contractors',
]

export const STATS = [
  { value: 'Aug 1993', label: 'Established' },
  { value: `${SITE.years}+`, label: 'Years of finishing' },
  { value: '5', label: 'Substrates' },
  { value: 'PU', label: 'On MDF & HDHMR' },
]

export { img, IMAGES, PHOTOS } from './photos'
