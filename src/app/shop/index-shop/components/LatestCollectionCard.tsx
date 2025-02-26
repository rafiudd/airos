import type { ProductType } from '@/types/shop'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import { BsHeart } from 'react-icons/bs'
import { currency } from '@/states/constants'
import { getDiscountedPrice } from '@/helpers/products'
import Link from 'next/link'
import Image from 'next/image'

type LatestCollectionCardPropsType = {
  product: ProductType
}

const LatestCollectionCard = ({ product }: LatestCollectionCardPropsType) => {
  const { images, name, description, price, review, sale, url } = product

  return (
    <Card className="border overflow-hidden p-0 h-100">
      <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
        <div className="badge text-bg-dark icons-center">
          <FaStar size={13} className="text-warning me-1" />
          {review?.stars ?? 0}
        </div>
        <Link href={url ?? ''} className="btn btn-light btn-round border mb-0 ms-auto flex-centered">
          <BsHeart />
        </Link>
      </div>
      <CardHeader className="bg-transparent pb-0">
        <Image src={images[0]} alt="" />
      </CardHeader>
      <CardBody className="pt-0">
        <CardTitle as={'h6'}>
          <Link href="" className="stretched-link">
            {name}
          </Link>
        </CardTitle>
        <p className="mb-0">{description} </p>
      </CardBody>
      <CardFooter className="bg-transparent d-flex justify-content-between align-items-center pt-0">
        <div className="d-flex align-items-center gap-2 justify-content-center">
          <p className="fw-bold text-success mb-0">
            {currency}
            {sale ? getDiscountedPrice(price, sale.discount, sale.type).toFixed(2) : price.toFixed(2)}
          </p>
          {sale && (
            <small className="text-decoration-line-through">
              {currency}
              {price.toFixed(2)}
            </small>
          )}
        </div>
        <Link href={url ?? ''} className="btn btn-dark mb-0 z-index-2">
          Buy now
        </Link>
      </CardFooter>
    </Card>
  )
}

export default LatestCollectionCard
