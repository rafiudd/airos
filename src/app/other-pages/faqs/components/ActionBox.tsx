import { Col, Container, Row } from 'react-bootstrap'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import Link from 'next/link'
import Image from 'next/image'

const ActionBox = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-primary bg-opacity-10 rounded p-4 p-sm-5">
          <Row>
            <Col lg={7} className="text-center mx-auto">
              <ul className="avatar-group mb-4 justify-content-center">
                <li className="avatar avatar-xs">
                  <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
                </li>
                <li className="avatar avatar">
                  <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                </li>
                <li className="avatar avatar-lg z-index-2">
                  <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                </li>
                <li className="avatar avatar z-index-1">
                  <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                </li>
                <li className="avatar avatar-xs">
                  <Image className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                </li>
              </ul>

              <h4>Still have a question?</h4>
              <p className="mb-4">
                We&apos;d be happy to help you with any questions you have! Please let us know what you&apos;re looking for, and we&apos;ll do our best to assist
                you.
              </p>

              <Link href="/contact/v1" className="btn btn-lg btn-dark mb-0">
                Contact us
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default ActionBox
