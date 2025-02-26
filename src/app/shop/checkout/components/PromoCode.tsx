'use client'
import { currency } from '@/states/constants'
import { useShoppingContext } from '@/states/useShoppingContext'
import Link from 'next/link'
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Form, FormControl } from 'react-bootstrap'

const PromoCode = () => {
  const { getCalculatedOrder } = useShoppingContext()

  const calculatedOrder = getCalculatedOrder()

  return (
    <Card className="border p-4">
      <CardHeader className="p-0 pb-3">
        <CardTitle className="mb-0">Promo code</CardTitle>
        <Form className="input-group mt-4">
          <FormControl className="rounded me-1" type="text" placeholder="Type here.." />
          <Button type="button" variant="dark" className="rounded-2 mb-0">
            Apply
          </Button>
        </Form>
      </CardHeader>
      <CardBody className="p-0 pb-3 mt-2">
        <ul className="list-group list-group-borderless">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Subtotal</span>
            <span className="heading-color fw-semibold mb-0">
              {currency}
              {calculatedOrder?.total?.toFixed(2) || '0.00'}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Service Charge</span>
            <span className="heading-color fw-semibold mb-0">
              -{currency}
              {calculatedOrder?.totalDiscount?.toFixed(2) || '0.00'}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Tax</span>
            <span className="heading-color fw-semibold mb-0">
              {currency}
              {calculatedOrder?.tax?.toFixed(2) || '0.00'}
            </span>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="bg-transparent border-top p-0 pt-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="heading-color fw-normal">Payable Now</span>
          <span className="h6 mb-0">
            {currency}
            {calculatedOrder?.orderTotal?.toFixed(2) || '0.00'}
          </span>
        </div>
        <div className="d-grid">
          <Link href="/checkout" className="btn btn-lg btn-primary mb-0">
            Continue to Checkout
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PromoCode
