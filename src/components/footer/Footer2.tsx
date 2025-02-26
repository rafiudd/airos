'use client'
import { communityLinks, contactDetail, quickLinks, socialMediaLinks } from '@/assets/data/footer-items'
import { Col, Container, Row } from 'react-bootstrap'
import { BsClock, BsEnvelope, BsGeoAlt, BsHeadset } from 'react-icons/bs'
import GetStartedJourney from './components/GetStartedJourney'
import appStore from '@/assets/images/elements/app-store.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import CreditWithLogo from './components/CreditWithLogo'
import Image from 'next/image'
import Link from 'next/link'

const Footer2 = ({ theme }: { theme?: 'light' | 'dark' }) => {
  return (
    <footer className={`pt-6 bg-${theme}`} data-bs-theme={theme}>
      <Container className="position-relative mt-sm-5">
        <GetStartedJourney />

        <hr className="my-5" />
        <Row className="g-4 justify-content-between">
          <Col lg={8} xl={7}>
            <Row className="g-4">
              <Col md={3} xs={6}>
                <h6 className="mb-2 mb-md-4">Quick links</h6>
                <ul className="nav flex-column">
                  {quickLinks.map((item, idx) => (
                    <li key={(item.link ?? '') + idx} className="nav-item">
                      <Link className={`nav-link${idx === 0 ? ' pt-0' : ''}`} href={item.link ?? ''}>
                        {item.name}
                        {item.badge && <span className="badge text-bg-danger ms-2">{item.badge}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={3} xs={6}>
                <h6 className="mb-2 mb-md-4">Community</h6>
                <ul className="nav flex-column">
                  {communityLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={(item.link ?? '') + idx} className="nav-item">
                        <Link className={`nav-link ${idx === 0 ? 'pt-0' : ''}`} href={item.link ?? ''}>
                          {item.name}
                          {Icon && <Icon size={13} className="ms-2" />}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Col>
              <Col md={6}>
                <h6 className="mb-2 mb-md-4">Contact details</h6>
                <ul className="list-group list-group-borderless">
                  <li className="d-flex mb-3 icons-center">
                    <BsGeoAlt className="me-2 text-primary" />
                    {contactDetail.address}
                  </li>
                  <li className="d-flex mb-3 icons-center">
                    <BsHeadset className="me-2 text-primary" />
                    {contactDetail.contact}
                  </li>
                  <li className="d-flex mb-3 icons-center">
                    <BsEnvelope className="me-2 text-primary" />
                    {contactDetail.email}
                  </li>
                  <li className="d-flex mb-3 icons-center">
                    <BsClock className="me-2 text-primary" />
                    <p className="mb-0">
                      {contactDetail.weekDays}
                      <br />
                      {contactDetail.weekEnds}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={3}>
            <h6 className="mb-2 mb-md-4">App available on</h6>
            <Row className="g-2 mb-4 mb-sm-5">
              <Col sm={4} md={3} lg={6} xs={6}>
                <Link href="">
                  
                  <Image src={googlePlay} alt="" />
                </Link>
              </Col>
              <Col sm={4} md={3} lg={6} xs={6}>
                <Link href="">
                  
                  <Image src={appStore} alt="app-store" />
                </Link>
              </Col>
            </Row>
            <h6 className="mb-2 mb-md-4">Follow on</h6>
            <ul className="list-inline mb-0 mt-3">
              {socialMediaLinks.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                    <Link className={`btn btn-xs btn-icon btn-light ${item.iconClassName}`} href="">
                      {Icon && <Icon />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
        <hr className="mt-4 mb-3" />

        <CreditWithLogo />
      </Container>
    </footer>
  )
}

export default Footer2
