'use client'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { clients } from '../data'

const Clients = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay],
    autoplay: { delay: 2000 },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 },
    },
    wrapperClass: 'align-items-center',
  }

  return (
    <Swiper {...swiperOptions}>
      {clients.map((client, idx) => (
        <SwiperSlide key={idx}>{client.image && <Image src={client.image} className="px-xl-3" alt="client-img" />}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Clients
