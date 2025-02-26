'use client'
import { Col, Container, Row } from 'react-bootstrap'
import decoration23 from '@/assets/images/elements/saas-decoration/23.png'
import CountUp from 'react-countup'
import Image from 'next/image'

const Features3 = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xl={5} className="mb-6 mb-lg-0">
            <h2 className="mb-sm-4">Get More Done with Our Holistic Solution</h2>
            <p className="mb-sm-5">
              Streamline your tasks and achieve more with a single, all-encompassing platform designed to meet your needs from start to finish.
            </p>

            <h6 className="fw-semibold mb-5">#1 most selling author of GetBootstrap</h6>

            <div className="d-flex align-items-center mb-4">
              <div className="w-25 border-end h-100 me-4 me-sm-5 flex-shrink-0">
                <div className="d-flex">
                  <h4 className="purecounter mb-0">
                    <CountUp end={200} delay={0.3} />
                  </h4>
                  <span className="h4 text-primary mb-0">+</span>
                </div>
              </div>
              <p className="heading-color mb-0">A Wide Range of Clients, Spanning Freelancers to Corporate Giants</p>
            </div>

            <div className="d-flex align-items-center">
              <div className="w-25 border-end h-100 me-4 me-sm-5 flex-shrink-0">
                <div className="d-flex">
                  <h4 className="purecounter mb-0">
                    <CountUp end={14} delay={0.3} />
                  </h4>
                  <span className="h4 text-primary mb-0">K+</span>
                </div>
              </div>
              <p className="heading-color mb-0">Resolved all kinds of questions and inquiries over the last 5 years</p>
            </div>
          </Col>

          <Col lg={6} className="ms-auto">
            <div className="position-relative d-flex flex-column h-100">
              <Col md={9} className="mx-auto z-index-2">
                <Image src={decoration23} alt="" />
              </Col>

              <div className="bg-light border rounded-3 h-50 w-100 position-absolute bottom-0 start-0"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features3
