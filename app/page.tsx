"use client"
import AboutSectionCompanyValues from "@/components/nouveau/about"
import Contact from "@/components/nouveau/contact"
import { Footer } from "@/components/nouveau/footer"
import HeroSectionSimpleCentred from "@/components/nouveau/hero"
import { Navbar1 } from "@/components/nouveau/menu"
import PortfolioProjectStandardGrid from "@/components/nouveau/projectscomplete"
import TestimonialSlider from "@/components/nouveau/testimonials"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" })
  }, [])

  return (
    <div className="scroll-smooth">
      <Navbar1 />
      <div id="hero" data-aos="fade-up" className="transition-all duration-700 ease-in-out">
        <HeroSectionSimpleCentred />
      </div>
      <div id="about" data-aos="fade-right" className="transition-all duration-700 ease-in-out">
        <AboutSectionCompanyValues />
      </div>
      <div id="projects" data-aos="fade-up" className="transition-all duration-700 ease-in-out">
        <PortfolioProjectStandardGrid />
      </div>
      <div id="testimonials" data-aos="fade-left" className="transition-all duration-700 ease-in-out">
        <TestimonialSlider />
      </div>
      <div id="contact" data-aos="zoom-in" className="transition-all duration-700 ease-in-out">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

/*
Add these keyframes to your tailwind.config.js or global CSS:
@keyframes fadein { to { opacity: 1; } }
@keyframes slidein-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: none; } }
@keyframes slidein-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
@keyframes slidein-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: none; } }
@keyframes scalein { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: none; } }
*/
