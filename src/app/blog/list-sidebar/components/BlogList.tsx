import BlogCard from './BlogCard'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import BlogSidebar from './BlogSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { blogs } from '../data'

const BlogList = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-xl-7">
          <Col lg={8}>
            <h4 className="mb-4">Our Blog</h4>
            {blogs.map((blog, idx) => (
              <BlogCard blog={blog} key={idx} />
            ))}
          </Col>
          <Col lg={4} className="mt-5 mt-lg-0">
            <BlogSidebar />
          </Col>
          <Col xs={12} className="mt-6">
            <ul className="pagination pagination-primary-soft d-flex justify-content-sm-between flex-wrap mb-0">
              <li>
                <ul className="list-unstyled">
                  <li className="page-item">
                    <Link className="page-link icons-center" href="">
                      <FaLongArrowAltLeft className="me-2 rtl-flip" />
                      Prev
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="list-unstyled">
                  <li className="page-item">
                    <Link className="page-link" href="">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="">
                      ..
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="">
                      22
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="">
                      23
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="list-unstyled">
                  <li className="page-item">
                    <Link className="page-link icons-center" href="#">
                      Next
                      <FaLongArrowAltRight className="ms-2 rtl-flip" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogList
