'use client'
import Footer2 from '@/components/footer/Footer2'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import { initIsotope } from '@/helpers/init-isotope'
import { FaSpinner } from 'react-icons/fa6'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Card, CardText, Container, Row } from 'react-bootstrap'
import { categoriesData, portfolioMasonryData } from './data'

const PortfolioMasonry = () => {
  useEffect(() => {
    initIsotope()
  }, [])

  return (
    <>
      <TopNavigationBar menuProps={{ showContactUs: true, showDocs: true, ulClassName: 'mx-auto' }} showSignUp showBuyNow />

      <main>
        <section className="pt-8">
          <Container>
            <div className="bg-dark rounded-4 text-center position-relative overflow-hidden py-5">
              <figure className="position-absolute top-0 start-0 ms-n8">
                <svg width={424} height={405} viewBox="0 0 424 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx={212} cy="202.5" rx={212} ry="202.5" fill="url(#paint0_linear_153_3831)" />
                  <defs>
                    <linearGradient id="paint0_linear_153_3831" x1={212} y1={0} x2={212} y2={405} gradientUnits="userSpaceOnUse">
                      <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity={0} />
                      <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </figure>
              <figure className="position-absolute top-0 end-0 me-n8 mt-5">
                <svg className="opacity-3" width={371} height={354} viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="d-flex justify-content-center position-relative z-index-9">
                <PageBreadcrumb breadcrumbClassName="mb-1" items={['Home', 'Portfolio Masonry']} dark />
              </div>
              <h1 className="h2 text-white">Portfolio Masonry</h1>
            </div>
            <div className="d-lg-flex align-items-center justify-content-center mt-6">
              <h6 className="mb-lg-0 me-3">Browse by:</h6>
              <div className="grid-menu" data-target=".filter-container">
                <ul className="nav nav-pills nav-pills-primary-soft gap-2">
                  {categoriesData.map((category, idx) => (
                    <li key={idx} className="nav-item">
                      <Link href="" className={`nav-link ${idx === 0 ? 'active' : ''}`} data-filter={category.name}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Row className="g-4 filter-container mt-3" data-isotope='{"layoutMode": "masonry"}'>
              {portfolioMasonryData.map((item, idx) => (
                <div key={idx} className={`col-sm-6 col-lg-4 grid-item ${item.categories.map((category) => ' ' + category + ' ')}`}>
                  <Card className="card-element-hover card-metro-hover">
                    <Image src={item.image} alt="portfolio-img" />
                    <div className="card-img-overlay hover-element d-flex">
                      <CardText as="div" className="mt-auto">
                        <h6 className="mb-0">
                          <Link href="/portfolio/case-study/v1" className="text-white stretched-link">
                            {item.title}
                          </Link>
                        </h6>
                        <small className="text-white">{item.subTitle}</small>
                      </CardText>
                    </div>
                  </Card>
                </div>
              ))}
            </Row>
            <div className="text-center mt-7">
              <button className="btn btn-lg btn-outline-light mb-0 icons-center">
                <FaSpinner size={20} className="me-2" />
                Load more work
              </button>
            </div>
          </Container>
        </section>
      </main>

      <Footer2 theme="dark" />
    </>
  )
}

export default PortfolioMasonry
