import { FaWhatsapp } from 'react-icons/fa'
import { SITE } from '../../data/site'

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Aristocraft on WhatsApp"
      className="whatsapp-float whatsapp-pulse fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp size={32} color="white" aria-hidden="true" />
    </a>
  )
}
