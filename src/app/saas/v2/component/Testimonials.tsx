'use client'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import { BsArrowRight } from 'react-icons/bs'
import { clients, testimonials } from '../data'
import TestimonialCard from './TestimonialCard'
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css'

const Testimonials = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay, EffectFade],
    loop: true,
    effect: 'fade',
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    wrapperClass: 'align-items-center',
  }

  return (
    <section className="pb-0">
      <Container>
        <Row>
          <Col lg={11}>
            <Row className="align-items-center">
              <Col lg={6} className="order-2 mt-5 mt-lg-0">
                <Swiper className="mt-2 mt-md-4" {...swiperOptions}>
                  {testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx}>
                      <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>

              <Col lg={6} className="ms-auto order-1 order-lg-2">
                <span className="text-primary fw-bold text-uppercase">Testimonials</span>

                <h2 className="my-3">Don&apos;t take our word for it. See what our client says.</h2>
                <p className="mb-4">
                  Hear what our satisfied clients have to say about their experiences with our platform. Discover how we&apos;ve helped agencies like yours
                  achieve remarkable results.
                </p>

                <div className="d-flex gap-3">
                  <Link href="" className="btn btn-lg btn-dark mb-2 mb-sm-0">
                    Get Started
                  </Link>
                  <Link className="icon-link icon-link-hover heading-color text-primary-hover mb-0" href="">
                    Browse features
                    <BsArrowRight className="bi" />
                  </Link>
                </div>

                <hr className="my-6" />

                <Row className="row-cols-2 row-cols-sm-3 g-4 g-md-5 align-items-center">
                  {clients.map((client, idx) => (
                    <Col key={idx}>{client.image && <Image src={client.image} className="grayscale px-2" alt="client-img" width={161} height={27}/>}</Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
