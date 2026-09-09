import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from '../ui/WhatsAppFloat'
import JsonLd from '../seo/JsonLd'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <Navbar />
      <JsonLd />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
