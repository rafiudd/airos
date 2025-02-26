'use client'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import Jarallax from '@/components/Jarallax'
import { footwearCollection } from '@/assets/data/products'
import { defaultSwiperOptions } from '@/states/default-config'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import shopBg4 from '@/assets/images/shop/bg/04.jpg'
import { Autoplay, FreeMode, Navigation } from 'swiper/modules'
import LatestCollectionCard from './LatestCollectionCard'
import Link from 'next/link'
import 'swiper/css'

const LatestCollections = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Navigation],
    ...{
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
        1200: { slidesPerView: 2 },
      },
    },
  }

  return (
    <Jarallax
      tag="section"
      className="bg-parallax position-relative"
      style={{
        background: `url(${shopBg4.src}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="bg-overlay bg-dark opacity-6" />
      <Container className="position-relative z-index-2">
        <Row>
          <Col lg={8} xl={5} className="mb-5 mb-xl-0">
            <span className="text-primary display-4">20% off</span>
            <h3 className="text-white my-4">Enhance your style with our latest collections</h3>
            <p className="text-white">
              Discover the perfect fusion of modern trends and timeless classics, meticulously curated to complement your unique taste.
            </p>
            <div className="d-flex gap-3 position-relative mt-5 mt-md-6">
              <Link href="" className="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-prev">
                <BsArrowLeft size={16} />
              </Link>
              <Link href="" className="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-next">
                <BsArrowRight size={16} />
              </Link>
            </div>
          </Col>
          <Col xl={7} xxl={6} className="ms-auto">
            <Swiper {...swiperOptions}>
              {footwearCollection.map((product) => (
                <SwiperSlide key={product.id}>
                  <LatestCollectionCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </Jarallax>
  )
}

export default LatestCollections
