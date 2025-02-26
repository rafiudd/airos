import about9 from '@/assets/images/about/09.jpg'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaBluetoothB } from 'react-icons/fa6'

const Features2 = () => {
  return (
    <section className="pb-0">
      <Container>
        <Row className="g-0 bg-light rounded overflow-hidden">
          <Col md={6}>
            <div
              className="h-100 py-8 py-md-0"
              style={{
                background: `url(${about9.src}) no-repeat`,
                backgroundSize: 'cover',
              }}></div>
          </Col>

          <Col md={6}>
            <Card className="card-body bg-transparent d-block p-4 p-md-5 p-lg-7 h-100">
              <h2 className="mb-4">A magical connection to your devices.</h2>
              <p className="mb-4">Why end might ask civil again spoil. Dinner she our horses depend remember at children by reserved to vicinity.</p>

              <Row className="row-cols-2 row-cols-lg-3 g-4 mb-4">
                <Col>
                  <span className="heading-color">More than</span>
                  <h4 className="my-2">24</h4>
                  <p className="mb-0">Of battery life with charging case</p>
                </Col>
                <Col>
                  <span className="heading-color">Up to</span>
                  <h4 className="my-2">5 hr</h4>
                  <p className="mb-0">Of listing time on one charge</p>
                </Col>
                <Col>
                  <span className="heading-color">Connectivity</span>
                  <h4 className="my-2">
                    <FaBluetoothB />
                  </h4>
                  <p className="mb-0">Bluetooth 5.3 wireless technology</p>
                </Col>
              </Row>

              <Link href="" className="btn btn-dark mb-0">
                View full specifications
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features2
