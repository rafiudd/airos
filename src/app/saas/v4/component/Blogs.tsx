import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { blogs } from '../data'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center g-4 mb-5">
          <Col md={6}>
            <h2 className="mb-0">Take a look at the latest articles & blogs</h2>
          </Col>
          <Col md={5} className="ms-auto text-sm-end">
            <Link href="/blog/grid" className="btn btn-light btn-lg mb-0">
              View all blogs
            </Link>
          </Col>
        </Row>

        <Row className="g-4 g-xl-5">
          {blogs.map((blog, idx) => (
            <Col md={4} key={idx}>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Blogs
