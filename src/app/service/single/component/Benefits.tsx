import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const Benefits = () => {
  const benefits = [
    "Reach a global audience and expand your brand's presence",
    'Real-time tracking and data-driven decision-making',
    'Improved Customer Engagement',
    'Drive conversions and boost revenue',
    'Create a loyal customer community',
    'Protect customer data and privacy',
  ]
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <h4 className="mb-4">Our Approach</h4>
            <p>
              Describe your agency&apos;s approach to digital marketing, including any proprietary strategies or methodologies you use. Explain how you
              customize strategies to meet clients&apos; specific needs.
            </p>
            <p>
              It encompasses a wide range of tactics and strategies aimed at reaching, engaging, and converting potential customers in the digital
              realm. Digital marketing leverages various online platforms, such as search engines, social media, email, content marketing, and paid
              advertising, to create meaningful connections with the digital-savvy audience.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">Service benefits</h4>
              <ul className="list-group list-group-borderless border-0">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="list-group-item heading-color d-flex mb-0 icons-center">
                    <BsPatchCheck className="text-primary me-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits
