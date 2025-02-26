import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const Details = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="pt-4 pt-lg-0">
        <Row>
          <Col xl={8} className="mx-auto">
            <div className="text-center mb-6">
              <h1>Terms &amp; Conditions</h1>
              <p className="lead mb-0">Last update on Dec 2023</p>
            </div>
            <h6 className="mb-3">Introduction</h6>
            <p>
              Welcome to Mizzle. These terms and conditions govern your use of our website. Please read them carefully. By accessing and using our
              website, you agree to comply with and be bound by these terms.
            </p>
            <p>
              If you do not agree with these terms, please do not use our website. Our terms and conditions outline the rules and guidelines for using
              our website, intellectual property rights, user-generated content, and more.
            </p>
            <p>
              If you have any questions or concerns about these terms, please contact us at
              <Link href="" className="fw-normal text-decoration-underline">
                +81 555 333 45
              </Link>
              . Your use of our website is also governed by our Privacy Policy,. We may update these terms and conditions at any time, so please
              review them periodically for changes. Thank you for visiting Mizzle.
            </p>
            <h6 className="mb-3 mt-5">Acceptance of Terms</h6>
            <p>
              By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these
              terms, please do not use this website.
            </p>
            <h6 className="mb-3 mt-5">Intellectual Property</h6>
            <p>
              All content on this website, including text, images, graphics, and logos, is the property of Mizzle and is protected by intellectual
              property laws.
            </p>
            <p> You may not use, reproduce, or distribute any content from this website without prior written consent from Mizzle</p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Receive instant notifications in Mizzle whenever there&apos;s an update or action in Slack
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Effortlessly create, assign, and manage tasks in both platforms, ensuring nothing falls through the cracks.
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Keep all your data consistent and up to date, whether it&apos;s customer information, project details, or important messages.
              </li>
            </ul>
            <h6 className="mb-3 mt-5">Limitation of Liability</h6>
            <p>Mizzle makes no warranties or representations about the accuracy or completeness of the content on this website.</p>
            <p>Mizzle is not liable for any direct, indirect, consequential, or incidental damages resulting from your use of this website.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Details
