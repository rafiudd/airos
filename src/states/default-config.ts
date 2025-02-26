import type { SwiperOptions } from 'swiper/types'

export const defaultSwiperOptions: SwiperOptions = {
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  freeMode: false,
}
