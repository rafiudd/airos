import React from 'react'
import RelatedWorksSwiper from '../components/RelatedWorksSwiper'
import Footer1 from '@/components/footer/Footer1'
import { Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import Image from 'next/image'
import { BsArrowLeft, BsArrowRight, BsBoxArrowUpRight, BsGrid3X3GapFill, BsQuote } from 'react-icons/bs'
import Link from 'next/link'
import { socialMediaLinks } from '@/assets/data/footer-items'
import avatar2 from '@/assets/images/avatar/02.jpg'
import caseStudy2 from '@/assets/images/portfolio/case-study-02.jpg'
import showcase4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcase5 from '@/assets/images/portfolio/showcase/05.jpg'
import GlightBox from '@/components/GlightBox'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const casestydyv2 = () => {
  return (
    <>
      <TopNavigationBar menuProps={{ showContactUs: true, showDocs: true, ulClassName: 'mx-auto' }} showSignUp showBuyNow />

      <main>
        <section className="pt-xl-9">
          <Container className="pt-4 pt-xl-0 position-relative z-index-2">
            <div className="d-flex position-relative mb-2">
              <PageBreadcrumb breadcrumbClassName="pb-0 mb-0" items={['Home', 'Portfolio', 'Portfolio case studies v2']} />
            </div>
            <h1 className="h2 mb-4 mb-sm-6">Website Optimization for TechWave</h1>
            <Row className="justify-content-lg-end justify-content-center flex-lg-nowrap mb-7">
              <Col xs={12} className="d-flex mb-5 mb-sm-6 mb-lg-0">
                <Image src={caseStudy2} className="rounded" alt="portfolio-img" />
              </Col>
              <Col lg={5} className="ps-lg-6">
                <h4 className="mb-4">Overview</h4>
                <p className="mb-4">
                  In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song
                  well four only head busy it. Afford son she had lively living.
                </p>
                <table className="table table-borderless mb-4">
                  <tbody>
                    <tr>
                      <th scope="row" className="heading-color px-0 py-2">
                        Client:
                      </th>
                      <td className="px-0 py-2">Allen Smith</td>
                    </tr>
                    <tr>
                      <th scope="row" className="heading-color px-0 py-2">
                        Manager:
                      </th>
                      <td className="px-0 py-2">Emma Watson, Maria Smith</td>
                    </tr>
                    <tr>
                      <th scope="row" className="heading-color px-0 py-2">
                        Category:
                      </th>
                      <td className="px-0 py-2">Interior design</td>
                    </tr>
                    <tr>
                      <th scope="row" className="heading-color px-0 py-2">
                        Awards:
                      </th>
                      <td className="px-0 py-2">
                        <span className="d-block"> Pineapple Award Design</span>
                        <span className="d-block mt-2"> Project of the Year </span>
                        <span className="d-block mt-2"> Designer of the Year</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link href="" className="btn btn-dark mb-0 icons-center">
                  View project website
                  <BsBoxArrowUpRight className="ms-2" />
                </Link>
              </Col>
            </Row>
            <Row className="mb-6">
              <Col md={4}>
                <h4>01. The Challenge</h4>
              </Col>
              <Col md={7} className="ms-auto">
                <p>
                  <span className="dropcap fs-2 heading-color bg-light rounded px-2">T</span>he simple act of cultivating gratitude has the remarkable
                  ability to bring joy and abundance into our lives, shifting our perspective from lack to abundance. In this article, we will explore
                  the power of gratitude and how it can enhance our overall well-being and create a positive ripple effect in our lives and the lives
                  of those around us. <strong>In a world filled with chaos</strong> and uncertainty, it&apos;s easy to lose sight of the things that truly
                  matter.
                </p>
                <p className="mb-0">
                  Once an idea takes root, it requires nurturing and refinement. This stage involves research, brainstorming, and gathering feedback.
                  Conducting market analysis, <Link href="">exploring existing solutions</Link>, and collaborating with others can help refine the
                  idea further. The goal is to gain a deeper understanding of the idea&apos;s feasibility, potential impact, and market viability.
                </p>
              </Col>
            </Row>
            <Row className="g-4 g-xl-6">
              <Col sm={6}>
                <GlightBox href={showcase4.src} data-glightbox data-gallery="image-popup">
                  <Image src={showcase4} className="rounded" alt="portfolio-img" />
                </GlightBox>
              </Col>
              <Col sm={6}>
                <GlightBox href={showcase5.src} data-glightbox data-gallery="image-popup">
                  <Image src={showcase5} className="rounded" alt="portfolio-img" />
                </GlightBox>
              </Col>
            </Row>
            <Row className="mt-6">
              <Col md={4}>
                <h4>02. The Solution</h4>
              </Col>
              <Col md={7} className="ms-auto">
                <p className="mb-4">
                  Once an idea takes root, it requires nurturing and refinement. This stage involves research, brainstorming, and gathering feedback.
                  Conducting market analysis, exploring existing solutions, and collaborating with others can help refine the idea further. The goal
                  is to gain a deeper understanding of the idea&apos;s feasibility, potential impact, and market viability. It begins with recognizing the
                  power and potential of an idea. Through cultivation, planning, and strategizing, ideas are refined and shaped into actionable plans.
                  Challenges are embraced as opportunities for growth, and perseverance becomes key in overcoming obstacles.
                </p>
              </Col>
            </Row>
            <Row className="mt-6">
              <Col md={4}>
                <h4>03. The Result</h4>
              </Col>
              <Col md={7} className="ms-auto">
                <p className="lead">
                  Two assure Edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can
                  suspected its concealed put furnished.
                </p>
                <p>
                  Transforming ideas into reality often requires collaboration with a diverse range of individuals. Partnering with experts, seeking
                  mentorship, and building a network of like-minded individuals can provide valuable insights and support.
                </p>
                <div className="d-flex mt-4">
                  <h5 className="display-4 text-primary lh-0 mb-0">
                    <BsQuote />
                  </h5>
                  <div className="ms-3">
                    <q className="fs-6 heading-color">
                      Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham
                      for thoughts overcame off her consider. Polite it elinor is depend.
                    </q>
                    <div className="d-flex align-items-center mt-4">
                      <div className="avatar">
                        <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">Emma Watson</h6>
                        <small>CEO, Co-founder</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-8">
              <Col xs={12}>
                <div className="d-lg-flex justify-content-lg-between">
                  <div className="align-items-center mb-3 mb-lg-0">
                    <ul className="list-inline mb-0 icons-center gap-1 flex-wrap">
                      <li className="list-inline-item">
                        
                        <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="">
                          Branding
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        
                        <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="">
                          Packaging
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        
                        <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="">
                          UI/UX design
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="align-items-center">
                    <ul className="list-inline mb-0 mb-2 mb-sm-0">
                      {socialMediaLinks.map((item, idx) => {
                        const Icon = item.icon
                        return (
                          <li key={item.iconClassName + idx} className="list-inline-item">
                            <Link className={`btn px-2 btn-sm ${item.iconClassName}`} href="">
                              <Icon />
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <hr className="my-4" />
                <Row className="align-items-center">
                  <Col xs={5} className="position-relative">
                    <span>
                      <BsArrowLeft className="me-2" />
                      Previous
                    </span>
                    <h6 className="mb-0 mt-2">
                      <Link href="" className="stretched-link">
                        The Art of Storytelling
                      </Link>
                    </h6>
                  </Col>
                  <Col xs={2} className="text-center">
                    <Link href="" className="heading-color text-primary-hover">
                      
                      <BsGrid3X3GapFill />
                    </Link>
                  </Col>
                  <Col xs={5} className="text-end position-relative">
                    <span>
                      Next
                      <BsArrowRight className="ms-2" />
                    </span>
                    <h6 className="mb-0 mt-2">
                      <Link href="" className="stretched-link">
                        Transforming Ideas into Reality
                      </Link>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <RelatedWorksSwiper />
      </main>

      <Footer1 />
    </>
  )
}

export default casestydyv2
