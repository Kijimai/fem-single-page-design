import { slide1, slide2, slide3, slide4, slide5 } from "../assets/allAssets"

function useCarousel({ slideIndex, images }) {
  return [images[slideIndex - 1], images[slideIndex], images[slideIndex + 1]]
}

export default useCarousel
