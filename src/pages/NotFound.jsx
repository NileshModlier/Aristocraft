import Button from '../components/ui/Button'
import Seo from '../components/seo/Seo'

export default function NotFound() {
  return (
    <section className="min-h-svh flex items-center justify-center px-6 text-center">
      <Seo title="Page not found" description="The Aristocraft page you requested does not exist." path="/404" />
      <div>
        <p className="text-gold tracking-[0.3em] text-sm">404</p>
        <h1 className="font-display text-6xl mt-4">This elevation was never drawn.</h1>
        <p className="mt-4 text-mist">The page does not exist. Return to the works.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/">Home</Button>
          <Button to="/contact" variant="outline">Contact</Button>
        </div>
      </div>
    </section>
  )
}
