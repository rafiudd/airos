import { Card, Col, Container, Row } from 'react-bootstrap'
import { FeatureType } from '../types'
import { features } from '../data'

export const FeatureCard = ({ feature }: { feature: FeatureType }) => {
  const { description, icon, title } = feature
  const Icon = icon
  return (
    <Card className="card-body bg-transparent text-center p-0">
      <span className="h4 text-primary mb-2">
        <Icon />
      </span>
      <h6 className="mb-2">{title}</h6>
      <p className="mb-0">{description}</p>
    </Card>
  )
}
const Features = () => {
  return (
    <section className="pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2>Core Feature</h2>
          <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 g-lg-6">
          {features.map((feature, idx) => (
            <Col key={idx}>
              <FeatureCard feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features
