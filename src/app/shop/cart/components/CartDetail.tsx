'use client'
import { useShoppingContext } from '@/states/useShoppingContext'
import CartItem from './CartItem'
import background5 from '@/assets/images/shop/bg/05.jpg'
import { BsXLg } from 'react-icons/bs'
import PromoCode from './PromoCode'
import { Card, CardBody, CardHeader, Col, Container, Form, Row } from 'react-bootstrap'
import Link from 'next/link'

const CartDetail = () => {
  const { cartItems } = useShoppingContext()
  
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={8} className="mb-6 mb-lg-0">
            <Card as={Form} className="bg-transparent">
              <CardHeader className="bg-transparent d-flex justify-content-between align-items-center border-bottom px-0 pt-0">
                <h5 className="mb-0">{cartItems.length} products</h5>
                <button className="btn btn-sm btn-danger-soft mb-0">
                  <BsXLg className="me-1" />
                  Clear cart
                </button>
              </CardHeader>
              <CardBody className="px-0">
                {cartItems.map((cart, idx) => (
                  <CartItem cart={cart} key={idx} />
                ))}
                <div className="text-end">
                  <Link href="" className="btn btn-light border mb-0">
                    Update cart
                  </Link>
                </div>
              </CardBody>
            </Card>
            <Card
              className="card-body p-md-6 mt-5"
              style={{ backgroundImage: `url(${background5.src})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
              <Col md={6}>
                <h4 className="text-white mb-4">Checkout the newest smart watch product</h4>
                <Link href="" className="btn btn-outline-white mb-0">
                  Shop now
                </Link>
              </Col>
            </Card>
          </Col>
          <Col lg={4} className="ps-xl-6">
            <PromoCode />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CartDetail
