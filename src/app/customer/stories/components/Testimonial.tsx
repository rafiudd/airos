'use client'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { defaultSwiperOptions } from '@/states/default-config'
import { BsArrowRight } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { testimonials } from '../data'
import { TestimonialType } from '../types'
import Image from 'next/image'
import 'swiper/css'

export const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  const { comment, user } = testimonial
  return (
    <>
      <div className="mb-4">{user.company.image && <Image src={user.company.image} className="h-40px" alt="client-img" />}</div>
      <q className="fs-4 fw-normal heading-color">{comment}</q>
      <div className="d-flex justify-content-center align-items-center text-start mt-4 mb-5">
        <div className="avatar flex-shrink-0">{user.avatar && <Image className="avatar-img rounded-circle" src={user.avatar} alt="avatar" />}</div>
        <div className="ms-2 mt-2 mt-sm-0">
          <h6 className="mb-0">
            {user.firstName} {user.lastName}
          </h6>
          <p className="mb-0 small">
            {user.role} {user.company && 'of ' + user.company.name}
          </p>
        </div>
      </div>
      <Link href="/customer/story-single" className="icon-link icon-link-hover">
        Read full story
        <BsArrowRight className="bi" />
      </Link>
    </>
  )
}

const Testimonial = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 80,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <Swiper className="mb-4" {...swiperOptions}>
              {testimonials.map((testimonial, idx) => (
                <SwiperSlide className="text-center" key={idx}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination swiper-pagination-primary position-relative" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
