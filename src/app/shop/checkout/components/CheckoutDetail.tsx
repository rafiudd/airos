import { Col, Container, Row } from 'react-bootstrap'
import PaymentOptions from './PaymentOptions'
import PersonalInfo from './PersonalInfo'
import ProductDetail from './ProductDetail'
import PromoCode from './PromoCode'

const CheckoutDetail = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={8} className="mb-6 mb-lg-0">
            <PersonalInfo />
            <PaymentOptions />
          </Col>
          <Col lg={4} className="ps-xl-6">
            <PromoCode />
            <ProductDetail />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CheckoutDetail
