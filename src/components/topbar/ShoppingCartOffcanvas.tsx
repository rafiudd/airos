import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap'
import { BsCart3 } from 'react-icons/bs'
import useToggle from '@/hooks/useToggle'
import { currency } from '@/states/constants'
import { useShoppingContext } from '@/states/useShoppingContext'
import Link from 'next/link'
import CartItem from './CartItem'

const ShoppingCartOffcanvas = () => {
  const { cartItems, getCalculatedOrder } = useShoppingContext()
  const { isTrue, toggle } = useToggle()
  return (
    <>
      <li className="nav-item position-relative ms-2 ms-sm-3">
        <button
          onClick={toggle}
          className="btn btn-light border btn-round mb-0 flex-centered"
          data-bs-toggle="offcanvas"
          aria-controls="offcanvasMenu">
          <BsCart3 />
        </button>
        <span className="position-absolute top-0 start-100 translate-middle badge smaller rounded-circle bg-primary mt-xl-2 ms-n1">
          {cartItems.length}
        </span>
      </li>

      <Offcanvas show={isTrue} onHide={toggle} placement="end" tabIndex={-1} id="offcanvasMenu">
        <OffcanvasHeader className="justify-content-between border-bottom px-3" closeButton>
          <h5 className="mb-0">Your Cart</h5>
        </OffcanvasHeader>

        <OffcanvasBody className="d-flex flex-column px-3 gap-5">
          {cartItems.map((cart, idx) => (
            <CartItem cart={cart} key={idx} />
          ))}

          <div className="mt-auto">
            <div className="d-flex justify-content-between mb-2">
              <span className="heading-color fw-semibold">Subtotal</span>
              <h6 className="text-success mb-0">
                {currency}
                {Math.ceil(getCalculatedOrder().orderTotal)}
              </h6>
            </div>

            <div className="d-grid">
              <Link href="/shop/checkout" className="btn btn-lg btn-dark mb-0">
                Continue to Checkout
              </Link>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  )
}

export default ShoppingCartOffcanvas
