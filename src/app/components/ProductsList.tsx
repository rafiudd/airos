'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

import { Col, Container, Row } from 'react-bootstrap'
import { products } from '../data'
import ProductCard from './ProductCard'
import 'swiper/css'

const ProductsList = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 2000,
    },
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  }

  return (
    <section>
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h2 className="text-center text-md-start">Fresh Vibes Pure Energy</h2>
          </Col>

          <Col md={8}>
            <Swiper {...swiperOptions}>
              {products.map((product, idx) => (
                <SwiperSlide key={idx}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductsList
