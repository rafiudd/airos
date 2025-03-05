import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const Benefits = () => {
  const benefits = [
    'Produk Berkualitas',
    'Peluang Bisnis yang Profitable',
    'Dukungan Branding & Marketing Eksklusif',
    'Manajemen Distribusi yang Efisien',
    'Jaringan & Komunitas Distributor AIROS',
    'Komitmen Kemitraan Jangka Panjang'
  ]
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <h4 className="mb-4">Membangun Ekosistem Bisnis yang Berkelanjutan</h4>
            <p>
            Di AiROS, kami membangun kemitraan kuat dengan strategi tepat. Kami menghadirkan air demineral berkualitas tinggi dengan desain modern, didukung analisis tren pasar untuk membantu distributor berkembang.
            </p>
            <p> Dukungan penuh kami mencakup materi pemasaran, strategi penjualan, dan branding eksklusif. Dengan sistem distribusi efisien, stok selalu tersedia dan pengiriman lancar. Kami berkomitmen pada kolaborasi jangka panjang yang saling menguntungkan. </p>
            <p>
            Siap tumbuh bersama AIROS? Hubungi kami sekarang!
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">Apa benefit yang Anda dapat?</h4>
              <ul className="list-group list-group-borderless border-0">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="list-group-item heading-color d-flex mb-0 icons-center">
                    <BsPatchCheck className="text-primary me-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits
