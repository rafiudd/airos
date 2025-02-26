'use client'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { WorkType } from '../types'
import Link from 'next/link'
import { works } from '../data'
import Image from 'next/image'

export const WorkCard = ({ work }: { work: WorkType }) => {
  const { description, image, title } = work
  return (
    <Card className="card-body bg-light border">
      <div className="d-flex align-items-center">
        <div className="d-flex">
          <Image alt="" src={image} className="h-50px" height={50} width={50} />
          <div className="mx-3">
            <h6 className="mb-0">{title}</h6>
            <small>{description}</small>
          </div>
        </div>
        <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="">
          <BsArrowRight className="bi fs-5" />
        </Link>
      </div>
    </Card>
  )
}

const Work = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2 className="mb-2">Follow our work</h2>
          <p className="mb-0">
            The combination of my passion for design, code &amp; interaction positions me in a unique place in the web design world.
          </p>
        </div>
        <Row className="row-cols-1 row-cols-lg-3 g-4">
          {works.map((work, idx) => (
            <Col key={idx}>
              <WorkCard work={work} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Work
