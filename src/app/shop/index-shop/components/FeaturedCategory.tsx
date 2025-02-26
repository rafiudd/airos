'use client'
import { BsArrowRight } from 'react-icons/bs'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { defaultSwiperOptions } from '@/states/default-config'
import { Card, Container } from 'react-bootstrap'
import Link from 'next/link'
import { featuredCategoriesData } from '../data'
import 'swiper/css'

const FeaturedCategory = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    ...{
      spaceBetween: 30,
      grabCursor: true,
      modules: [Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination-category',
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    },
  }

  return (
    <section className="pt-0">
      <Container>
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
          <h3>Featured category</h3>
          <Link className="icon-link icon-link-hover text-body-secondary text-primary-hover" href="">
            View all
            <BsArrowRight />
          </Link>
        </div>

        <Swiper {...swiperOptions}>
          {featuredCategoriesData.map(({ icon, id, name, url }) => (
            <SwiperSlide key={id}>
              <Card className="card-body border-primary-hover border bg-transparent text-center">
                <figure className="text-center">{icon}</figure>
                <h6 className="mb-0">
                  <Link href={url} className="stretched-link">
                    {name}
                  </Link>
                </h6>
              </Card>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination swiper-pagination-category swiper-pagination-primary position-relative mt-4" />
        </Swiper>
      </Container>
    </section>
  )
}

export default FeaturedCategory
