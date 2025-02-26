import { Col, Container, Row } from 'react-bootstrap'

const Specification = () => {
  return (
    <section className="pt-0">
      <Container>
        <h2 className="h4 mb-3">Specification</h2>
        <p className="mb-5">
          Please note that this is a generic example, and actual specifications may vary depending on the specific mobile phone model and brand.
          Mobile phone specifications typically include information about the display, performance, camera capabilities, battery, operating system,
          connectivity options, and additional features. Please note that this is a generic example, and actual specifications may vary depending on
          the specific mobile phone model and brand.
        </p>
        <Row>
          <Col lg={6}>
            <div className="d-flex mb-4">
              <span className="w-150px w-sm-200px">Model:</span>
              <p className="heading-color fw-normal w-auto mb-0">Mizz-ZX</p>
            </div>
            <div className="d-flex mb-4">
              <span className="w-150px w-sm-200px">Operating System:</span>
              <p className="heading-color fw-normal w-auto mb-0">Android 12 with XYZ UI</p>
            </div>
            <div className="d-flex mb-4">
              <span className="w-150px w-sm-200px">Dimensions:</span>
              <p className="heading-color fw-normal w-auto mb-0">160 x 75 x 7.5 mm</p>
            </div>
            <div className="d-flex mb-4">
              <span className="w-150px w-sm-200px">Weight:</span>
              <p className="heading-color fw-normal w-auto mb-0">165 grams</p>
            </div>
            <div className="d-flex mb-4">
              <p className="w-150px w-sm-200px">Display:</p>
              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Screen Size: 6.5 inches</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Type: Super AMOLED</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Resolution: 1080 x 2340 pixels</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Refresh Rate: 120Hz</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">HDR Support: Yes</li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex mb-4">
              <span className="w-150px w-sm-200px">Battery:</span>
              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color fw-normal w-auto pb-0">4,500mAh</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">25W Fast Charging</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Wireless Charging (15W)</li>
              </ul>
            </div>
            <div className="d-flex mb-4">
              <span className="w-150px w-sm-200px">Camera:</span>
              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Main Camera 48MP</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Ultra-Wide 12MP</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Telephoto 8MP</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Macro 2MP</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Front Camera 20MP</li>
                <li className="list-group-item heading-color fw-normal w-auto pb-0">Video Recording 4K at 30fps</li>
              </ul>
            </div>
            <div className="d-flex mb-4">
              <span className="w-150px w-sm-200px">Colors:</span>
              <p className="heading-color fw-normal w-auto mb-0">Black, Arctic White, and Ocean Blue</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Specification
