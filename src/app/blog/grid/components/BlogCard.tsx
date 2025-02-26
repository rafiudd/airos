'use client'
import Link from 'next/link'
import { Card, CardBody, CardFooter, CardTitle } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { BlogType } from '../types'
import Image from 'next/image'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  const { category, image, publishedBy, title, description } = blog
  return (
    <Card as={'article'} className="bg-transparent h-100 p-0">
      <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">{category}</div>
      <Image src={image} className="card-img" alt="Blog-img" />
      <CardBody className="px-2 pb-4">
        <CardTitle as={'h6'} className="mb-2">
          <Link href="">{title}</Link>
        </CardTitle>
        <p className="small mb-0">{description}</p>
      </CardBody>
      <CardFooter className="bg-transparent d-flex justify-content-between px-2 py-0">
        <span className="heading-color fw-semibold mb-0">
          {publishedBy.firstName} {publishedBy.lastName}
        </span>
        <Link className="icon-link icon-link-hover stretched-link" href="/blog/single/v1">
          Read more
          <BsArrowRight className="bi" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default BlogCard
