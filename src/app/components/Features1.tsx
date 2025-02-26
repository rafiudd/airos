import { Card, Col, Container, Row } from 'react-bootstrap'
import about8 from '@/assets/images/about/08.jpg'
import { features } from '../data'
import Link from 'next/link'

const Features1 = () => {
  return (
    <section className="pb-0">
      <Container>
        <Row className="g-0 bg-light rounded overflow-hidden">
          <Col md={6}>
            <Card className="card-body bg-transparent d-block p-4 p-md-5 p-lg-7 h-100">
              <h2 className="mb-4">With special audio that places sound all around you</h2>
              <p className="mb-4">Why end might ask civil again spoil. Dinner she our horses depend remember at children by reserved to vicinity. </p>

              <ul className="list-group list-group-borderless mb-4">
                {features.map((feature, idx) => {
                  const Icon = feature.icon
                  return (
                    <li className="list-group-item d-flex heading-color pb-0 icons-center" key={idx}>
                      <Icon className="text-primary me-2" />
                      {feature.title}
                    </li>
                  )
                })}
              </ul>
              <Link href="" className="btn btn-dark mb-0">
                Click here for more detail
              </Link>
            </Card>
          </Col>

          <Col md={6}>
            <div className="h-100 py-8 py-md-0" style={{ background: `url(${about8.src}) no-repeat`, backgroundSize: 'cover' }}></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features1
