import { Helmet } from 'react-helmet-async'
import { SITE } from '../../data/site'

export default function Seo({
  title,
  description,
  path = '/',
  image = '/images/fluted-hdhmr-wardrobe-doors.jpg',
}) {
  const fullTitle = title.includes('Aristocraft')
    ? title
    : `${title} | Aristocraft`
  const url = `${SITE.url}${path}`
  const ogImage = image.startsWith('http') ? image : `${SITE.url}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />
      <meta property="business:contact_data:street_address" content="Fraun Designer Coatings, Shed No. 1, Patel Shamanna Layout, Railway Parallel Road, Horamavu Village Post" />
      <meta property="business:contact_data:locality" content="Bangalore" />
      <meta property="business:contact_data:region" content="Karnataka" />
      <meta property="business:contact_data:postal_code" content="560043" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:email" content={SITE.email} />
      <meta property="business:contact_data:phone_number" content={SITE.phone} />
      <meta property="business:contact_data:website" content={SITE.url} />
      <link rel="me" href={SITE.instagram} />
      <meta property="og:see_also" content={SITE.instagram} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
