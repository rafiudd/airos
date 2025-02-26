import { Col, Container, Row } from 'react-bootstrap'
import decoration2 from '@/assets/images/elements/saas-decoration/decoration-2.png'
import decoration16 from '@/assets/images/elements/saas-decoration/16.png'
import decoration17 from '@/assets/images/elements/saas-decoration/17.png'
import Image from 'next/image'
import { features } from '../data'

const Features1 = () => {
  return (
    <section className="pt-0 overflow-hidden">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="position-relative pe-lg-7 order-2">
            <figure className="position-absolute top-50 start-50 translate-middle">
              <svg className="fill-light" width="451" height="374" viewBox="0 0 451 374" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M447.529 122.679C466.73 187.993 403.737 260.438 321.205 311.776C238.337 363.4 135.594 393.918 71.59 359.122C7.24919 324.326 -18.3524 224.501 13.9864 143.785C45.9884 63.069 136.268 1.46255 231.6 0.0364779C327.269 -1.67481 428.327 57.0795 447.529 122.679Z" />
              </svg>
            </figure>

            <Row className="justify-content-center position-relative">
              <Col xs={9}>
                <Image src={decoration2} className="mb-4" alt="" />
              </Col>

              <Col xs={5}>
                <Image src={decoration17} alt="" />
              </Col>

              <Col xs={5} className="me-auto">
                <Image src={decoration16} className="rounded-3 shadow" alt="" />
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="z-index-2 mb-6 mb-lg-0 order-1 order-lg-2">
            <h2 className="mb-4 mb-lg-5">Powerful Features for Streamlined Success</h2>

            <Row className="g-4 g-lg-5">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <Col sm={6} key={idx}>
                    {Icon && (
                      <div className="icon-lg rounded-circle heading-color bg-light mb-3 flex-centered">
                        <Icon className="fa-lg" size={24} />
                      </div>
                    )}
                    <h6 className="mb-3">{feature.title}</h6>
                    <p className="mb-0">{feature.description}</p>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features1
