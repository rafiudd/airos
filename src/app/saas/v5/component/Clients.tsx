'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { Container } from 'react-bootstrap'
import { clients } from '../data'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Clients = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay],
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 6 },
    },
    wrapperClass: 'align-items-center',
  }

  return (
    <section className="pt-0">
      <Container className="text-center">
        <p className="heading-color fw-semibold mb-4">Used by the world best companies</p>

        <Swiper {...swiperOptions}>
          {clients.map((client, idx) => (
            <SwiperSlide key={idx}>{client.image && <Image src={client.image} className="grayscale px-sm-4 ps-0" alt="client-img" />}</SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default Clients
