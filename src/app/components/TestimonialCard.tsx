import { Card } from 'react-bootstrap'
import { BsQuote, BsStarFill } from 'react-icons/bs'
import avatar7 from '@/assets/images/avatar/07.jpg'
import Image from 'next/image'

const TestimonialCard = () => {
  return (
    <Card className="card-body bg-dark p-sm-5">
      <span className="display-5 text-primary">
        <BsQuote />
      </span>
      <p className="text-white fs-5">
        The sound quality is impressive for earbuds of this size. The audio is clear, with balanced mids and highs. The bass isn&apos;t overpowering, but
        it&apos;s adequate for most music genres.
      </p>

      <ul className="list-inline mb-0">
        {Array(5)
          .fill(0)
          .map((_star, idx) => (
            <li className="list-inline-item me-1" key={idx}>
              <BsStarFill className="text-white fs-6" />
            </li>
          ))}
      </ul>
      <hr className="opacity-1 my-4" />

      <div className="d-sm-flex align-items-center">
        <div className="avatar flex-shrink-0">
          <Image className="avatar-img rounded-circle" src={avatar7} alt="avatar" />
        </div>
        <div className="ms-sm-2 mt-2 mt-sm-0">
          <h6 className="text-white mb-0">Dennis Barrett</h6>
          <p className="mb-0 small text-white">CEO and co-founder, MacoInfo</p>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard
