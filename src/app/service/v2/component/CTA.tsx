'use client'
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import ctaVector from '@/assets/images/elements/cta-vector.svg'
import decorationImg5 from '@/assets/images/elements/saas-decoration/05.png'
import { defaultSwiperOptions } from '@/states/default-config'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import 'swiper/css'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'

const clients = [client5, client4, client1, client2, client3, client6]

const CTA = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay],
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 4 },
    },
  }
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-dark rounded position-relative overflow-hidden p-4 p-sm-7">
          <div className="position-absolute top-0 start-0 mt-n8 mt-xl-n5 d-none d-md-block">
            <Image src={decorationImg5} alt="" className="rotate-33 h-200px" />
          </div>
          <div className="position-absolute end-0 bottom-0 d-none d-lg-block">
            <Image src={ctaVector} alt="" className="h-200px h-xl-300px" />
          </div>
          <Row className="g-4 position-relative">
            <Col lg={10} xl={7} className="mx-auto text-center">
              <h3 className="text-white mb-3">Ready to elevate your business?</h3>
              <p className="text-white opacity-8">
                Join the Mizzle revolution today and be part of the millions who&apos;ve already embraced a brighter future!
              </p>
              <Link href="" className="btn btn-primary mb-6">
                Get started today
              </Link>
              <p className="text-white text-center">Used by the world best companies.</p>
              <Swiper {...swiperOptions} wrapperClass="align-items-center">
                {clients.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <Image src={image} className="px-sm-3 ps-0" alt="client-img" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTA
