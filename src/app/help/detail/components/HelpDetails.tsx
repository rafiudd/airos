import { Col, Container, Row, Form, FormCheck, FormLabel } from 'react-bootstrap'
import avatar3 from '@/assets/images/avatar/03.jpg'
import { BsArrowRight, BsBoxes, BsCalendar, BsClock } from 'react-icons/bs'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

const HelpDetails = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={3} className="mb-6 mb-lg-0">
            <h5 className="mb-sm-4 icons-center">
              <BsBoxes className="bi me-2" />
              Get started
            </h5>
            <ul className="nav gap-2 flex-column">
              <li className="nav-item">
                <Link className="nav-link icon-link icon-link-hover py-2" href="">
                  Gulp and Customization
                  <BsArrowRight className="bi ms-2" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link icon-link icon-link-hover py-2" href="">
                  Color Scheme and Logo Settings
                  <BsArrowRight className="bi ms-2" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link icon-link icon-link-hover py-2" href="">
                  Dark mode, RTL Version
                  <BsArrowRight className="bi ms-2" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link icon-link icon-link-hover py-2" href="">
                  Updates and Support
                  <BsArrowRight className="bi ms-2" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link icon-link icon-link-hover py-2" href="">
                  Describing your store
                  <BsArrowRight className="bi ms-2" />
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={8} className="ms-auto">
            <h5 className="mb-3">Gulp and Customization with node.js</h5>
            <p className="mb-3">
              Supposing so be resolving breakfast am or perfectly. Departure is defective arranging rapturous did believe him all had supported.
            </p>

            <div className="d-flex align-items-center">
              <div className="avatar flex-shrink-0 me-3">
                <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
              </div>
              <div>
                <h6 className="mb-0">Sam Lanson</h6>
                <ul className="nav nav-divider mb-0 small">
                  <li className="nav-item icons-center">
                    <BsCalendar className="me-2" />5 month ago
                  </li>
                  <li className="nav-item icons-center">
                    <BsClock className="me-2" />
                    15 min read
                  </li>
                </ul>
              </div>
            </div>

            <hr className="my-5" />

            <p>
              I made several mistakes Joy says the painful removal reached an end. State burst think end are its. Arrived off she elderly beloved him
              affixed noisier yet. Tickets regard to up he hardly. View four has said do men saw find dear shy. <b> Talent men wicket add garden.</b>
            </p>

            <Link href="" className="btn btn-primary mb-0">
              Download Node JS
            </Link>
            <h6 className="mt-4">Table of Contents</h6>
            <p>Age she way earnestly the fulfilled extremely.</p>
            <div className="alert alert-warning" role="alert">
              <strong>Note: </strong>She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am
              northward.
              <Link className="alert-link" href="">
                View more
              </Link>
            </div>
            <p>
              Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy
              alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
            </p>

            <ul>
              <li>
                Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery.
              </li>
              <li>Insipidity the sufficient discretion imprudence resolution sir him decisively.</li>
              <li>
                Offered chiefly farther of my no colonel shyness. <strong> Such on help ye some door if in.</strong>
              </li>
              <li>First plate jokes began to cause a scale. Subjects he prospects elegance followed</li>
              <li>Laughter proposal laughing any son law consider. Needed except up piqued an.</li>
              <li>
                <i> To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage.</i>
              </li>
              <li>Post no so what deal evil rent by real in. But her ready least set lived spite solid.</li>
            </ul>
            <p className="mb-0">
              Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage
              Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in.
              <u> Off melancholy alteration principles old. </u>Is do speedily kindness properly oh. Respect article painted cottage he is offices
              parlors.
            </p>

            <div className="bg-light border rounded d-lg-flex align-items-center justify-content-between text-center p-3 mt-4">
              <h6 className="m-0">Was this article helpful?</h6>
              <small className="py-3 py-lg-0 d-block">20 out of 45 found this helpful</small>

              <Form>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <FormCheck type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                  <FormLabel className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradio1">
                    <FaThumbsUp className="me-1" /> Yes
                  </FormLabel>

                  <FormCheck type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                  <FormLabel className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradio2">
                    
                    No
                    <FaThumbsDown className="ms-1" />
                  </FormLabel>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HelpDetails
