'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShowcaseCard from '@/components/cards/ShowcaseCard'
import { Container } from 'react-bootstrap'
import { relatedWorks } from '../../data'
import 'swiper/css'

const RelatedWorksSwiper = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="text-start mb-4 mb-sm-5">
          <h3 className="mb-0">Related works</h3>
        </div>

        <Swiper
          spaceBetween={40}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          modules={[Pagination]}>
          {relatedWorks.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <ShowcaseCard {...slide} />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination swiper-pagination-primary position-relative mt-4" />
        </Swiper>
      </Container>
    </section>
  )
}

export default RelatedWorksSwiper
