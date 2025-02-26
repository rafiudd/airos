import { useShoppingContext } from '@/states/useShoppingContext'
import type { CartType } from '@/types/shop'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'

const CartItem = ({ cart }: { cart: CartType }) => {
  const { updateQuantityForProduct } = useShoppingContext()
  const { product } = cart
  return (
    <Row className="g-3">
      <Col xs={4}>
        <Image className="rounded-2 bg-light p-2" src={product.images[0]} alt="avatar" />
      </Col>
      <Col xs={8}>
        <p className="heading-color fw-semibold mb-1">{product.name}</p>
        <div className="d-flex justify-content-between align-items-center">
          <select className="form-select form-select-sm w-auto" aria-label="Default select example">
            <option value={1}>01</option>
            <option value={2}>02</option>
            <option value={3}>03</option>
          </select>
          <button className="btn btn-sm btn-link p-0" onClick={() => updateQuantityForProduct(product, 0)}>
            Remove
          </button>
        </div>
      </Col>
    </Row>
  )
}

export default CartItem
