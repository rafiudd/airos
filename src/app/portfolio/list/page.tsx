'use client'
import { Col, Container, PageItem, Pagination, Row } from 'react-bootstrap'
import { BsChevronRight, BsEnvelope, BsTelephone } from 'react-icons/bs'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import Footer1 from '@/components/footer/Footer1'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import ItemEndCard from './components/ItemEndCard'
import ItemStartCard from './components/ItemStartCard'
import { portfolioLists } from './data'

import ctaVectorImg from '@/assets/images/elements/cta-vector.svg'
import Link from 'next/link'
import Image from 'next/image'

const PortfolioList = () => {
  return (
    <>
      <TopNavigationBar menuProps={{ showContactUs: true, showDocs: true, ulClassName: 'mx-auto' }} showSignUp showBuyNow />

      <main>
        <section className="pt-lg-8">
          <Container className="pt-4 pt-lg-0">
            <Row className="align-items-center mb-7">
              <Col xl={6}>
                <div className="d-flex position-relative z-index-9">
                  <PageBreadcrumb breadcrumbClassName="mb-1" items={['Home', 'Portfolio Showcase']} />
                </div>
                <h1 className="display-5">Highlights of cases that we&apos;ve built</h1>
              </Col>
              <Col xl={5} className="ms-auto">
                <p className="mb-4">
                  The combination of my passion for design, code &amp; interaction positions me in a unique place in the web design world.
                </p>
                <div className="text-center d-inline-block bg-light border rounded px-5 py-3">
                  <span className="heading-color items-center">Work with us?</span>
                  <Link className="ms-2" href="/contact/v2">
                    Contact us now
                    <BsChevronRight className="small ms-1" />
                  </Link>
                </div>
              </Col>
            </Row>

            {(portfolioLists || []).map((item, idx) => {
              return idx % 2 ? <ItemEndCard key={idx} {...item} /> : <ItemStartCard key={idx} {...item} />
            })}

            <Row className="mt-7">
              <Col xs={12}>
                <Pagination className="pagination-primary-soft list-unstyled d-flex justify-content-center flex-wrap mb-0">
                  <PageItem>
                    <FaLongArrowAltLeft className="me-2 rtl-flip" />
                    Prev
                  </PageItem>
                  <PageItem>1</PageItem>
                  <PageItem active>2</PageItem>
                  <PageItem>3</PageItem>
                  <PageItem>..</PageItem>
                  <PageItem>22</PageItem>
                  <PageItem>23</PageItem>
                  <PageItem>
                    Next
                    <FaLongArrowAltRight className="ms-2 rtl-flip" />
                  </PageItem>
                </Pagination>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="position-relative z-index-2 py-0 mb-n7">
          <Container className="position-relative">
            <div className="bg-primary rounded position-relative overflow-hidden p-4 p-sm-5">
              <figure className="position-absolute top-0 start-0 ms-n8">
                <svg width={371} height={354} viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="172.5" cy="176.5" rx="131.5" ry="125.5" fill="url(#paint0_linear_195_2)" />
                  <ellipse cx="185.5" cy={177} rx="185.5" ry={177} fill="url(#paint1_linear_195_2)" />
                  <defs>
                    <linearGradient id="paint0_linear_195_2" x1="172.5" y1={51} x2="172.5" y2={302} gradientUnits="userSpaceOnUse">
                      <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.5" />
                      <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="paint1_linear_195_2" x1="185.5" y1={0} x2="185.5" y2={354} gradientUnits="userSpaceOnUse">
                      <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.2" />
                      <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </figure>

              <div className="position-absolute end-0 bottom-0 me-sm-5">
                <Image src={ctaVectorImg} className="h-200px" width={162} alt="vector-img" />
              </div>
              <Row className="g-4 position-relative">
                <Col lg={7} className="mx-auto text-center">
                  <h2 className="text-white mb-4">Let&apos;s Work Together</h2>
                  <p className="text-white mb-4">
                    I&apos;ll take the time to understand your vision and goals, and work with you to develop a customized plan to help you succeed.
                  </p>
                  <div className="d-sm-flex justify-content-center align-items-center gap-2">
                    <Link href="/contact/v1" className="btn btn-dark icons-center">
                      <BsEnvelope className="me-2" />
                      Email us
                    </Link>
                    <Link href="/contact/v2" className="btn btn-dark icons-center">
                      <BsTelephone className="me-2" />
                      Contact us
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>

      <Footer1 />
    </>
  )
}

export default PortfolioList
