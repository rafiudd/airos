import { Col, Container, Row } from 'react-bootstrap'
import { BsChevronRight, BsRocketTakeoff } from 'react-icons/bs'
import { currency } from '@/states/constants'
import Link from 'next/link'
import { pricingData } from '../data'

const Pricing = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-dark rounded-3 p-5 p-md-6" data-bs-theme="dark">
          <Row className="g-4 g-md-5">
            <Col xl={6} className="h-100 pe-sm-7">
              <div className="d-xl-flex justify-content-between">
                <div>
                  <h3 className="mb-4">Transparent pricing</h3>
                  <p className="mb-4">
                    Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve always worked very hard to give our
                    customers the best experience.
                  </p>
                  <Link className="btn btn-white icon-link icon-link-hover" href="/pricing">
                    View pricing
                    <BsChevronRight className="bi" />
                  </Link>
                </div>
                <div className="vr bg-secondary opacity-1 ms-5 d-none d-xl-block"></div>
              </div>
            </Col>

            <Col xl={6} className="ms-auto">
              <Row>
                <Col sm={6}>
                  <div className="icon-lg text-primary bg-white rounded-circle mb-3 m-md-start flex-centered">
                    <BsRocketTakeoff size={24} className="fa-lg" />
                  </div>
                  <p className="text-secondary fw-semibold mb-3">Unlimited users</p>
                  <h6 className="mb-1">
                    <span className="fs-1">
                      {currency}
                      {pricingData.price}
                    </span>
                    /month
                  </h6>
                  <p className="fw-semibold text-primary">Bulk purchase discount</p>
                </Col>

                <Col sm={6} className="ps-md-5">
                  <p className="text-secondary fw-semibold mb-3">Features list of your need</p>

                  <ul className="list-group list-group-borderless">
                    {pricingData.features.map((feature, idx) => {
                      const Icon = feature.icon
                      return (
                        <li className="list-group-item d-flex heading-color mb-0 icons-center" key={idx}>
                          {Icon && <Icon className="text-primary me-2" />}
                          {feature.title}
                        </li>
                      )
                    })}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Pricing
