import React, { useState } from "react"
import { slide1, slide2, slide3, slide4, slide5 } from "../../assets/allAssets"

const images = [
  { img: slide1, alt: "slide 1" },
  { img: slide2, alt: "slide 2" },
  { img: slide3, alt: "slide 3" },
  { img: slide4, alt: "slide 4" },
  { img: slide5, alt: "slide 5" },
]

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(2)

  const changeSlide = () => {}

  return (
    <section>
      <div className="carousel">This is the carousel</div>
    </section>
  )
}

export default Carousel
