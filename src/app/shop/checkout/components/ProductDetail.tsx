import shop2 from '@/assets/images/shop/02.png'
import shop8 from '@/assets/images/shop/08.png'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
const ProductDetail = () => {
  return (
    <Card className="bg-transparent mt-5">
      <CardHeader className="bg-transparent border-bottom px-0">
        <h6 className="mb-0">Arrives by Wed, Jan 25</h6>
      </CardHeader>
      <CardBody className="px-0 pb-0">
        <div className="d-flex align-items-start border-bottom pb-4 mb-4">
          <div className="bg-light p-2 rounded-2 w-25">
            <Image alt="" src={shop2} />
          </div>
          <div className="ms-3">
            <p className="fw-semibold mb-1">
              <Link href="" className="heading-color text-primary-hover">
                Round neck cotton t-shirt
              </Link>
            </p>
            <ul className="list-group list-group-borderless small">
              <li className="list-group-item mb-0 pb-0">Item: #2458644</li>
              <li className="list-group-item mb-0 pb-0">Color: Midblue</li>
              <li className="list-group-item mb-0 pb-0">Size: L</li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom pb-4">
          <div className="bg-light p-2 rounded-2 w-25">
            <Image alt="" src={shop8} />
          </div>
          <div className="ms-3">
            <p className="fw-semibold mb-1">
              <Link href="" className="heading-color text-primary-hover">
                Mizz dunk low shoes
              </Link>
            </p>
            <ul className="list-group list-group-borderless small">
              <li className="list-group-item mb-0 pb-0">Item: #2458644</li>
              <li className="list-group-item mb-0 pb-0">Size: 42</li>
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductDetail
