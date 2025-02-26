import { Col, Container, Row } from 'react-bootstrap'
import element1 from '@/assets/images/elements/int-p1.svg'
import element2 from '@/assets/images/elements/int-p2.svg'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

const Integrations = () => {
  return (
    <section className="pt-0">
      <Container className="position-relative">
        <Row className="align-items-center position-relative">
          <Col md={3} className="d-none d-md-block">
            <Image src={element1} alt="" />
          </Col>

          <Col md={6} className="mx-auto text-center">
            <h2 className="mb-4">Seamless Integrations for Enhanced Productivity</h2>
            <p className="mb-4">
              Your workflow isn&apos;t just about one tool - it&apos;s about the entire ecosystem of applications you use. Seamlessly connects with a range of
              third-party services to streamline your processes even further.
            </p>
            <Link className="btn btn-lg btn-primary icon-link icon-link-hover" href="/saas/integrations">
              View all integrations
              <BsChevronRight className="bi" />
            </Link>
          </Col>

          <Col md={3} className="d-none d-md-block">
            <Image src={element2} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Integrations
