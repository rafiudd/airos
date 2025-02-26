import type { ProductType } from '@/types/shop'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'
import { currency } from '@/states/constants'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import { getDiscountedPrice } from '@/helpers/products'
import { BsCart } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

type TrendingProductCardPropsType = {
  product: ProductType
}

const TrendingProductCard = ({ product }: TrendingProductCardPropsType) => {
  const { name, price, tag, images, review, sale, url } = product

  return (
    <Card className="border bg-transparent overflow-hidden p-0 h-100">
      <div className="position-absolute top-0 start-0 p-3">
        {sale && (
          <span className="badge text-bg-danger">{sale.type === 'percent' ? `${sale.discount}%` : `Flat ${currency}${sale.discount}`} off</span>
        )}
        {!sale && tag && <span className="badge text-bg-dark">{tag}</span>}
      </div>
      <CardHeader className="bg-light rounded m-2">
        <Image src={images[0]} alt="" />
      </CardHeader>
      <CardBody className="pb-0">
        <CardTitle as={'h6'}>
          <Link href={url ?? ''} className="stretched-link">
            {name}
          </Link>
        </CardTitle>
        <ul className="list-inline">
          {Array.from(new Array(Math.floor(review?.stars ?? 0))).map((_i, idx) => (
            <li key={idx} className="list-inline-item me-1 small">
              <FaStar size={16} className="text-warning" />
            </li>
          ))}
          {!Number.isInteger(review?.stars) && (
            <li className="list-inline-item me-0 small">
              <FaStarHalfAlt className="text-warning" />
            </li>
          )}
        </ul>
      </CardBody>
      <CardFooter className="bg-transparent d-flex justify-content-between align-items-center pt-0">
        <div className="d-flex align-items-center gap-2 justify-content-center">
          <p className="fw-bold text-success mb-0">
            {currency}
            {sale ? getDiscountedPrice(price, sale.discount, sale.type) : price.toFixed(2)}
          </p>
          {sale && (
            <small className="text-decoration-line-through">
              {currency}
              {price.toFixed(2)}
            </small>
          )}
        </div>
        <Link href={url ?? ''} className="btn btn-dark mb-0 z-index-2">
          <BsCart className="mb-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default TrendingProductCard
