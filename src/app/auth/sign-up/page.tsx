'use client'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter'
import { quotesData } from '@/layout/auth-layout/data'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import * as yup from 'yup'
import PageHeading from '../components/PageHeading'
import ThirdPartyAuth from '../components/ThirdPartyAuth'

const SignUp = () => {
  const [firstPassword, setFirstPassword] = useState<string>('')

  const resetPasswordSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().min(8, 'Password must of minimum 8 characters').required('Please enter Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  })

  const { control, handleSubmit, getValues, watch } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  })

  useEffect(() => {
    setFirstPassword(getValues().password)
  }, [watch('password')])

  return (
    <>
      <Row className="g-0">
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
                      <h4 className="fw-light">&quot;{quote.quote}&quot;</h4>

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

        <Col sm={10} lg={5} className="d-flex m-auto vh-100">
          <Row className="w-100 m-auto">
            <Col sm={10} className="my-5 m-auto">
              <PageHeading heading="Create your account" subHeading="Let's get started with your 30 days free trial" />

              <ThirdPartyAuth />

              <Form onSubmit={handleSubmit(() => {})}>
                <TextFormInput
                  control={control}
                  name="email"
                  label="Email address"
                  placeholder="name@example.com"
                  type="email"
                  containerClass="mb-4"
                  floating
                />

                <PasswordFormInput
                  control={control}
                  name="password"
                  label="Password"
                  containerClass="mb-3 position-relative"
                  className="pe-6"
                  placeholder="Enter your password"
                  floating
                />

                <PasswordStrengthMeter password={firstPassword} />

                <PasswordFormInput
                  control={control}
                  name="confirmPassword"
                  label="Password"
                  containerClass="mb-4 position-relative"
                  className="mb-3 mt-4"
                  placeholder="Enter your password"
                  floating
                />

                <div>
                  <div className="mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="checkbox-1" />
                      <label className="form-check-label" htmlFor="checkbox-1">
                        I agree to all Terms &amp; conditions and the privacy policy.
                      </label>
                    </div>
                  </div>

                  <div className="align-items-center mt-0">
                    <div className="d-grid">
                      <button className="btn btn-dark mb-0" type="submit">
                        Create an account
                      </button>
                    </div>
                  </div>
                </div>
              </Form>

              <div className="mt-4 text-center">
                <span>
                  Already have an account?<Link href="/auth/sign-in"> Sign in here</Link>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default SignUp
