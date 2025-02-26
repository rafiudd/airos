import { BsArrowRight, BsTelephone } from 'react-icons/bs'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar12 from '@/assets/images/avatar/12.jpg'
import serviceImg from '@/assets/images/elements/service.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col md={7} xl={6} className="mb-7 mb-md-0">
            <h1 className="mb-4">Discover the solutions we offer</h1>
            <p className="mb-4">Our experienced team is dedicated to helping you achieve your goals through innovative technology.</p>
            <Link href="/contact/v1" className="btn btn-lg btn-dark mb-5 icons-center">
              <BsTelephone className="me-2" />
              Contact us
            </Link>
            <div className="d-sm-flex align-items-center">
              <ul className="avatar-group mb-0 align-items-center">
                <li className="avatar avatar-lg">
                  <Image className="avatar-img rounded-circle" src={avatar8} alt="avatar" />
                </li>
                <li className="avatar avatar-lg">
                  <Image className="avatar-img rounded-circle" src={avatar12} alt="avatar" />
                </li>
                <li className="avatar avatar-lg">
                  <div className="avatar-img rounded-circle bg-primary">
                    <span className="text-white position-absolute top-50 start-50 translate-middle">10K+</span>
                  </div>
                </li>
              </ul>
              <div className="ms-sm-3 mt-2 mt-sm-0">
                <p className="heading-color fw-normal mb-1">More then 10k active users! 🤩</p>
                <Link className="icon-link icon-link-hover text-primary-hover mt-auto" href="">
                  Join them now
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={5} className="ms-auto">
            <Image alt="" src={serviceImg} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
