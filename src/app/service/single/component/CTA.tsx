import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <section className="position-relative z-index-2 pt-0">
      <Container className="position-relative">
        <div className="inner-container bg-light border rounded position-relative overflow-hidden p-4">
          <figure className="position-absolute top-0 start-0 ms-n8">
            <svg width={371} height={354} viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="172.5" cy="176.5" rx="131.5" ry="125.5" fill="url(#paint0_linear_195_2)" />
              <ellipse cx="185.5" cy={177} rx="185.5" ry={177} fill="url(#paint1_linear_195_2)" />
              <defs>
                <linearGradient id="paint0_linear_195_2" x1="172.5" y1={51} x2="172.5" y2={302} gradientUnits="userSpaceOnUse">
                  <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.5" />
                  <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="paint1_linear_195_2" x1="185.5" y1={0} x2="185.5" y2={354} gradientUnits="userSpaceOnUse">
                  <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.2" />
                  <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </figure>
          <Row className="align-items-center g-4 position-relative">
            <Col md={7}>
              <h5 className="mb-0">Supercharge your business with our transparent services</h5>
            </Col>
            <Col md={5} className="text-md-end">
              <Link href="/contact/v2" className="btn btn-dark mb-0">
                Contact us now
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTA
