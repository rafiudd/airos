import avatar9 from '@/assets/images/avatar/09.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Col } from 'react-bootstrap'

const Sidebar = () => {
  const popularTags = [
    'blog',
    'business',
    'bootstrap',
    'data science',
    'deep learning',
    'Adventure',
    'Community',
    'Tutorials',
    'Interview',
    'Photography',
    'Classic',
  ]

  const relatedPost = [
    '5 investment doubts you should clarify',
    'Mastering Responsive Web Design with Bootstrap',
    'Effortless Web Development with Mizzle',
    'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    'Ten questions you should answer truthfully.',
  ]
  return (
    <Col lg={4} className="ps-xl-6">
      <Card className="card-body d-inline-block bg-light border p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="avatar avatar-lg flex-shrink-0 me-2">
            <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
          </div>
          <div className="ms-2">
            <h6 className="mb-0">
              <Link href="">Louis Crawford</Link>
            </h6>
            <small>Content creator</small>
          </div>
        </div>
        <p>Incorporating gratitude into our daily where we write down three things we are grateful for each day.</p>
        <Link href="" className="btn btn-sm btn-outline-primary mb-0">
          Follow author
        </Link>
      </Card>
      <div className="align-items-center mt-5">
        <h6 className="mb-3 d-inline-block">Related post:</h6>
        <ul className="list-group list-group-flush">
          {relatedPost.map((post, idx) => (
            <li className="list-group-item ps-0" key={idx}>
              <Link href="" className="heading-color text-primary-hover fw-semibold">
                {post}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="align-items-center mt-5">
        <h6 className="mb-3 d-inline-block">Popular Tags:</h6>
        <ul className="list-inline mb-0">
          {popularTags.map((tag, idx) => (
            <li className="list-inline-item" key={idx}>
              <Link className="btn btn-light btn-sm" href="">
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  )
}

export default Sidebar
