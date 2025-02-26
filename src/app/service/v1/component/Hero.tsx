import bg5 from '@/assets/images/bg/05.jpg'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section
      className="py-8 py-sm-9 position-relative"
      style={{ background: `url("${bg5.src}") no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-overlay bg-dark opacity-7" />
      <Container className="position-relative z-index-1">
        <Row className="g-4 g-xxl-5">
          <Col lg={8} className="text-center mx-auto">
            <div className="d-flex justify-content-center position-relative mb-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots breadcrumb-dark pb-0 mb-0">
                  <li className="breadcrumb-item">
                    <Link href="">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
            <h1 className="mb-0 text-white">Our services</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
