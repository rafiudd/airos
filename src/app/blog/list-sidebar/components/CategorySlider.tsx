'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import { BlogCategoryType } from '../types'
import Image from 'next/image'
import { blogCategories } from '../data'
import 'swiper/css'

const CategoryCard = ({ blog }: { blog: BlogCategoryType }) => {
  return (
    <Card as={Link} href="" className="card-img-scale overflow-hidden">
      <Image src={blog.image} className="img-scale" alt="category-img" />
      <div className="card-img-overlay">
        <div className="badge text-bg-dark">{blog.category}</div>
      </div>
    </Card>
  )
}
const CategorySlider = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Pagination],
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
    },
  }
  return (
    <Swiper {...swiperOptions}>
      {blogCategories.map((blog, idx) => (
        <SwiperSlide key={idx}>
          <CategoryCard blog={blog} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination swiper-pagination-primary position-relative mt-4" />
    </Swiper>
  )
}

export default CategorySlider
