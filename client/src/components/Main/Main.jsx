import React from "react"
import Hero from "../Hero/Hero"
import Specialties from "../Feature/Specialties"
import About from "../About/About"
import Carousel from "../Carousel/Carousel"
import Booking from "../Booking/Booking"

const Main = () => {
  return (
    <div className="container">
      <Hero />
      <Specialties />
      <About />
      <Carousel />
      <Booking />
    </div>
  )
}

export default Main
