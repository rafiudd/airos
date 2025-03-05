import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from 'react-bootstrap'
import BlogCard from './BlogCard'
import { Fragment } from 'react/jsx-runtime'
import { blogs } from '../data'

const Blogs = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="d-lg-flex justify-content-between align-items-center">
          <h4 className="mb-3 mb-lg-0">Artikel AiROS</h4>
          <Nav defaultActiveKey={'0'} className="nav-pills gap-1 nav-pills-light">
            <NavItem>
              <NavLink eventKey={'0'}>All blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'1'}>Marketing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'2'}>Design</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'3'}>Lifestyle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'4'}>Technology</NavLink>
            </NavItem>
          </Nav>
        </div>
        <Row className="g-4 g-sm-5 g-xl-7 mt-0">
          {blogs.map((blog, idx) => (
            <Fragment key={idx}>
              <Col md={6} lg={4} key={idx}>
                <BlogCard blog={blog} />
              </Col>
            </Fragment>
          ))}
        </Row>
        {/* <Row className="mt-7">
          <Col xs={12} className="mx-auto">
            <ul className="pagination pagination-primary-soft d-flex justify-content-center mb-0">
              <li>
                <ul className="list-unstyled">
                  <li className="page-item disabled">
                    <Link className="page-link" href="" tabIndex={-1} aria-disabled="true">
                      Prev
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
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
                      Next
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}

export default Blogs
