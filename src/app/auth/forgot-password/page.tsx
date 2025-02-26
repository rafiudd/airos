'use client'
import useBSStepper from '@/hooks/useBSStepper'
import { useEffect, useRef } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { Card, Col, Row } from 'react-bootstrap'
import { quotesData } from '@/layout/auth-layout/data'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import 'swiper/css'



const ForgotPassword = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepperInstance = useBSStepper(stepperRef)

  useEffect(() => {
    stepperInstance?.to(2)
    stepperInstance?.to(1)
  }, [stepperInstance])

  return (
    <>
      <main>
        <Row className=" g-0">
          <Col lg={7} className="vh-100 d-none d-lg-block">
            <Swiper
              className="h-100"
              modules={[Autoplay, Pagination, Navigation]}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
              navigation
              autoplay>
              {quotesData.map((quote, idx) => (
                <SwiperSlide key={idx}>
                  <Card
                    className="rounded-0 h-100"
                    data-bs-theme="dark"
                    style={{
                      backgroundImage: `url(${quote.image.src})`,
                      backgroundPosition: 'center left',
                      backgroundSize: 'cover',
                    }}>
                    <div className="bg-overlay bg-dark opacity-5" />
                    <div className="card-img-overlay z-index-2 p-7">
                      <div className="d-flex flex-column justify-content-end h-100">
                        <h4 className="fw-light">{quote.quote}</h4>

                        <div className="d-flex justify-content-between mt-5">
                          <div>
                            <h5 className="mb-0">{quote.author}</h5>
                            <span>{quote.position}</span>
                          </div>

                          <ul className="list-inline mb-1">
                            <li className="list-inline-item small me-1">
                              <FaStar size={16} className="fa-solid fa-star text-white" />
                            </li>
                            <li className="list-inline-item small me-1">
                              <FaStar size={16} className="fa-solid fa-star text-white" />
                            </li>
                            <li className="list-inline-item small me-1">
                              <FaStar size={16} className="fa-solid fa-star text-white" />
                            </li>
                            <li className="list-inline-item small me-1">
                              <FaStar size={16} className="fa-solid fa-star text-white" />
                            </li>
                            <li className="list-inline-item small">
                              <FaStarHalfAlt size={16} className="fa-solid fa-star-half-alt text-white" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination swiper-pagination-line mb-3" />
            </Swiper>
          </Col>
          <div id="stepper" ref={stepperRef} className="bs-stepper stepper-outline position-relative col-sm-10 col-lg-5 d-flex m-auto vh-100">
            <div className="bs-stepper-header position-absolute top-0 start-50 translate-middle-x" role="tablist">
              <div className="step" data-target="#step-1">
                <div className="text-center">
                  <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
                    <span className="bs-stepper-circle">1</span>
                  </button>
                </div>
              </div>

              <div className="step" data-target="#step-2">
                <div className="text-center">
                  <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
                    <span className="bs-stepper-circle">2</span>
                  </button>
                </div>
              </div>

              <div className="step" data-target="#step-3">
                <div className="text-center">
                  <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
                    <span className="bs-stepper-circle">3</span>
                  </button>
                </div>
              </div>

              <div className="step" data-target="#step-4">
                <div className="text-center">
                  <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4">
                    <span className="bs-stepper-circle">4</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bs-stepper-content d-flex justify-content-center m-auto w-100">
              <div className="w-100">
                <Row className="g-4 m-auto">
                  <Col lg={10} className="m-auto">
                    <Step1 stepperInstance={stepperInstance} />

                    <Step2 stepperInstance={stepperInstance} />

                    <Step3 stepperInstance={stepperInstance} />

                    <Step4 />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
      </main>
    </>
  )
}

export default ForgotPassword
