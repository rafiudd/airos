import sassBackground5 from '@/assets/images/bg/saas-bg-5.png'
import pattern3 from '@/assets/images/elements/bg-pattern-3.png'
import pattern4 from '@/assets/images/elements/bg-pattern-4.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BsChevronRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="pt-5 pt-xl-7">
      <Container fluid={true} className="pt-5">
        <Row>
          <Col xxl={11} className="mx-auto">
            <div className="bg-dark rounded position-relative overflow-hidden px-4 px-sm-6 pt-6 pt-xl-8" data-bs-theme="dark">
              <div className="position-absolute top-0 start-0">
                <Image src={pattern4} alt="pattern" />
              </div>

              <div className="position-absolute bottom-0 start-0">
                <Image src={pattern3} alt="pattern" />
              </div>

              <div className="inner-container-small text-center position-relative mb-4">
                <h6 className="text-primary fw-normal mb-3">Introducing the All-New features</h6>
                <h1 className="mb-3 display-5">Smarter solutions, seamless results</h1>
                <p className="mb-3 mb-lg-4">
                  Our powerful SaaS platform is designed to transform the way you work, making your processes more efficient and your team more
                  effective.
                </p>

                <Link className="btn btn-lg btn-primary icon-link icon-link-hover" href="/contact/v1">
                  Get started for free
                  <BsChevronRight />
                </Link>
              </div>

              <Row className="position-relative mb-n4 mb-md-n7 mb-xl-n9">
                <Col xl={8} className="mx-auto">
                  <Image src={sassBackground5} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
