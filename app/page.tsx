import AboutSectionCompanyValues from "@/components/nouveau/about"
import Contact from "@/components/nouveau/contact"
import { Footer } from "@/components/nouveau/footer"
import HeroSectionSimpleCentred from "@/components/nouveau/hero"
import { Navbar1 } from "@/components/nouveau/menu"
import PortfolioProjectStandardGrid from "@/components/nouveau/projectscomplete"
import TestimonialSlider from "@/components/nouveau/testimonials"

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar1 />
      <div id="hero">
        <HeroSectionSimpleCentred />
      </div>
      <div id="about">
        <AboutSectionCompanyValues />
      </div>
      <div id="projects">
        <PortfolioProjectStandardGrid />
      </div>
      <div id="testimonials">
        <TestimonialSlider />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
