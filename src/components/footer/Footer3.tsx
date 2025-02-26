import LogoBox from '@/components/LogoBox'
import CreditWithSocialIcons from './components/CreditWithSocialIcons'
import { communityLinks, communityLinks2, contactDetails2, quickLinks2, quickLinks4 } from '@/assets/data/footer-items'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Footer3 = () => {
  return (
    <footer className="bg-dark position-relative overflow-hidden pt-6" data-bs-theme="dark">
      <Container className="position-relative mt-5">
        <Row className="g-4">
          <Col xl={3} className="text-lg-center text-xl-start mb-4 mb-xl-0">
            <LogoBox imageClassName="h-40px" />
          </Col>

          <Col xs={6} md={4} lg={5} xl={4}>
            <h6 className="mb-2 mb-md-4">Quick links</h6>
            <Row className="g-0">
              <Col lg={6}>
                <ul className="nav flex-column">
                  {quickLinks2.map((item, idx) => (
                    <li key={(item.link ?? '') + idx} className="nav-item">
                      <Link className={`nav-link${idx === 0 ? ' pt-0' : ''}`} href={item.link ?? ''}>
                        {item.name}
                        {item.badge && <span className="badge text-bg-danger ms-2">{item.badge}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg={6}>
                <ul className="nav flex-column">
                  {quickLinks4.map((item, idx) => (
                    <li key={(item.link ?? '') + idx} className="nav-item">
                      <Link className="nav-link" href={item.link ?? ''}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={4} lg={3} xl={2}>
            <h6 className="mb-2 mb-md-4">Resources</h6>
            <ul className="nav flex-column">
              {communityLinks.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={(item.link ?? '') + idx} className="nav-item">
                    <Link className="nav-link" href={item.link ?? ''}>
                      {item.name}
                      {Icon && <Icon size={13} className="ms-2" />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col sm={6} md={4} lg={4} xl={3}>
            <h6 className="mb-2 mb-md-4">Community</h6>

            {communityLinks2.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={item.title + idx} className="position-relative d-flex align-items-center py-2 my-2">
                  <div className={`icon-lg rounded-circle flex-shrink-0 flex-centered ${item.variant}`}>
                    <Icon className="heading-color" />
                  </div>
                  <div className="nav flex-column ps-3">
                    <h6 className="mb-2">
                      <Link href="" className="stretched-link p-0">
                        {item.title}
                      </Link>
                    </h6>
                    <div className="small text-body-secondary">API, knowledge base, tutorials</div>
                  </div>
                </div>
              )
            })}
          </Col>
        </Row>
        <hr className="opacity-1 my-5 my-sm-6" />
        <Row className="g-4 align-items-center">
          <Col xl={3} className="text-lg-center text-xl-start mb-4 mb-xl-0">
            <h5 className="mb-1">Get in touch with us</h5>
            <p className="mb-0">We look forward to hearing from you!</p>
          </Col>

          {contactDetails2.map((item, idx) => {
            const Icon = item.icon
            return (
              <Col sm={6} md={4} xl={3} key={item.title + idx} className="d-flex justify-content-md-center">
                <div className="position-relative d-flex align-items-center">
                  <div className="icon-lg bg-body rounded-circle flex-shrink-0 flex-centered">
                    <Icon className="heading-color" />
                  </div>
                  <div className="nav flex-column ps-3">
                    <div className="small text-body-secondary">{item.title}</div>
                    <p className="fw-semibold mt-1 mb-0">
                      <Link href="" className="heading-color text-primary-hover stretched-link p-0">
                        {item.description}
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
        <hr className="opacity-1 mt-6 mb-0" />

        <CreditWithSocialIcons />
      </Container>
    </footer>
  )
}

export default Footer3
