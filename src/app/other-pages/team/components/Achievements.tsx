import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BsChevronRight } from 'react-icons/bs'

const Achievements = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-sm-5">
          <Col lg={5}>
            <h2 className="mb-3">Our Lifetime Achievements</h2>
            <p className="mb-4">Join our team Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy.</p>
            <div className="text-center d-inline-block bg-light border rounded position-relative px-5 py-3">
              <span className="heading-color">Work with us?</span>
              <Link className="stretched-link ms-2" href="/contact/v1">
                Join our community
                <BsChevronRight className="small ms-1" />
              </Link>
            </div>
          </Col>
          <Col lg={7} xl={6} className="ms-auto">
            <Row className="row-cols-1 row-cols-sm-2 g-4 g-md-5">
              <Col>
                <h5>Awards</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item heading-color px-0">Honor / Unite agency / 2021</li>
                  <li className="list-group-item heading-color px-0">Honor / Unite agency / 2020</li>
                  <li className="list-group-item heading-color px-0">Honor / Med expert / 2020</li>
                  <li className="list-group-item heading-color px-0">Honor / Frame digital / 2020</li>
                  <li className="list-group-item heading-color px-0">Honor / Unite agency / 2019</li>
                </ul>
              </Col>
              <Col>
                <h5>CSS Design Award</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item heading-color px-0">Website of the day / Emporia / 2020</li>
                  <li className="list-group-item heading-color px-0">Special kudos / to ARCR / 2021</li>
                  <li className="list-group-item heading-color px-0">Special kudos / to ARCR / 2020</li>
                  <li className="list-group-item heading-color px-0">Special kudos / to Reformat club / 2019</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Achievements
