'use client'
import backgroundImg9 from '@/assets/images/bg/banner-airos.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import type { SwiperOptions } from 'swiper/types'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/swiper-bundle.css'


const Hero = () => {
  const swiperOptions: SwiperOptions = {
    modules: [EffectFade, Autoplay, Pagination],
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  return (
    <section className="pt-0">
      <Swiper className="overflow-hidden" {...swiperOptions}>
        <SwiperSlide>
          <Card
            className="overflow-hidden min-vh-100 rounded-0"
            style={{
              background: `url(${backgroundImg9.src}) no-repeat center center`,
              backgroundSize: 'cover'
            }}>
            <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
              <Container>
                <Row>
                  <Col sm={11} lg={8} className="mt-auto">
                    <h1 className="display-4 mb-4" style={{color: '#354567'}}>
                      Air Demineral Murni untuk Gaya Hidup Aktif
                    </h1>
                    <p className="mb-5" style={{color: '#354567', fontSize: '24px'}}>
                    Hidrasi lebih baik dengan AiROS! Air minum berkualitas tinggi, desain modern, dan kemurnian optimal untuk menemani aktivitasmu setiap hari.
                    </p>
                    <Link className="btn btn-lg btn-white icon-link icon-link-hover mb-0" href="https://wa.me/628112998881">
                      Beli Sekarang
                      <BsArrowRight className="bi" />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </SwiperSlide>

        <div className="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
      </Swiper>
    </section>
  )
}

export default Hero
