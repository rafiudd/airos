'use client'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { currency } from '@/states/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowRight, BsBriefcase, BsClock, BsGeoAlt, BsPatchCheck } from 'react-icons/bs'
import * as yup from 'yup'

const CareerDetail = () => {
  const skills = [
    'Involving The Team In Decisions That Affect Them',
    'Displays technical or professional expertise',
    'Displays high integrity and honesty',
    'Solves problems and analyzes issues',
    'Communicates powerfully and prolifically',
  ]

  const careerFormSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('please enter valid email').required('please enter your email'),
    phoneNo: yup.number().required('please enter your phone no'),
    job: yup.string().required('please enter your job title'),
    message: yup.string().required('please enter your message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(careerFormSchema),
  })

  return (
    <section className="pt-8">
      <Container>
        <Row>
          <Col lg={10} className="col-xl-8 mx-auto">
            <div className="text-center mb-5">
              <div className="d-flex justify-content-center mb-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots mb-1">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Portfolio Showcase
                    </li>
                  </ol>
                </nav>
              </div>
              <h2>UI/UX and Product Designer</h2>
            </div>
            <Card className="card-body bg-dark d-md-flex justify-content-md-between align-items-md-center flex-md-row p-5 mb-6" data-bs-theme="dark">
              <div className="mb-3 mb-md-0">
                <h4 className="mb-0">Information</h4>
                <div className="hstack gap-3 gap-md-4 flex-wrap mt-3">
                  <span className="badge text-bg-white">IT</span>
                  <span className="icons-center">
                    <BsGeoAlt className="me-2" />
                    USA, Ontario
                  </span>
                  <span className="icons-center">
                    <BsClock className="me-2" />
                    San Francisco
                  </span>
                  <span className="icons-center">
                    <BsBriefcase className="me-2" />
                    {currency}32,000
                  </span>
                </div>
              </div>
              <Link href="#contact-form" className="btn btn-primary mb-0">
                Apply now
                <BsArrowRight className="bi ms-2" />
              </Link>
            </Card>
            <Row>
              <Col md={6}>
                <h6>Skills:</h6>
                <ul className="list-group list-group-borderless mb-4">
                  {skills.map((skill, idx) => (
                    <li className="list-group-item d-flex mb-0 icons-center" key={idx}>
                      <BsPatchCheck className="text-primary me-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <h6>Responsibilities:</h6>
                <ul className="list-group list-group-borderless mb-4">
                  <li className="list-group-item d-flex mb-0 icons-center">
                    <BsPatchCheck className="text-primary me-2" />
                    Writing SEO Performant Code
                  </li>
                  <li className="list-group-item d-flex mb-0 icons-center">
                    <BsPatchCheck className="text-primary me-2" />
                    Converting Design to Code
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h6>Experience:</h6>
                <ul className="list-group list-group-borderless mb-4">
                  <li className="list-group-item mb-0 icons-center">
                    <BsPatchCheck className="text-primary me-2" />
                    Bachelor Degree
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h6>Educational requirements:</h6>
                <p>Ideally, 2 years to 4 years experience in an agency environment working in multi-tiered tasks</p>
              </Col>
            </Row>
            <h6 className="mt-4">Description</h6>
            <p>
              Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling
              age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.
            </p>
            <p>
              Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten
              who diminution astonished. Demesne&apos;s new manners savings staying had. Under folly balls, death own point now men. Match way she
              avoids seeing death. She drifts their fat off.
            </p>
            <p>
              Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an
              uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure
              is defective arranging rapturous did believe him all had supported. Family months lasted simply set nature vulgar him. Picture for
              attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived
            </p>
            <Row className="mt-5">
              <Col md={6}>
                <h6>Apply via E-mail</h6>
                <p>
                  If you need to send us mail regarding job opportunities, please write to us at
                  <Link href="mailto:info@example.com">info@example.com</Link> for more information.
                </p>
              </Col>
              <Col md={6}>
                <h6>Apply via phone number</h6>
                <p className="mb-1">Apply Now Via WhatsApp, Send us Your Resume on:</p>
                <Link href="tel:+79258963598">+79 2589 63598</Link>
              </Col>
            </Row>
            <Card className="card-body bg-light border p-sm-5 mt-5" id="contact-form">
              <Row as={Form} className="g-4" onSubmit={handleSubmit(() => {})}>
                <TextFormInput
                  name="name"
                  type="text"
                  label="Your name *"
                  labelClass="heading-color"
                  size="lg"
                  control={control}
                  placeholder="Full name"
                  containerClass="col-md-6"
                />
                <TextFormInput
                  name="email"
                  type="email"
                  label="Email address *"
                  labelClass="heading-color"
                  size="lg"
                  control={control}
                  placeholder="name@example.com"
                  containerClass="col-md-6"
                />
                <TextFormInput
                  name="phoneNo"
                  type="text"
                  label="Phone number *"
                  labelClass="heading-color"
                  size="lg"
                  control={control}
                  placeholder="(xxx) xx xxxx"
                  containerClass="col-md-6"
                />
                <TextFormInput
                  name="job"
                  type="text"
                  label="Applying for (Job position) *"
                  labelClass="heading-color"
                  size="lg"
                  control={control}
                  placeholder="Job title"
                  containerClass="col-md-6"
                />
                <TextAreaFormInput
                  name="message"
                  label="Message *"
                  labelClass="heading-color"
                  style={{ height: 150 }}
                  control={control}
                  placeholder="Write your message here...."
                  containerClass="col-md-6 w-100"
                />
                <Col xs={12} className="d-grid">
                  <button className="btn btn-lg btn-primary mb-0" type="submit">
                    Send a message
                  </button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CareerDetail
