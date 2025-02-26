'use client'
import { useState } from 'react'
import { Col, Container, Form, FormCheck, Row } from 'react-bootstrap'
import { pricingData1, pricingData2 } from '../data'
import PricingCard1 from './PricingCard1'
import PricingCard2 from './PricingCard2'

const Pricing = () => {
  const [planDuration, setPlanDuration] = useState<'month' | 'year'>('month')

  const handleChange = () => {
    if (planDuration === 'month') {
      return setPlanDuration('year')
    }
    return setPlanDuration('month')
  }

  return (
    <section className="bg-dark position-relative price-wrap" data-bs-theme="dark">
      <figure className="position-absolute top-0 start-0 ms-n9">
        <svg className="opacity-2" width="424" height="405" viewBox="0 0 424 405" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="212" cy="202.5" rx="212" ry="202.5" fill="url(#paint0_linear_153_3831)"></ellipse>
          <defs>
            <linearGradient id="paint0_linear_153_3831" x1="212" y1="0" x2="212" y2="405" gradientUnits="userSpaceOnUse">
              <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0"></stop>
              <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0.5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </figure>

      <Container className="position-relative">
        <Row className="g-4 g-lg-6">
          <Col xl={4}>
            <span className="text-primary fw-bold text-uppercase">Pricing</span>
            <h2 className="mb-4 mt-3">Budget-friendly pricing solutions</h2>
            <p className="mb-5">
              Our pricing model is designed with your agency in mind. Discover our transparent rates and flexible options tailored to fit your unique
              needs.
            </p>

            <Form className="d-flex align-items-center">
              <span className="fw-semibold heading-color">Monthly</span>

              <div className="form-switch form-check-lg mx-2 mb-0">
                <FormCheck type="switch" className="mt-0 price-toggle" defaultChecked={false} onChange={handleChange} />
              </div>

              <div className="position-relative">
                <span className="fw-semibold heading-color">Yearly</span>
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-2 ms-md-5">20% save</span>
              </div>
            </Form>
          </Col>

          <Col md={6} xl={4}>
            {pricingData1.map((item) =>
              item.plans.map((plan, idx) => {
                if (item.duration === planDuration) return <PricingCard1 plan={plan} duration={item.duration} key={idx} />
              }),
            )}
          </Col>

          <Col md={6} xl={4}>
            {pricingData2.map((item) =>
              item.plans.map((plan, idx) => {
                if (item.duration === planDuration) return <PricingCard2 plan={plan} duration={item.duration} key={idx} />
              }),
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
