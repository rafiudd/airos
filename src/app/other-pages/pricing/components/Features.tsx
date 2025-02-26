import { currency } from '@/states/constants'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'
import { features } from '../data'
import Link from 'next/link'

const Features = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2 className="mb-4">Features included in every plan</h2>
          <p className="mb-0">
            Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve always worked very hard to give our customers
            the best experience.
          </p>
        </div>

        <Row className="g-4 g-lg-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Col md={4} className="text-center" key={idx}>
                <Card className="card-body border bg-light">
                  <div className="icon-lg text-primary mx-auto mb-3">
                    <Icon className="fa-xl" size={28} />
                  </div>
                  <h6>{feature.title}</h6>
                  <p>{feature.description}</p>
                </Card>
              </Col>
            )
          })}
        </Row>

        <div className="table-responsive-xl mt-5">
          <table className="table table-border align-middle">
            <thead className="align-top">
              <tr>
                <th scope="col"></th>

                <th scope="col">
                  <div className="text-center p-3">
                    <span className="mb-3 heading-color">Basic plan</span>
                    <p className="mb-3">
                      <span className="h2 mb-0 plan-price" data-monthly-price="$25" data-annual-price="$20">
                        {currency}25
                      </span>
                      /month
                    </p>
                    <Link href="" className="btn btn-sm btn-dark mb-0">
                      Get started
                    </Link>
                  </div>
                </th>

                <th scope="col">
                  <div className="text-center p-3">
                    <span className="mb-3 heading-color">Standard plan</span>
                    <p className="mb-3">
                      <span className="h2 mb-0 plan-price" data-monthly-price="$56" data-annual-price="$45">
                        {currency}56
                      </span>
                      /month
                    </p>
                    <Link href="" className="btn btn-sm btn-dark mb-0">
                      Get started
                    </Link>
                  </div>
                </th>

                <th scope="col">
                  <div className="text-center p-3">
                    <span className="mb-3 heading-color">Basic plan</span>
                    <p className="mb-3">
                      <span className="h2 mb-0 plan-price" data-monthly-price="$99" data-annual-price="$145">
                        {currency}99
                      </span>
                      /month
                    </p>
                    <Link href="" className="btn btn-sm btn-dark mb-0">
                      Get started
                    </Link>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="border-top-0">
              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Storage space</span>
                </th>
                <td className="text-center"> 40GB</td>
                <td className="text-center"> 60GB</td>
                <td className="text-center"> Unlimited</td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Cloud connected</span>
                </th>
                <td className="text-center"> Yes</td>
                <td className="text-center"> Yes</td>
                <td className="text-center"> Yes</td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Coding tools</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Advance debugging</span>
                </th>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Mobile apps</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Web tools</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Version control</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Security</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <span className="fw-normal heading-color ps-lg-4 mb-0">Team access</span>
                </th>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-danger">
                  <BsXCircle size={20} className="fa-lg" />
                </td>
                <td className="text-center text-primary">
                  <BsCheckCircle size={20} className="fa-lg" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}

export default Features
