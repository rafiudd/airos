import logoIcon from '@/assets/images/logo-icon.svg'
import storyImg2 from '@/assets/images/stories/02.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={8}>
            <div className="bg-dark rounded position-relative overflow-hidden d-flex p-4 p-sm-5 m-auto h-100">
              <figure className="position-absolute top-0 start-0 ms-n8 mt-n8">
                <svg className="text-success opacity-5" width={300} height={300} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M299.25 150C299.25 232.428 232.428 299.25 150 299.25C67.5715 299.25 0.75 232.428 0.75 150C0.75 67.5715 67.5715 0.75 150 0.75C232.428 0.75 299.25 67.5715 299.25 150ZM274.25 150C274.25 218.621 218.621 274.25 150 274.25C81.3786 274.25 25.75 218.621 25.75 150C25.75 81.3786 81.3786 25.75 150 25.75C218.621 25.75 274.25 81.3786 274.25 150ZM150 275.75C219.45 275.75 275.75 219.45 275.75 150C275.75 80.5502 219.45 24.25 150 24.25C80.5502 24.25 24.25 80.5502 24.25 150C24.25 219.45 80.5502 275.75 150 275.75ZM249.25 150C249.25 204.814 204.814 249.25 150 249.25C95.1857 249.25 50.75 204.814 50.75 150C50.75 95.1857 95.1857 50.75 150 50.75C204.814 50.75 249.25 95.1857 249.25 150ZM150 250.75C205.643 250.75 250.75 205.643 250.75 150C250.75 94.3573 205.643 49.25 150 49.25C94.3573 49.25 49.25 94.3573 49.25 150C49.25 205.643 94.3573 250.75 150 250.75ZM224.25 150C224.25 191.007 191.007 224.25 150 224.25C108.993 224.25 75.75 191.007 75.75 150C75.75 108.993 108.993 75.75 150 75.75C191.007 75.75 224.25 108.993 224.25 150ZM150 225.75C191.836 225.75 225.75 191.836 225.75 150C225.75 108.164 191.836 74.25 150 74.25C108.164 74.25 74.25 108.164 74.25 150C74.25 191.836 108.164 225.75 150 225.75ZM199.25 150C199.25 177.2 177.2 199.25 150 199.25C122.8 199.25 100.75 177.2 100.75 150C100.75 122.8 122.8 100.75 150 100.75C177.2 100.75 199.25 122.8 199.25 150ZM150 200.75C178.028 200.75 200.75 178.028 200.75 150C200.75 121.972 178.028 99.25 150 99.25C121.972 99.25 99.25 121.972 99.25 150C99.25 178.028 121.972 200.75 150 200.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </figure>
              <figure className="position-absolute bottom-0 end-0 mb-n3 me-n3 d-none d-sm-block">
                <svg width={148} height={140} viewBox="0 0 148 140" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-primary"
                    d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <circle className="fill-primary" cx="25.86" cy="131.41" r="2.95" />
                  <circle className="fill-primary" cx="44.71" cy="131.41" r="2.95" />
                  <circle className="fill-primary" cx="63.57" cy="131.41" r="2.95" />
                  <circle className="fill-primary" cx="82.43" cy="131.41" r="2.95" />
                  <circle className="fill-primary" cx="101.29" cy="131.41" r="2.95" />
                  <circle className="fill-primary" cx="120.14" cy="131.41" r="2.95" />
                  <path
                    className="fill-primary"
                    d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <circle className="fill-primary" cx="25.86" cy="113.61" r="2.95" />
                  <circle className="fill-primary" cx="44.71" cy="113.61" r="2.95" />
                  <circle className="fill-primary" cx="63.57" cy="113.61" r="2.95" />
                  <circle className="fill-primary" cx="82.43" cy="113.61" r="2.95" />
                  <circle className="fill-primary" cx="101.29" cy="113.61" r="2.95" />
                  <circle className="fill-primary" cx="120.14" cy="113.61" r="2.95" />
                  <path
                    className="fill-primary"
                    d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <circle className="fill-primary" cx="25.86" cy="95.81" r="2.95" />
                  <circle className="fill-primary" cx="44.71" cy="95.81" r="2.95" />
                  <circle className="fill-primary" cx="63.57" cy="95.81" r="2.95" />
                  <circle className="fill-primary" cx="82.43" cy="95.81" r="2.95" />
                  <circle className="fill-primary" cx="101.29" cy="95.81" r="2.95" />
                  <circle className="fill-primary" cx="120.14" cy="95.81" r="2.95" />
                  <path
                    className="fill-primary"
                    d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <circle className="fill-primary" cx="25.86" cy="24.62" r="2.95" />
                  <circle className="fill-primary" cx="44.71" cy="24.62" r="2.95" />
                  <circle className="fill-primary" cx="63.57" cy="24.62" r="2.95" />
                  <circle className="fill-primary" cx="82.43" cy="24.62" r="2.95" />
                  <circle className="fill-primary" cx="101.29" cy="24.62" r="2.95" />
                  <circle className="fill-primary" cx="120.14" cy="24.62" r="2.95" />
                  <path
                    className="fill-primary"
                    d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
                  />
                  <path
                    className="fill-primary"
                    d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"
                  />
                  <circle className="fill-primary" cx="25.86" cy="6.82" r="2.95" /> <circle className="fill-primary" cx="44.71" cy="6.82" r="2.95" />
                  <circle className="fill-primary" cx="63.57" cy="6.82" r="2.95" /> <circle className="fill-primary" cx="82.43" cy="6.82" r="2.95" />
                  <circle className="fill-primary" cx="101.29" cy="6.82" r="2.95" />
                  <circle className="fill-primary" cx="120.14" cy="6.82" r="2.95" />
                  <path
                    className="fill-primary"
                    d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
                  />
                </svg>
              </figure>
              <Row className="position-relative m-auto">
                <Col lg={8} className="mx-auto text-center">
                  <Image alt="" src={logoIcon} className="mb-3" />
                  <h3 className="text-white mb-3">Join our community</h3>
                  <p className="text-white mb-3">
                    Join the Mizzle revolution today and be part of the millions who&apos;ve already embraced a brighter future!
                  </p>
                  <Link href="/contact/v1" className="btn btn-light mb-0">
                    Apply now
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <Card className="overflow-hidden bg-light">
              <CardBody className="p-4 text-center">
                <span>Read another story</span>
                <h6 className="mt-3 mb-0">Our Customer Canvas gallery of stories that resonate</h6>
              </CardBody>
              <CardFooter className="position-relative p-0">
                <div className="bg-overlay bg-dark opacity-5" />
                <Link
                  href="/customer/story-single"
                  className="btn btn-outline-white mb-0 position-absolute top-50 start-50 translate-middle z-index-1">
                  Read story
                </Link>
                <Image alt="" src={storyImg2} />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CTA
