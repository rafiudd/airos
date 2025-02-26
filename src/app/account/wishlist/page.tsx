import { Fragment } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'
import WishlistTableRow from './components/WishlistTableRow'
import { wishlistItems } from './data'
import { FaSlidersH } from 'react-icons/fa'

const Wishlist = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
        <h1 className="h3 mb-0">Wishlist</h1>
        <button
          className="btn btn-primary d-lg-none flex-shrink-0 ms-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar">
          <FaSlidersH className="fas " /> Menu
        </button>
      </div>

      <Card className="bg-transparent">
        <CardHeader className="bg-transparent border-bottom d-flex justify-content-between align-items-center p-0 pb-3">
          <CardTitle as={'h6'} className="mb-0">
            Recently added
          </CardTitle>
          <span>{wishlistItems.length} Items</span>
        </CardHeader>
        <CardBody className="p-0 pt-5">
          {wishlistItems.map((item, idx) => (
            <Fragment key={idx}>
              <WishlistTableRow {...item} />
              <hr className="my-5" />
            </Fragment>
          ))}
        </CardBody>
        <CardFooter className="bg-transparent text-end p-0">
          <button className="btn btn-light border mb-0">Continue shopping</button>
        </CardFooter>
      </Card>
    </>
  )
}

export default Wishlist
