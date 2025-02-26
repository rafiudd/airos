import { shopFeatures, type ShopFeatureType } from '../data'
import { Card, Col, Container, Row } from 'react-bootstrap'

const FeatureCard = ({ title, description, icon, variantClassName }: ShopFeatureType) => {
  const Icon = icon
  return (
    <Col sm={6} lg={3}>
      <Card className="card-body bg-transparent p-0">
        <div className={`icon-lg flex-centered rounded-circle bg-opacity-10 mb-4 ${variantClassName}`}>
          <Icon size={24} />
        </div>
        <h6 className="mb-3">{title}</h6>
        <p className="mb-0">{description}</p>
      </Card>
    </Col>
  )
}

const ShopFeatures = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-sm-6">
          {shopFeatures.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ShopFeatures
