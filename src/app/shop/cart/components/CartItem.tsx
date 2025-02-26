
import { getDiscountedPrice } from '@/helpers/products'
import { currency } from '@/states/constants'
import { useShoppingContext } from '@/states/useShoppingContext'
import type { CartType } from '@/types/shop'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { BsXLg } from 'react-icons/bs'

const CartItem = ({ cart }: { cart: CartType }) => {
  const { updateQuantityForProduct } = useShoppingContext();
  const { product } = cart
  return (
    <>
      <Row className="align-items-xl-center">
        <Col xs={5} md={2}>
          <div className="bg-light p-2 rounded-2">
            <Image alt="" src={product.images[0]} />
          </div>
        </Col>
        <Col xs={7} md={10}>
          <Row className="g-3 g-sm-4">
            <Col xl={5}>
              <h6 className="mb-1">
                <Link href="">{product.name}</Link>
              </h6>
              {product.attributes && (
                <ul className="nav nav-divider small align-items-center mt-1">
                  {product.attributes.gender && <li className="nav-item">Gender: {product.attributes.gender}</li>}
                  {product.attributes.colors && <li className="nav-item">Color: {product.attributes.colors[0].name}</li>}
                  {product.attributes.size && <li className="nav-item">Size:{product.attributes.size}</li>}
                </ul>
              )}
            </Col>
            <Col sm={6} md={4} xl={2}>
              <select className="form-select form-select-sm" aria-label="Default select example">
                <option value={1}>01</option>
                <option value={2}>02</option>
                <option value={3}>03</option>
              </select>
            </Col>
            <Col sm={6} md={4} xl={3} className="text-md-center">
              {product.sale ? (
                <h5 className="mb-0">
                  {currency}
                  {getDiscountedPrice(product.price, product.sale.discount, product.sale.type)}
                </h5>
              ) : (
                <h5 className="mb-0">
                  {currency}
                  {product.price.toFixed(2)}
                </h5>
              )}
            </Col>
            <Col sm={6} md={4} xl={2} className="text-md-center">
              <Link href="" className="text-danger small icons-center gap-1" onClick={() => updateQuantityForProduct(product, 0)}>
                <BsXLg /> Remove
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </>
  )
}

export default CartItem
