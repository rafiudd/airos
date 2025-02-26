import masterCard from '@/assets/images/elements/mastercard.svg'
import visaCard from '@/assets/images/elements/visa.svg'
import type { PaymentMethodType } from '../data'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const PaymentMethodCard = ({ type, expiry, number, isPrimary }: PaymentMethodType) => {
  const isVisa = type === 'visa'

  return (
    <div className="border rounded p-4">
      <div className="d-sm-flex align-items-center">
        <div className="flex-shrink-0 mb-2 mb-sm-0">
          <Image className="avatar" src={isVisa ? visaCard : masterCard} alt={type + ' Card'} />
        </div>
        <div className="flex-grow-1 ms-sm-3">
          <Row className="align-items-center">
            <div className="col-sm mb-3 mb-sm-0">
              <p className="heading-color fw-normal mb-0">
                {isVisa ? 'VisaCard' : 'MasterCard'} •••• {number}
                {isPrimary && <span className="badge text-bg-primary ms-1">Primary</span>}
              </p>
              <small className="text-muted">Checking - Expires {expiry}</small>
            </div>
            <Col sm="auto">
              <div className="d-flex gap-3">
                <button type="button" className="btn btn-sm btn-white border mb-0 icons-center gap-1">
               
                  <BsPencilFill className="me-1" /> Edit
                </button>
                <button type="button" className="btn btn-sm btn-white border mb-0 icons-center gap-1">
                
                  <BsTrash className="me-1" /> Delete
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodCard
