import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-dark rounded p-4 p-sm-6" data-bs-theme="dark">
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Let’s automate &amp; simplify your performance</h2>
              <p className="mb-0">Let us manage your IT for you so that you can get back to doing what you do best and we look in the future.</p>
            </Col>
            <Col md={6} className="text-end">
              <Link href="/contact/v1" className="btn btn-lg btn-primary mb-0">
                Get started
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTA
