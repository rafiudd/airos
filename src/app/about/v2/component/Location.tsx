import mapImg from '@/assets/images/elements/map.svg'
import LocationCard from './LocationCard'
import { Col, Container, Row } from 'react-bootstrap'
import { locations } from '../data'
const Location = () => {
  return (
    <section className="py-xl-5">
      <Container className="py-xl-8" style={{ backgroundImage: `url(${mapImg.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="inner-container text-center">
          <h2 className="mb-4">We&apos;re global and growing</h2>
          <p className="mb-6">
            Mizzle customer support is available free of charge. Connection charges can vary when calling from outside the area, abroad or from a
            mobile phone.
          </p>
          <Row className="g-4 text-start justify-content-center">
            {locations.map((location, idx) => (
              <Col md={5} key={idx}>
                <LocationCard location={location} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Location
