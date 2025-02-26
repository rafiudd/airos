import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight, BsStarFill, BsStarHalf } from 'react-icons/bs'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import Link from 'next/link'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-sm-0">
            <h2 className="mb-4">Success stories in their own words</h2>
            <p className="mb-4">Read what our satisfied clients have to say about their experiences with our platform.</p>
            <Link className="btn btn-lg btn-primary icon-link icon-link-hover mb-4 mb-lg-8" href="/customer/stories">
              View all reviews
              <BsArrowRight className="bi" />
            </Link>

            <h6 className="mb-2">Trusted by 50K+ customers</h6>
            <div className="d-flex">
              <ul className="list-inline icons-center">
                <li className="list-inline-item small me-0">
                  <BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0">
                  <BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0">
                  <BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0">
                  <BsStarFill size={16} className="text-warning me-1" />
                </li>
                <li className="list-inline-item small me-0">
                  <BsStarHalf size={16} className="text-warning me-2" />
                </li>
                <li className="list-inline-item heading-color fw-normal me-0">4.4/5.0</li>
              </ul>
              <span className="text-secondary mx-2 mx-sm-3">|</span>
              <p className="mb-0">3,857 Reviews</p>
            </div>
          </Col>

          <Col lg={7} className="ps-xl-6">
            <Row className="g-4">
              <Col md={6}>
                <Card className="card-body card-hover-shadow border p-4 mb-4">
                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    &quot;Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.&quot;
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Jacqueline Miller</h6>
                      <p className="mb-0 small">Ceo of Blogzine</p>
                    </div>
                  </div>
                </Card>

                <Card className="card-body card-hover-shadow border p-4">
                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    &quot;Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child.
                    The bore of true of no be deal. &quot;
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Emma Watson</h6>
                      <p className="mb-0 small">Co-Founder</p>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col md={6} className="mt-md-7">
                <Card className="card-body card-hover-shadow border p-4 mb-4">
                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    &quot;Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open
                    Betrayed.&quot;
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Louis Ferguson</h6>
                      <p className="mb-0 small">Web Developer</p>
                    </div>
                  </div>
                </Card>

                <Card className="card-body card-hover-shadow border p-4">
                  <ul className="list-inline mb-5">
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarFill size={15} className="text-warning me-1" />
                    </li>
                    <li className="list-inline-item small me-0">
                      <BsStarHalf size={15} className="text-warning" />
                    </li>
                  </ul>

                  <p className="heading-color mb-4">
                    &quot;Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve always worked very hard to give our
                    customers the best experience.&quot;
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
                    </div>

                    <div className="ms-2">
                      <h6 className="mb-0">Samuel Bishop</h6>
                      <p className="mb-0 small">Product designer</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
