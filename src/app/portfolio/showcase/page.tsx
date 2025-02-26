'use client'
import { Col, Container, PageItem, Pagination, Row } from 'react-bootstrap'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import ShowcaseCard from '@/components/cards/ShowcaseCard'
import Footer1 from '@/components/footer/Footer1'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import clientWhite1 from '@/assets/images/client/client-white/01.svg'
import clientWhite2 from '@/assets/images/client/client-white/02.svg'
import clientWhite3 from '@/assets/images/client/client-white/03.svg'
import clientWhite4 from '@/assets/images/client/client-white/04.svg'
import clientWhite5 from '@/assets/images/client/client-white/05.svg'
import ctaVector from '@/assets/images/elements/cta-vector.svg'
import showcase1 from '@/assets/images/portfolio/showcase/01.jpg'
import showcase2 from '@/assets/images/portfolio/showcase/02.jpg'
import showcase3 from '@/assets/images/portfolio/showcase/03.jpg'
import showcase4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcase5 from '@/assets/images/portfolio/showcase/05.jpg'
import { BsEnvelope, BsTelephone } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

const Showcase = () => {
  return (
    <>
      <TopNavigationBar menuProps={{ showContactUs: true, showDocs: true, ulClassName: 'mx-auto' }} showSignUp showBuyNow />

      <main>
        <section className="pt-lg-8">
          <Container className="pt-4 pt-lg-0">
            <div className="inner-container left mb-5">
              <PageBreadcrumb breadcrumbClassName="mb-1" items={['Home', 'Portfolio Showcase']} />

              <h1 className="h2">Portfolio Showcase</h1>
            </div>
            <Row className="g-sm-6">
              <Col md={6} className="mb-5 mb-md-0">
                <ShowcaseCard
                  brandImage={clientWhite3}
                  image={showcase3}
                  title="UI/UX Enhancement for SnapMedia"
                  subTitle="UI/UX design"
                  link="/portfolio/case-study/v2"
                />
              </Col>
              <Col md={6} className="mb-5 mb-md-0">
                <ShowcaseCard
                  brandImage={clientWhite4}
                  image={showcase2}
                  title="Website Optimization for TechWave"
                  subTitle="Web design"
                  link="/portfolio/case-study/v1"
                />
              </Col>
              <Col xs={12} className="mb-5 mb-md-0">
                <ShowcaseCard
                  brandImage={clientWhite2}
                  image={showcase1}
                  title="Chasing Dreams and Creating Art"
                  subTitle="Branding"
                  link="/portfolio/case-study/v2"
                />
              </Col>
              <Col md={6} className="mb-5 mb-md-0">
                <ShowcaseCard
                  brandImage={clientWhite1}
                  image={showcase5}
                  title="The Art of Storytelling"
                  subTitle="Graphics design"
                  link="/portfolio/case-study/v1"
                />
              </Col>
              <Col md={6} className="mb-5 mb-md-0">
                <ShowcaseCard
                  brandImage={clientWhite5}
                  image={showcase4}
                  title="Transforming Ideas into Reality"
                  subTitle="Marketing"
                  link="/portfolio/case-study/v2"
                />
              </Col>
            </Row>
            <Row className="mt-md-7">
              <Col xs={12} className="mx-auto">
                <Pagination className="pagination-primary-soft d-flex justify-content-between mb-0">
                  <li>
                    <ul className="list-unstyled">
                      <PageItem disabled>
                        <FaLongArrowAltLeft size={20} className="me-2 rtl-flip" />
                        Prev
                      </PageItem>
                    </ul>
                  </li>
                  <li>
                    <ul className="list-unstyled">
                      <PageItem active className="page-item">
                        1
                      </PageItem>
                      <PageItem className="page-item">2</PageItem>
                      <PageItem className="page-item">3</PageItem>
                      <PageItem className="page-item">..</PageItem>
                      <PageItem className="page-item">22</PageItem>
                      <PageItem className="page-item">23</PageItem>
                    </ul>
                  </li>
                  <li>
                    <ul className="list-unstyled">
                      <PageItem className="page-item">
                        Next
                        <FaLongArrowAltRight size={20} className="ms-2 rtl-flip" />
                      </PageItem>
                    </ul>
                  </li>
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
                <Image src={ctaVector} className="h-200px" width={162} alt="vector-img" />
              </div>
              <Row className="g-4 position-relative">
                <Col lg={7} className="mx-auto text-center">
                  <h2 className="text-white mb-4">Let&apos;s Work Together</h2>
                  <p className="text-white mb-4">
                    I&apos;ll take the time to understand your vision and goals, and work with you to develop a customized plan to help you succeed.
                  </p>
                  <div className="d-sm-flex justify-content-center align-items-center gap-2">
                    <Link href="/contact/v1" className="btn btn-dark">
                      <BsEnvelope className="me-2" />
                      Email us
                    </Link>
                    <Link href="/contact/v2" className="btn btn-dark">
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

export default Showcase
