import AboutSectionCompanyValues from "@/components/nouveau/about"
import Contact from "@/components/nouveau/contact"
import { Footer } from "@/components/nouveau/footer"
import HeroSectionSimpleCentred from "@/components/nouveau/hero"
import { Navbar1 } from "@/components/nouveau/menu"
import PortfolioProjectStandardGrid from "@/components/nouveau/projectscomplete"
import TestimonialSlider from "@/components/nouveau/testimonials"

export default function Home() {
  return (
    <div>
      <Navbar1 />
      <HeroSectionSimpleCentred />
      <AboutSectionCompanyValues />
      <PortfolioProjectStandardGrid />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  )
}
