import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs'
import usFlag from '@/assets/images/flags/us.svg'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Map = () => {
  const contactDetail = {
    address: '1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.',
    email: 'example@gmail.com',
    number: '(251) 854-6308',
  }
  return (
    <section className="py-0">
      <Container>
        <Row className="row-cols-1 row-cols-lg-3 g-4">
          <Col>
            <Card className="card-body bg-light border p-sm-5">
              <div className="mb-4">
                <BsGeoAlt size={24} className="fa-xl text-primary" />
              </div>
              <h6 className="mb-4">Office Address</h6>
              <div className="d-flex align-items-center mb-2">
                <div className="avatar avatar-xxs me-2">
                  <Image className="avatar-img rounded-circle" src={usFlag} alt="avatar" />
                </div>
                <span className="heading-color fw-semibold mb-0">US office:</span>
              </div>
              <address className="mb-0">{contactDetail.address}</address>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border p-sm-5">
              <div className="mb-4">
                <BsEnvelope size={24} className="fa-xl text-primary" />
              </div>
              <h6 className="mb-3">Email us</h6>
              <p>We&apos;re on top of things and aim to respond to all inquiries within 24 hours.</p>
              <Link href={`mail:${contactDetail.email}`} className="heading-color text-primary-hover text-decoration-underline mb-0">
                {contactDetail.email}
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border p-sm-5">
              <div className="mb-4">
                <BsTelephone size={24} className="fa-xl text-primary" />
              </div>
              <h6 className="mb-3">Call us</h6>
              <p>Let&apos;s work together towards a common goal - get in touch!</p>
              <Link href={`tel:${contactDetail.number}`} className="heading-color text-primary-hover text-decoration-underline mb-0">
                {contactDetail.number}
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <iframe
        className="w-100 h-200px h-lg-400px grayscale d-block mt-8"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
        style={{ marginBottom: '-5px' }}
        aria-hidden="false"
        tabIndex={0}
      />
    </section>
  )
}

export default Map
