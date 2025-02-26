import about5 from '@/assets/images/about/05.jpg'
import { currency } from '@/states/constants'
import Image from 'next/image'
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'

const Solution = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-7">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Final solution</span>
          <h2 className="mb-0 mt-3">Unlocking Success Through Our Solutions</h2>
        </div>
        <Row className="g-4 g-lg-5">
          <Col md={5} className="h-100">
            <Image alt="" src={about5} className="rounded-3" />
          </Col>
          <Col md={7} className="h-100">
            <Row className="g-4 g-lg-5">
              <Col lg={6}>
                <Card className="bg-light rounded h-100 overflow-hidden p-5">
                  <CardBody className="bg-transparent p-0">
                    <div className="badge text-bg-dark mb-3">Feature</div>
                    <p className="small mb-0">Skyrocket your business to unprecedented heights with the right tools today</p>
                  </CardBody>
                  <CardFooter className="bg-transparent text-end p-0 mt-3">
                    <span className="fs-1 fw-semibold heading-color">42%</span>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="bg-light rounded h-100 overflow-hidden p-5">
                  <CardBody className="bg-transparent p-0">
                    <div className="badge text-bg-primary mb-3">Analytics</div>
                    <p className="small mb-0">Elevate your business to new heights with the right tools today.</p>
                  </CardBody>
                  <CardFooter className="bg-transparent text-end p-0 mt-3">
                    <span className="fs-1 fw-semibold heading-color">5X</span>
                  </CardFooter>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="bg-light rounded h-100 overflow-hidden p-5">
                  <CardBody className="bg-transparent p-0">
                    <div className="badge text-bg-danger mb-3">Revenue</div>
                    <p className="small mb-0">
                      Unlock the full potential of your business and elevate it to new heights by harnessing the power of cutting-edge tools and
                      technologies available today.
                    </p>
                  </CardBody>
                  <CardFooter className="bg-transparent text-end p-0 mt-3">
                    <span className="fs-1 fw-semibold heading-color">{currency}2.3M</span>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Solution
