'use client'
import { Col, Container, Row } from 'react-bootstrap'
import { steps } from '../data'

const Steps = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-md-6">
          <h2 className="mb-0">How its work?</h2>
        </div>
        <Row className="g-4 g-lg-7">
          {steps.map((step, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="d-flex justify-content-center align-items-center text-center flex-column bg-transparent">
                <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-3 fw-bold flex-shrink-0 mb-3">{step.stepNumber}</div>
                <h6>{step.title}</h6>
                <p className="small mb-0">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Steps
