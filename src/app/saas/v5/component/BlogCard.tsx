import { Card, CardBody, CardTitle } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { BlogType } from '../types'
import Image from 'next/image'
import Link from 'next/link'

type BlogCardPropsType = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardPropsType) => {
  return (
    <Card as={'article'} className="bg-transparent h-100 p-0">
      <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">{blog.category}</div>

      {blog.image && <Image src={blog.image} className="card-img" alt="Blog-img" />}

      <CardBody className="px-2 pb-4">
        <CardTitle as={'h5'} className="mb-2">
          <Link href={blog.url}>{blog.title}</Link>
        </CardTitle>

        <div className="d-flex justify-content-between mt-2">
          <span>
            By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}
          </span>
          <Link href={blog.url} className="icon-link icon-link-hover stretched-link">
            Read more <BsArrowRight />
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default BlogCard
