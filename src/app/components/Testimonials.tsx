import { Col, Container, Row } from 'react-bootstrap'
import TestimonialCard from './TestimonialCard'
import { features2 } from '../data'
import FeatureCard from './FeatureCard'

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row className="g-4">
          <Col lg={5}>
            <TestimonialCard />
          </Col>

          <Col lg={7} className="ps-lg-5">
            <h2 className="mb-4">Discover the Future of Sound with AirPods</h2>

            <Row className="g-4 g-lg-5">
              {features2.map((feature, idx) => (
                <Col md={6} key={idx}>
                  <FeatureCard feature={feature} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
