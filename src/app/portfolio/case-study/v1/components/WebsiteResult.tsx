import { currency } from '@/states/constants'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { BsBoxArrowUpRight } from 'react-icons/bs'

const WebsiteResult = () => {
  return (
    <Col xs={12}>
      <Row className="g-4 mt-7">
        <Col lg={5}>
          <h4 className="mb-3">Result</h4>
          <p className="lead mb-4">
            Two assure Edward whence the was. Who worthy yet ten boys denote wonder. Weeks views her sight old tears sorry. Additions can suspected
            its concealed put furnished.
          </p>

          <Link href="" className="btn btn-link heading-color text-primary-hover p-0 mb-0">
            View project website
            <BsBoxArrowUpRight className="ms-2" />
          </Link>
        </Col>
        <Col lg={7} xl={6} className="ms-auto">
          <p>
            Transforming ideas into reality often requires collaboration with a diverse range of individuals. Partnering with experts, seeking
            mentorship, and building a network of like-minded individuals can provide valuable insights and support.
          </p>

          <Row className="row-cols-2 row-cols-md-3 mt-lg-6 g-4 g-lg-5">
            <Col>
              <h2 className="mb-0">
                22<span className="text-primary mb-0">%</span>
              </h2>
              <p className="mb-0">Increase in time spent on website</p>
            </Col>

            <Col>
              <h2 className="mb-0">
                4.5<span className="text-primary mb-0">M</span>
              </h2>
              <p className="mb-0">View this project got across our social media network</p>
            </Col>
            <Col>
              <h2 className="mb-0">
                {currency}12.8<span className="text-primary mb-0">M</span>
              </h2>
              <p className="mb-0">Total raised in funding so far</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default WebsiteResult
