import React, { useState, useRef } from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  next,
  prev,
} from "../../assets/allAssets"
import { Navigation } from "swiper"
import "swiper/css/navigation"

const CarouselButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="btn circle dark">
      {props.children}
    </button>
  )
})

const Carousel = ({ images }) => {
  const nextEl = useRef(null)
  const prevEl = useRef(null)
  return (
    <section className="my-work">
      <h2>My Work</h2>
      <div className="carousel">
        <Swiper
          allowSlideNext
          allowSlidePrev
          modules={[Navigation]}
          navigation={{ nextEl: nextEl.current, prevEl: prevEl.current }}
          onSlideChange={() => console.log("Slide Changed")}
          loop
          slidesPerView={3}
          spaceBetween={15}
          className="mySwiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevEl.current
            swiper.params.navigation.nextEl = nextEl.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide className="swiperSlide" key={index}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="carousel__button-container">
          <CarouselButton ref={prevEl}>
            <img src={prev} alt="prev" />
          </CarouselButton>
          <CarouselButton ref={nextEl}>
            <img src={next} alt="next" />
          </CarouselButton>
        </div>
      </div>
    </section>
  )
}

export default Carousel
