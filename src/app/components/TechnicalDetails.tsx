import product2 from '@/assets/images/products/why2.png'
import icon1 from '@/assets/images/products/icons/1.png'
import icon2 from '@/assets/images/products/icons/2.png'
import icon3 from '@/assets/images/products/icons/3.png'
import icon4 from '@/assets/images/products/icons/4.png'
import icon5 from '@/assets/images/products/icons/5.png'
import icon6 from '@/assets/images/products/icons/6.png'

import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const TechnicalDetails = () => {
  return (
    <section className="pb-0">
      <Container>
        <div className="inner-container text-center mb-4 mb-sm-6">
          <h2 className="mb-4">Kenapa AiROS?</h2>
          <p className="mb-0">
            AIROS hadir sebagai solusi hidrasi modern dengan air demineral murni, dikemas dalam botol stylish yang praktis dibawa ke mana saja.
          </p>
        </div>

        <Row className="g-4 align-items-center">
          <Col lg={3} className="order-1">
            <div className="d-flex justify-content-lg-end mb-4 mb-lg-8">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-1">Ultra-Pure Hydration</h6>
                <small>Air demineral murni, menyegarkan disetiap tegukan.</small>
              </div>

              <div className="flex-shrink-0 order-lg-2 flex-centered">
                <Image src={icon1} style={{width: '100%'}} className="z-index-1 position-relative" alt="icon-1" />
              </div>
            </div>

            <div className="d-flex justify-content-lg-end mb-4 mb-lg-8 me-5">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-1">Trendy & Ergonomic Design</h6>
                <small>Desain botol modern, ergonomis, dan mudah dibawa ke mana saja.</small>
              </div>

              <div className="flex-shrink-0 order-lg-2 flex-centered">
                <Image src={icon2} style={{width: '100%'}} className="z-index-1 position-relative" alt="icon-1" />
              </div>
            </div>

            <div className="d-flex justify-content-lg-end">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-1">Eco-Friendly Packaging</h6>
                <small>Kemasan ramah lingkungan dengan material yang dapat didaur ulang.</small>
              </div>

              <div className="flex-shrink-0 order-lg-2 flex-centered">
                <Image src={icon3} style={{width: '100%'}} className="z-index-1 position-relative" alt="icon-1" />
              </div>
            </div>
          </Col>

          <Col md={7} lg={6} className="mx-auto position-relative order-lg-2">
            <Image src={product2} className="px-4 z-index-1 position-relative" alt="Technical-img" />
          </Col>

          <Col lg={3} className="order-3">
            <div className="d-flex mb-4 mb-lg-8">
              <div className="flex-shrink-0 flex-centered">
                <Image src={icon4} style={{width: '100%'}} className="z-index-1 position-relative" alt="icon-1" />
              </div>
              <div className="ms-3">
                <h6 className="mb-1">Certified Purity</h6>
                <small>Diproses dengan teknologi canggih untuk kualitas air yang terjamin.</small>
              </div>
            </div>

            <div className="d-flex mb-4 mb-lg-8 ms-lg-5">
              <div className="flex-shrink-0 flex-centered">
                <Image src={icon5} style={{width: '100%'}} className="z-index-1 position-relative" alt="icon-1" />
              </div>
              <div className="ms-3">
                <h6 className="mb-1">Hydration for Active Lifestyle</h6>
                <small>Menunjang gaya hidup aktif dengan hidrasi optimal kapan saja.</small>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-shrink-0 flex-centered">
                <Image src={icon6} style={{width: '100%'}} className="z-index-1 position-relative" alt="icon-1" />
              </div>
              <div className="ms-3">
                <h6 className="mb-1">Grab & Go Convenience</h6>
                <small>Praktis dan tersedia di berbagai tempat untuk kebutuhan sehari-hari.</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TechnicalDetails
