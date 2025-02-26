import product2 from '@/assets/images/products/02.png'
import { BsVolumeUp, BsRulers, BsSoundwave, BsBoxSeam, BsBatteryCharging, BsFingerprint } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const TechnicalDetails = () => {
  return (
    <section className="pb-0">
      <Container>
        <div className="inner-container text-center mb-4 mb-sm-6">
          <h2 className="mb-4">Technical details</h2>
          <p className="mb-0">
            The sound quality of AirPods is impressive. They offer rich, clear, and well-balanced audio performance, making them ideal for listening
            to music, watching movies, or making calls.
          </p>
        </div>

        <Row className="g-4 align-items-center">
          <Col lg={4} className="order-1">
            <div className="d-flex justify-content-lg-end mb-4 mb-lg-8">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-1">Audio Specification</h6>
                <small>(Custom high-excursion, Noise Cancellation, Adaptive Transparency, Adaptive EQ)</small>
              </div>

              <div className="icon-lg bg-light heading-color rounded flex-shrink-0 order-lg-2 flex-centered">
                <BsVolumeUp className="fa-xl" style={{ height: '29px', width: '29px' }} />
              </div>
            </div>

            <div className="d-flex justify-content-lg-end mb-4 mb-lg-8 me-5">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-1">Physical Units</h6>
                <small>Height: 1.78 inches, Width: 2.39 inches, Depth: 0.85 inches, Weight: 1.79 ounces</small>
              </div>

              <div className="icon-lg bg-light heading-color rounded flex-shrink-0 order-lg-2 flex-centered">
                <BsRulers className="fa-xl" style={{ height: '29px', width: '29px' }} />
              </div>
            </div>

            <div className="d-flex justify-content-lg-end">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-1">Immersive Sound</h6>
                <small>Personalized Spatial Audio with dynamic head tracking</small>
              </div>

              <div className="icon-lg bg-light heading-color rounded flex-shrink-0 order-lg-2 flex-centered">
                <BsSoundwave className="fa-xl" style={{ height: '29px', width: '29px' }} />
              </div>
            </div>
          </Col>

          <Col md={7} lg={4} className="mx-auto position-relative order-lg-2">
            <Image src={product2} className="px-4 z-index-1 position-relative" alt="Technical-img" />

            <figure className="position-absolute top-50 start-0 mt-n8 ms-n7 ms-xl-n3 d-none d-md-block">
              <svg className="fill-dark" style={{ opacity: 0.04 }} width="462" height="134" viewBox="0 0 462 134" xmlns="http://www.w3.org/2000/svg">
                <path d="M228.306 134.023H233.719L233.719 0.0231934H228.306L228.306 134.023Z" />
                <path d="M215.669 114.059H221.082V19.9878H215.669V114.059Z" />
                <path d="M164.853 112.208H170.266V21.7726H164.853V112.208Z" />
                <path d="M126.81 112.208H132.223V21.7724H126.81L126.81 112.208Z" />
                <path d="M38.0364 112.208H43.4492L43.4492 21.7726H38.0364L38.0364 112.208Z" />
                <path d="M241.009 114.059H246.422V19.9878H241.009V114.059Z" />
                <path d="M202.966 104.473H208.379V29.573H202.966V104.473Z" />
                <path d="M253.712 104.473H259.125V29.573H253.712V104.473Z" />
                <path d="M279.056 104.473H284.469V29.573H279.056V104.473Z" />
                <path d="M304.462 104.473H309.875V29.573H304.462V104.473Z" />
                <path d="M291.759 112.208H297.172V21.7724H291.759V112.208Z" />
                <path d="M329.806 112.208H335.219V21.7724H329.806V112.208Z" />
                <path d="M177.556 104.605H182.969V29.4412H177.556V104.605Z" />
                <path d="M152.216 104.605H157.629V29.4412H152.216V104.605Z" />
                <path d="M88.763 104.605H94.1758L94.1758 29.4412H88.763L88.763 104.605Z" />
                <path d="M50.7396 104.605H56.1523L56.1523 29.4412H50.7396L50.7396 104.605Z" />
                <path d="M190.259 91.1194H195.672V42.927H190.259V91.1194Z" />
                <path d="M266.419 91.1194H271.832V42.927H266.419V91.1194Z" />
                <path d="M317.165 86.7563H322.578V47.2901H317.165V86.7563Z" />
                <path d="M342.509 86.7563H347.922V47.2901H342.509V86.7563Z" />
                <path d="M393.189 86.7561H398.602V47.2899H393.189V86.7561Z" />
                <path d="M431.298 93.3008H436.711V40.6792H431.298V93.3008Z" />
                <path d="M443.915 88.4087H449.328V45.6371H443.915V88.4087Z" />
                <path d="M456.618 81.5334H462.031V52.5122H456.618V81.5334Z" />
                <path d="M355.212 97.1353H360.625V36.9113H355.212V97.1353Z" />
                <path d="M380.552 97.1353H385.965V36.9113H380.552V97.1353Z" />
                <path d="M367.872 104.605H373.285V29.4412H367.872V104.605Z" />
                <path d="M405.892 104.605H411.305V29.4409H405.892V104.605Z" />
                <path d="M418.595 112.208H424.008V21.7724H418.595V112.208Z" />
                <path d="M25.3333 93.301H30.7461L30.7461 40.6794H25.3333L25.3333 93.301Z" />
                <path d="M101.466 97.1353H106.879L106.879 36.9113H101.466V97.1353Z" />
                <path d="M76.0833 97.1353H81.4961L81.4961 36.9113H76.0833V97.1353Z" />
                <path d="M139.513 86.7561H144.926V47.2899H139.513V86.7561Z" />
                <path d="M114.103 86.7561H119.516V47.2899H114.103V86.7561Z" />
                <path d="M63.4466 86.7561H68.8594V47.2899H63.4466L63.4466 86.7561Z" />
                <path d="M12.72 88.4092H18.1328L18.1328 45.6376H12.72L12.72 88.4092Z" />
                <path d="M0.0169144 81.5337H5.42969L5.42969 52.5125H0.0169144L0.0169144 81.5337Z" />
              </svg>
            </figure>
          </Col>

          <Col lg={4} className="order-3">
            <div className="d-flex mb-4 mb-lg-8">
              <div className="icon-lg bg-light heading-color rounded flex-shrink-0 flex-centered">
                <BsBoxSeam className="fa-xl" style={{ height: '29px', width: '29px' }} />
              </div>
              <div className="ms-3">
                <h6 className="mb-1">Included In Box</h6>
                <small>AirPods Pro, Charging Casen, USB-C Cable, Documentation</small>
              </div>
            </div>

            <div className="d-flex mb-4 mb-lg-8 ms-lg-5">
              <div className="icon-lg bg-light heading-color rounded flex-shrink-0 flex-centered">
                <BsBatteryCharging className="fa-xl" style={{ height: '29px', width: '29px' }} />
              </div>
              <div className="ms-3">
                <h6 className="mb-1">Best Battery Life</h6>
                <small>Up to 30 hours of listening time, Up to 24 hours of talk time</small>
              </div>
            </div>

            <div className="d-flex">
              <div className="icon-lg bg-light heading-color rounded flex-shrink-0 flex-centered">
                <BsFingerprint className="fa-xl" style={{ height: '29px', width: '29px' }} />
              </div>
              <div className="ms-3">
                <h6 className="mb-1">Sensors</h6>
                <small>Dual beamforming microphones, Skin-detect sensor, Touch control</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TechnicalDetails
