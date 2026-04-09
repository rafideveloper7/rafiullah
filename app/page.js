import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { fetchPortfolioContent } from '../lib/fetchPortfolioContent'

export default async function Home() {
  const content = await fetchPortfolioContent()

  return (
    <main className="relative overflow-hidden">
      <Hero content={content} />
      <About content={content} />
      <Services services={content.services} />
      <Projects projects={content.projects} />
      <Testimonials testimonials={content.testimonials} />
      <Contact content={content} />
      <FloatingWhatsApp phoneNumber={content.site.phone} />
    </main>
  )
}
