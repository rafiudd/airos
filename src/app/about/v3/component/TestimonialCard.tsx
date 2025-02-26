import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs'
import { TestimonialType } from '../types'
import Image from 'next/image'

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  const { comment, rating, user } = testimonial
  return (
    <>
      <ul className="list-inline mb-3">
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
      <q className="lead heading-color">{comment}</q>
      <div className="d-sm-flex align-items-center mt-4">
        <div className="avatar flex-shrink-0">{user.avatar && <Image className="avatar-img rounded-circle" src={user.avatar} alt="avatar" />}</div>
        <div className="ms-sm-3 mt-2 mt-sm-0">
          <span className="heading-color fw-semibold mb-0">
            {user.firstName} {user.lastName}
          </span>
          <p className="mb-0 small">
            {user.role} {user.companyName && 'of ' + user.companyName}
          </p>
        </div>
      </div>
    </>
  )
}

export default TestimonialCard
