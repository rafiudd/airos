'use client'
import about14 from '@/assets/images/about/14.jpg'
import about17 from '@/assets/images/about/17.jpg'
import trustStarImg from '@/assets/images/elements/trustpilot-star.svg'
import trustPilotImg from '@/assets/images/elements/trustpilot.svg'
import {
  BsArrowRight,
  BsBasket,
  BsBoxes,
  BsCheck,
  BsDiagram3,
  BsFunnel,
  BsGear,
  BsPatchCheckFill,
  BsPeople,
  BsPieChart,
  BsShieldCheck,
} from 'react-icons/bs'

import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Col, Container, Nav, NavItem, NavLink, ProgressBar, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

const Features = () => {
  return (
    <section className="bg-dark position-relative overflow-hidden" data-bs-theme="dark">
      <figure className="position-absolute top-0 start-0 mt-n6 ms-n8">
        <svg className="opacity-3" width="371" height="354" viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="172.5" cy="176.5" rx="131.5" ry="125.5" fill="url(#paint0_linear_195_2)"></ellipse>
          <ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)"></ellipse>
          <defs>
            <linearGradient id="paint0_linear_195_2" x1="172.5" y1="51" x2="172.5" y2="302" gradientUnits="userSpaceOnUse">
              <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.5"></stop>
              <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_195_2" x1="185.5" y1="0" x2="185.5" y2="354" gradientUnits="userSpaceOnUse">
              <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.2"></stop>
              <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </figure>

      <figure className="position-absolute top-0 end-0 me-n9 mt-n7 d-none d-md-block">
        <svg className="fill-white" width="768.8px" height="1386px" viewBox="0 0 768.8 1386" style={{ opacity: '0.07' }} xmlSpace="preserve">
          <path d="M647.6,748.4c1.9,6,3.3,12.2,3.8,18.4c2.2,18.9-0.7,38.9-9.1,61.5c-15.6,41.9-47.8,85.3-81.6,131.5 c-46.1,63.1-94.5,128.4-108.1,199.1c-15.7,80.6,17.2,154.5,101.1,226.1l-0.4,0.4c-188.1-160.7-84.4-301.8,7.3-426.2 c33.9-46,65.8-89.6,81.4-131.2c17.5-46.8,11.8-84.9-18-119.6c-39.6-46.6-86.5-86.9-135.7-129.3C339.1,450.3,184.9,317.3,240.6,4.6 l0.6,0.1C185.7,317,339.7,450.1,488.7,578.7c49.3,42.7,95.8,82.8,135.8,129.6C635.5,721,643.1,734.2,647.6,748.4z" />
          <path d="M636.2,722.3c23.4,73.7-25.2,149.2-76.5,228.7c-40.8,63.5-83,129.1-91.9,198.3c-9.9,78.2,25.9,150,109.6,219 l-0.4,0.7c-45-37.1-75.4-74-93.5-112.7c-15.9-34.5-21.2-69.5-16.5-106.8c8.9-69.5,51-135.1,91.9-198.6 C616.4,861.3,671,776.5,622,694.1c-39.6-66.6-102.4-118.8-169-174.2c-68.7-57.3-140-116.4-188.1-195.3 c-25.9-42.6-42.9-86.9-51.5-135.2c-9.8-54.6-9.2-112.9,2-177.9l0.6,0.1c-46.5,271.4,97.9,391.7,237.5,507.9 c66.7,55.4,129.4,107.7,169.1,174.5C628.8,702.7,633.1,712.6,636.2,722.3z" />
          <path d="M624.6,687.5c11.7,37,10.5,76.9-3.8,121.9c-13.7,43.3-38.1,87.4-61.8,130.2c-35.7,64.2-72.5,130.4-76.3,198.6 c-4.4,76.5,34.5,146.1,118.7,213.3l-0.6,0.8c-188.5-150.2-114.3-284-42.6-413.2c49.3-88.7,95.7-172.7,62.4-260.6 c-31.5-83-108.5-141.7-189.7-204C363,422.5,293.2,369,244.9,298c-26.1-38.5-43.3-78.4-53-121.8C181.2,127,180.6,75,190.2,16.8l0.9,0 C151,259.3,293.5,368.3,431.2,473.7c81.5,62.2,158.3,121.3,190.1,204.2C622.6,681.2,623.6,684.4,624.6,687.5z" />
          <path d="M614.6,642.5c2.2,6.8,4.1,13.7,5.4,20.8c18.1,91.8-22.3,177.4-61.1,260.2c-32.2,68.8-62.8,133.6-62.1,201.3 c0.8,76.3,41.6,143,128.7,209.2l-0.6,0.8c-46.1-35.1-78.8-70-100.3-106.8c-19.1-32.9-28.6-66.6-28.9-103.1 c-0.6-67.6,29.8-132.7,62.3-201.6c38.8-82.7,79-168.2,60.9-259.8c-19.1-96.7-109.2-158.6-204.5-224.2 c-68.3-47.1-139.2-95.6-188.9-160.4c-56.1-73.2-75.8-157-60.3-255.8l0.9,0c-34.9,220.7,109.1,319.7,248.6,415.2 C503.4,499.3,587.6,557.2,614.6,642.5z" />
          <path d="M610.8,603.9c4.4,13.9,7.1,28.7,7.8,44.6c3.6,91.5-28.4,172.7-59.3,251.2c-28.5,72.3-55.1,140.5-50.2,208.8 c5.2,76.6,49.9,143,140.1,208.8l-0.4,0.7c-90.5-66-135.2-132.4-140.8-209.2c-5-68.6,21.9-136.9,50.3-209.4 c30.9-78.5,62.6-159.6,59.1-250.9c-4.2-109-107.3-171.8-216.8-238.5c-70.1-42.7-142.8-87-194.2-146.1 c-58.1-66.8-79.9-143.6-66-234.6l1,0.3c-30.7,202.9,117.1,292.9,259.8,379.6C494.9,466.2,584.1,520.8,610.8,603.9z" />
          <path d="M610.7,570.7c6.1,19.2,8.4,40.1,6,62.8c-8.3,84.1-33.8,160.3-55.9,227.3c-27.6,83.2-51.4,154.9-42.7,226 c9.5,78.4,58.7,146,155,213l-0.6,0.8c-96.5-66.7-145.8-134.6-155.4-213.2c-8.8-71.4,15.2-143.4,42.8-226.7 c22.3-67.1,47.6-143.3,55.9-227.3c12-120.7-104.2-182.9-227.6-248.9c-72.3-38.6-147.1-78.7-200.6-132.7 c-60.6-61-84.2-131.8-72-216.2l1.2,0.2C89.9,223.5,242,305,389.1,383.7C488.9,437.2,584.6,488.6,610.7,570.7z" />
          <path d="M613,540.8c7.3,23.1,8.5,48.7,1.9,77.9c-14,63.3-31.8,122.1-47.4,173.8c-30,99.3-56,185.2-45,263.4 c11.7,84.3,67.2,156.6,174.2,227.2l-0.5,1c-56.6-37.2-98.1-74.3-126.8-113.1c-26.6-35.7-42.3-73.2-47.9-114.7 c-11.1-78.8,14.9-164.4,45.1-264c15.7-51.7,33.4-110.5,47.5-173.6C643.5,486.7,513.4,426,375.8,361.9 c-74.9-34.9-152.2-71-207.6-120.1c-63-55.7-88.3-121-78-199.6l1.1-0.1c-10.5,78.1,14.8,143.1,77.7,198.6 c55.4,49.1,132.7,85.3,207.5,119.9C484,410.7,587.1,458.9,613,540.8z" />
          <path d="M617.2,512.9c8.3,26.2,8,56.1-3.5,90.9c-5.6,17.1-11.2,33.9-16.5,50c-47.8,143.4-85.7,256.4-76.5,351.9 c9.7,99.7,71.5,180,200.4,260.4l-0.5,1c-67.3-41.9-115.6-83.2-148.1-126.6c-30.9-41-48.1-85.2-52.8-134.8 c-9.3-95.8,28.8-208.9,76.6-352.3c5.6-16.2,10.9-32.9,16.5-50c47.5-143.5-96.3-201.6-248.6-263.1c-77.7-31.1-157.6-63.5-215.4-108.2 C83.3,181.7,56.1,121.4,65.2,48l1.2,0.2c-9,72.7,18.1,132.8,83.1,183c57.8,44.6,137.6,76.8,214.8,108.1 C480.2,386,591.2,431,617.2,512.9z" />
          <path d="M622.4,486.7c9.6,30.2,6.1,63.9-10.3,102.3C465,933,463,1084.4,745.1,1249l-0.8,1.1 c-143.5-83.6-211.5-162.5-227.9-263.5c-17.4-106.8,25.3-236.4,94.5-398.1c18.6-43.4,20.4-80.4,6-113.1 C583.7,401.1,471.1,362,351.5,320.8C189.7,265,22.7,207.3,40,54.3l1.2,0.2C23.8,206.4,190.5,263.8,351.7,319.6 C471.4,361,584.6,400,617.6,475C619.7,478.9,621.2,482.8,622.4,486.7z" />
          <path d="M628.6,461.4c10.3,32.5,4.4,69.6-18,112.8c-93.9,182.2-122.9,308.3-94.5,408.8c26.1,92.5,101.7,167,252.8,249 l-0.8,1.1c-151.5-82.5-227.2-157.2-253.6-249.9c-28.5-100.7,0.5-227.1,94.5-409.9c24.3-47.3,29-87.1,14.3-121.5 c-32.7-76-155.1-112-284.6-149.7C172.6,253.7,0.1,203.5,15.1,60.4l1.2,0.2c-14.6,141.8,157,191.9,323.2,240.6 c129.9,37.9,252.4,73.9,285.3,150.4C626.2,454.9,627.5,458,628.6,461.4z" />
        </svg>
      </figure>

      <Container className="pb-6 position-relative">
        <div className="inner-container-small text-center mb-4 mb-sm-5">
          <span className="text-primary fw-bold text-uppercase">Features</span>
          <h2 className="mb-0 mt-3">Powerful SaaS features for your agency</h2>
        </div>

        <TabContainer defaultActiveKey="analytics">
          <Row>
            <Col lg={10} xl={8} xxl={6} className="mx-auto mb-6 mb-xl-8">
              <div className="bg-light rounded-pill p-2">
                <Nav variant="pills" className="nav-pills-primary nav-responsive justify-content-between">
                  <NavItem>
                    <NavLink eventKey="analytics" className="nav-link rounded-pill icons-center">
                      <BsFunnel className="me-2" />
                      Analytics
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink eventKey="collaboration" className="rounded-pill icons-center">
                      <BsBasket className="me-2" />
                      Collaboration
                    </NavLink>
                  </NavItem>

                  <NavItem className="position-relative">
                    <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-n5 d-none d-lg-block">
                      Coming soon
                    </span>
                    <NavLink className="rounded-pill icons-center">
                      <BsGear className="me-2" />
                      Automation
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink className="rounded-pill icons-center">
                      <BsPieChart className="me-2" />
                      Scalability
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>

            <Col xs={11} className="mx-auto">
              <TabContent>
                <TabPane eventKey="analytics" className="fade">
                  <Row className="align-items-center">
                    <Col lg={6} className="mb-6 mb-lg-0">
                      <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Analytics</span>
                      <h3 className="my-4">Comprehensive data analytics and reporting</h3>
                      <p>Gain valuable insights into your digital campaigns with our comprehensive data analytics and reporting feature.</p>

                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0 icons-center">
                          <BsPatchCheckFill className="text-primary me-2" />
                          Actionable recommendations
                        </li>
                        <li className="list-group-item heading-color mb-0 icons-center">
                          <BsPatchCheckFill className="text-primary me-2" />
                          Cross-channel analysis
                        </li>
                        <li className="list-group-item heading-color mb-0 icons-center">
                          <BsPatchCheckFill className="text-primary me-2" />
                          User-friendly interface
                        </li>
                      </ul>

                      <Link className="btn btn-white icon-link icon-link-hover" href="">
                        Explore analytics
                        <BsArrowRight className="bi" />
                      </Link>
                    </Col>

                    <Col lg={4} className="position-relative ms-auto">
                      <figure className="position-absolute top-0 start-0 ms-n5 mt-n5">
                        <svg className="opacity-2" width="148" height="140" viewBox="0 0 148 140" xmlns="http://www.w3.org/2000/svg">
                          <path
                            className="fill-primary"
                            d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <circle className="fill-primary" cx="25.86" cy="131.41" r="2.95"></circle>
                          <circle className="fill-primary" cx="44.71" cy="131.41" r="2.95"></circle>
                          <circle className="fill-primary" cx="63.57" cy="131.41" r="2.95"></circle>
                          <circle className="fill-primary" cx="82.43" cy="131.41" r="2.95"></circle>
                          <circle className="fill-primary" cx="101.29" cy="131.41" r="2.95"></circle>
                          <circle className="fill-primary" cx="120.14" cy="131.41" r="2.95"></circle>
                          <path
                            className="fill-primary"
                            d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <circle className="fill-primary" cx="25.86" cy="113.61" r="2.95"></circle>
                          <circle className="fill-primary" cx="44.71" cy="113.61" r="2.95"></circle>
                          <circle className="fill-primary" cx="63.57" cy="113.61" r="2.95"></circle>
                          <circle className="fill-primary" cx="82.43" cy="113.61" r="2.95"></circle>
                          <circle className="fill-primary" cx="101.29" cy="113.61" r="2.95"></circle>
                          <circle className="fill-primary" cx="120.14" cy="113.61" r="2.95"></circle>
                          <path
                            className="fill-primary"
                            d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <circle className="fill-primary" cx="25.86" cy="95.81" r="2.95"></circle>
                          <circle className="fill-primary" cx="44.71" cy="95.81" r="2.95"></circle>
                          <circle className="fill-primary" cx="63.57" cy="95.81" r="2.95"></circle>
                          <circle className="fill-primary" cx="82.43" cy="95.81" r="2.95"></circle>
                          <circle className="fill-primary" cx="101.29" cy="95.81" r="2.95"></circle>
                          <circle className="fill-primary" cx="120.14" cy="95.81" r="2.95"></circle>
                          <path
                            className="fill-primary"
                            d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <circle className="fill-primary" cx="25.86" cy="24.62" r="2.95"></circle>
                          <circle className="fill-primary" cx="44.71" cy="24.62" r="2.95"></circle>
                          <circle className="fill-primary" cx="63.57" cy="24.62" r="2.95"></circle>
                          <circle className="fill-primary" cx="82.43" cy="24.62" r="2.95"></circle>
                          <circle className="fill-primary" cx="101.29" cy="24.62" r="2.95"></circle>
                          <circle className="fill-primary" cx="120.14" cy="24.62" r="2.95"></circle>
                          <path
                            className="fill-primary"
                            d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                          <path
                            className="fill-primary"
                            d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"></path>
                          <circle className="fill-primary" cx="25.86" cy="6.82" r="2.95"></circle>
                          <circle className="fill-primary" cx="44.71" cy="6.82" r="2.95"></circle>
                          <circle className="fill-primary" cx="63.57" cy="6.82" r="2.95"></circle>
                          <circle className="fill-primary" cx="82.43" cy="6.82" r="2.95"></circle>
                          <circle className="fill-primary" cx="101.29" cy="6.82" r="2.95"></circle>
                          <circle className="fill-primary" cx="120.14" cy="6.82" r="2.95"></circle>
                          <path
                            className="fill-primary"
                            d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                        </svg>
                      </figure>

                      <figure className="position-absolute bottom-0 end-0 z-index-1 mb-n6 me-n6 d-none d-lg-block">
                        <svg width="167" height="107" viewBox="0 0 167 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            className="fill-white"
                            clipRule="evenodd"
                            d="M87.1132 1.04286L87.1128 1.04337C86.6896 1.55271 86.2787 2.04727 85.826 2.5C84.8049 3.40765 83.7918 4.32334 82.78 5.23795L82.7799 5.23803L82.7798 5.23811L82.7796 5.23823C80.2242 7.54807 77.6764 9.85101 75.026 12C61.626 22.5 48.226 33 34.926 43.5L9.12598 63.9L9.12586 63.9001C8.7259 64.2001 8.32595 64.5 8.02598 64.8C7.32598 65.4 6.52598 65.8 5.62598 65C4.82598 64.3 5.02598 63.3 5.52598 62.6C6.12598 61.6 6.92598 60.6 7.72598 59.8C8.20935 59.3606 8.69271 58.919 9.17671 58.4769L9.17678 58.4768L9.17686 58.4767L9.17698 58.4766C11.9972 55.9003 14.8387 53.3044 17.826 51C39.426 34.4 61.126 17.9 83.626 2.5C84.826 1.6 86.126 0.8 87.426 0C87.426 0 87.526 0.1 87.826 0.2C87.5789 0.482421 87.3442 0.764841 87.1132 1.04286ZM166.026 21.9C165.676 22.1 165.326 22.325 164.976 22.55C164.626 22.775 164.276 23 163.926 23.2C149.326 31.8 134.926 40.7 120.826 50.2C99.226 64.6 77.826 79.4 57.426 95.4C53.626 98.4 49.926 101.4 46.226 104.4C45.626 104.9 45.126 105.3 44.526 105.7C43.726 106.3 42.926 106.6 42.126 105.9C41.326 105.2 41.526 104.2 42.026 103.5C42.626 102.5 43.326 101.5 44.226 100.7L44.3458 100.59C46.8091 98.3235 49.3691 95.9681 52.026 94C82.426 71 113.626 49.5 146.926 31C150.726 28.8667 154.615 26.9111 158.504 24.9556C160.448 23.9778 162.393 23 164.326 22C164.826 21.8 165.326 21.6 165.726 21.4C165.826 21.5 165.926 21.7 166.026 21.9ZM99.926 8.5C100.626 8 101.226 7.4 101.826 6.8C101.726 6.7 101.626 6.6 101.326 6.5C100.626 7 99.926 7.525 99.226 8.05C98.526 8.575 97.826 9.1 97.126 9.6C93.0918 12.5088 89.0545 15.4176 85.0158 18.3275L85.0151 18.328C65.7284 32.224 46.4088 46.1436 27.226 60.2C21.8311 64.1042 16.7385 68.3108 11.6263 72.5336L11.6262 72.5336C9.53676 74.2595 7.44401 75.9882 5.32601 77.7C3.82601 78.9 2.52601 80.3 1.22601 81.7C0.726013 82.2 0.226013 82.8 0.026013 83.5C-0.073987 84 0.126013 84.7 0.426013 85C0.726013 85.3 1.52601 85.4 1.92601 85.2C2.72601 84.8 3.42601 84.3 4.12601 83.7C6.54336 81.7156 8.93467 79.7052 11.3234 77.6969C15.5554 74.139 19.7794 70.5878 24.126 67.2C34.7347 58.9552 45.3766 50.8101 56.0135 42.669L56.0143 42.6684L56.015 42.6678C63.8265 36.6891 71.6352 30.7125 79.426 24.7C86.3253 19.3005 93.1247 13.9011 99.924 8.50163L99.926 8.5ZM100.426 22C99.326 23 98.226 24 97.026 24.9C93.6956 27.4851 90.3598 30.0703 87.0224 32.6567L87.015 32.6624C76.0246 41.1795 65.0165 49.7104 54.126 58.3C47.6804 63.3921 41.3179 68.5672 34.9849 73.7183C31.4926 76.5588 28.0093 79.3921 24.526 82.2L24.526 82.2001C23.726 82.9 22.926 83.6 22.026 84.1C21.526 84.4 20.426 84.4 20.126 84.1C19.726 83.7 19.626 82.7 19.926 82.2C20.326 81.4 20.926 80.6 21.626 79.9C22.3148 79.2686 22.9953 78.629 23.6771 77.9883L23.6772 77.9882C25.3709 76.3963 27.0722 74.7973 28.926 73.3C48.926 57.5 69.126 42 90.226 27.7C92.5211 26.1427 94.9505 24.5853 97.2941 23.083L97.2943 23.0828C97.8098 22.7524 98.3212 22.4246 98.826 22.1C99.226 21.9 99.626 21.7 100.026 21.4C100.102 21.5146 100.164 21.6 100.217 21.6729L100.217 21.673C100.302 21.791 100.364 21.8764 100.426 22ZM107.355 35.4442C107.542 35.2315 107.732 35.0157 107.926 34.8C107.626 34.6 107.526 34.5 107.526 34.5L107.526 34.5001C106.026 35.6001 104.526 36.7 103.026 37.7C86.326 48.8 70.226 60.7 54.326 72.8C49.6261 76.2999 45.0262 79.8999 40.4262 83.4998L40.426 83.5C39.526 84.2 38.726 85 38.026 85.8C37.426 86.5 37.126 87.4 37.826 88.2C38.526 89.1 39.426 89 40.226 88.5C41.326 87.9 42.426 87.2 43.426 86.4C45.176 85 46.901 83.575 48.626 82.15C50.351 80.725 52.076 79.3 53.826 77.9C65.926 68.4 78.126 58.9 90.326 49.5L105.326 37.5C106.032 36.951 106.676 36.2175 107.355 35.4442Z"></path>
                        </svg>
                      </figure>

                      <Image src={about14} className="rounded position-relative zindex-2" alt="feature-img" />

                      <div className="bg-white rounded d-flex align-items-center position-absolute top-0 end-0 mt-n5 px-3 py-2">
                        <p className="text-dark fw-bold mb-0">Meeting with</p>

                        <ul className="mb-0 align-items-center">
                          <li className="avatar avatar-xs me-1">
                            <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
                          </li>
                          <li className="avatar avatar-xs">
                            <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                          </li>
                        </ul>
                      </div>

                      <Card className="card-body position-absolute bottom-0 start-0 ms-lg-n8 mb-n5">
                        <p>Our lovely customers</p>
                        <div className="d-flex align-items-center">
                          <ul className="avatar-group mb-0 align-items-center">
                            <li className="avatar avatar-xs">
                              <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <Image className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                            </li>
                          </ul>
                          <h6 className="text-white mb-0 ms-2">5K+</h6>
                        </div>
                        <hr />

                        <div className="overflow-hidden">
                          <div className="d-flex justify-content-between mb-2">
                            <small>Satisfaction Rate</small>
                            <small>80%</small>
                          </div>
                          <ProgressBar now={80} variant="primary" style={{ width: '100%', height: '5px' }} />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane eventKey="collaboration" className="fade">
                  <Row className="align-items-center">
                    <Col lg={6} className="mb-6 mb-lg-0">
                      <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Collaboration</span>
                      <h3 className="my-4">Streamlined teamwork and client engagement</h3>
                      <p className="mb-5">Our collaboration feature empowers your agency with seamless teamwork and enhanced client engagement.</p>

                      <Row className="g-4 mb-5">
                        <Col sm={6}>
                          <p className="heading-color mb-3 icons-center">
                            <BsDiagram3 size={24} className="fa-xl text-primary me-3" />
                            Organized your data
                          </p>
                          <p className="heading-color mb-0 icons-center">
                            <BsBoxes size={24} className="fa-xl text-primary me-3" />
                            Embedded Analytics
                          </p>
                        </Col>

                        <Col sm={6}>
                          <p className="heading-color mb-3 icons-center">
                            <BsPeople size={24} className="fa-xl text-primary me-3" />
                            Work with any team
                          </p>
                          <p className="heading-color mb-0 icons-center">
                            <BsShieldCheck size={24} className="fa-xl text-primary me-3" />
                            Collaborate securely
                          </p>
                        </Col>
                      </Row>

                      <Link className="btn btn-white icon-link icon-link-hover" href="">
                        Explore collaboration benefits
                        <BsArrowRight className="bi" />
                      </Link>
                    </Col>

                    <Col lg={4} className="position-relative ms-auto">
                      <Col md={8} className="position-absolute top-50 start-0 translate-middle mt-xl-n9 d-none d-lg-block">
                        <div className="bg-body rounded p-3">
                          <div className="bg-light d-flex align-items-center rounded w-100 p-2 mb-3">
                            <div className="icon-md bg-primary bg-opacity-10 rounded-circle text-primary flex-shrink-0">
                              <BsCheck className="fs-5" />
                            </div>

                            <p className="heading-color mb-0 ms-2">Than continues its and because can use.</p>
                          </div>

                          <div className="bg-light d-flex align-items-center rounded w-100 p-2 mb-3">
                            <div className="icon-md bg-primary bg-opacity-10 rounded-circle text-primary flex-shrink-0">
                              <BsCheck className="fs-5" />
                            </div>

                            <p className="heading-color mb-0 ms-2">Entire first decided the so must.</p>
                          </div>

                          <div className="bg-light d-flex align-items-center rounded w-100 p-2">
                            <div className="icon-md bg-primary bg-opacity-10 rounded-circle text-primary flex-shrink-0">
                              <BsCheck className="fs-5" />
                            </div>

                            <p className="heading-color mb-0 ms-2">Separated sort.</p>
                          </div>
                        </div>
                      </Col>

                      <div className="d-inline-block bg-white shadow rounded-4 position-absolute end-0 bottom-0 p-3 mb-n5 me-lg-n6 d-none d-sm-block">
                        <Image src={trustPilotImg} className="h-20px mb-2" alt="Client-img" />
                        <div className="d-flex align-items-center">
                          <Image src={trustStarImg} className="h-30px" alt="rating-img" />
                          <h6 className="font-base fw-bold heading-color ms-1 mb-0">4.8/5.0</h6>
                        </div>
                        <p className="text-dark small mb-0 mt-2">Review by 365 users</p>
                      </div>

                      <figure className="position-absolute top-0 end-0 mt-n7 me-lg-n5">
                        <svg width="120.4px" height="124.5px" viewBox="0 0 120.4 124.5">
                          <path
                            className="fill-mode"
                            d="M92.9,58.4c-0.2-4.7-1.8-9-5-12.6c-3-3.3-6.4-6.2-10.4-8.4c-3.4-1.9-7-2.9-10.8-3.3c-3.1-0.4-6,0.2-8.6,1.8 c-6.5,3.8-11.5,9.1-14.6,16.1c-1.1,2.5-1.5,5.1-1.3,7.7c0.3,3.2,0.9,6.4,2.1,9.4c2.1,5.4,5.7,9.4,11.5,11c1.8,0.5,3.5,1,5.3,1.6 c2.1,0.7,4.3,0.8,6.5,0.5c2.4-0.3,4.8-0.8,7.1-1.4c1.8-0.5,3.4-1.5,4.6-2.9c2-2.2,3.9-4.6,5.2-7.3c0.7-1.4,1.3-3,1.6-4.5 c1.1-6.4-0.7-12.1-4.5-17.2c-1.8-2.5-4.3-4.2-7.2-5c-3-0.8-6.1-1.1-9.2-0.8c-4.5,0.4-8.4,2.2-11.4,5.7c-2.1,2.4-3.6,5-4.3,8.1 c-0.6,2.4-0.5,4.8-0.6,7.2c-0.2,5.8,6.2,12.5,12.3,12c2.7-0.2,5.5-0.5,8.2-0.7c5.4-0.5,9.3-4.9,9.8-9.6c0.2-1.9,0.2-3.9,0.1-5.8 c-0.1-2.5-1.3-4.6-3.1-6.3c-3.1-2.9-6.8-4.1-11.1-3.7c-2.4,0.2-4.4,1.2-5.8,3.2c-1.8,2.5-2.8,5.3-3.1,8.3c-0.2,1.9,0.3,3.7,1.9,5 c2.7,2.2,5.8,3.3,9.2,3c1.6-0.1,2.8-0.9,3.8-2.2c1.6-2.1,1.6-4.5,1.1-6.9c-1-4.3-4.6-5.5-8.2-2.9c-0.3,0.2-0.4,0.7-0.6,1.1 c0.1,0.1,0.3,0.3,0.4,0.4c0.9-0.4,1.8-0.9,2.8-1.2c1-0.3,2-0.1,2.8,0.7c1.6,1.8,1.9,5.4,0.5,7.4c-0.9,1.2-2.1,1.9-3.5,1.8 c-2.3-0.1-4.5-0.9-6.4-2.3c-1.3-1-1.8-2.3-1.7-3.9c0.2-1.7,0.7-3.4,1.4-4.9c1.8-3.6,4-4.9,8.1-4.4c0.9,0.1,1.8,0.3,2.7,0.6 c4.5,1.7,6.8,5,6.6,9.8c0,1.4-0.2,2.8-0.5,4.1c-0.9,3.2-2.9,5.5-6.3,6.1c-2.9,0.5-5.9,0.7-8.9,0.9c-5.6,0.4-10.5-5.4-10.3-9.9 c0.1-2.1,0.2-4.1,0.6-6.1c1.5-6.9,7.2-11.6,14.2-11.9c1.7-0.1,3.5,0,5.2,0.2c3.5,0.4,6.4,1.9,8.5,4.7c3.1,4.2,4.6,8.9,4.2,14.2 c-0.3,3.5-2.1,6.2-4,9c-2.1,3-4.7,5-8.4,5.4c-1.1,0.1-2.3,0.4-3.4,0.7c-2,0.5-3.9,0.4-5.8-0.1c-2.3-0.6-4.6-1.3-6.9-2 c-3.1-1-5.4-3-7.1-5.7c-2.7-4.3-3.8-9.1-3.8-14.1c0-2,0.6-3.8,1.5-5.6c2.9-6,7.3-10.5,12.9-14c2.2-1.4,4.7-1.9,7.3-1.6 c4.2,0.4,8.1,1.6,11.6,3.9c3.1,2,5.8,4.5,8.3,7.2c1.7,1.9,2.9,4.1,3.6,6.6c1.5,5,1.1,10.1-0.2,15c-2.2,8-9.4,14.2-17.5,15.9 c-1.7,0.4-3.3,0.9-4.9,1.5c-1.1,0.4-1.6,1.4-1.2,2.1c0.5,0.8,1.4,0.7,2.1,0.5c2.5-0.7,5.1-1.3,7.6-2.2c1.4-0.5,2.8-1.1,4-1.9 c2.9-1.7,5.4-3.9,7.6-6.4c2.6-3,4.5-6.5,5.2-10.4C92.8,65.1,93,61.7,92.9,58.4z"></path>
                          <path
                            className="fill-primary"
                            d="M98.2,97.6c-1.9-3-3.8-6-5.7-9c-0.7-1-1.2-2.2-3-3c0,0.8-0.1,1.3,0,1.7c0.4,0.9,1,1.8,1.5,2.7 c2.8,5,5.7,9.9,9.2,14.5c1,1.2,2.2,2.3,3.4,3.4c0.3,0.3,0.8,0.4,1.2-0.3c-0.5-0.8-1.1-1.8-1.8-2.7C101.4,102.3,99.7,100,98.2,97.6z "></path>
                          <path
                            className="fill-primary"
                            d="M75.3,98c-0.5-1.5-1.2-3-1.9-4.4c-0.1-0.3-0.6-0.4-0.9-0.6c-0.2,0.2-0.3,0.3-0.5,0.5c0.1,0.5,0.2,1.1,0.4,1.6 c1.6,5.3,3.1,10.5,4.8,15.8c0.5,1.6,1.1,3.3,1.7,4.9c0.5,1.3,1.4,1.8,1.9,1.4c0.8-0.6,0.5-1.4,0.2-2.2C79,109.3,77.2,103.6,75.3,98 z"></path>
                          <path
                            className="fill-primary"
                            d="M26.5,69.5c-5.5,1.6-11,3.2-16.5,4.8c-2.1,0.6-4.1,1.4-6.1,2.2c-0.6,0.2-1.1,0.7-1.9,1.2 c5.9-0.4,24.8-6,28.2-8.3C28.8,68.8,27.6,69.2,26.5,69.5z"></path>
                          <path
                            className="fill-primary"
                            d="M55,96.3c-2.2,7.9-4.5,15.8-6.7,23.8c-0.3,1.2-0.4,2.5-0.7,4.4c0.6-0.9,0.8-1.2,0.9-1.5 c2.6-7.8,5.1-15.7,7.6-23.5c0.3-1.1,0.5-2.2,0.6-3.4c0-0.4-0.4-0.9-0.8-1.7C55.5,95.3,55.2,95.8,55,96.3z"></path>
                          <path
                            className="fill-primary"
                            d="M25.2,48.7c0.6,0.3,1.3,0.5,2,0.6c0.5,0.1,1.1-0.1,1.6-0.2c0-0.2,0-0.3,0-0.5c-3-1.4-6-3-9-4.2 c-3.2-1.3-6.4-2.4-9.7-3.5c-3.1-1-6.1-2.3-10-2.8c0.8,0.7,1.1,1.1,1.5,1.3c1.5,0.7,2.9,1.3,4.4,1.9C12.4,43.6,18.9,45.7,25.2,48.7z "></path>
                          <path
                            className="fill-primary"
                            d="M38.2,86.5c-0.7,0.3-1.4,0.8-2,1.3c-5.1,4.5-10.1,9-14.5,14.2c-0.9,1-1.6,2.2-2.5,3.3c0.1,0.1,0.2,0.3,0.4,0.4 c6.7-6.2,13.4-12.3,20.1-18.5c0.1-0.1,0-0.4,0-0.9C39.2,86.4,38.6,86.3,38.2,86.5z"></path>
                          <path
                            className="fill-primary"
                            d="M106.5,77.4c-1.1-1.1-2.4-2.2-3.6-3.1c-0.7-0.5-1.6-0.8-2.5-1c-0.5-0.1-1.2,0-1,1.1c2.1,0.8,3.6,2.5,5.2,4.1 c1.3,1.3,2.4,2.7,3.8,3.9c1.8,1.5,3.8,3,5.7,4.3c1,0.7,2.2,1.3,4.1,0.7c-0.7-0.7-1.1-1.1-1.5-1.4C112.9,83.6,109.6,80.5,106.5,77.4 z"></path>
                          <path
                            className="fill-primary"
                            d="M33.5,27.3c0.7,0.7,1.6,1.3,2.5,1.8c0.5,0.3,1.3,0.4,1.9,0.5c-2.3-2.2-4-4.6-6-6.8c-3.5-3.8-7-7.6-10.5-11.3 c-0.4-0.4-0.7-0.9-1.4-0.6c-0.5,0.6-0.1,1.1,0.3,1.5C24.6,17.4,29.1,22.4,33.5,27.3z"></path>
                          <path
                            className="fill-primary"
                            d="M53.3,20c0.1,1.1,0.3,2.3,0.6,3.4c0.1,0.4,0.7,0.6,1.3,1c-0.1-3.1-0.1-5.8-0.3-8.5c-0.1-2.6-0.4-5.2-0.6-7.9 c-0.4-5-0.6-5.7-2-8c0,0.9-0.1,1.6-0.1,2.2C52.6,8.2,52.9,14.1,53.3,20z"></path>
                          <path
                            className="fill-primary"
                            d="M101.1,56.2c0.2,0.4,0.3,0.7,0.5,0.7c4.9,1.1,9.8,2.2,14.7,3.1c1.3,0.3,2.7,0.4,4.1-0.5 c-0.8-0.3-1.7-0.6-2.5-0.8c-5.2-0.9-10.3-1.9-15.5-2.7C102,56,101.6,56.1,101.1,56.2z"></path>
                          <path
                            className="fill-primary"
                            d="M97.8,36.8c4.7-1.9,8.9-4.8,12.6-8.3c0.3-0.3,0.7-0.6,0.1-1.3c-2.5,1.7-5.1,3.5-7.7,5.1 c-2.6,1.6-5.3,3-8.1,4.6C95.9,37.7,96.8,37.2,97.8,36.8z"></path>
                          <path
                            className="fill-primary"
                            d="M81.6,11.5c0.5-1.6,0.8-3.2,1.2-4.8c-0.3,0.2-0.6,0.3-0.7,0.5c-1.6,4.3-3.2,8.5-4.7,12.8 c-0.2,0.6-0.1,1.3-0.2,1.9C79.1,18.6,80.5,15.1,81.6,11.5z"></path>
                          <path className="fill-primary" d="M82.8,6.5c0,0,0,0.1,0,0.1C82.8,6.6,82.8,6.6,82.8,6.5C82.9,6.6,82.8,6.5,82.8,6.5z"></path>
                        </svg>
                      </figure>

                      <Image src={about17} className="rounded" alt="feature-img" />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    </section>
  )
}
export default Features
