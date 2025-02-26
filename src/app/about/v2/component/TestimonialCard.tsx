import { BsFillStarFill, BsQuote, BsStar, BsStarHalf } from 'react-icons/bs'
import { Card } from 'react-bootstrap'
import { TestimonialType } from '../types'
import Image from 'next/image'

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  const { comment, user, rating } = testimonial
  return (
    <Card className="card-body bg-light p-sm-5">
      <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded flex-centered">
        <BsQuote className="fa-xl" size={29} />
      </div>
      <p className="lead my-3">{comment}</p>
      <ul className="list-inline mb-4">
        {rating &&
          Array(Math.floor(rating))
            .fill(0)
            .map((_star, idx) => (
              <li key={idx} className="list-inline-item me-1">
                <BsFillStarFill size={16} className="text-warning" />
              </li>
            ))}
        {!Number.isInteger(rating) && <BsStarHalf size={16} className="text-warning me-1" />}
        {rating &&
          rating < 5 &&
          Array(5 - Math.ceil(rating))
            .fill(0)
            .map((_star, idx) => (
              <li key={idx} className="list-inline-item me-1">
                <BsStar size={16} className="text-warning" />
              </li>
            ))}
      </ul>
      <div className="d-sm-flex align-items-center">
        <div className="avatar flex-shrink-0">{user.avatar && <Image className="avatar-img rounded-circle" src={user.avatar} alt="avatar" />}</div>
        <div className="ms-sm-3 mt-2 mt-sm-0">
          <h6 className="mb-0">
            {user.firstName} {user.lastName}
          </h6>
          <p className="mb-0 small">
            {user.role} {user.company && 'of ' + user.company.name}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard
