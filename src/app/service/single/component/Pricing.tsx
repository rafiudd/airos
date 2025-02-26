'use client'
import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { BsPatchCheckFill } from 'react-icons/bs'
import { currency } from '@/states/constants'
import Testimonials from './Testimonials'
import { pricingData } from '../data'
import Link from 'next/link'

const Pricing = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={6} className="mb-6 mb-lg-0">
            <Card className="bg-dark overflow-hidden p-sm-4 h-100" data-bs-theme="dark">
              <TabContainer defaultActiveKey={'0'}>
                <CardHeader className="bg-transparent position-relative mb-3">
                  <h3 className="mb-3">Pricing plan for this service</h3>
                  <p>Our essential plan is self-service solution for businesses to handle website messaging and personalization</p>
                  <Nav className="nav-pills gap-1 nav-pills-primary">
                    <NavItem role="presentation">
                      <NavLink eventKey={'0'} id="pills-monthly-tab" type="button" role="tab">
                        Monthly
                      </NavLink>
                    </NavItem>
                    <NavItem role="presentation">
                      <NavLink eventKey={'1'} type="button" role="tab">
                        Annual
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody className="pt-0">
                  <TabContent id="pills-tabContent">
                    {pricingData.map((item, idx) => (
                      <TabPane key={idx} eventKey={`${idx}`} className="fade" tabIndex={0}>
                        <div className="bg-light border rounded p-3">
                          <h6 className="mb-3">Quick look at all the features</h6>
                          <ul className="list-group list-group-borderless">
                            {item.features.map((feature, idx) => (
                              <li className="list-group-item mb-0" key={idx}>
                                <BsPatchCheckFill className="text-primary me-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="d-sm-flex justify-content-between align-items-center mt-4">
                          <div className="mb-3 mb-sm-0 heading-color">
                            <span className="h3">
                              {currency}
                              {item.price}
                            </span>
                            / {item.duration}
                          </div>
                          <Link href="" className="btn btn-lg btn-white mb-0">
                            Get started
                          </Link>
                        </div>
                      </TabPane>
                    ))}
                  </TabContent>
                </CardBody>
              </TabContainer>
            </Card>
          </Col>

          <Testimonials />
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
