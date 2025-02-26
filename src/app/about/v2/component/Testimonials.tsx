'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import TestimonialCard from './TestimonialCard'
import 'swiper/css'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { testimonials } from '../data'
import Image from 'next/image'

const avatars = [avatar1, avatar2, avatar3, avatar8, avatar7, avatar5]
const Testimonials = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    ...{
      modules: [Autoplay, Navigation],
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
      },
    },
  }
  return (
    <section className="bg-dark" data-bs-theme="dark">
      <Container>
        <Row className="g-4 align-items-center">
          <Col xl={4}>
            <h3 className="mb-4">Why our customers love Mizzle</h3>
            <p className="lead mb-2">
              3000+ Users rated us <span className="text-warning fw-bold">4.85</span> out of 5.
            </p>
            <ul className="avatar-group mb-sm-0">
              {avatars.map((avatar, idx) => (
                <li className="avatar avatar-sm" key={idx}>
                  <Image className="avatar-img rounded-circle" src={avatar} alt="avatar" />
                </li>
              ))}
            </ul>
            <div className="d-flex gap-3 position-relative mt-5 mt-md-6">
              <Link href="" className="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-prev w-40px">
                <BsArrowLeft />
              </Link>
              <Link href="" className="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-next w-40px">
                <BsArrowRight />
              </Link>
            </div>
          </Col>
          <Col xl={8}>
            <Swiper {...swiperOptions}>
              {testimonials.map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
