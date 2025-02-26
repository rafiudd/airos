'use client'
import decoration2 from '@/assets/images/elements/saas-decoration/decoration-2.png'
import decoration3 from '@/assets/images/elements/saas-decoration/decoration-3.png'
import decoration4 from '@/assets/images/elements/saas-decoration/decoration-4.png'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { BsArrowRight, BsDisplay, BsPatchCheck, BsPhone } from 'react-icons/bs'

const Steps = () => {
  return (
    <section className="pb-0 overflow-hidden">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="text-primary fw-bold text-uppercase">How it works</span>
          <h2 className="mb-0 mt-3">Unlocking your agency&apos;s potential</h2>
        </div>

        <Row>
          <Col xl={10} className="mx-auto">
            <Row className="flex-lg-nowrap align-items-center position-relative mb-8">
              <figure className="position-absolute top-100 start-50 mt-n3">
                <svg width="108.7px" height="116.7px" viewBox="0 0 108.7 116.7">
                  <path
                    className="fill-mode opacity-5"
                    d="M8.9,0.3C4.1,8.2-1.2,17.1,0.2,26.7c1.1,8,6.6,15.2,15.1,15.8c8.9,0.6,16.6-5.3,25.4-5.9 c5.7-0.4,11.7,1.8,12.7,8.2c0.8,5.1-1.5,10.3-4,14.5c-5.9,10-15.5,16.4-23.7,24.4c-5.9,5.8-8.9,13.9-3,20.8 c5.7,6.7,14.8,7.1,22.8,4.9c9.8-2.7,19.3-8,27.3-14.2c7.4-5.6,15.8-14,25.9-13.3c3.6,0.2,7.2,1.7,7.6,5.8c0.3,3-0.2,6.1-0.9,9 c-1.5,6.1-4.7,11.5-8.9,16.1c-0.9,1,0.6,2.2,1.5,1.3c6.7-6.5,10.9-16.3,10.5-25.8c-0.3-8.7-10.2-9.8-16.9-7.8 c-8.3,2.5-14.8,9-21.7,14c-8.6,6.2-19.2,12.4-29.9,13.6c-5,0.6-10.1-0.3-14-3.7c-4.2-3.6-5.6-9-3-13.9c2.6-4.9,7.7-8.4,11.8-12 c4-3.5,8-7.1,11.5-11.2c5.4-6.3,11.6-16,8.9-24.7c-2.6-8.8-12.9-9.3-20.4-7.4c-9.8,2.5-22.1,10.3-29.7-0.8 c-7.4-10.9-0.8-23.8,4.9-33.7C10.5,0.2,9.4-0.4,8.9,0.3L8.9,0.3z"
                  />
                  <path
                    className="fill-mode opacity-5"
                    d="M104.5,111.7c0.1,0.1,0.2,0.2,0.3,0.3c0.2-0.4,0.4-0.8,0.6-1.2c-1.8,0.1-3.5,0.6-5.1,1.1 c-1.8,0.6-3.7,1.9-5.6,2.2c0.5,0.4,0.9,0.8,1.4,1.2c-0.1-3.1-0.4-6.2-0.8-9.2c-0.2-1.7-2.8-1.5-2.6,0.2c0.4,3.1,0.6,6.1,0.9,9.2 c0.1,0.6,0.7,1.3,1.4,1.2c1.8-0.3,3.3-1.4,4.9-2.1c1.9-0.9,3.9-1.4,5.9-2.2c1.1-0.4,0.3-2-0.7-1.4c-0.1,0.1-0.2,0.1-0.4,0.2 C104.4,111.3,104.4,111.6,104.5,111.7L104.5,111.7z"
                  />
                  <path
                    className="fill-mode opacity-5"
                    d="M104.9,111.9C104.9,111.9,104.9,111.9,104.9,111.9c0-0.2-0.2-0.4-0.3-0.7c0,0,0,0.1,0,0.1 c0.3-0.2,0.5-0.4,0.8-0.5c-1.6-0.5-3.6-2.1-5.1-2.9c-1.7-0.9-3.4-1.8-5.1-2.7c-1.1-0.6-2,0.9-1.1,1.8c1.8,1.8,4.4,2.6,6.4,4.2 c0.4-0.6,0.8-1.2,1.1-1.7c-2-0.7-3.9-1.5-5.8-2.4c-1-0.5-2.1,1.1-1.1,1.7c2.3,1.5,4.7,2.6,7.2,3.6c0.2-0.7,0.4-1.3,0.6-2 c-1.7-0.3-3.4-0.6-5.1-1c-1.2-0.2-1.8,1.6-0.7,2c1.5,0.6,3,0.9,4.6,1.1c-0.1-0.7-0.1-1.4-0.2-2.1c-1.3,0.3-3.3,1-4.7,0.9 c0.3,0.2,0.6,0.5,0.8,0.7c-0.4-1-0.3-2.5-0.4-3.6c-0.7,0.1-1.5,0.3-2.2,0.4c0.6,1.5,1,3,1.2,4.7c0.7-0.2,1.4-0.5,2.1-0.7 c-0.6-1.1-0.9-2.1-1-3.3c-0.7,0.1-1.5,0.3-2.2,0.4c0.2,0.8,0.4,1.5,0.7,2.3c0.4,1.4,2.5,0.7,2.1-0.7c-0.2-0.8-0.4-1.5-0.6-2.3 c-0.3-1.2-2.4-0.8-2.2,0.4c0.2,1.6,0.7,3,1.4,4.4c0.5,1,2.2,0.4,2.1-0.7c-0.2-1.8-0.6-3.5-1.3-5.2c-0.5-1.1-2.3-0.9-2.2,0.4 c0.1,1.3,0,2.9,0.5,4.1c0.2,0.3,0.4,0.7,0.8,0.7c1.8,0.2,4-0.6,5.8-1c1.1-0.3,0.9-2-0.2-2.1c-1.4-0.2-2.8-0.4-4.1-0.9 c-0.2,0.7-0.4,1.3-0.7,2c1.7,0.3,3.4,0.6,5.1,0.9c1.1,0.2,1.8-1.5,0.6-2c-2.3-0.9-4.7-1.9-6.8-3.3c-0.4,0.6-0.8,1.2-1.1,1.7 c1.9,0.9,3.8,1.7,5.8,2.4c1,0.4,2.1-0.9,1.1-1.7c-2-1.7-4.5-2.4-6.3-4.2c-0.4,0.6-0.8,1.2-1.1,1.8c2.1,1.1,4.2,2.1,6.3,3.2 c1.3,0.6,3.2,2,4.7,1.9c0.4,0,0.7-0.4,0.6-0.7c0,0,0-0.1,0-0.1c0-0.4-0.3-0.6-0.7-0.6c0,0-0.1,0-0.1,0 C104.5,110.7,104.3,111.7,104.9,111.9L104.9,111.9z"
                  />
                </svg>
              </figure>

              <Col lg={7}>
                <div className="bg-light rounded px-5 ps-md-6 py-7 pe-md-8">
                  <div className="icon-lg bg-body rounded-circle fw-bold heading-color mb-3">01</div>

                  <h4 className="mb-4">Create your account and start your work</h4>
                  <p className="mb-4">Some product ideas come easily, while others take some work to find.</p>

                  <ul className="list-group list-group-borderless mb-4">
                    <li className="list-group-item heading-color d-flex mb-0 icons-center">
                      <BsPatchCheck className="text-primary me-2" />
                      Quick registration
                    </li>
                    <li className="list-group-item heading-color d-flex mb-0 icons-center">
                      <BsPatchCheck className="text-primary me-2" />
                      Customize your profile
                    </li>
                    <li className="list-group-item heading-color d-flex mb-0 icons-center">
                      <BsPatchCheck className="text-primary me-2" />
                      Immediate access
                    </li>
                  </ul>

                  <Link className="btn btn-dark icon-link icon-link-hover" href="">
                    Get started now
                    <BsArrowRight className="bi" />
                  </Link>
                </div>
              </Col>

              <Col lg={7} xs={11} className="ms-lg-n8 mx-auto mt-n5 mt-lg-0">
                <div className="bg-primary bg-opacity-50 rounded p-5 overflow-hidden ms-3">
                  <Image src={decoration4} alt="decoration" />
                </div>
              </Col>
            </Row>

            <Row className="flex-lg-nowrap align-items-center position-relative mb-8">
              <figure className="position-absolute top-100 start-50 mt-n3 ms-n8">
                <svg width="131px" height="111.9px" viewBox="0 0 131 111.9">
                  <path
                    className="fill-mode opacity-4"
                    d="M782.9,596c13.3-11.6,33.4-3.7,40.7,10.7c8.1,16,3.5,34.5-4.6,49.5c-3.8,7-8.4,15.8-15.3,20.2 c-7.9,5-15.5-0.2-16.6-8.8c-2.3-17.6,23.3-26.3,36.4-29.2c16.8-3.7,35.4-0.9,47.7,12c12.3,13,11.2,31.7,2.1,46.2 c-4.1,6.7-12.2,17.3-21.2,15.4c-3.7-0.8-7-3.8-6-7.9c0.9-3.7,5.1-6.1,8.2-7.7c6.6-3.3,14.5-4.8,21.7-6.3c8-1.7,16.1-2.9,24.2-2.8 c18.4,0.1,35.3,8.8,41.1,27.3c6.2,19.7-2.2,39.8-14.9,55c1.7,0.4,3.4,0.9,5.1,1.3c-2-8.8-4-17.6-6.1-26.4c-2,0.5-4,1.1-6,1.6 c3.3,10,5.7,20.2,7.2,30.6c0.3,1.9,3,2.9,4.6,1.9c8.3-5.6,16.6-11.2,24.9-16.8c3.3-2.2,0.2-7.6-3.1-5.4 c-8.3,5.6-16.6,11.2-24.8,16.9c1.5,0.6,3,1.2,4.6,1.9c-1.5-10.4-3.9-20.6-7.2-30.6c-1.2-3.8-6.9-2.3-6,1.6 c2.1,8.8,4.1,17.6,6.2,26.4c0.5,2.1,3.6,3.1,5.1,1.3c13.9-16.8,23.1-39,16.3-60.9c-6.2-19.8-23.7-30.5-43.8-31.5 c-10.7-0.5-21.4,1.3-31.8,3.7c-9,2.1-19.2,4-26.3,10.4c-5.9,5.3-7.1,14.2-0.4,19.4c7.5,5.8,17.1,2.6,23.6-3.1 c15.1-13.2,23.3-36.8,14-55.5c-9.5-19.2-32.2-27.1-52.4-24.8c-17,2-46.1,11-48.6,31.6c-0.9,7.6,2.4,16.5,9.7,19.9 c8.6,4.1,17.3-1.5,22.7-8.1c14.6-17.6,25.6-44.5,16.1-66.9c-4-9.5-11.7-17.3-21.8-19.9c-9.5-2.4-19.4-0.4-26.5,6.5 C780.5,595.5,782,596.9,782.9,596L782.9,596z"
                  />
                  <path
                    className="fill-mode opacity-4"
                    d="M125.5,8.1C98.2-4.2,65,4.9,41.4,21.6c-11.6,8.2-21.6,20.3-21.3,35.3c0.1,6.5,2.2,13,6.8,17.7 c2.8,2.9,6.8,5.4,10.9,4c6.3-2.1,4.1-9.3-1-11.3c-9.5-3.7-16.8,9.6-19.6,16.6c-3.2,8.2-4.1,16.9-4.5,25.6c-0.1,2.5-3.9,2-3.8-0.5 c0.4-10.4,1.9-21.1,6.6-30.5c3.4-6.8,9-14.4,17.2-15.3c6-0.6,12.8,4.2,12.8,10.6c0,6.8-7.5,10-13.3,8.4C16,78,14,55.6,18.9,42.6 c6.9-18.1,26.2-29.3,43.4-35.9c20.5-7.9,43.7-9.8,63.9-0.2C127.2,7,126.6,8.6,125.5,8.1L125.5,8.1z"
                  />
                  <path
                    className="fill-mode opacity-4"
                    d="M25,97c-3.6-1.8-9,9.9-10,11.7c-0.9,1.6-1.9,3.5-4.1,3.1c-2.4-0.4-3.4-3.9-4.2-5.6c-2.2-4.3-4.5-8.6-6.4-13 c-1-2.2,2.2-3.4,3.3-1.4c1.9,3.4,3.6,7,5.3,10.6c0.4,0.8,1.9,5.1,2.9,5c0.2,0,1.5-3,1.6-3.2c2.1-3.6,6.6-9.9,11.3-10 c0.6,0,1.1,0.2,1.4,0.8c0.1,0.2,0.2,0.5,0.3,0.7C26.7,96.5,25.8,97.4,25,97L25,97z"
                  />
                  <path
                    className="fill-mode opacity-4"
                    d="M127.6,4.8c1.7,0.2,2.3,2.6,0.9,3.5c-0.3,0.2-0.6,0.3-0.9,0.1c-1.4-0.7-2.2-1.9-2.2-3.5 c0-0.4,0.2-0.9,0.6-1.1c2.9-0.9,4.6,2.3,4.8,4.7c0.1,1.2-0.1,2.5-1.2,3.2c-1.3,0.8-2.7,0.1-3.7-0.9c-1.7-1.9-2.9-5.7-0.1-7.3 c2.7-1.5,5.2,1.8,5.2,4.2c0.1,2.6-2,4.8-4.6,4.3c-2.4-0.4-4.2-2.9-2.8-5.2c1.5-2.4,5.1-2.4,6.3,0.3c0.5,1.1,0.4,2.5-0.3,3.5 c-0.9,1.2-2.4,1.5-3.5,0.4c-0.6-0.7-1.1-1.6-1.5-2.4c-0.4-0.7-0.8-1.4-0.8-2.2c0.1-1.3,1.2-2.2,2.4-2.4c1.3-0.2,2.7,0.4,3.4,1.5 c0.9,1.5,0.7,3.3,0.3,5c-0.1,0.6-0.7,1.3-1.4,1.1c-2.9-0.7-4.9-3.6-4.2-6.5c0.2-0.6,0.7-1.3,1.4-1.1c2.7,0.7,3.7,4.1,1.6,6 c-1.2,1.1-2.8-0.9-1.6-2.1c0.3-0.3,0.1-1.3-0.4-1.4c0.5-0.4,1-0.7,1.4-1.1c-0.4,1.5,0.3,3.3,1.9,3.7c-0.5,0.4-1,0.7-1.4,1.1 c0.2-0.9,0.9-3.5-0.5-3.7c-0.6-0.1-0.5,0-0.4,0.4c0.2,0.7,0.9,1.6,1.4,2.3c0.2,0.2,0.1,0.2-0.2,0c0.1-0.1,0.1-0.2,0.1-0.4 c-0.1-0.3,0-0.6-0.2-0.9c-0.4-0.6-1.1-0.5-1.6-0.1c-0.9,0.9,0.1,1.8,1,1.9c1.3,0.1,1.8-1.2,1.7-2.3c-0.1-0.6-0.4-1.3-1-1.7 c-0.7-0.5-1.2,0.2-1.2,0.9c0,0.7,0.5,1.6,0.9,2.2c0.3,0.5,1.1,1.5,1.2,0.4c0-1-0.7-3.8-2.1-3.4c0.3-0.3,0.6-0.6,0.9-0.9 c0,0.9,0.5,1.5,1.2,1.9c-0.4,0-0.8,0-1.1,0c0.2-0.1,0.2-0.2,0.1-0.4C126.3,6.2,126.5,4.6,127.6,4.8L127.6,4.8z"
                  />
                </svg>
              </figure>

              <Col lg={7} xs={11} className="me-lg-n8 mx-auto mt-n5 mt-lg-0 z-index-2 position-relative order-2">
                <Card className="card-body shadow rounded p-5 overflow-hidden me-3">
                  <Image src={decoration2} alt="decoration" />
                </Card>
              </Col>

              <Col lg={7} className="order-1 order-lg-2">
                <div className="bg-light rounded py-7 px-5 pe-md-6 ps-md-8">
                  <div className="icon-lg bg-body rounded-circle fw-bold heading-color mb-3">02</div>

                  <h4 className="mb-4">Install the code to organize the works</h4>
                  <p className="mb-4">Enhance your workflow efficiency by installing our code snippet.</p>

                  <Row className="row-cols-2 g-4 mb-5">
                    <Col>
                      <div className="d-flex">
                        <h4 className="purecounter mb-0">
                          <CountUp end={150} delay={0.3} />
                        </h4>
                        <span className="h4 text-primary mb-0">+</span>
                      </div>
                      <p className="mb-0 heading-color">Positive user reviews</p>
                    </Col>

                    <Col>
                      <div className="d-flex">
                        <h4 className="purecounter mb-0">
                          <CountUp end={500} delay={0.3} />
                        </h4>
                        <span className="h4 text-primary mb-0">+</span>
                      </div>
                      <p className="mb-0 heading-color">Happy customers</p>
                    </Col>
                  </Row>

                  <Link className="btn btn-dark icon-link icon-link-hover" href="">
                    Install code now
                    <BsArrowRight className="bi" />
                  </Link>
                </div>
              </Col>
            </Row>

            <Row className="flex-lg-nowrap align-items-center">
              <Col lg={7}>
                <div className="bg-light rounded px-5 ps-md-6 py-7 pe-md-8">
                  <div className="icon-lg bg-body rounded-circle fw-bold heading-color mb-3">03</div>

                  <h4 className="mb-3">Get a free marketing automation guide</h4>
                  <p>Unlock the power of marketing automation with our free guide.</p>

                  <ul className="list-group list-group-borderless mb-4">
                    <li className="list-group-item d-flex">
                      <div className="icon-md flex-shrink-0 text-white bg-primary rounded-circle flex-centered">
                        <BsDisplay size={19} className="fa-xl" />
                      </div>

                      <div className="ms-3">
                        <p className="heading-color fw-bold mb-0">Daily reports</p>
                        <small>Receive a report every day in your inbox.</small>
                      </div>
                    </li>

                    <li className="list-group-item d-flex mb-0">
                      <div className="icon-md flex-shrink-0 text-white bg-primary rounded-circle flex-centered">
                        <BsPhone size={19} className="fa-xl" />
                      </div>

                      <div className="ms-3">
                        <p className="heading-color fw-bold mb-0">Mobile reports</p>
                        <small>Browse reports on your phone or tablet</small>
                      </div>
                    </li>
                  </ul>

                  <Link className="btn btn-dark icon-link icon-link-hover" href="">
                    Download your guide
                    <BsArrowRight className="bi" />
                  </Link>
                </div>
              </Col>

              <Col xs={11} lg={7} className="ms-lg-n8 mx-auto mt-n5 mt-lg-0">
                <div className="bg-dark rounded p-5 overflow-hidden ms-3">
                  <Image src={decoration3} alt="decoration" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Steps
