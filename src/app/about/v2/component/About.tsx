import { bulbIcon, robotIcon, technologyIcon, wifiIcon } from '@/assets/data/icons'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const About = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <Row className="g-xl-5">
              <Col md={6}>
                <Card className="card-body bg-light p-4 mt-5">
                  <figure className="text-primary mb-3 flex-shrink-0">{robotIcon}</figure>
                  <h6>Innovation-driven</h6>
                  <p className="mb-0">Elevate your digital presence with our innovation-driven approach</p>
                </Card>
                <Card className="card-body bg-light p-4 mt-5">
                  <figure className="text-primary mb-3 flex-shrink-0">{bulbIcon}</figure>
                  <h6>Transparent approach</h6>
                  <p className="mb-0">At our digital agency, transparency isn&apos;t just a buzzword</p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="card-body bg-light p-4">
                  <figure className="text-primary mb-3 flex-shrink-0">{technologyIcon}</figure>
                  <h6>Accessible technology</h6>
                  <p className="mb-0">Celebrate Inclusivity with Accessible Technology.</p>
                </Card>
                <Card className="card-body bg-light p-4 mt-5">
                  <figure className="text-primary mb-3 flex-shrink-0">{wifiIcon}</figure>
                  <h6>Collaborative teamwork</h6>
                  <p className="mb-0"> We believe that the best results are born from the synergy of diverse</p>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="ps-xl-7">
            <h2 className="mb-4">Know About Mizzle</h2>
            <p>
              At Mizzle, we&apos;re not just in the business of digital solutions; we&apos;re in the business of crafting digital success stories.
              Founded on a passion for innovation and a commitment to excellence, we&apos;ve been at the forefront of the digital landscape, helping
              businesses like yours thrive in the digital age.
            </p>
            <p>
              Our story begins with a vision – a vision to transform the digital experience for businesses of all sizes. Over the years, we&apos;ve
              evolved from a small startup to a dynamic digital agency with a global footprint.
            </p>
            <p className="mb-4">
              To empower businesses to achieve their digital goals. We believe that the digital realm offers boundless opportunities for growth and
              connection, and we&apos;re here to guide you through this transformative journey.
            </p>
            <Link className="btn btn-dark me-3 mb-0" href="/services/v1">
              Explore services!
            </Link>
            <Link className="icon-link icon-link-hover" href="/contact/v2">
              Request a quote
              <BsArrowRight className="bi" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
