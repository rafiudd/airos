'use client'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import useToggle from '@/hooks/useToggle'
import useViewPort from '@/hooks/useViewPort'
import { Card, Col, Container, Form, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap'
import VerticalProductFilter from './components/VerticalProductFilter'
import { FaSlidersH } from 'react-icons/fa'
import { productGrid } from '@/assets/data/products'
import ProductCard from './components/ProductCard'
import Link from 'next/link'
import { Fragment } from 'react'
import { BsSearch } from 'react-icons/bs'
import backgroundImg5 from '@/assets/images/shop/bg/05.jpg'
import Footer8 from '@/components/footer/Footer8'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const ShopGrid = () => {
  const { isTrue: showFilter, toggle: toggleFilter } = useToggle()
  const { width } = useViewPort()
  return (
    <>
      <TopNavigationBar showSearchInput showShoppingCart menuProps={{ showContactUs: true, ulClassName: 'ms-xl-5' }} />

      <main>
      <section className="pb-5 pb-sm-7">
        <Container>
          <PageBreadcrumb items={['Home', 'Shop', 'All Products']} breadcrumbClassName="pb-0 mb-0" />
          <h1 className="h3 mb-0 mt-3">Search items</h1>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col xl={3} as={'aside'}> 
              {width < 1200 ? (
                <Offcanvas
                  show={showFilter}
                  onHide={toggleFilter}
                  placement="end"
                  className="offcanvas-xl"
                  tabIndex={-1}
                  id="offcanvasSidebar"
                  aria-labelledby="offcanvasSidebarLabel">
                  <OffcanvasHeader closeButton className="bg-light">
                    <OffcanvasTitle id="offcanvasSidebarLabel">Advance Filter</OffcanvasTitle>
                  </OffcanvasHeader>
                  <OffcanvasBody className="flex-column p-3 p-xl-0">
                    <VerticalProductFilter />
                  </OffcanvasBody>
                </Offcanvas>
              ) : (
                <VerticalProductFilter />
              )}
            </Col>

            <Col xl={9} className="ps-xl-6">
              <Row as={Form} className="g-2 g-xl-4 mb-4">
                <Col md={6}>
                  <div className="rounded position-relative">
                    <input
                      className="form-control bg-light pe-5"
                      type="search"
                      placeholder="Search products by name or keyword..."
                      aria-label="Search"
                    />
                    <button className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                      <BsSearch className="bi" />
                    </button>
                  </div>
                </Col>
                <Col sm={6} md={3} className="ms-auto">
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue={'selected'}>Sort by</option>
                    <option value={1}>Name</option>
                    <option value={2}>Low to High Price</option>
                    <option value={3}>Heigh to Low Price</option>
                  </select>
                </Col>
                <Col sm={6} md={3} className="d-grid d-xl-none">
                  <button onClick={toggleFilter} className="btn btn-dark mb-0" type="button">
                    <FaSlidersH className="me-1" /> Show filter
                  </button>
                </Col>
              </Row>
              <Row className="g-4 g-lg-5">
                {productGrid.map((product, idx) => {
                  return (
                    <Fragment key={idx}>
                      <Col sm={6} lg={4}>
                        <ProductCard product={product} />
                      </Col>
                      {idx == 2 && (
                        <Col sm={6} lg={12}>
                          <Card
                            className="card-body h-100 p-md-6"
                            style={{ backgroundImage: `url(${backgroundImg5.src})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                            <Row className="align-items-center">
                              <Col lg={7} className="mb-4 mb-lg-0">
                                <h4 className="text-white mb-0">Checkout the newest smart watch product</h4>
                              </Col>
                              <Col lg={5} className="text-lg-end">
                                <Link href="" className="btn btn-white mb-0">
                                  Shop now
                                </Link>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                      )}
                    </Fragment>
                  )
                })}
              </Row>

              <ul className="pagination pagination-primary-soft d-flex justify-content-end mb-0 mt-5">
                <li>
                  <ul className="list-unstyled">
                    <li className="page-item disabled">
                      <Link className="page-link" href="" tabIndex={-1} aria-disabled="true">
                        Prev
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="">
                        ..
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="">
                        22
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="">
                        Next
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      </main>
      <Footer8 />
    </>
  )
}

export default ShopGrid
