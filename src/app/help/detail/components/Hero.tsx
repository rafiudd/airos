import Link from 'next/link'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="position-relative pt-md-8 pb-0">
      <Container className="position-relative z-index-1 pt-4 pt-md-0">
        <Row className="g-4 g-xxl-5">
          <Col lg={8} xl={6}>
            <div className="d-flex position-relative mb-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots pb-0 mb-0">
                  <li className="breadcrumb-item">
                    <Link href="">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="">Help center</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Get started
                  </li>
                </ol>
              </nav>
            </div>

            <h1 className="mb-4 h2">How can we help you?</h1>

            <Form className="bg-light border rounded-2 position-relative p-2">
              <div className="input-group">
                <FormControl className="focus-shadow-none bg-light border-0 me-1" type="email" placeholder="Search for answer..." />
                <Button variant="dark" type="button" className="rounded-2 mb-0 flex-centered">
                  <BsSearch />
                </Button>
              </div>
            </Form>

            <ul className="list-inline small mb-0 mt-3">
              <li className="list-inline-item">
                <span className="text-secondary">Popular search: </span>
              </li>
              &nbsp;
              <li className="list-inline-item">
                <Link className="text-primary-hover heading-color text-decoration-underline mb-lg-0" href="">
                  
                  How can we help?
                </Link>
              </li>
              &nbsp;
              <li className="list-inline-item">
                <Link className="text-primary-hover heading-color text-decoration-underline mb-lg-0" href="">
                  
                  Installation Guide?
                </Link>
              </li>
              &nbsp;
              <li className="list-inline-item">
                <Link className="text-primary-hover heading-color text-decoration-underline mb-lg-0" href="">
                  
                  How to view expired tickets?
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
