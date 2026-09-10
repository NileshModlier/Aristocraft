import { Analytics } from '@vercel/analytics/react'
import { useLocation } from 'react-router-dom'

const KNOWN_ROUTES = [
  '/',
  '/about',
  '/products',
  '/gallery',
  '/projects',
  '/process',
  '/contact',
  '/404',
]

export default function VercelAnalytics() {
  const { pathname } = useLocation()
  const route = KNOWN_ROUTES.includes(pathname) ? pathname : '/404'

  return (
    <Analytics
      framework="react"
      mode={import.meta.env.PROD ? 'production' : 'development'}
      route={route}
      path={pathname}
      beforeSend={(event) => {
        if (!event.url) return event
        try {
          const url = new URL(event.url)
          url.search = ''
          url.hash = ''
          return { ...event, url: url.toString() }
        } catch {
          return event
        }
      }}
    />
  )
}
