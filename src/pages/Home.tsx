import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Logos from '../sections/Logos'
import Problem from '../sections/Problem'
import Audit from '../sections/Audit'
import Solution from '../sections/Solution'
import Results from '../sections/Results'
import Cases from '../sections/Cases'
import Pricing from '../sections/Pricing'

import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import About from '../sections/About'
import Contact from '../sections/Contact'
import FooterCTA from '../sections/FooterCTA'
import Sources from '../sections/Sources'
import Footer from '../sections/Footer'
import StickyCTA from '../sections/StickyCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Logos />
      <Problem />
      <Audit />
      <Solution />
      <Results />
      <Cases />
      <Pricing />

      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <FooterCTA />
      <Sources />
      <Footer />
      <StickyCTA />
    </div>
  )
}
