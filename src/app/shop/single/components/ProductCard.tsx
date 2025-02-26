'use client'
import { getDiscountedPrice } from '@/helpers/products'
import { useShoppingContext } from '@/states/useShoppingContext'
import type { ProductType } from '@/types/shop'
import { BsCart, BsTrash } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { currency } from '@/states/constants'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }: { product: ProductType }) => {
  const { images, name, price, sale, review, tag, id } = product
  const { updateQuantityForProduct, isInCart } = useShoppingContext()
  return (
    <Card className="border bg-transparent overflow-hidden p-0 h-100">
      <div className="position-absolute start-0 top-0 p-3">
        {tag && <div className="badge text-bg-dark">{tag}</div>}
        {sale && (
          <span className="badge text-bg-danger">
            {sale.discount}
            {sale.type === 'percent' && '%'} off
          </span>
        )}
      </div>
      <CardHeader className="bg-light rounded m-2">
        {images.map((image, idx) => (
          <Image alt="" src={image} key={idx} />
        ))}
      </CardHeader>

      <CardBody className="pb-0">
        <CardTitle as={'h6'}>
          <Link href={`/shop/single/${id}`} className="stretched-link">
            {name}
          </Link>
        </CardTitle>

        <ul className="list-inline">
          {review &&
            Array(Math.floor(review.stars))
              .fill(0)
              .map((_star, idx) => (
                <li key={idx} className="list-inline-item me-1 small">
                  <FaStar size={15} className="text-warning" />
                </li>
              ))}
          {review && !Number.isInteger(review.stars) && <FaStarHalfAlt size={15} className="text-warning me-1 small" />}
          {review &&
            review.stars < 5 &&
            Array(5 - Math.ceil(review.stars))
              .fill(0)
              .map((_star, idx) => (
                <li key={idx} className="list-inline-item me-1 small">
                  <FaRegStar className="text-warning" size={15} />
                </li>
              ))}
        </ul>
      </CardBody>

      <CardFooter className="bg-transparent d-flex justify-content-between align-items-center pt-0">
        {sale ? (
          <>
            <div className="d-flex align-items-center gap-2 justify-content-center">
              <p className="fw-bold text-success mb-0">
                {currency}
                {getDiscountedPrice(price, sale.discount, sale.type).toFixed(2)}
              </p>
              <small className="text-decoration-line-through">
                {currency}
                {price.toFixed(2)}
              </small>
            </div>
          </>
        ) : (
          <p className="fw-bold text-success mb-0">
            {currency}
            {price.toFixed(2)}
          </p>
        )}
        {isInCart(product) ? (
          <button className="btn btn-danger mb-0 z-index-2" onClick={() => updateQuantityForProduct(product, 0)}>
            <BsTrash />
          </button>
        ) : (
          <button className="btn btn-dark mb-0 z-index-2" onClick={() => updateQuantityForProduct(product, 1)}>
            <BsCart />
          </button>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProductCard
