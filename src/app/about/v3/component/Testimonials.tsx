'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import { BsArrowRight } from 'react-icons/bs'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import TestimonialCard from './TestimonialCard'
import backgroundImg5 from '@/assets/images/bg/05.jpg'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { testimonials } from '../data'
import 'swiper/css'

const Testimonials = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    spaceBetween: 30,
    grabCursor: true,
    modules: [Autoplay, Pagination, FreeMode],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
  return (
    <section className="pt-0">
      <Container>
        <div
          className="rounded-3 position-relative overflow-hidden p-4 p-md-6"
          style={{ background: `url(${backgroundImg5.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-overlay bg-dark bg-opacity-75" />
          <Row className="position-relative z-index-1">
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="d-flex flex-column h-100">
                <ul className="list-group list-group-borderless mb-4">
                  <li className="list-group-item text-white fs-5 fw-semibold d-flex p-0">Innovate.</li>
                  <li className="list-group-item text-white fs-3 fw-semibold d-flex p-0">Elevate.</li>
                  <li className="list-group-item text-white fs-2 fw-semibold d-flex p-0">Succeed.</li>
                </ul>
                <div className="mt-auto">
                  <Link className="btn btn-lg btn-outline-white icon-link icon-link-hover" href="">
                    Join our community
                    <BsArrowRight className="bi" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8} xl={6} className="ms-auto">
              <Card className="p-4 p-sm-5">
                <CardHeader className="bg-transparent p-0">
                  <h5>Here our customers experience</h5>
                </CardHeader>
                <CardBody className="p-0 pt-4">
                  <Swiper {...swiperOptions} wrapperClass="pb-5">
                    {testimonials.map((testimonial, idx) => (
                      <SwiperSlide key={idx}>
                        <TestimonialCard testimonial={testimonial} />
                      </SwiperSlide>
                    ))}
                    <div className="swiper-pagination position-absolute bottom-0" />
                  </Swiper>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
