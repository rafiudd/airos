import { BsCart3, BsHeart, BsTrash3 } from 'react-icons/bs'

import type { WishlistProductType } from '../data'
import { toSentenceCase } from '@/utils/change-casing'
import { currency } from '@/states/constants'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const WishlistTableRow = ({ image, gender, price, productName, sizes, stockStatus, color }: WishlistProductType) => {
  return (
    <Row className="align-items-xl-center">
      <Col xs={5} md={2}>
        <div className="bg-light p-2 rounded-2">
          <Image src={image} alt='' />
        </div>
      </Col>
      <Col xs={7} md={10}>
        <Row className="g-4">
          <Col xl={6}>
            <h6 className="mb-1"><Link href="">{productName}</Link></h6>
            <small className="text-primary">{stockStatus}</small>
            <ul className="nav nav-divider small align-items-center mt-1">
              <li className="nav-item">Gender: {toSentenceCase(gender)}</li>
              {color && <li className="nav-item">Color: {color}</li>}
              <li className="nav-item">Size: {sizes.map((size) => size + ', ')}</li>
            </ul>
          </Col>
          <Col md={6} xl={3}>
            <select className="form-select form-select-sm" aria-label="Default select example">
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
            </select>
            <div className="hstack gap-1 flex-wrap text-primary-hover mt-2 justify-content-md-end">
              <Link href="" className="text-reset small icons-center"><BsTrash3 className="me-2" />Remove</Link>
              <Link href="" className="text-reset small icons-center"><BsHeart className="me-2" />Save for later</Link>
            </div>
          </Col>
          <Col md={6} xl={3} className="text-md-end">
            <h5 className="mb-2">{currency}{price.toFixed(2)}</h5>
            <button className="btn btn-sm btn-dark mb-0 icons-center"><BsCart3 className="me-2" />Add to cart</button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default WishlistTableRow