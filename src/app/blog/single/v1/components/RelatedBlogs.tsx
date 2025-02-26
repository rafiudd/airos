'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Autoplay, FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import BlogCard from './BlogCard'
import { Container } from 'react-bootstrap'
import 'swiper/css'
import Link from 'next/link'
import { blogs } from '../data'

const RelatedBlogs = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Navigation],
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  }
  return (
    <section className="pt-0">
      <Container>
        <div className="d-flex justify-content-between text-center mb-4 mb-sm-6">
          <h3 className="mb-0">Related blogs</h3>
          <div>
            <Link href="" className="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-prev me-1">
              <BsArrowLeft />
            </Link>
            <Link href="" className="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-next">
              <BsArrowRight />
            </Link>
          </div>
        </div>
        <Swiper {...swiperOptions}>
          {blogs.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default RelatedBlogs
