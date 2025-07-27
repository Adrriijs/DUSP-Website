import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Services from "@/components/services"
import Fleet from "@/components/fleet"
import Clients from "@/components/clients"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Navigation />
      <About />
      <Services />
      <Fleet />
      <Clients />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
