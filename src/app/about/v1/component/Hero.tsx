import { Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const Hero = () => {
  const list = ['Create 50+ unique sections', 'Very easy customization', 'Super fast loading speed', 'Fully responsive on any devices']

  return (
    <section className="bg-dark pt-sm-8 pb-9" data-bs-theme="dark">
      <Container className="pt-4 pt-sm-0">
        <Row className="g-4 g-xxl-5">
          <Col lg={8}>
            <h1 className="mb-0 lh-base">Modern &amp; creative agency specialized in Business</h1>
            <p className="mb-0 mt-4">
              Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective
              arranging rapturous did believe him all had supported.
            </p>
          </Col>
          <Col lg={4} xl={3} className="ms-auto position-relative">
            <ul className="list-group list-group-borderless mb-4">
              {list.map((item, idx) => (
                <li key={idx} className="list-group-item d-flex heading-color pb-0 icons-center">
                  <BsPatchCheck className="text-primary me-2" />
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
