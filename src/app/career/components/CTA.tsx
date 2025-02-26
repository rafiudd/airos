import ctaVector from '@/assets/images/elements/cta-vector.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, FormControl, Row } from 'react-bootstrap'
const CTA = () => {
  return (
    <section className="bg-light position-relative overflow-hidden py-7">
      <figure className="position-absolute top-0 start-0 ms-n8 mt-5">
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
      <div className="position-absolute end-0 bottom-0 me-sm-5 d-none d-md-block">
        <Image src={ctaVector} className="h-200px" alt="vector-img" width={162} />
      </div>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col md={10} xl={7} className="mb-4 mb-xl-0">
            <h2>Subscribe to our newsletter</h2>
            <p>
              Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve always worked very hard to give our customers
              the best experience.
            </p>
          </Col>
          <form className="col-md-7 col-xl-4 ms-xl-auto">
            <FormControl className="mb-3" type="email" placeholder="Enter your email address" />
            <Link href="" className="btn btn-dark mb-0 d-grid">
              Subscribe now
            </Link>
          </form>
        </Row>
      </Container>
    </section>
  )
}

export default CTA
