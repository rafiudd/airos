import about14 from '@/assets/images/about/14.jpg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import appStore from '@/assets/images/elements/app-store.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { installationSteps } from '../data'
import Link from 'next/link'
import Image from 'next/image'

const Steps = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h2 className="mb-3 mb-lg-5">Effortless Download and Installation of Mizzle</h2>
            <p className="mb-3 mb-lg-5">
              Downloading mizzle is a quick and easy process. Follow these simple steps to start enjoying the benefits of our powerful software.
            </p>
            {installationSteps.map((step, idx) => (
              <div className="d-flex align-items-center gap-3 mb-3" key={idx}>
                <div className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle fw-bold">{step.stepNumber}</div>
                <h6 className="fw-normal mb-0">{step.title}</h6>
              </div>
            ))}
            <Row className="g-2 mt-3 mt-lg-5">
              <Col xs={6} sm={4} md={3} lg={4} xl={3}>
                <Link href="">
                  
                  <Image src={googlePlay} className="btn-transition" alt="google-store" />
                </Link>
              </Col>
              <Col xs={6} sm={4} md={3} lg={4} xl={3}>
                <Link href="">
                  
                  <Image src={appStore} className="btn-transition" alt="app-store" />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={5} className="position-relative ms-auto">
            <div className="position-absolute top-50 start-0 translate-middle ms-n2">
              <h2 className="heading-color opacity-1 display-4 text-uppercase rotate-270">since 2018</h2>
            </div>
            <Image src={about14} alt="" className="rounded-3 position-relative" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Steps
