import Link from 'next/link'
import { Fragment } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Form } from 'react-bootstrap'
import OrderHistoryItem from './components/OrderHistoryItem'
import { ordersData } from './data'
import { FaSlidersH } from 'react-icons/fa'

const OrderHistory = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
        <h1 className="h3 mb-0">Order history</h1>

        <button
          className="btn btn-primary d-lg-none flex-shrink-0 ms-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar">
          <FaSlidersH className="fas" /> Menu
          </button>
      </div>

      <Card className="bg-transparent">
        <CardHeader className="bg-transparent border-bottom d-flex justify-content-between align-items-center p-0 pb-3">
          <CardTitle as={'h6'} className="mb-0">
            Your order
          </CardTitle>
          <Col md={3} className="ms-auto">
            <Form>
              <select className="form-select js-choice" aria-label=".form-select-sm">
                <option>Sort by</option>
                <option>All</option>
                <option>Delivered</option>
                <option>Processing</option>
                <option>Cancelled</option>
              </select>
            </Form>
          </Col>
        </CardHeader>

        <CardBody className="p-0 pt-5">
          {ordersData.map((order, idx) => {
            return (
              <Fragment key={idx}>
                <OrderHistoryItem {...order} key={idx} />
                <hr className="my-5" />
              </Fragment>
            )
          })}
        </CardBody>

        <CardFooter className="bg-transparent text-end p-0">
          <ul className="pagination pagination-primary-soft list-unstyled d-flex justify-content-sm-end flex-wrap mb-0">
            <li className="page-item disabled">
              <Link className="page-link" href="">
                Prev
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">
                1
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" href="">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">
                ..
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">
                Next
              </Link>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </>
  )
}

export default OrderHistory
