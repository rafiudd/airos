import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const GetStartedJourney = () => {
  return (
    <Row className="g-3 g-md-4 align-items-center">
      <Col md={6}>
        <h2 className="mb-0 lh-base">
          <p className="mb-0">Get started on your path to</p>
          <span className="position-relative z-index-1">
            success
            <span className="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 d-none d-lg-block">
              <svg width={188} height={53} viewBox="0 0 188 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-primary"
                  d="M3.50843 26.6791C5.35764 34.7553 19.176 38.9851 26.7629 41.4254C47.5981 47.4215 69.586 48.7695 91.2825 49.6062C107.583 50.0478 123.91 49.7573 140.135 48.1885C154.13 46.7243 169.469 45.5158 180.691 36.9051C185.618 33.0239 185.82 27.2834 181.324 22.9954C169.418 11.8166 138.589 7.57514 121.756 4.98378C103.226 2.36919 84.4557 3.171 65.8116 4.27494C77.9834 4.49573 90.1553 5.19295 102.238 6.57578C107.406 7.27301 112.802 8.35371 117.032 11.3053C113.093 10.457 109.015 10.4338 105 10.1084C76.8182 7.19166 47.1675 4.62355 19.9233 13.5713C13.9704 15.8256 2.97647 19.5442 3.50843 26.6791ZM0 25.7727C1.06393 10.1897 39.758 5.03027 53.3231 4.43763C51.1192 4.29818 48.9154 4.07739 46.7242 3.78688C50.3846 2.79915 54.121 2.04382 57.9081 1.60224C65.5583 0.939879 73.2464 0.753952 80.9092 0.323997C94.0944 -0.349987 107.305 0.0102456 120.414 1.56738C136.816 4.10063 197.384 11.3983 186.757 34.918C184.554 38.8573 180.399 41.4603 176.27 43.5403C166.163 48.6068 154.523 49.8618 143.263 51.1285C126.456 52.7902 109.559 53.3131 92.6631 52.825C67.7368 51.907 42.1772 50.501 18.6947 42.1459C11.1586 39.1943 0.126658 34.3834 0 25.7727Z"
                />
              </svg>
            </span>
          </span>
          &nbsp;with us
        </h2>
      </Col>
      <Col md={5} className="text-md-end ms-auto">
        <Link className="btn btn-lg btn-primary-soft icon-link icon-link-hover mb-0" href="">
          Start Your Journey
          <BsArrowRight className="bi" />
        </Link>
      </Col>
    </Row>
  )
}

export default GetStartedJourney
