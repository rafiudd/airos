import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import decoration18 from '@/assets/images/elements/saas-decoration/18.png'
import decoration19 from '@/assets/images/elements/saas-decoration/19.png'
import decoration20 from '@/assets/images/elements/saas-decoration/20.png'
import decoration21 from '@/assets/images/elements/saas-decoration/21.png'
import decoration22 from '@/assets/images/elements/saas-decoration/22.png'
import Link from 'next/link'
import Image from 'next/image'

const Features2 = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2>Built to accommodate your data and workflow.</h2>
        </div>

        <Row className="g-4 g-xl-6">
          <Col lg={6}>
            <Card className="border p-0 h-100">
              <CardBody className="p-4 py-sm-5 px-sm-7 text-center">
                <h5 className="mb-3">Work with your favorite tools</h5>
                <p className="mb-4">You have the freedom to use the tools and software you prefer or find most effective in your job or tasks.</p>
                <Link href="/saas/integrations" className="btn btn-sm btn-dark mb-0">
                  View all integrations
                </Link>
              </CardBody>

              <CardFooter className="p-0">
                <Image src={decoration18} alt="" />
              </CardFooter>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="border overflow-hidden p-0 h-100">
              <CardBody className="p-4 py-sm-5 px-sm-7 text-center">
                <h5 className="mb-3">Extract code ready for implementation</h5>
                <p className="mb-4">Code you&apos;re providing or generating is of high quality, thoroughly tested, and fully prepared for deployment.</p>
                <Link href="" className="btn btn-sm btn-dark mb-0">
                  Discover our theme
                </Link>
              </CardBody>

              <CardFooter className="p-0 mb-n3 ms-5">
                <Image src={decoration19} alt="" />
              </CardFooter>
            </Card>
          </Col>

          <Col md={6} xl={4}>
            <Card className="border overflow-hidden p-0 h-100">
              <CardBody className="p-sm-5 text-center">
                <h5 className="mb-3">24/7 fast chat supports</h5>
                <p className="mb-0">Enjoy around-the-clock, lightning-fast chat support.</p>
              </CardBody>

              <CardFooter className="p-0">
                <Image src={decoration20} alt="" />
              </CardFooter>
            </Card>
          </Col>

          <Col md={6} xl={4}>
            <Card className="border overflow-hidden p-0 h-100">
              <CardBody className="p-sm-5 text-center">
                <h5 className="mb-3">Secure data encryption</h5>
                <p className="mb-0">It stands as a cornerstone in ensuring the confidentiality</p>
              </CardBody>

              <CardFooter className="p-0">
                <Image src={decoration22} alt="" />
              </CardFooter>
            </Card>
          </Col>

          <Col xl={4}>
            <Card className="border overflow-hidden p-0 h-100">
              <CardBody className="p-sm-5 text-center">
                <h5 className="mb-3">Team collaboration</h5>
                <p className="mb-0">Seamlessly collaborate with your team members like never before</p>
              </CardBody>

              <CardFooter className="p-0">
                <Image src={decoration21} alt="" />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features2
