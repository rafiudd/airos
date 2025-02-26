'use client'
import { products } from '@/assets/data/products'
import GlightBox from '@/components/GlightBox'
import { currency } from '@/states/constants'
import { defaultSwiperOptions } from '@/states/default-config'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowLeft, BsArrowRight, BsCart2, BsFullscreen, BsQuestionCircleFill } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import 'swiper/css'
import { Autoplay, FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'

const Hero = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay, Navigation],
    loop: false,
    grabCursor: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  return (
    <section>
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-dots pb-0 mb-0">
            <li className="breadcrumb-item">
              <Link href="">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="">All product</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="">Cart</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </nav>
        <Row className="mt-7">
          <Col md={5} className="mb-5 mb-md-0">
            <Swiper {...swiperOptions}>
              {products[0].images.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <GlightBox className="w-100 h-100" href={image.src}>
                    <Card className="card-element-hover overflow-hidden">
                      <Image alt="" src={image} className="rounded-3" />
                      <div className="hover-element w-100 h-100">
                        <BsFullscreen
                          size={32}
                          className="fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                        />
                      </div>
                    </Card>
                  </GlightBox>
                </SwiperSlide>
              ))}
              <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100">
                <Link href="" className="z-1 btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
                  <BsArrowLeft />
                </Link>
                <Link href="" className="z-1 btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
                  <BsArrowRight />
                </Link>
              </div>
            </Swiper>
          </Col>
          <Col md={7} className="ps-md-6">
            <div className="badge text-bg-dark mb-3">Technology</div>
            <h1 className="h2 mb-4">The ultimate smartphone for modern lifestyles</h1>
            <div className="d-flex align-items-center flex-wrap mb-4">
              <ul className="list-inline mb-0">
                {Array(4)
                  .fill(0)
                  .map((_star, idx) => (
                    <li className="list-inline-item me-1" key={idx}>
                      <FaStar size={18} className="text-warning" />
                    </li>
                  ))}
                <li className="list-inline-item me-1">
                  <FaStarHalfAlt size={18} className="text-warning" />
                </li>
                <li className="list-inline-item me-0 heading-color fw-normal ">(4.5)</li>
              </ul>
              <span className="text-secondary opacity-3 mx-2 mx-sm-3">|</span>
              <Link href="" className="heading-color text-primary-hover mb-0">
                345 reviews
              </Link>
              <span className="text-secondary opacity-3 mx-2 mx-sm-3">|</span>
              <span>86 sold</span>
            </div>
            <h4 className="text-success mb-4">{currency}215.00</h4>
            <div className="d-flex align-items-center gap-1 gap-sm-3 flex-wrap mt-2 mb-4">
              <span className="d-block">Memory storage:</span>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
              <label className="btn btn-sm btn-light border btn-primary-soft-check mb-0" htmlFor="btnradio1">
                256 GB
              </label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
              <label className="btn btn-sm btn-light border btn-primary-soft-check mb-0" htmlFor="btnradio2">
                512 GB
              </label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
              <label className="btn btn-sm btn-light border btn-primary-soft-check mb-0" htmlFor="btnradio3">
                1 TB
              </label>
            </div>
            <div className="color-check-radio d-flex align-items-center gap-3 mt-2 mb-4">
              <span className="d-block">Select color:</span>
              <div className="icons-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  style={{ backgroundColor: '#9a0a0a' }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1" />
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  style={{ backgroundColor: '#32C7F5' }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2" />
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  style={{ backgroundColor: '#F7C32E' }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3" />
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  defaultChecked
                  style={{ backgroundColor: '#333369' }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4" />
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mt-2 mb-4">
              <span className="d-block">Select quantity:</span>
              <Col md={2}>
                <select className="form-select" aria-label="Default select example">
                  <option value={1}>01</option>
                  <option value={2}>02</option>
                  <option value={3}>03</option>
                </select>
              </Col>
            </div>
            <p className="mb-4">
              Packed with cutting-edge features and innovations, this smartphone is more than just a communication tool, it&apos;s a lifestyle companion
              that keeps up with your needs.
            </p>
            <div className="d-grid">
              <Link href="/shop/cart" className="btn btn-primary mb-0 w-100 flex-centered">
                <BsCart2 className="me-2" />
                Add to Cart
              </Link>
              <p className="ms-auto mb-0 mt-2 text-end small icons-center">
                <BsQuestionCircleFill className="text-primary me-2" />
                Need help?&nbsp;
                <Link href="/contact/v1" className="mb-0">
                  Chat Now
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
