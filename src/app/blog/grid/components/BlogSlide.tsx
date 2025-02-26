import Link from 'next/link'
import { Card, Col, Row } from 'react-bootstrap'
import { BsCalendar, BsClock, BsPerson } from 'react-icons/bs'
import { BlogType } from '../types'

const BlogSlide = ({ blog }: { blog: BlogType }) => {
  const { category, date, image, time, title, publishedBy } = blog
  return (
    <Card
      className="overflow-hidden h-500px text-center rounded-0"
      style={{ backgroundImage: `url(${image.src})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
      <div className="bg-overlay bg-dark opacity-5" />
      <div className="card-img-overlay d-flex align-items-center p-2 p-sm-4">
        <div className="w-100 my-auto">
          <Row className="justify-content-center">
            <Col xs={11} lg={9}>
              <Link href="" className="badge text-bg-dark mb-4">
                {category}
              </Link>
              <h1 className="h2 mb-4">
                <Link href="/blog/single/v1" className="text-white text-primary-hover">
                  {title}
                </Link>
              </h1>
              <ul className="nav nav-divider mb-0 justify-content-center small">
                <li className="nav-item text-white">
                  <Link href="" className="text-decoration-underline">
                    <BsPerson className="me-2" />
                    {publishedBy.firstName} {publishedBy.lastName}
                  </Link>
                </li>
                <li className="nav-item text-white">
                  <BsCalendar className="me-2" />
                  {date}
                </li>
                <li className="nav-item text-white">
                  <BsClock className="me-2" />
                  {time} read
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  )
}

export default BlogSlide
