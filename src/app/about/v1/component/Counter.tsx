'use client'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { statData } from '../data'

const Counter = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {statData.map((item, idx) => (
            <Col key={idx}>
              <div className="bg-light border text-center rounded p-4">
                <div className="d-flex justify-content-center">
                  <h4 className="purecounter mb-0">
                    <CountUp end={item.stat} delay={0.3} />
                  </h4>
                  <span className="h4 text-primary mb-0">{item.suffix}</span>
                </div>
                <p className="text-center heading-color mb-0">{item.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Counter
