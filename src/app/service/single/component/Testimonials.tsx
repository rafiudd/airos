'use client'
import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { defaultSwiperOptions } from '@/states/default-config'
import { Col } from 'react-bootstrap'
import { TestimonialType } from '../types'
import Image from 'next/image'
import { testimonials } from '../data'
import 'swiper/css'

export const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  const { comment, rating, user } = testimonial
  return (
    <>
      <div className="avatar avatar-lg mb-3">{user.avatar && <Image className="avatar-img rounded-circle" src={user.avatar} alt="avatar" />}</div>
      <ul className="list-inline mb-3">
        {rating &&
          Array(Math.floor(rating))
            .fill(0)
            .map((_star, idx) => (
              <li key={idx} className="list-inline-item me-1">
                <BsFillStarFill size={16} className="text-warning" />
              </li>
            ))}
        {!Number.isInteger(rating) && <BsStarHalf size={16} className="text-warning me-1" />}
        {rating &&
          rating < 5 &&
          Array(5 - Math.ceil(rating))
            .fill(0)
            .map((_star, idx) => (
              <li key={idx} className="list-inline-item me-1">
                <BsStar size={16} className="text-warning" />
              </li>
            ))}
      </ul>
      <p className="fs-5 heading-color">{comment}</p>
      <div className="blockquote-footer mb-0 fs-6 mt-3">
        {user.firstName} {user.lastName}
      </div>
    </>
  )
}

const Testimonials = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Pagination],
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
  return (
    <Col lg={5} className="ms-auto">
      <h2>Feedback for Service Enhancement</h2>
      <p className="lead mb-2">
        300+ Users rated us <span className="text-primary fw-bold">4.85</span>
        out of 5.
      </p>
      <Swiper className="mt-7" wrapperClass="pb-5" {...swiperOptions}>
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination swiper-pagination-primary position-relative text-start" />
      </Swiper>
    </Col>
  )
}

export default Testimonials
