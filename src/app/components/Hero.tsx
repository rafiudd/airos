import heroProduct from '@/assets/images/products/hero-img.png'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-light position-relative overflow-hidden">
      <Container className="position-relative pt-6">
        <Row>
          <Col lg={6} className="mb-6 mb-lg-0">
            <h1 className="display-4 mb-4">Segarkan Harimu dengan AiROS</h1>
            <h4 className="mb-4" style={{color: 'grey'}}>
              Air mineral alami berkualitas tinggi, langsung dari sumber alam terbaik.
            </h4>
            <Link href="/store" className="btn btn-lg btn-primary mb-0">
              Beli Sekarang
            </Link>
          </Col>

          <Col sm={10} lg={6} className="position-relative px-5 mx-auto">
            <Image height={'800'} src={heroProduct} alt="hero-img" />

            {/* <div className="position-absolute top-0 start-0">
              <div className="position-relative">
                <OverlayTrigger
                  placement="right"
                  trigger="focus"
                  overlay={<Popover className="p-2">And here&apos;s some amazing content. It&apos;s very engaging. Right?</Popover>}>
                  <Button variant="white" type="button" className="btn-ripple btn-round text-primary z-index-1 flex-centered">
                    <BsPlusLg />
                  </Button>
                </OverlayTrigger>
                <figure className="position-absolute top-50 start-50 mt-n1">
                  <svg width="249" height="69" viewBox="0 0 249 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M244 66V1H0" stroke="#DCE0E5" />
                    <circle className="fill-primary" cx="244" cy="64" r="5" />
                  </svg>
                </figure>
              </div>
            </div> */}

            {/* <div className="position-absolute bottom-0 end-0 me-lg-4 me-xl-8 mb-lg-9 mb-xl-7">
              <div className="position-relative">
                <OverlayTrigger
                  placement="right"
                  trigger="focus"
                  overlay={<Popover className="p-2">And here&apos;s some amazing content. It&apos;s very engaging. Right?</Popover>}>
                  <Button variant="white" type="button" className="btn-ripple btn-round text-primary z-index-1 mb-0 mt-n1 flex-centered">
                    <BsPlusLg />
                  </Button>
                </OverlayTrigger>

                <figure className="position-absolute bottom-100 end-100 mb-n3">
                  <svg width="175" height="90" viewBox="0 0 175 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4V89H175" stroke="#DCE0E5" />
                    <circle className="fill-primary" cx="5" cy="5" r="5" transform="rotate(180 5 5)" />
                  </svg>
                </figure>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
