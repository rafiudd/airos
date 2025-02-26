import { Col, Container, Row } from 'react-bootstrap'
import { integrations } from '../data'
import Image from 'next/image'

const Integration = () => {
  return (
    <section>
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-7">
          <span className="text-primary fw-bold text-uppercase">Integrations</span>
          <h2 className="mb-4 mt-3">Seamless integration for maximum efficiency</h2>
          <p className="mb-0">
            Discover how effortless integration with our platform can supercharge your agency&apos;s workflow. Achieve new levels of efficiency and
            collaboration with these simple steps.
          </p>
        </div>

        <div className="inner-container center">
          <Row className="row-cols-4 row-cols-md-6 g-4 g-sm-5 g-md-6 justify-content-center">
            {integrations.map((tool, idx) => (
              <Col className="text-center" key={idx}>
                {tool.image && <Image src={tool.image} className="h-30px h-sm-50px h-md-60px" alt="Integration-img" />}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Integration
