import about16 from '@/assets/images/about/16.jpg'
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const clients = [client1, client2, client3, client4, client5]

const Clients = () => {
  return (
    <section>
      <Container>
        <Row className="g-lg-6">
          <Col xl={10} className="mx-auto">
            <Row className="g-4 g-sm-5 g-lg-6 align-items-lg-center">
              <Col md={6}>
                <Image src={about16} className="rounded" alt="about-img" />
              </Col>
              <Col md={6}>
                <h3 className="mb-4">Boost your business efficiency with Mizzle.</h3>
                <p className="mb-0">
                  The chatbot can be personalized to match the brand voice and tone, making it feel like an extension of the company&apos;s customer
                  support team.
                </p>
                <hr className="my-5" />
                <Row className="row-cols-2 row-cols-sm-3 g-4 g-sm-5 align-items-center">
                  {clients.map((image, idx) => (
                    <Col key={idx}>
                      <Image src={image} alt="client-img" />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Clients
