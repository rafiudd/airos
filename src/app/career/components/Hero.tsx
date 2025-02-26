'use client'
import { Button, Col, Container, Form, FormControl, FormSelect, Row } from 'react-bootstrap'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsBriefcase, BsCursorFill, BsGeoAlt, BsSearch } from 'react-icons/bs'
import { defaultSwiperOptions } from '@/states/default-config'
import about1 from '@/assets/images/about/01.jpg'
import about2 from '@/assets/images/about/02.jpg'
import about12 from '@/assets/images/about/12.jpg'
import about4 from '@/assets/images/about/04.jpg'
import about14 from '@/assets/images/about/14.jpg'
import about16 from '@/assets/images/about/16.jpg'
import about8 from '@/assets/images/about/08.jpg'
import about3 from '@/assets/images/about/03.jpg'
import bg1Img from '@/assets/images/bg/01.jpg'
import Image from 'next/image'
import Link from 'next/link'

const swiperImages = [about1, about2, about12, about4, about14, bg1Img, about16, about8, about3]

const Hero = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay],
    spaceBetween: 50,
    speed: 14000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
    },
  }
  return (
    <section className="position-relative pt-8 pt-xl-9">
      <Container className="position-relative z-index-1 mb-5 mb-lg-7 pb-sm-6">
        <Row className="g-4 g-xxl-5">
          <Col lg={10} xl={8} className="text-center mx-auto">
            <figure className="position-absolute start-0 bottom-0 rotate-33 ms-7 mb-8">
              <svg width="101.6px" height="94.6px" viewBox="0 0 101.6 94.6" xmlSpace="preserve">
                <path
                  className="fill-primary"
                  d="M26.6,26.1c-4.7,0.8-9.3,1.8-13.9,2.9c-4.8,1.2-8.3,1.4-8.6,6.9c-0.1,1.8-0.2,4.5,1.3,5.7 c1.4,1.1,4.3,1.4,5.9,1.8c4.6,1.2,9.3,2.2,14,3.2c1.3,0.3,1.9-1.7,0.6-2c-3.3-0.7-6.6-1.5-10-2.2c-2.3-0.5-4.6-1.1-6.8-1.7 c-2.7-0.8-3-1.1-2.9-4.3c0.1-3.2,0.9-3.7,3.8-4.6c2.3-0.7,4.7-1.2,7-1.7c3.4-0.7,6.8-1.4,10.2-2C28.5,27.9,27.9,25.9,26.6,26.1 L26.6,26.1z"
                />
                <path
                  className="fill-primary"
                  d="M94,27.3c0.5-0.1,1.1-0.2,1.5-0.1c1.8,0.4,1.4,2.4,1.4,3.9c0,1.5,0.1,3.2-0.5,4.6c-0.6,1.5-2.1,2-3.7,2.1 c-1.3,0-1.3,2.1,0,2.1c1.7-0.1,3.9-0.6,4.9-2c1.5-2,1.3-5.2,1.3-7.5c0-2,0-4-2.1-4.9c-1.1-0.5-2.4-0.4-3.5-0.2 C92.1,25.6,92.7,27.6,94,27.3L94,27.3z"
                />
                <path
                  className="fill-mode"
                  d="M30.2,8c6.9,2.7,13.9,5.1,21,7.3c11.1,3.4,21.7,5.1,33.2,6.1c4.2,0.3,8.3,0.4,8.2,5.4 c-0.1,4.4,0.2,10.9-1.7,14.9c-2.2,4.6-9.7,3.4-14.1,3.9c-5,0.5-10,1.4-14.9,2.3C50.2,50,37.3,52.4,26.8,58.3 c-1.2,0.7-0.1,2.5,1,1.8c10.8-6.1,24.3-8.4,36.3-10.6c5.6-1,11.3-2,17.1-2.3c4.1-0.2,8.8,0,11.2-4c2.4-3.9,1.7-9.9,2.1-14.3 c0.2-2.7,0.6-5.8-1.7-7.7c-3.1-2.5-9.1-2.1-12.7-2.3c-6.6-0.4-13-1.5-19.4-3.2c-10.2-2.6-20.2-6-30-9.8C29.5,5.5,28.9,7.5,30.2,8 L30.2,8z"
                />
                <path
                  className="fill-mode"
                  d="M72.4,46c-3.9,0.6-8.2,3-8.9,7.2c-0.6,3.7,1.9,6.5,5.5,6.6c-0.2-0.6-0.3-1.3-0.5-1.9c-3.8,2-8,5.5-8.7,9.9 c-0.5,3.7,1.9,6.4,5.6,6.5c-0.2-0.6-0.5-1.2-0.7-1.8c-4.1,3.7-8.3,10.4-6.2,16.1c1.5,4.1,5.9,4.2,9.1,2c7.4-5,9.4-16.1,11.7-24 c1.9-6.7,3.7-13.4,5.2-20.1c0.3-1.3-1.7-1.9-2-0.6c-0.7,3.4-1.6,6.8-2.5,10.1c-2.2,8.3-4,17.3-7.7,25c-1.3,2.7-7,12.4-11.2,8.2 c-4.1-4.1,1.8-12.2,5-15.2c0.7-0.6,0.1-1.8-0.7-1.8c-4.8-0.1-3.5-5.9-1.3-8.4c1.5-1.7,3.4-3.1,5.4-4.1c1-0.5,0.5-1.9-0.5-1.9 c-4.2-0.1-4.1-5.3-1.4-7.6c1.5-1.2,3.4-1.9,5.2-2.1C74.3,47.8,73.7,45.8,72.4,46L72.4,46z"
                />
                <path
                  className="fill-mode"
                  d="M13.1,29.8c0.3-6.5,1.7-15.4,5.2-21c2.8-4.3,5.9-1.6,6.8,2.3c1.4,5.9,0.8,12.4,0.5,18.4 c-0.3,7.4-0.5,14.9-2.7,22.1c-0.8,2.8-2.7,8.8-6.3,9.5C12.1,62,13,45.8,13.1,42.5c0.1-1.3-2-1.3-2.1,0c-0.1,3.2-0.1,6.3,0.1,9.5 c0.2,3,0.2,8,2.5,10.4c4.7,4.9,10-5.6,11.1-8.7c2.3-6.7,2.8-13.9,3.1-20.9c0.3-6.5,0.8-13.2-0.1-19.7c-0.4-2.8-1-6.3-3.6-7.9 c-2.4-1.4-4.9-0.7-6.5,1.4c-2.8,3.4-3.8,8.5-4.7,12.7c-0.7,3.5-1.5,7.1-1.7,10.6C11,31.1,13.1,31.1,13.1,29.8L13.1,29.8z"
                />
                <path
                  className="fill-mode"
                  d="M15.7,63.4c4.5,0,10.9,0.4,12.9-4.5c3.7-9.1,3.9-20.4,4.4-30c0.1-1.3-2-1.3-2.1,0c-0.5,9-1.1,18.3-3.5,27 c-0.8,2.6-1.1,4.1-4,4.8c-2.5,0.6-5.1,0.6-7.7,0.6C14.4,61.3,14.4,63.4,15.7,63.4L15.7,63.4z"
                />
                <path
                  className="fill-mode"
                  d="M22,6.4c1.8-0.2,4.9-0.8,6.5,0c1.4,0.7,1.5,2.8,1.7,4.2c0.5,2.7,0.6,5.5,0.7,8.2c0,1.3,2.1,1.3,2.1,0 c0-3.2-0.3-6.4-0.9-9.6C31.9,8,31.6,6,30.4,5c-2-1.6-6-1-8.3-0.7C20.7,4.5,20.7,6.6,22,6.4L22,6.4z"
                />
                <path
                  className="fill-primary"
                  d="M82.9,20.8c0,8.6-1.3,17-3.9,25.2c-0.4,1.3,1.6,1.8,2,0.6c2.7-8.4,4-17,4-25.7C85,19.4,82.9,19.4,82.9,20.8 L82.9,20.8z"
                />
                <path
                  className="fill-mode"
                  d="M77.6,20.6c0.6,3,0.6,6,0.1,9c-0.2,1.3,1.8,1.9,2,0.6c0.6-3.4,0.6-6.7-0.1-10.1C79.4,18.7,77.4,19.3,77.6,20.6 L77.6,20.6z"
                />
                <path
                  className="fill-mode"
                  d="M77.2,34.5c-0.7,3.9-1.8,7.6-3.3,11.2c-0.5,1.2,1.3,2.3,1.8,1c1.6-3.8,2.8-7.7,3.6-11.7 C79.4,33.8,77.4,33.2,77.2,34.5L77.2,34.5z"
                />
                <path
                  className="fill-primary"
                  d="M41.1,47.2c4.3-1.5,8.7-2.7,13.1-3.7c1.3-0.3,0.8-2.3-0.6-2c-4.4,1-8.8,2.2-13.1,3.7 C39.3,45.6,39.9,47.6,41.1,47.2L41.1,47.2z"
                />
                <path
                  className="fill-mode"
                  d="M58.5,42.9c0.1,0.1,0.1,0.1,0.2,0.2c0.9,0.9,2.4-0.5,1.5-1.5c-0.1-0.1-0.1-0.1-0.2-0.2 C59,40.5,57.6,41.9,58.5,42.9L58.5,42.9z"
                />
              </svg>
            </figure>
            <div className="position-relative mb-5">
              <h1 className="display-5 mb-0 lh-sm-base">
                Discover exciting career <span className="text-primary">opportunities</span> at&nbsp;
                <span className="position-relative">
                  Mizzle
                  <span className="position-absolute top-50 start-50 translate-middle z-index-n1 mt-n1 d-none d-lg-block">
                    <svg width={219} height={87} viewBox="0 0 219 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M214 6.5H5V81H214V6.5Z" stroke="#09B850" strokeWidth={2} />
                      <path className="fill-mode" d="M209 0H219V10H209V0Z" />
                      <path className="fill-mode" d="M209 77H219V87H209V77Z" />
                      <path className="fill-mode" d="M0 0H10V10H0V0Z" />
                      <path className="fill-mode" d="M0 75H10V85H0V75Z" />
                    </svg>
                  </span>
                </span>
              </h1>
              <div className="position-absolute top-100 start-100 translate-middle ms-lg-7 ms-xl-6 d-none d-lg-block">
                <div className="podition-relative">
                  <small className="badge text-bg-dark rounded-pill">The Designer</small>
                  <span className="fs-5 position-absolute start-0 top-0 fa-rotate-270 mt-n4 ms-n4">
                    <BsCursorFill className="text-primary bi" />
                  </span>
                </div>
              </div>
            </div>
            <p>
              Join our team of digital pioneers, where creativity meets innovation. Explore exciting career opportunities at Mizzle and be part of
              shaping the digital future.
            </p>
            <div className="bg-light border rounded-3 position-relative px-4 py-3 mt-5">
              <Row as={Form} className="g-3 justify-content-center align-items-center">
                <Col lg={5}>
                  <div className="position-relative">
                    <FormControl size="lg" className="me-1 ps-5" type="text" placeholder="Job title" />
                    <span className="position-absolute top-50 start-0 translate-middle ps-5">
                      <BsBriefcase />
                    </span>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="position-relative">
                    <FormSelect size="lg" className="ps-5" data-search-enabled="true">
                      <option>Location</option>
                      <option>Canada</option>
                      <option>USA</option>
                      <option>Paris</option>
                      <option>India</option>
                      <option>London</option>
                    </FormSelect>
                    <span className="position-absolute top-50 start-0 translate-middle ps-5">
                      <BsGeoAlt />
                    </span>
                  </div>
                </Col>
                <Col lg={2} className="d-grid">
                  <Button variant="dark" className="mb-0">
                    <BsSearch className="me-2" />
                    Search
                  </Button>
                </Col>
              </Row>
            </div>
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item">
                
                <span className="text-secondary">Suggestion: </span>
              </li>
              <li className="list-inline-item">
                
                <Link className="text-primary-hover heading-color mb-lg-0" href="">
                  Web design,
                </Link>
              </li>
              <li className="list-inline-item">
                
                <Link className="text-primary-hover heading-color mb-lg-0" href="">
                  Digital Marketing,
                </Link>
              </li>
              <li className="list-inline-item">
                
                <Link className="text-primary-hover heading-color mb-lg-0" href="">
                  UI/UX design,
                </Link>
              </li>
              <li className="list-inline-item">
                
                <Link className="text-primary-hover heading-color mb-lg-0" href="">
                  Web development
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Swiper {...swiperOptions} wrapperClass="align-items-center">
        {swiperImages.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image src={image} alt="" className="rounded" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
