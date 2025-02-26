import { currency } from '@/states/constants'
import Link from 'next/link'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsFileEarmarkPdf, BsRocketTakeoffFill } from 'react-icons/bs'
import { FaCircle } from 'react-icons/fa6'

const ActivePlanCard = () => {
  return (
    <Card className="border">
      <CardHeader className="border-bottom d-sm-flex justify-content-between align-items-center">
        <h5 className="mb-2 mb-sm-0">Active Plan</h5>
        <Link href="" className="btn btn-light mb-0 icons-center">
          <BsFileEarmarkPdf className="me-2" />
          Download Pdf
        </Link>
      </CardHeader>
      <CardBody>
        <div className="d-sm-flex justify-content-between align-items-center">
          <div className="mb-3 mb-sm-0">
            <div className="icon-lg bg-light rounded-circle mb-3 flex-centered">
              <BsRocketTakeoffFill size={24} className="heading-color" />
            </div>
            <h6>Standard plan</h6>
            <p className="mb-0">Valid till: <span className="fw-semibold">May 2023 - April 2024</span></p>
          </div>
          <div>
            <h6 className="h2 mb-1">{currency}199</h6>
            <span>Total per year</span>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-sm-flex justify-content-between mb-3">
            <p className="heading-color fw-bold mb-2 mb-sm-0">Storage usage</p>
            <p className="mb-0"><span className="heading-color fw-bold">5.23 GB</span> used of 10 GB</p>
          </div>
          <div className="progress-stacked h-100 mb-2">
            <div className="progress progress-md" role="progressbar" aria-label="Segment one" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
              <div className="progress-bar rounded-0" />
            </div>
            <div className="progress progress-md" role="progressbar" aria-label="Segment two" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{ width: '20%' }}>
              <div className="progress-bar rounded-0 bg-primary bg-opacity-25" />
            </div>
          </div>
          <ul className="list-inline d-sm-flex gap-2">
            <li className="list-inline-item heading-color icons-center"> <FaCircle size={10} className="text-primary me-2" />Drive one</li>
            <li className="list-inline-item heading-color icons-center"> <FaCircle size={10} className="text-primary opacity-25 me-2" />Drive two</li>
            <li className="list-inline-item heading-color icons-center"> <FaCircle size={10} className="text-body-secondary opacity-50 me-2" />Empty drive</li>
          </ul>
        </div>
        <div className="d-grid d-sm-flex justify-content-sm-end gap-2 gap-sm-3 mt-4">
          <Link href='' className="btn btn-danger-soft mb-0">Cancel subscription</Link>
          <Link href='' className="btn btn-dark mb-0">Update plan</Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default ActivePlanCard