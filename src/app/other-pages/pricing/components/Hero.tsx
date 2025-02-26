'use client'
import { Container, Form, FormCheck } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import { useState } from 'react'
import 'swiper/css'
import { pricingData } from '../data'
import PricingPlanCard from './PricingPlanCard'

const Hero = () => {
  const [planDuration, setPlanDuration] = useState<'month' | 'year'>('month')

  const handleChange = () => {
    if (planDuration === 'month') {
      return setPlanDuration('year')
    }
    return setPlanDuration('month')
  }

  const swiperOptions: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
    wrapperClass: 'align-items-center pt-5',
  }

  return (
    <section className="pt-0">
      <div className="bg-dark position-relative pt-8 pt-xl-9 pb-7 pb-sm-8 px-4 px-md-0 overflow-hidden">
        <figure className="position-absolute top-0 start-0">
          <svg className="opacity-2" width="1859" height="1775" viewBox="0 0 1859 1775" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_391_4)">
              <ellipse cx="929.5" cy="862.5" rx="754.5" ry="719.5" fill="url(#paint0_linear_391_4)" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter1_d_391_4)">
              <ellipse cx="929.5" cy="863" rx="585.5" ry="558" fill="url(#paint1_linear_391_4)" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter2_d_391_4)">
              <ellipse cx="929.5" cy="887.5" rx="909.329" ry="867.5" fill="url(#paint2_linear_391_4)" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter id="filter0_d_391_4" x="155" y="123" width="1549" height="1479" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_391_4" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_391_4" result="shape" />
              </filter>
              <filter id="filter1_d_391_4" x="324" y="285" width="1211" height="1156" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_391_4" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_391_4" result="shape" />
              </filter>
              <filter
                id="filter2_d_391_4"
                x="0.171387"
                y="0"
                width="1858.66"
                height="1775"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_391_4" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_391_4" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_391_4" x1="929.5" y1="143" x2="929.5" y2="1582" gradientUnits="userSpaceOnUse">
                <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.09" />
                <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_391_4" x1="929.5" y1="305" x2="929.5" y2="1421" gradientUnits="userSpaceOnUse">
                <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.07" />
                <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_391_4" x1="929.5" y1="20" x2="929.5" y2="1755" gradientUnits="userSpaceOnUse">
                <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.1" />
                <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </figure>

        <div className="inner-container-small text-center position-relative mb-8">
          <h1 className="text-white mb-5">Choose the right plan for your business</h1>

          <Form className="d-flex align-items-center justify-content-center mb-4 mb-xl-0">
            <span className="fw-semibold text-white">Monthly</span>

            <div className="form-check form-switch form-check-lg mx-2 mb-0">
              <FormCheck className="mt-0 price-toggle" type="checkbox" defaultChecked={false} onChange={handleChange} />
            </div>

            <div className="position-relative">
              <span className="fw-semibold text-white">Yearly</span>
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-2 ms-md-5">20% save</span>
            </div>
          </Form>
        </div>
      </div>

      <Container className="mt-n9">
        <Swiper {...swiperOptions}>
          {pricingData.map((item) =>
            item.plans.map((plan, idx) => {
              {
                if (item.duration === planDuration)
                  return (
                    <SwiperSlide key={idx}>
                      <PricingPlanCard plan={plan} duration={item.duration} />
                    </SwiperSlide>
                  )
              }
            }),
          )}

          <div className="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
        </Swiper>
      </Container>
    </section>
  )
}

export default Hero
