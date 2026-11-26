import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Work from './components/Work'
import Bench from './components/Bench'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      {/* Retro film overlays — purely decorative, never block clicks. */}
      <div
        className="scanlines pointer-events-none fixed inset-0 z-[60] opacity-40 mix-blend-soft-light"
        aria-hidden="true"
      />
      <div className="grain pointer-events-none fixed inset-0 z-[59] opacity-[0.045]" aria-hidden="true" />

      <Nav />

      <main id="top">
        <Hero />
        <Ticker />
        <Work />
        <Bench />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
