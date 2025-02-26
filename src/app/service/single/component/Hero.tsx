import pattern2 from '@/assets/images/elements/bg-pattern-2.png'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section
      className="bg-dark pt-lg-8 pt-xl-9"
      style={{ backgroundImage: `url(${pattern2.src})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
      data-bs-theme="dark">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col md={7} xl={6}>
            <h1 className="mb-4">Digital Marketing</h1>
            <p className="mb-4">
              Digital marketing is the strategic use of online channels and technologies to promote products, services, or brands to a target
              audience.
            </p>
          </Col>
          <Col md={4} className="ms-auto text-md-end">
            <Link href="/contact/v1" className="btn btn-lg btn-primary mb-6 mb-md-0">
              Start your project
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
