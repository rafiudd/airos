import shopBg3 from '@/assets/images/shop/bg/03.jpg'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { trendingProducts } from '@/assets/data/products'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import TrendingProductCard from './TrendingProductCard'

const TrendingProducts = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
          <h3>What&apos;s trending now</h3>
          <Link href="" className="icon-link icon-link-hover text-body-secondary text-primary-hover">
            See all products
            <BsArrowRight />
          </Link>
        </div>
        <Row className="g-4 g-sm-5">
          <Col lg={8} xl={6}>
            <Card
              className="p-0 h-100"
              style={{
                backgroundImage: `url(${shopBg3.src})`,
                backgroundPosition: 'center left',
                backgroundSize: 'cover',
              }}>
              <CardBody className="p-5 mb-8">
                <span className="bg-dark text-white rounded fw-semibold small px-3 py-2">New Arrival</span>
                <h4 className="text-white my-4">Powerful performance. Versatile design.</h4>
                <Link href="" className="btn btn-lg btn-outline-white icon-link icon-link-hover mb-0">
                  Shop now
                  <BsArrowRight />
                </Link>
              </CardBody>
            </Card>
          </Col>

          {trendingProducts.map((product, idx) => (
            <Col sm={6} lg={4} xl={3} key={idx}>
              <TrendingProductCard key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default TrendingProducts
