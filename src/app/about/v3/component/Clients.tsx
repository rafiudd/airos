'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { defaultSwiperOptions } from '@/states/default-config'
import 'swiper/css'
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'
import Image from 'next/image'

const clientImages = [client3, client7, client5, client4, client1, client2, client3, client6]
const Clients = () => {
  const swiperOptions = {
    ...defaultSwiperOptions,
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 6 },
    },
  }
  return (
    <Swiper {...swiperOptions} wrapperClass="align-items-center">
      {clientImages.map((image, idx) => (
        <SwiperSlide key={idx}>
          <Image src={image} className="grayscale px-sm-3 ps-0" alt="client-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Clients
