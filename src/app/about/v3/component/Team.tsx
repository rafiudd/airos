'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import TeamMemberCard from './TeamMemberCard'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { teamMembers } from '../data'
import 'swiper/css'

const Team = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [Autoplay, Navigation],
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  }
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h2>Meet Our Dedicated Team</h2>
            <div className="d-flex gap-3 position-relative mt-md-5">
              <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev-team">
                <BsArrowLeft />
              </Link>
              <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next-team">
                <BsArrowRight />
              </Link>
            </div>
          </Col>
          <Col md={8}>
            <Swiper className="mt-2 mt-md-4" {...swiperOptions}>
              {teamMembers.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <TeamMemberCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
