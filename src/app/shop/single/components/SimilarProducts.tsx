'use client'
import { trendingProducts } from '@/assets/data/products'
import { defaultSwiperOptions } from '@/states/default-config'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import 'swiper/css'
import { Autoplay, FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import ProductCard from './ProductCard'

const SimilarProducts = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  }
  return (
    <section className="pt-0">
      <Container>
        <div className="d-flex justify-content-between mb-5">
          <h2 className="h4 mb-0">Similar products</h2>
          <div className="d-flex gap-1 gap-sm-3 d-xl-none">
            <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
              <BsArrowLeft />
            </Link>
            <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
              <BsArrowRight />
            </Link>
          </div>
        </div>
        <Swiper {...swiperOptions}>
          {trendingProducts.slice(0, 4).map((product, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default SimilarProducts
