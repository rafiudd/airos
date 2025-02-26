import { BsQuote } from 'react-icons/bs'

import avatar2 from '@/assets/images/avatar/02.jpg'
import { Card, Col } from 'react-bootstrap'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <Col xs={12} className="mt-6">
      <Card className="card-body bg-light p-sm-5">
        <h5 className="display-4 opacity-3 text-primary lh-0 mb-0">
          <BsQuote />
        </h5>
        <q className="fs-5 heading-color">
          Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts
          overcame off her consider. Polite it elinor is depend.
        </q>
        <div className="d-flex align-items-center mt-4">
          <div className="avatar">
            <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Emma Watson</h6>
            <small>CEO, Co-founder</small>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default Testimonial
