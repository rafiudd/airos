import storyImg5 from '@/assets/images/stories/05.jpg'
import client7 from '@/assets/images/client/07.svg'
import { BsArrowRight } from 'react-icons/bs'
import { Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { StoryType } from '../types'
import Image from 'next/image'
import Link from 'next/link'
import { stories } from '../data'

export const StoryCard = ({ story }: { story: StoryType }) => {
  const { companyLogo, image, title } = story

  return (
    <Card className="card-img-scale bg-transparent overflow-hidden">
      <div className="card-img-scale-wrapper rounded">
        <Image src={image} className="card-img" alt="story-image" />
      </div>
      <CardBody className="px-0">
        <Image alt="" src={companyLogo} className="h-30px mb-3" />
        <CardTitle as={'h6'} className=" mb-3">
          {title}
        </CardTitle>
        <Link className="icon-link icon-link-hover stretched-link" href="/customer/story-single">
          Read full story
          <BsArrowRight className="bi" />
        </Link>
      </CardBody>
    </Card>
  )
}

const Stories = () => {
  return (
    <section className="pt-6">
      <Container>
        <Row className="g-4 g-lg-7">
          <Col xs={12}>
            <Card className="bg-transparent">
              <Row className="align-items-center g-4 g-lg-7">
                <Col md={6}>
                  <Image src={storyImg5} className="card-img" alt="story-image" />
                </Col>
                <Col md={6}>
                  <CardBody>
                    <Image alt="" src={client7} className="h-30px mb-4" />
                    <CardTitle as={'h4'} className="mb-4">
                      <Link href="/customer/story-single" className="stretched-link">
                        See why direct-to-consumer brands choose mizzle dor their email efforts
                      </Link>
                    </CardTitle>
                    <p className="mb-4">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <Link href="" className="btn btn-dark mb-0">
                      Read more <BsArrowRight />
                    </Link>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
          {stories.map((story, idx) => (
            <Col md={4} key={idx}>
              <StoryCard story={story} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Stories
