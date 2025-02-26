import { splitArray } from '@/utils/array'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { BsChevronRight, BsPatchCheckFill } from 'react-icons/bs'
import about14 from '@/assets/images/about/14.jpg'
import Image from 'next/image'
import { features } from '../data'
import Link from 'next/link'

const About = () => {
  const features2 = [
    'Strategic Call-to-Actions',
    'Content-Rich Sections',
    'Social Media Integration',
    'Easy-to-Use Contact Forms',
    'Performance Analytics',
    'Fast Loading Speed',
    'Tested on Major Browsers',
  ]
  const featureChunk = splitArray(features2, 2)
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={6} className="position-relative">
            <figure className="position-absolute top-0 start-0 mt-n6 ms-n5 z-index-1">
              <svg width={117} height={98} viewBox="0 0 117 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-mode"
                  d="M53.9804 0.725277C52.9701 1.69222 52.9701 5.07654 53.9804 11.1683C54.9906 17.1634 55.7123 18.5654 57.5885 18.5654C58.3582 18.5654 59.128 18.3237 59.3685 18.0336C59.561 17.6952 59.2723 13.9241 58.7912 9.52449C58.1177 3.52942 57.6847 1.45049 57.0112 0.773624C55.9047 -0.241669 54.9425 -0.290017 53.9804 0.725277Z"
                />
                <path
                  className="fill-mode"
                  d="M94.055 9.62103C87.2236 16.3413 84.8182 19.3872 85.0106 21.2244C85.1068 22.3847 85.3955 22.7715 86.3095 22.9165C87.2236 23.0616 88.3782 22.2397 91.6015 19.0004C96.9415 13.7305 101.512 8.46069 101.512 7.54209C101.512 6.62349 100.165 5.31812 99.2026 5.31812C98.7696 5.36646 96.4604 7.25201 94.055 9.62103Z"
                />
                <path
                  className="fill-mode"
                  d="M23.2866 15.2294C22.2763 15.8096 22.1801 17.5984 23.046 18.7104C24.1044 20.0641 34.0148 25.9625 35.2656 25.9625C35.891 25.9625 36.7088 25.6241 37.0937 25.2373C38.537 23.4001 36.4202 21.1278 29.1077 16.5348C25.9806 14.6492 24.7779 14.3108 23.2866 15.2294Z"
                />
                <path
                  className="fill-mode"
                  d="M103.433 40.37L97.8047 41.4337V42.8357C97.8047 43.851 98.1414 44.4312 99.0555 45.0114C100.21 45.6399 101.124 45.6399 107.09 44.8663C116.038 43.7543 116.038 43.7543 116.663 42.3523C117.096 41.337 117.048 40.9985 116.326 40.1283C115.22 38.8713 110.986 38.9196 103.433 40.37Z"
                />
                <path
                  className="fill-mode"
                  d="M3.94616 46.1232C0.193694 46.8485 -1.20145 49.2175 1.20397 50.7646C1.97371 51.2481 2.83967 51.4414 3.80184 51.1997C4.57157 51.0547 8.42026 50.7162 12.4133 50.5228C17.8495 50.2328 19.7739 49.9427 20.3512 49.4109C21.5058 48.2505 20.3993 46.8001 17.8495 46.1232C15.3479 45.4947 7.12133 45.4947 3.94616 46.1232Z"
                />
                <path
                  className="fill-mode"
                  d="M89.1454 69.9584C88.9529 70.1034 88.8086 70.7803 88.8086 71.4088C88.8086 72.7142 90.2518 73.8262 97.6125 77.9357C103.915 81.465 104.877 81.7551 106.416 80.4981C108.244 79.0477 107.234 77.5006 102.664 74.8898C95.3032 70.6352 90.3 68.7981 89.1454 69.9584Z"
                />
                <path
                  className="fill-mode"
                  d="M30.8398 72.8111C28.3382 74.9384 21.2181 86.9769 20.0635 91.038C19.0532 94.519 21.9397 95.9211 24.0565 93.0203C24.6819 92.1984 26.3657 89.2975 27.7609 86.6868C29.1079 84.0277 31.369 80.1115 32.6198 77.8876C34.929 74.0681 35.2177 72.8111 33.9187 71.9408C33.0047 71.3123 32.3312 71.5541 30.8398 72.8111Z"
                />
                <path
                  className="fill-mode"
                  d="M60.9544 80.7401C60.1365 81.707 60.0884 93.6488 60.9063 95.7277C61.243 96.4529 62.0128 97.3232 62.7825 97.6616C63.889 98.1935 64.1776 98.1451 65.0436 97.0815C65.5247 96.4529 65.8133 95.631 65.669 95.1959C65.5247 94.8091 65.2841 91.6666 65.0917 88.2823C64.9474 84.8979 64.6106 81.6103 64.4182 80.9818C63.889 79.6764 61.9165 79.5314 60.9544 80.7401Z"
                />
              </svg>
            </figure>
            <Image src={about14} className="rounded" alt="about-img" />
          </Col>
          <Col lg={6} className="ps-md-5">
            <h2 className="mb-4">Boost your business efficiency with Mizzle.</h2>
            <p className="mb-0">
              Elevate your online presence and embark on a journey to digital excellence with our meticulously designed digital agency theme.
            </p>
            <hr className="my-4" />
            <p>
              At the heart of our theme is a commitment to providing a robust and versatile platform that accommodates the diverse needs of digital
              agencies.
            </p>
            <Row className="row-cols-1 row-cols-sm-2">
              {featureChunk.map((chunk, idx) => {
                return (
                  <Col key={idx}>
                    <ul className="list-group list-group-borderless mb-0">
                      {chunk.map((feature, idx) => (
                        <li key={idx} className="list-group-item d-flex icons-center">
                          <BsPatchCheckFill className=" text-primary me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Col>
                )
              })}
            </Row>
            <div className="text-center d-inline-block bg-dark rounded px-5 py-3 mt-4 mt-lg-5">
              <span className="text-white">Work with us?</span>
              <Link className="ms-2" href="/contact/v2">
                Contact us now
                <BsChevronRight className="small ms-1" />
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="g-4 mt-5">
          {features.map((feature, idx) => (
            <Col sm={6} lg={3} key={idx}>
              <Card as={CardBody} className="bg-transparent p-0">
                <figure className="text-primary mb-3 flex-shrink-0">{feature.icon}</figure>
                <h6>{feature.title}</h6>
                <p className="mb-0">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default About
