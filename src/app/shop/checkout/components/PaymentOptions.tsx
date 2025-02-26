'use client'
import useToggle from '@/hooks/useToggle'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'react-bootstrap'
import { BsPencilSquare, BsXLg } from 'react-icons/bs'
import visa from '@/assets/images/elements/visa.svg'
import { paymentOptions } from '../data'
import Link from 'next/link'
import Image from 'next/image'

const PaymentOptions = () => {
  const { isTrue, toggle } = useToggle()
  return (
    <>
      <Card className="bg-transparent">
        <CardHeader className="bg-transparent border-bottom px-0">
          <h5>Payment options</h5>
        </CardHeader>
        <CardBody className="px-0">
          <Row className="g-4">
            {paymentOptions.map((item, idx) => {
              const Icon = item.icon
              return (
                <Col md={6} lg={12} xl={6} key={idx}>
                  <div className="form-check border rounded p-3">
                    <div className="d-flex justify-content-between">
                      <label className="form-check-label d-flex align-items-start pe-4" htmlFor={`standard-${idx}`}>
                        {item.image && <Image alt="" src={item.image} className="w-40px me-3 mt-1" />}
                        {Icon && (
                          <span className="w-40px">
                            <Icon className="fs-5" />
                          </span>
                        )}
                        <span>
                          <span className="d-block fw-semibold heading-color mb-1">{item.title}</span>
                          <span className="d-block small">{item.subTitle}</span>
                        </span>
                      </label>
                      <input
                        defaultChecked={idx == 0 ? true : false}
                        className="form-check-input"
                        type="radio"
                        name="payOptions"
                        id={`standard-${idx}`}
                      />
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-3">
                      <Link href="" className="text-body-secondary text-primary-hover small">
                        Set as default
                      </Link>
                      {item.image && (
                        <Link
                          href=""
                          onClick={toggle}
                          className="heading-color text-primary-hover fw-semibold small"
                          data-bs-toggle="modal"
                          data-bs-target="#editcard">
                          <BsPencilSquare className="me-1" />
                          Edit
                        </Link>
                      )}
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </CardBody>
      </Card>

      <Modal show={isTrue} onHide={toggle} centered className="fade" id="editcard" tabIndex={-1} aria-labelledby="editCardLabel" aria-hidden="true">
        <ModalHeader className="px-4 d-flex justify-content-between">
          <h5 className="modal-title" id="editCardLabel">
            Edit card
          </h5>
          <button type="button" className="btn btn-sm btn-light mb-0" onClick={toggle}>
            <BsXLg />
          </button>
        </ModalHeader>
        <ModalBody className="p-4">
          <Row as={Form} className="g-4">
            <Col xs={12}>
              <label className="form-label">Card Number</label>
              <div className="position-relative">
                <FormControl type="text" maxLength={16} defaultValue="2456 2588 4589 7895" placeholder="xxxx xxxx xxxx xxxx" />
                <Image alt='' src={visa} className="w-40px position-absolute top-50 end-0 translate-middle-y me-2" />
              </div>
            </Col>
            <Col md={6}>
              <label className="form-label">Expiration date</label>
              <div className="input-group">
                <FormControl type="text" maxLength={2} defaultValue={8} placeholder="Month" />
                <FormControl type="text" maxLength={4} defaultValue={2024} placeholder="Year" />
              </div>
            </Col>
            <Col md={6}>
              <FormLabel>CVV / CVC</FormLabel>
              <FormControl type="text" maxLength={3} defaultValue={565} placeholder="xxx" />
            </Col>
            <Col xs={12}>
              <FormLabel>Name on Card</FormLabel>
              <FormControl type="text" aria-label="name of card holder" defaultValue="Jacqueline Miller" placeholder="Name of card holder" />
            </Col>
            <Col md={12}>
              <FormCheck className="mb-0" label="Secuarely save card and details" id="checkbox-1" />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="px-4">
          <button type="button" className="btn btn-white border my-0" onClick={toggle}>
            Close
          </button>
          <button type="button" className="btn btn-primary my-0" data-bs-dismiss="modal">
            Save change
          </button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default PaymentOptions
