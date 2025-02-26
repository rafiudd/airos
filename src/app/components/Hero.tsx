import heroProduct from '@/assets/images/products/hero-img.png'
import product1 from '@/assets/images/products/01.png'
import { Button, Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap'
import { BsPlusLg } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-light position-relative overflow-hidden">
      <div className="text-end position-absolute top-0 end-0 mt-md-6 me-n4">
        <h6 className="mb-0" style={{ fontSize: '350px', opacity: 0.03 }}>
          Air
        </h6>
        <h6 className="mb-0" style={{ fontSize: '350px', opacity: 0.03 }}>
          Pods
        </h6>
      </div>

      <figure className="position-absolute bottom-0 start-0 mb-n8 ms-n7">
        <svg className="fill-body" width="805" height="234" viewBox="0 0 805 234" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M397.811 234.041H407.242L407.242 0.0406647H397.811V234.041Z" />
          <path d="M375.791 199.177H385.223V34.9041H375.791V199.177Z" />
          <path d="M287.248 195.945H296.68V38.021H287.248V195.945Z" />
          <path d="M220.959 195.945H230.391L230.391 38.0206H220.959L220.959 195.945Z" />
          <path d="M66.2796 195.945H75.7109L75.7109 38.021H66.2796L66.2796 195.945Z" />
          <path d="M419.944 199.177H429.375V34.9041H419.944V199.177Z" />
          <path d="M353.655 182.438H363.086V51.6427H353.655V182.438Z" />
          <path d="M442.08 182.438H451.512V51.6427H442.08V182.438Z" />
          <path d="M486.237 182.438H495.668V51.6427H486.237V182.438Z" />
          <path d="M530.506 182.438H539.938V51.6427H530.506V182.438Z" />
          <path d="M508.373 195.945H517.805V38.0206H508.373V195.945Z" />
          <path d="M574.662 195.945H584.094V38.0206H574.662V195.945Z" />
          <path d="M309.385 182.669H318.816V51.4123H309.385V182.669Z" />
          <path d="M265.229 182.669H274.66V51.4123H265.229V182.669Z" />
          <path d="M154.666 182.669H164.098L164.098 51.4123H154.666L154.666 182.669Z" />
          <path d="M88.4163 182.669H97.8477L97.8477 51.4123H88.4163L88.4163 182.669Z" />
          <path d="M331.518 159.119H340.949V74.9622H331.518V159.119Z" />
          <path d="M464.217 159.119H473.648V74.9622H464.217V159.119Z" />
          <path d="M552.643 151.5H562.074V82.5815H552.643V151.5Z" />
          <path d="M596.799 151.5H606.23V82.5815H596.799V151.5Z" />
          <path d="M685.104 151.5H694.535V82.581H685.104V151.5Z" />
          <path d="M751.51 162.928H760.941V71.0368H751.51V162.928Z" />
          <path d="M773.491 154.386H782.922V79.6949H773.491V154.386Z" />
          <path d="M795.627 142.38H805.059V91.7008H795.627V142.38Z" />
          <path d="M618.932 169.624H628.363V64.457H618.932V169.624Z" />
          <path d="M663.084 169.624H672.516V64.457H663.084V169.624Z" />
          <path d="M640.991 182.669H650.422V51.4123H640.991V182.669Z" />
          <path d="M707.241 182.669H716.672V51.4118H707.241V182.669Z" />
          <path d="M729.377 195.945H738.809V38.0206H729.377V195.945Z" />
          <path d="M44.1468 162.929H53.5781L53.5781 71.0372H44.1468L44.1468 162.929Z" />
          <path d="M176.803 169.624H186.234V64.457H176.803V169.624Z" />
          <path d="M132.573 169.624H142.004V64.457H132.573V169.624Z" />
          <path d="M243.092 151.5H252.523V82.581H243.092V151.5Z" />
          <path d="M198.823 151.5H208.254V82.581H198.823V151.5Z" />
          <path d="M110.553 151.5H119.984L119.984 82.581H110.553L110.553 151.5Z" />
          <path d="M22.1663 154.386H31.5977L31.5977 79.6954H22.1663L22.1663 154.386Z" />
          <path d="M0.0295906 142.38H9.46094L9.46094 91.7012H0.0295906L0.0295906 142.38Z" />
        </svg>
      </figure>

      <Container className="position-relative pt-5">
        <Row>
          <Col lg={7} className="mb-6 mb-lg-0">
            <h1 className="display-4 lh-base mb-4">Magic Like You&apos;ve Never Heard</h1>
            <p className="mb-4">
              Welcome to our AirPods landing page! Here, you will discover everything you need to know about the revolutionary wireless earbuds from
              Mizzle.
            </p>
            <Link href="" className="btn btn-lg btn-primary mb-0">
              Purchase Now
            </Link>
            <hr className="my-4 my-sm-6" />

            <Row className="g-4 align-items-center">
              <Col sm={3} xs={6}>
                <Image src={product1} alt="product-img" />
              </Col>

              <Col sm={8}>
                <h5 className="mb-3">Now with 4 new exciting colors</h5>
                <p className="heading-color mb-3">
                  AirPods are also designed with comfort in mind. They come with different ear tip sizes to fit a variety of ear shapes and sizes.
                </p>

                <div className="nav nav-tabs nav-tabs-radio border-0" role="tablist">
                  <div className="nav-link p-0 me-2" data-bs-toggle="tab" data-bs-target="#white" aria-selected="false" role="tab">
                    <input className="btn-check" type="radio" name="color" id="white-color" />
                    <label className="btn btn-icon btn-xs mb-0" htmlFor="white-color">
                      <span className="d-block" style={{ backgroundColor: '#fff' }}></span>
                    </label>
                  </div>

                  <div className="nav-link p-0 me-2" data-bs-toggle="tab" data-bs-target="#yellow" aria-selected="false" role="tab">
                    <input className="btn-check" type="radio" name="color" id="yellow-color" />
                    <label className="btn btn-icon btn-xs mb-0" htmlFor="yellow-color">
                      <span className="d-block" style={{ backgroundColor: '#F7C32E' }}></span>
                    </label>
                  </div>

                  <div className="nav-link p-0 me-2" data-bs-toggle="tab" data-bs-target="#blue" aria-selected="false" role="tab">
                    <input className="btn-check" type="radio" name="color" id="blue-color" />
                    <label className="btn btn-icon btn-xs mb-0" htmlFor="blue-color">
                      <span className="d-block" style={{ backgroundColor: '#32C7F5' }}></span>
                    </label>
                  </div>

                  <div className="nav-link p-0 me-2" data-bs-toggle="tab" data-bs-target="#green" aria-selected="false" role="tab">
                    <input className="btn-check" type="radio" name="color" id="green-color" />
                    <label className="btn btn-icon btn-xs mb-0" htmlFor="green-color">
                      <span className="d-block" style={{ backgroundColor: '#348866' }}></span>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm={10} lg={5} className="position-relative px-5 mx-auto">
            <Image src={heroProduct} alt="hero-img" />

            <div className="position-absolute top-0 start-0">
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
            </div>

            <div className="position-absolute bottom-0 end-0 me-lg-4 me-xl-8 mb-lg-9 mb-xl-7">
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
