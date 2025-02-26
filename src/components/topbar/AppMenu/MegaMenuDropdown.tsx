import { MEGA_MENU_ITEMS } from '@/assets/data/menu-items'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Dropdown, DropdownHeader, DropdownItem, DropdownToggle, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa6'

const MegaMenuDropdown = () => {
  return (
    <Dropdown as={'li'} className="nav-item dropdown dropdown-fullwidth">
      <DropdownToggle
        as={Link}
        href=""
        variant="link"
        className="nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle"
        id="megaMenu"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Megamenu
        <FaAngleDown size={12} className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu py-0" aria-labelledby="megaMenu">
        <Row className="p-2 p-sm-4 g-4">
          <Col md={6} xl={3}>
            <ul className="list-unstyled">
              <DropdownHeader className="dropdown-header h6 mb-2">Useful links</DropdownHeader>

              {MEGA_MENU_ITEMS.usefulLinks.map((item, idx) => (
                <li key={idx}>
                  <DropdownItem as={Link} className="dropdown-item" href="">
                    {item}
                  </DropdownItem>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={6} xl={3}>
            <DropdownHeader className="dropdown-header h6 mb-2">Company</DropdownHeader>

            {MEGA_MENU_ITEMS.company.map((item, idx) => {
              const Icon = item.icon
              return (
                <div className="dropdown-item d-flex bg-light-hover position-relative text-wrap py-3" key={idx}>
                  <div className="icon-md border bg-body rounded flex-shrink-0">
                    <Icon size={20} className="heading-color" />
                  </div>
                  <div className="ms-2">
                    <Link className="stretched-link heading-color fw-bold mb-0" href="">
                      {item.title}
                      {item.badge && <span className="badge text-bg-primary ms-2">{item.badge}</span>}
                    </Link>
                    <p className="mb-0 text-body small">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </Col>
          <Col md={6} xl={3}>
            <ul className="list-unstyled">
              <li className="dropdown-header h6 mb-2">Integration</li>
              <li>
                {MEGA_MENU_ITEMS.integration.map((item, idx) => (
                  <Link key={idx} className="dropdown-item d-flex bg-light-hover icon-link icon-link-hover py-2" href="">
                    <Image src={item.logo} className="h-30px" alt="" />
                    <span className="heading-color fw-bold ms-2">{item.name}</span>
                    <BsArrowRight className="bi ms-auto" />
                  </Link>
                ))}

                <Link href="" className="btn btn-sm btn-light mb-0 d-grid mt-2">
                  View all
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} xl={3}>
            <span className="dropdown-header h6 mb-2">Recent blogs</span>

            {MEGA_MENU_ITEMS.recentBlogs.map((item, idx) => (
              <div key={idx} className="dropdown-item bg-light-hover d-flex align-items-sm-center gap-2 position-relative mb-3">
                <Image src={item.image} className="rounded icon-lg" alt="blog-img" />
                <p className="text-wrap fw-bold mb-0">
                  <Link href={item.link} className="stretched-link heading-color text-primary-hover">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Dropdown>
  )
}

export default MegaMenuDropdown
