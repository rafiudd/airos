'use client'
import { BsClock, BsEnvelope, BsGeoAlt, BsHeadset } from 'react-icons/bs'
import { communityLinks, contactDetail, quickLinks, socialMediaLinks } from '@/assets/data/footer-items'
import CreditWithLogo from './components/CreditWithLogo'

import appStore from '@/assets/images/elements/app-store.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const Footer4 = () => {
  return (
    <footer className="bg-dark pt-6" data-bs-theme="dark">
      <Container className="position-relative mt-sm-5">
        <Row className="g-3 g-md-4 align-items-center">
          <Col md={8} xl={6} className="text-center text-md-start">
            <h2 className="display-6 fw-semibold mb-md-3">Create new innovation together</h2>
          </Col>
          <Col md={4} className="text-center text-md-end ms-auto">
            <Link href="" className="icon-xxl bg-primary btn-white-hover rounded-circle btn small fw-normal text-white p-0">
              Let&apos;s connect
            </Link>
          </Col>
        </Row>
        <hr className="opacity-1 my-5" />
        <Row className="g-4 justify-content-between">
          <Col lg={8} xl={7}>
            <Row className="g-4">
              <Col xs={6} md={3}>
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

              <Col xs={6} md={3}>
                <h6 className="mb-2 mb-md-4">Community</h6>
                <ul className="nav flex-column">
                  {communityLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={(item.link ?? '') + idx} className="nav-item">
                        <Link className={`nav-link${idx === 0 ? ' pt-0' : ''}`} href={item.link ?? ''}>
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
                    <BsEnvelope className="me-2 text-primary" /> {contactDetail.email}
                  </li>
                  <li className="d-flex mb-3 icons-center">
                    <BsClock className="me-2 text-primary" />
                    <p className="mb-0">
                      {contactDetail.weekDays} <br />
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
              <Col xs={6} sm={4} md={3} lg={6}>
                <Link href="">
                  
                  <Image src={googlePlay} alt="google-play" />
                </Link>
              </Col>
              <Col xs={6} sm={4} md={3} lg={6}>
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
                    <Link className={`btn btn-xs btn-icon ${item.iconClassName}`} href="">
                      <Icon />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
        <hr className="opacity-1 mt-4 mb-3" />

        <CreditWithLogo />
      </Container>
    </footer>
  )
}

export default Footer4
