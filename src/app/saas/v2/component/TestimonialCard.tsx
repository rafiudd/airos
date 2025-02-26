import Image from 'next/image'
import { Card, Col } from 'react-bootstrap'
import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs'
import { TestimonialType } from '../types'

type TestimonialCardPropsType = {
  testimonial: TestimonialType
}

const TestimonialCard = ({ testimonial }: TestimonialCardPropsType) => {
  return (
    <Card className="bg-transparent p-0 pe-md-7">
      {testimonial.user.avatar && <Image src={testimonial.user.avatar} className="rounded" alt="review-img" />}

      <Col xl={9} xs={10} className="card-body bg-body shadow rounded position-absolute end-0 bottom-0 p-xl-5 mb-4 me-4">
        <h6>{testimonial.title}</h6>
        <p>{testimonial.comment}</p>

        {testimonial.rating && (
          <ul className="list-inline mb-1">
            {Array(Math.floor(testimonial.rating))
              .fill(0)
              .map((_star, idx) => (
                <li key={idx} className="list-inline-item me-1">
                  <BsFillStarFill size={16} className="text-primary" />
                </li>
              ))}
            {!Number.isInteger(testimonial.rating) && <BsStarHalf size={16} className="text-primary me-1" />}
            {testimonial.rating < 5 &&
              Array(5 - Math.ceil(testimonial.rating))
                .fill(0)
                .map((_star, idx) => (
                  <li key={idx} className="list-inline-item me-1">
                    <BsStar size={16} className="text-primary" />
                  </li>
                ))}
          </ul>
        )}

        <span className="heading-color fw-bold">
          {testimonial.user.firstName} {testimonial.user.lastName}
        </span>
        <p className="small mb-0">{testimonial.user.role}</p>
      </Col>
    </Card>
  )
}

export default TestimonialCard
