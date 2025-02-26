'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import BlogSlide from './BlogSlide'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import 'swiper/css'
import { blogSlides } from '../data'
import "swiper/swiper-bundle.css";
import Link from 'next/link'


const Hero = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, EffectFade, Navigation, Pagination],
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
  return (
    <section className="pt-7">
      <Container className="pt-3 pt-xl-5">
        <Swiper className="rounded" {...swiperOptions}>
          {blogSlides.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <BlogSlide blog={blog} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination swiper-pagination-white mb-3" />
          <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100 px-1 px-sm-3">
            <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev" style={{height:"40px", width: "40px"}}>
              <BsArrowLeft className='bi'/>
            </Link>
            <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next" style={{height:"40px", width: "40px"}}>
              <BsArrowRight className='bi' />
            </Link>
          </div>
        </Swiper>
      </Container>
    </section>
  )
}

export default Hero
