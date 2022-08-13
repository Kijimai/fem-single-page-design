import React, { useState } from "react"
import Button from "../Button/Button"
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  prev,
  next,
} from "../../assets/allAssets"

const images = [
  { src: slide1, alt: "slide 1" },
  { src: slide2, alt: "slide 2" },
  { src: slide3, alt: "slide 3" },
  { src: slide4, alt: "slide 4" },
  { src: slide5, alt: "slide 5" },
]

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(2)

  const changeSlide = () => {}

  return (
    <section>
      <div className="carousel">
        <div className="carousel__image-slides">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="image"
              />
            )
          })}
        </div>
        <div className="carousel__btn-container">
          <Button color="dark" type="circle">
            <img src={prev} alt="previous" />
          </Button>
          <Button color="dark" type="circle">
            <img src={next} alt="next" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
