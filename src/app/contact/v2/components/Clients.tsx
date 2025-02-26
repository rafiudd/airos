'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'
import Image from 'next/image'

const clients = [client5, client1, client2, client3, client4, client6, client7]

const Clients = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay],
    loop: false,
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
    },
  }
  return (
    <Swiper {...swiperOptions} wrapperClass="align-items-center">
      {clients.map((image, idx) => (
        <SwiperSlide key={idx}>
          <Image src={image} alt="client-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Clients
