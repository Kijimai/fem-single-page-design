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
import Button from "../Button/Button"

const Carousel = ({ images }) => {
  return (
    <section className="carousel">
      <h2>My Work</h2>
      <Swiper loop slidesPerView={3}>
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="carousel__button-container">
        <Button type="circle" color="dark">
          <img src={prev} alt="prev" />
        </Button>
        <Button type="circle" color="dark">
          <img src={next} alt="next" />
        </Button>
      </div>
    </section>
  )
}

export default Carousel
