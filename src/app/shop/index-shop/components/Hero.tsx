'use client'
import shopBg1 from '@/assets/images/shop/bg/01.jpg'
import shopBg2 from '@/assets/images/shop/bg/02.jpg'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import 'swiper/css'

const Hero = () => {
  return (
    <section className="pt-5 pt-xl-7">
      <div
        className="swiper overflow-hidden pt-5"
        data-swiper-options='{
			"autoplay":{
				"delay": 4000, 
				"disableOnInteraction": false
			},
			"pagination":{
				"el":".swiper-pagination",
				"clickable":"true"
			}}'>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="card overflow-hidden h-500px h-xl-750px rounded-0"
              style={{
                backgroundImage: `url(${shopBg1.src})`,
                backgroundPosition: 'center left',
                backgroundSize: 'cover',
              }}>
              <div className="bg-overlay bg-dark opacity-5 d-lg-none" />
              <div className="card-img-overlay d-flex align-items-center">
                <Container>
                  <Row>
                    <Col sm={11} lg={8} xl={5}>
                      <span className="d-inline-block text-bg-dark small rounded-pill px-3 py-2 mb-4">New release mizz-VR</span>
                      <h1 className="text-white display-6 mb-4">Dive into Virtual Reality Adventure</h1>
                      <p className="text-white mb-4">
                        Whether you&apos;re a gaming enthusiast or simply seeking an extraordinary escape from reality, our Virtual VR product is your
                        portal to endless excitement.
                      </p>
                      <Link className="btn btn-lg btn-outline-white icon-link icon-link-hover mb-0" href="">
                        Show details
                        <BsArrowRight className="bi" />
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="card overflow-hidden h-500px h-xl-750px rounded-0"
              style={{
                backgroundImage: `url(${shopBg2.src})`,
                backgroundPosition: 'center left',
                backgroundSize: 'cover',
              }}>
              <div className="bg-overlay bg-dark opacity-5 d-lg-none" />
              <div className="card-img-overlay d-flex align-items-center">
                <Container>
                  <Row>
                    <div className="col-md-11 col-lg-8 col-xl-5 ms-auto">
                      <p className="fs-4 fw-normal text-white mb-3">
                        Festival Collection
                        <span className="text-bg-dark rounded px-3">2023</span>
                      </p>
                      <h1 className="text-white display-4 mb-3">FLAT 50% OFF</h1>
                      <p className="text-white mb-4">
                        Step into a world of quality and craftsmanship – it&apos;s time to put your best foot forward.
                      </p>
                      <Link className="btn btn-lg btn-dark icon-link icon-link-hover mb-0" href="">
                        Show now
                        <BsArrowRight className="bi" />
                      </Link>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3" />
      </div>
    </section>
  )
}

export default Hero
