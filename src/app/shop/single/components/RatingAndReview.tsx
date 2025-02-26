'use client'
import reviewImg1 from '@/assets/images/shop/review/01.jpg'
import reviewImg2 from '@/assets/images/shop/review/02.jpg'
import reviewImg3 from '@/assets/images/shop/review/03.jpg'
import reviewImg4 from '@/assets/images/shop/review/04.jpg'
import reviewImg5 from '@/assets/images/shop/review/05.jpg'
import GlightBox from '@/components/GlightBox'
import useToggle from '@/hooks/useToggle'
import Image from 'next/image'
import { Fragment } from 'react'
import { Card, Col, Collapse, Container, Form, ProgressBar, Row } from 'react-bootstrap'
import { BsArrowRight, BsFullscreen } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaRegStar, FaRegThumbsDown, FaRegThumbsUp, FaStar } from 'react-icons/fa6'
import { reviews } from '../data'

const reviewImages = [reviewImg1, reviewImg2, reviewImg3, reviewImg4, reviewImg5]

const RatingAndReview = () => {
  const { toggle, isTrue } = useToggle()
  return (
    <section className="pt-0">
      <Container>
        <h2 className="h4 mb-5">Rating &amp; review</h2>
        <Row>
          <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0">
            <div className="border rounded-2 p-4">
              <Row>
                <Col md={5}>
                  <h2 className="mb-0">4.5</h2>
                  <ul className="list-inline mb-2">
                    {Array(4)
                      .fill(0)
                      .map((_star, idx) => (
                        <li className="list-inline-item me-1" key={idx}>
                          <FaStar size={18} className="text-warning" />
                        </li>
                      ))}
                    <li className="list-inline-item me-1">
                      <FaStarHalfAlt size={18} className="text-warning" />
                    </li>
                  </ul>
                  <p className="mb-2">Based on 56 Reviews</p>
                </Col>
                <Col md={7}>
                  {[95, 75, 55, 35, 25].map((progress, idx) => (
                    <div className="d-flex align-items-center" key={idx}>
                      <ProgressBar now={progress} style={{ height: '5px', width: '100%' }} variant="warning" className="me-3" />
                      <span className="heading-color">{5 - idx}</span>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
            <div className="mt-5">
              <h5 className="mb-4">Reviews with images</h5>
              <Row className="g-4">
                {reviewImages.map((image, idx) => (
                  <Col xs={4} sm={2} lg={3} key={idx}>
                    <GlightBox className="w-100 h-100" data-gallery="gallery" href={image.src}>
                      <Card className="card-element-hover overflow-hidden">
                        <Image alt="" src={image} className="rounded-3" />
                        <div className="hover-element w-100 h-100">
                          <BsFullscreen
                            size={32}
                            className="fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                          />
                        </div>
                      </Card>
                    </GlightBox>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={7}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Sort by</h5>
              <Col xl={3}>
                <select className="form-select" aria-label="Default select example">
                  <option value={1}>Most Recent</option>
                  <option value={2}>Most Viewed</option>
                  <option value={3}>Helpful</option>
                </select>
              </Col>
            </div>
            {reviews.map((review, idx) => {
              return (
                <Fragment key={idx}>
                  <hr className="my-4" />

                  <div className="d-flex">
                    <Image className="avatar avatar-md rounded-circle float-start me-3" src={review.avatar} alt="avatar" />
                    <div>
                      <div className="d-sm-flex justify-content-between mb-2">
                        <div>
                          <h6 className="m-0">{review.name}</h6>
                          <span className="me-3 small">{review.date} </span>
                        </div>
                        <ul className="list-inline mb-0">
                          {review &&
                            Array(Math.floor(review.rating))
                              .fill(0)
                              .map((_star, idx) => (
                                <li key={idx} className="list-inline-item me-1 small">
                                  <FaStar size={15} className="text-warning" />
                                </li>
                              ))}
                          {review && !Number.isInteger(review.rating) && <FaStarHalfAlt size={15} className="text-warning me-1 small" />}
                          {review &&
                            review.rating < 5 &&
                            Array(5 - Math.ceil(review.rating))
                              .fill(0)
                              .map((_star, idx) => (
                                <li key={idx} className="list-inline-item me-1 small">
                                  <FaRegStar className="text-warning" size={15} />
                                </li>
                              ))}
                        </ul>
                      </div>
                      <p>{review.description} </p>
                      <span>Was it helpful?</span>
                      <div className="btn-group ms-2" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio1" id="btnradior1" />
                        <label className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradior1">
                          <FaRegThumbsUp className="me-1" /> Yes
                        </label>
                        <input type="radio" className="btn-check" name="btnradio1" id="btnradior2" />
                        <label className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradior2">
                          
                          No <FaRegThumbsDown className="ms-1" />
                        </label>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )
            })}
            <div className="mt-4 text-end">
              <button className="btn btn-primary-soft mb-0" onClick={toggle}>
                Write a review
              </button>
            </div>
            <Collapse in={isTrue}>
              <Card className="card-body">
                <Form>
                  <select className="form-select mb-3" aria-label="Default select example">
                    <option value={1}>★★★★★ (5/5)</option>
                    <option value={2}>★★★★☆ (4/5)</option>
                    <option value={3}>★★★☆☆ (3/5)</option>
                    <option value={3}>★★☆☆☆ (2/5)</option>
                    <option value={3}>★☆☆☆☆ (1/5)</option>
                  </select>
                  <textarea className="form-control mb-3" id="exampleFormControlTextarea1" placeholder="Your review" rows={3} defaultValue={''} />
                  <button type="submit" className="btn btn-primary mb-0">
                    Post It <BsArrowRight className="fa-fw  ms-2" />
                  </button>
                </Form>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default RatingAndReview
