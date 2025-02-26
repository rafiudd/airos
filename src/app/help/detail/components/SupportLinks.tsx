import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { supportLinks } from '../data'
import Link from 'next/link'

const SupportLinks = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4 g-lg-6">
          {supportLinks.map((item, idx) => {
            const Icon = item.icon
            return (
              <Col key={idx}>
                <Card className="card-body card-hover-shadow border p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <h4 className="mb-0 text-primary">
                        <Icon />
                      </h4>

                      <div className="mx-3">
                        <h6 className="mb-0">{item.title}</h6>
                        <small>{item.content}</small>
                      </div>
                    </div>

                    <Link className="icon-link icon-link-hover text-body stretched-link" href="">
                      <BsArrowRight className="fs-5 bi" />
                    </Link>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default SupportLinks
