import { communityLinks, quickLinks, socialMediaLinks } from '@/assets/data/footer-items'
import LogoBox from '@/components/LogoBox'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'

const LinksAround = () => {
  return (
    <Row className="g-4 justify-content-between">
      <Col lg={5}>
        <LogoBox imageClassName="h-40px" />

        <p className="mt-4 mb-2">A Bootstrap theme that&apos;s both stylish and functional, perfect for any type of technology or corporate website.</p>
        <ul className="list-inline mb-0 mt-4">
          {socialMediaLinks.map((item, idx) => {
            const Icon = item.icon
            return (
              <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                <Link className="btn btn-xs btn-icon btn-light" href="">
                  <Icon />
                </Link>
              </li>
            )
          })}
        </ul>
      </Col>
      <Col lg={6} xxl={4}>
        <Row className="g-4">
          <Col xs={6}>
            <ul className="nav flex-column">
              {quickLinks.map((item, idx) => (
                <li key={(item.link ?? '') + idx} className="nav-item">
                  <Link className="nav-link" href={item.link ?? ''}>
                    {item.name}
                    {item.badge && <span className="badge text-bg-danger ms-2">{item.badge}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={6}>
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
        </Row>
      </Col>
    </Row>
  )
}

export default LinksAround
