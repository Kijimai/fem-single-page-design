import React, { useState, useMemo } from "react"
import Button from "../Button/Button"
import useCarousel from "../../hooks/useCarousel"
import { prev, next } from "../../assets/allAssets"

function Carousel({ images }) {
  const [slideIndex, setSlideIndex] = useState(2)
  const imageLength = images.length
  const carouselDisplay = useCarousel({ images, slideIndex })

  const onNext = (currentIndex) => {
    console.log(imageLength, currentIndex)
    if (currentIndex === imageLength - 1) {
      return setSlideIndex(0)
    }
    setSlideIndex(slideIndex + 1)
  }

  const onPrevious = (currentIndex) => {
    console.log(imageLength, currentIndex)
    if (currentIndex <= 0) {
      return setSlideIndex(imageLength - 1)
    }
    setSlideIndex(slideIndex - 1)
  }

  // If images prop is not an array or if it is empty, return null
  if (!Array.isArray(images) || imageLength <= 0) {
    return null
  }

  return (
    <section>
      <div className="carousel">
        <h2>My work</h2>
        <div className="carousel__inner-container">
          <div className="carousel__image-slides">
            {carouselDisplay.map((item, index) => {
              return <img key={index} src={item.src} alt={item.alt} />
            })}
          </div>
          <div className="carousel__btn-container">
            <Button
              onClick={() => onPrevious(slideIndex)}
              color="dark"
              type="circle"
            >
              <img src={prev} alt="previous" />
            </Button>
            <Button
              onClick={() => onNext(slideIndex)}
              color="dark"
              type="circle"
            >
              <img src={next} alt="next" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
