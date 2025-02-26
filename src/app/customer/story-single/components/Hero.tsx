import backgroundImg9 from '@/assets/images/bg/09.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="pt-7 pb-0">
      <Container className="pt-5">
        <Card
          className="h-300px h-md-400px overflow-hidden"
          style={{ background: `url(${backgroundImg9.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <Row>
          <Col xs={11} lg={10} className="mx-auto mt-n7">
            <div className="bg-body border border-opacity-10 shadow rounded position-relative p-4 p-sm-5">
              <h4 className="mb-3">See why direct-to-consumer brands choose mizzle for their email efforts</h4>
              <div className="d-flex align-items-center flex-wrap">
                <span>October 23, 2023</span>
                <span className="text-secondary opacity-3 mx-3">|</span>
                <span>9 min read</span>
                <span className="text-secondary opacity-3 mx-3">|</span>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-sm flex-shrink-0 me-1">
                    <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                  </div>
                  <span className="fw-semibold heading-color"> Carolyn Ortiz</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
