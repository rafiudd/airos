'use client'
import type { SwiperOptions } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Col, Container, Row } from 'react-bootstrap'
import 'swiper/css'
import { clients } from '../data'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'

const CTA = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay],
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
    wrapperClass: 'align-items-center',
  }

  return (
    <section className="position-relative z-index-2 pt-0">
      <Container className="position-relative">
        <div className="bg-dark rounded position-relative overflow-hidden p-4 p-sm-7">
          <figure className="position-absolute top-0 start-0 mt-n5">
            <svg className="fill-light" style={{ opacity: 0.02 }} width="662" height="614" viewBox="0 0 662 614" xmlns="http://www.w3.org/2000/svg">
              <path d="M-78 0V603.815C-61.4821 612.795 -44.1025 615.867 -28.4464 611.85C9.04192 602.16 38.9177 554.186 58.4519 503.612C77.8424 453.511 90.1949 397.029 105.995 343.383C121.794 289.973 142.477 237.745 173.215 206.549C224.779 154.321 291.425 172.991 349.166 202.768C406.907 232.545 466.227 272.248 525.979 256.414C570.505 244.598 611.441 200.878 636.002 138.724C652.233 97.6029 661.138 48.9196 662 0L-78 0Z"></path>
            </svg>
          </figure>

          <figure className="position-absolute top-0 end-0 mt-n8 me-n8">
            <svg className="opacity-3" width="371" height="354" viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="172.5" cy="176.5" rx="131.5" ry="125.5" fill="url(#paint0_linear_195_2)"></ellipse>
              <ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)"></ellipse>
              <defs>
                <linearGradient id="paint0_linear_195_2" x1="172.5" y1="51" x2="172.5" y2="302" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.5"></stop>
                  <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_195_2" x1="185.5" y1="0" x2="185.5" y2="354" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.2"></stop>
                  <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </figure>

          <Row className="g-4 position-relative">
            <Col lg={10} xl={7} className="mx-auto text-center">
              <h3 className="text-white mb-3">Bring your productivity to next level</h3>
              <p className="text-white opacity-8">
                The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Points afraid but may end law
                lasted.
              </p>
              <Link href="" className="btn btn-primary mb-md-5">
                Join our waitlist
              </Link>
            </Col>

            <Col md={10} className="mx-auto">
              <Swiper {...swiperOptions}>
                {clients.map((client, idx) => (
                  <SwiperSlide key={idx}>
                    {client.image && <Image src={client.image} className="grayscale px-sm-3 ps-0" alt="client-img" />}
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTA
