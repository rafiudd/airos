import decoration10 from '@/assets/images/elements/saas-decoration/10.png'
import decoration11 from '@/assets/images/elements/saas-decoration/11.png'
import decoration12 from '@/assets/images/elements/saas-decoration/12.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
const Features = () => {
  return (
    <section className="pt-xl-9">
      <Container className="pt-xl-6">
        <div className="inner-container-small text-center mb-4 mb-sm-7">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Core feature</span>
          <h2 className="mb-0 mt-3">The heart of our solution</h2>
        </div>
        <Row>
          <Col lg={10} className=" mx-auto">
            <Row className="g-4 align-items-center mb-6">
              <Col md={6} className="pe-md-7">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration10} />
                </div>
              </Col>
              <Col md={6}>
                <h3 className="mb-4">Comprehensive Data Segmentation</h3>
                <p>
                  Dive deep into your data. Explore our comprehensive segmentation capabilities, allowing you to analyze specific subsets of your data
                  for precise insights.
                </p>
              </Col>
            </Row>
            <Row className="g-4 align-items-center mb-6">
              <Col md={6} className="order-2">
                <h3 className="mb-4">Customization to Fit Your Needs</h3>
                <p>
                  Tailor your data analytics experience. Discover how our tool can be customized to meet your unique reporting and analysis
                  requirements.
                </p>
              </Col>
              <Col md={6} className="ps-md-7 order-md-2">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration11} />
                </div>
              </Col>
            </Row>
            <Row className="g-4 align-items-center">
              <Col md={6} className="pe-md-7">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration12} />
                </div>
              </Col>
              <Col md={6}>
                <h3 className="mb-4">Data Collaboration Made Easy</h3>
                <p>
                  Collaborate seamlessly with your team. Our tool facilitates data sharing, commenting, and collaborative reporting, so you can work
                  together effectively.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
