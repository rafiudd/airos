import { Card, Col, Container, Row } from 'react-bootstrap'
import { faqs } from '../data'

const Faqs = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="mb-4 mb-md-5">
          <Col xs={12} className="text-center">
            <h2>Frequently Asked Questions</h2>
            <p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
          </Col>
        </Row>
        <Row className="g-4 g-md-5">
          {faqs.map((faq, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className="card-body border bg-transparent h-100 p-4">
                <h6>{faq.question}</h6>
                <p className="mb-0">{faq.answer}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Faqs
