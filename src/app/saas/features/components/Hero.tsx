import pattern2 from '@/assets/images/elements/bg-pattern-2.png'
import saasBg from '@/assets/images/bg/saas-bg.jpg'
import decoration1 from '@/assets/images/elements/saas-decoration/01.png'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="pt-lg-8">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-md-0">
            <h1 className="mb-4">Unleash the Power of Our Features</h1>
            <p className="mb-4">
              This structure maintains a focus on the strength and potential of your SAAS features while providing an invitation to explore them
              further.
            </p>
            <Link href="/saas/features-single" className="btn btn-lg btn-dark mb-0">
              Start Exploring Now
            </Link>
          </Col>
          <Col lg={6} className="ms-auto">
            <div className="position-relative pe-4 pe-sm-6">
              <div
                className="bg-dark rounded position-absolute top-0 end-0 w-50 h-100"
                style={{ backgroundImage: `url(${pattern2})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
              />
              <Image src={saasBg} className="rounded-4 border border-dark border-5 my-4 my-sm-6 position-relative" alt="saas-img" />
              <Col xs={2} className="position-absolute bottom-0 start-0 ms-lg-n7">
                <Image src={decoration1} className="shadow rounded-4" alt="decoration-img" />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
