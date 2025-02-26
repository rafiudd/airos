import { RESOURCES_MENU_ITEMS } from '@/assets/data/menu-items'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, Col, Dropdown, DropdownHeader, DropdownItem, DropdownToggle, Row } from 'react-bootstrap'
import { BsArrowRight, BsChevronRight } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa6'

const ResourcesMenuDropdown = () => {
  const { featureResource, keyFeatures, usefulLinks } = RESOURCES_MENU_ITEMS

  return (
    <Dropdown as={'li'} className="nav-item dropdown dropdown-fullwidth">
      <DropdownToggle
        as={Link}
        href=""
        variant="link"
        className="nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Resources
        <FaAngleDown size={12} className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu py-0">
        <Row className="p-2 p-sm-4">
          <Col md={6} xl={4} xxl={3}>
            <div className="d-md-flex gap-4 h-100">
              <ul className="list-unstyled w-100">
                <DropdownHeader className="dropdown-header h6 mb-2">Useful links</DropdownHeader>

                {usefulLinks.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <li key={idx}>
                      <DropdownItem as={Link} className="dropdown-item icons-center" href="">
                        <Icon className="me-2" />
                        {item.name}
                      </DropdownItem>
                    </li>
                  )
                })}
              </ul>
              <div className="vr ms-2 ms-auto d-none d-md-block" />
            </div>
          </Col>
          <Col md={6} xl={4} xxl={5} className="h-100">
            <DropdownHeader className="h6 mb-2">Key features</DropdownHeader>

            {keyFeatures.map((item, idx) => {
              const Icon = item.icon
              return (
                <DropdownItem
                  key={idx}
                  as={'div'}
                  className="bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                  <div className="d-flex me-3">
                    <div className="icon-md border bg-body rounded flex-shrink-0 flex-centered">
                      <Icon size={20} className="heading-color" />
                    </div>
                    <div className="mx-2">
                      <p className="stretched-link heading-color fw-bold mb-0">{item.title}</p>
                      <p className="mb-0 text-body small">{item.description}</p>
                    </div>
                  </div>
                  <Link href="" className="icon-link icon-link-hover text-primary-hover stretched-link">
                    <BsChevronRight className="bi" />
                  </Link>
                </DropdownItem>
              )
            })}
          </Col>
          <Col lg={4}>
            <DropdownHeader className="dropdown-header h6 mb-2">Feature resources</DropdownHeader>
            <Card className="bg-transparent px-3">
              <Image src={featureResource.image} className="rounded mb-3" alt="feature-img" />
              <CardBody className="p-0">
                <h6>
                  <Link href="">{featureResource.title}</Link>
                </h6>
                <p className="mb-2">{featureResource.description}</p>
                <Link href="" className="icon-link icon-link-hover stretched-link z-index-2">
                  Check it out
                  <BsArrowRight />
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Dropdown>
  )
}

export default ResourcesMenuDropdown
