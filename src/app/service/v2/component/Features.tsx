import { BsArrowRight } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FeatureType } from '../types'
import Link from 'next/link'
import { features } from '../data'

export const FeatureCard = ({ feature }: { feature: FeatureType }) => {
  const { description, icon, title } = feature
  return (
    <Card className="card-body card-hover-shadow border d-flex flex-row p-4 h-100">
      <figure className="text-primary mb-0">{icon}</figure>
      <div className="d-flex flex-column ms-4">
        <h5 className="mb-3">{title}</h5>
        <p className="mb-3">{description}</p>
        <Link className="icon-link icon-link-hover stretched-link mt-auto" href="/service/single">
          Know more
          <BsArrowRight />
        </Link>
      </div>
    </Card>
  )
}
const Features = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-lg-5">
          {features.map((feature, idx) => (
            <Col md={6} key={idx}>
              <FeatureCard feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features
