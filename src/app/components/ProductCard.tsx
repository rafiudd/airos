import { ProductType } from '@/types/shop'
import { Card, CardBody, CardTitle } from 'react-bootstrap'
import { currency } from '@/states/constants'
import { getDiscountedPrice } from '@/helpers/products'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Card className="bg-transparent text-center p-0">
      {product.images[0] && <Image src={product.images[0]} className="px-5" alt="product-img" />}
      <CardBody className="p-0 mt-3">
        <CardTitle as={'h6'} className="mb-3">
          <Link href="">{product.name}</Link>
        </CardTitle>
        {product.sale ? (
          <div className="d-flex align-items-center justify-content-center mb-3">
            <h6 className="fw-normal mb-0 me-1">
              {currency}
              {getDiscountedPrice(product.price, product.sale.discount, product.sale.type).toFixed()}
            </h6>
            <span className="text-decoration-line-through">
              {currency} {product.price}
            </span>
          </div>
        ) : (
          <h6 className="fw-normal mb-3 me-1">
            {currency}
            {product.price}
          </h6>
        )}

        <Link href={product.url ?? '/shop/grid'} className="btn btn-sm btn-primary mb-0">
          Buy now
        </Link>
      </CardBody>
    </Card>
  )
}

export default ProductCard
