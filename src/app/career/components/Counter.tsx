'use client'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { counterData } from '../data'

const Counter = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="row-cols-2 row-cols-lg-4 g-4">
          {counterData.map((item, idx) => {
            const Icon = item.icon
            return (
              <Col key={idx}>
                <div className="d-flex align-items-center">
                  <div className="icon-lg bg-dark rounded text-white flex-shrink-0 flex-centered">
                    
                    <Icon className="fs-5" />
                  </div>
                  <div className="ms-3">
                    <div className="d-flex">
                      <h5 className="purecounter mb-0">
                        <CountUp end={item.stat} delay={1} />
                      </h5>
                      {item.suffix && <span className="h5 text-primary mb-0">{item.suffix}</span>}
                    </div>
                    <p className="mb-0">{item.label}</p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Counter
