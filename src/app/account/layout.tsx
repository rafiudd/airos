'use client'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import useToggle from '@/hooks/useToggle'
import useViewPort from '@/hooks/useViewPort'
import { useLayoutContext } from '@/states/useLayoutContext'
import { ChildrenType } from '@/types/component-props'
import { Suspense } from 'react'
import { Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap'
import VerticalNavigationBar from './components/VerticalNavigationBar'

const loading = () => <div></div>

const AccountLayout = ({ children }: ChildrenType) => {
  const { width } = useViewPort()
  const {} = useLayoutContext()
  const { isTrue: isOffcanvasOpen, toggle: toggleOffcanvas } = useToggle()
  return (
    <>
      <TopNavigationBar menuProps={{ showContactUs: true, showDocs: true, ulClassName: 'mx-auto' }} showSignUp showBuyNow />
      <main>
        <section key={width} className="pt-sm-7">
          <Container className="pt-3 pt-xl-5">
            <Row>
              <Col lg={4} xl={3}>
                <div className="d-none d-lg-block">
                  <Suspense fallback={loading()}>
                    <VerticalNavigationBar />
                  </Suspense>
                </div>
                <Offcanvas
                  show={isOffcanvasOpen}
                  onHide={toggleOffcanvas}
                  placement="start"
                  className="offcanvas-lg h-100"
                  tabIndex={-1}
                  id="offcanvasSidebar">
                  <OffcanvasHeader className="bg-light" closeButton>
                    <OffcanvasTitle as="h5" className="offcanvas-title" id="offcanvasNavbarLabel">
                      My profile
                    </OffcanvasTitle>
                  </OffcanvasHeader>
                  <OffcanvasBody className="p-0">
                    <Suspense fallback={loading()}>
                      <VerticalNavigationBar />
                    </Suspense>
                  </OffcanvasBody>
                </Offcanvas>
              </Col>
              <Col lg={8} xl={9} className="ps-lg-4 ps-xl-6">
                {children}
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Suspense fallback={loading()}>
        <Footer1 />
      </Suspense>
    </>
  )
}

export default AccountLayout
