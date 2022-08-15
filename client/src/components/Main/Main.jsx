import React from "react"
import Hero from "../Hero/Hero"
import Specialties from "../Feature/Specialties"
import About from "../About/About"
import Carousel from "../Carousel/Carousel"
import Booking from "../Booking/Booking"
import { slide1, slide2, slide3, slide4, slide5 } from "../../assets/allAssets"

const images = [
  { src: slide1, alt: "slide 1" },
  { src: slide2, alt: "slide 2" },
  { src: slide3, alt: "slide 3" },
  { src: slide4, alt: "slide 4" },
  { src: slide5, alt: "slide 5" },
]

const Main = () => {
  return (
    <div className="container">
      <Hero />
      <Specialties />
      <About />
      <Carousel images={images} />
      <Booking />
    </div>
  )
}

export default Main
