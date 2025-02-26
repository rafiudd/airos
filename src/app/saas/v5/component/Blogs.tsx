'use client'
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap'
import { BsArrowLeft, BsArrowRight, BsInfoCircle } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, Navigation } from 'swiper/modules'
import patternImg from '@/assets/images/elements/pattern.svg'
import Link from 'next/link'
import { blogs } from '../data'
import BlogCard from './BlogCard'
import 'swiper/css'
import Image from 'next/image'

const Blogs = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 40,
    grabCursor: true,
    loop: true,
    autoplay: { delay: 3000 },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
    },
  }

  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={8} xl={4} className="text-center text-xl-start mx-auto">
            <h2 className="mb-4 h3">Explore Our Insights and Updates</h2>
            <p className="mb-0">
              Explore a world of articles covering a variety of topics, from best practices and success stories to tutorials and product updates.
            </p>

            <div className="d-flex justify-content-center justify-content-xl-start gap-3 position-relative mt-5 mt-xl-6">
              <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
                <BsArrowLeft />
              </Link>
              <Link href="" className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
                <BsArrowRight />
              </Link>
            </div>
          </Col>

          <Col xl={8} className="mt-5 mt-xl-0">
            <Swiper {...swiperOptions}>
              {blogs.map((blog, idx) => (
                <SwiperSlide key={idx}>
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}

              <SwiperSlide>
                <Card as={'article'} className="bg-primary p-4 overflow-hidden h-100">
                  <div className="position-absolute end-0 bottom-0 mb-n5 me-n7">
                    <Image src={patternImg} className="opacity-4" alt="" />
                  </div>

                  <CardBody className="z-index-1 p-0">
                    <div className="d-flex justify-content-between mb-5">
                      <div className="badge bg-dark text-white small">Advertisements</div>

                      <OverlayTrigger
                        placement="top"
                        trigger="focus"
                        overlay={
                          <Popover className="p-2">You&apos;re seeing this ad because your activity meets the intended audience of our site.</Popover>
                        }>
                        <Button variant="link" className="mb-0 text-white small p-0">
                          <BsInfoCircle className="pe-1" size={20} />
                          Sponsored
                        </Button>
                      </OverlayTrigger>
                    </div>

                    <CardTitle as={'h5'}>Always wanted to become a coder? Here is a great chance for you to fulfill your dream.</CardTitle>
                  </CardBody>

                  <CardFooter className="bg-transparent d-flex justify-content-between align-items-center p-0 mt-4 mt-sm-8 z-index-1">
                    <div className="d-flex align-items-center">
                      <div className="avatar flex-shrink-0 me-2">
                        <div className="avatar-img rounded-circle bg-dark">
                          <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold small">WP</span>
                        </div>
                      </div>
                      <span className="heading-color fw-semibold">Web poster</span>
                    </div>

                    <Link href="" className="btn btn-sm btn-white mb-0">
                      Apply now
                    </Link>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blogs
