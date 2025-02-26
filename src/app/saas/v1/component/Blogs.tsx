import blogImg from '@/assets/images/blog/4by3/08.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight, BsCalendar } from 'react-icons/bs'
import { blogs } from '../data'

const Blogs = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-5">
          <h2 className="mb-0">Latest blogs</h2>
        </div>

        <Row className="g-4 g-md-6">
          <Col md={6} lg={5}>
            <Card as={'article'} className="bg-transparent">
              <Image src={blogImg} className="card-img" alt="Blog-img" />
              <CardBody className="px-0">
                <CardTitle>
                  <Link href="/blog/single/v2" className="stretched-link">
                    Sleek and Responsive - Designing with Bootstrap and Mizzle
                  </Link>
                </CardTitle>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">By Carolyn Ortiz</p>
                  <Link className="icon-link icon-link-hover me-1" href="">
                    Read more
                    <BsArrowRight />
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md={6} lg={7}>
            {blogs.map((blog, idx) => (
              <article className={`card bg-transparent rounded-0 ${idx !== blogs.length - 1 ? 'border-bottom py-5' : 'pt-5'}`} key={idx}>
                <Row>
                  <Col sm={10} xs={9}>
                    <CardBody className="p-0">
                      <CardTitle as={'h6'}>
                        <Link href={blog.url} className="stretched-link">
                          {blog.title}
                        </Link>
                      </CardTitle>
                      <ul className="nav nav-divider small mb-0">
                        <li className="nav-item">
                          By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}
                        </li>
                        <li className="nav-item">
                          <BsCalendar className="me-1" />
                          {blog.publishedAt?.month} {blog.publishedAt?.date}, {blog.publishedAt?.year}
                        </li>
                      </ul>
                    </CardBody>
                  </Col>

                  <Col sm={2} xs={3} className="d-flex justify-content-end">
                    <Link href="" className="btn btn-round btn-dark flex-shrink-0 flex-centered">
                      <BsArrowRight />
                    </Link>
                  </Col>
                </Row>
              </article>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blogs
