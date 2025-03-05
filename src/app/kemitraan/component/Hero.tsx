import pattern2 from '@/assets/images/elements/bg-pattern-2.png'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section
      className="bg-dark pt-lg-8 pt-xl-9"
      style={{ backgroundImage: `url(${pattern2.src})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
      data-bs-theme="dark">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col md={10} xl={8}>
            <h1 className="mb-4">Jadilah Distributor Resmi & Tumbuh Bersama AiROS</h1>
            <p className="mb-4">
            AIROS membuka kesempatan bagi Anda untuk menjadi bagian dari jaringan distribusi eksklusif kami. Dengan pertumbuhan pasar yang pesat, inilah saat yang tepat untuk membangun bisnis yang berkelanjutan dan menguntungkan.
            </p>
          </Col>
          <Col md={2} className="ms-auto text-md-end">
            <Link href="https://wa.me/628112998881?text=Saya tertarik dengan kemitraan Airos" className="btn btn-lg btn-primary mb-6 mb-md-0">
              Daftar Sekarang
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
