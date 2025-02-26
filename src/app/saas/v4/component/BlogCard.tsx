import { Card, CardBody, CardTitle } from 'react-bootstrap'
import { BsCalendar } from 'react-icons/bs'
import { BlogType } from '../types'
import Link from 'next/link'
import Image from 'next/image'

type BlogCardPropsType = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardPropsType) => {
  return (
    <Card as={'article'} className="card-img-scale shadow overflow-hidden h-100">
      <div className="card-img-scale-wrapper">{blog.image && <Image src={blog.image} className="img-scale card-img-top" alt="Blog-img" />}</div>

      <CardBody className="p-4">
        <CardTitle as={'h6'} className="mb-4">
          <Link href={blog.url} className="stretched-link">
            {blog.title}
          </Link>
        </CardTitle>
        <ul className="nav heading-color small nav-divider mb-0">
          <li className="nav-item">
            By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}
          </li>
          <li className="nav-item icons-center gap-1">
            <BsCalendar className="me-1" />
            {blog.publishedAt?.month} {blog.publishedAt?.date}, {blog.publishedAt?.year}
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default BlogCard
