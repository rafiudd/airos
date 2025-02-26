import backgroundImg4 from '@/assets/images/bg/04.jpg'
import Jarallax from '@/components/Jarallax'
import { Col, Container, Row } from 'react-bootstrap'
const Hero = () => {
  return (
    <section className="pt-7 pb-0">
      <Container fluid className="pt-3 pt-xl-5">
        <Row>
          <Col xxl={11} className="mx-auto">
            <Jarallax
              className="card bg-parallax h-300px h-md-400px h-xl-500px overflow-hidden"
              style={{ background: `url(${backgroundImg4.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="bg-overlay bg-dark bg-opacity-50" />
              <div className="card-img-overlay d-flex align-items-center justify-content-center text-center z-index-2">
                <h1 className="display-4 text-white">We&apos;re Superheroes</h1>
              </div>
            </Jarallax>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
