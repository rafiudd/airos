import slackImg from '@/assets/images/elements/slack.svg'
import logoIconImg from '@/assets/images/logo-icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight, BsPlusLg } from 'react-icons/bs'
import { integrations } from '../data'
import IntegrationCard from './IntegrationCard'
const IntegrationDetail = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="pt-4 pt-lg-0">
        <Row>
          <Col xl={9} className="mx-auto">
            <Card className="card-body bg-dark p-5 mb-6" data-bs-theme="dark">
              <Row className="g-4">
                <Col md={5} xxl={4}>
                  <div className="d-flex align-items-center">
                    <div className="text-center bg-body rounded-2 flex-shrink-0 p-3 me-n2">
                      <Image alt="" src={slackImg} className="w-40px w-sm-80px" />
                    </div>
                    <div className="icon-md text-center bg-white bg-opacity-25 rounded-circle flex-shrink-0 z-index-2 flex-centered">
                      <span className="fs-5 flex-centered">
                        <BsPlusLg />
                      </span>
                    </div>
                    <div className="text-center bg-body rounded-2 flex-shrink-0 p-3 ms-n2">
                      <Image alt="" src={logoIconImg} className="w-40px w-sm-80px" />
                    </div>
                  </div>
                </Col>
                <Col md={7} xxl={8}>
                  <h1 className="h3">Connect Mizzle to Slack</h1>
                  <p className="mb-0">Our integration with Mizzle and Slack enables you to streamline communication and optimize your workflow.</p>
                </Col>
              </Row>
            </Card>
            <h4>About the integration</h4>
            <p>
              Integrating Slack with Mizzle is a game-changer. With this integration, you can effortlessly synchronize data, messages, and tasks
              between our software and Mizzle. Enjoy real-time updates, improved communication, and a more organized workflow.
            </p>
            <p>
              How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask style Me
              mean able my by in they Extremity now strangers contained breakfast him discourse additions Sincerity collected contented led now
              perpetual extremely forfeited.
            </p>
            <h5 className="mt-4">Section 1: integration with Mizzle</h5>
            <p>
              Integrating Slack with Mizzle is a game-changer. With this integration, you can effortlessly synchronize data, messages, and tasks
              between our software and Mizzle. Enjoy real-time updates, improved communication, and a more organized workflow.
            </p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Receive instant notifications in Mizzle whenever there&apos;s an update or action in Slack
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Effortlessly create, assign, and manage tasks in both platforms, ensuring nothing falls through the cracks.
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Keep all your data consistent and up to date, whether it&apos;s customer information, project details, or important messages.
              </li>
            </ul>
            <h5 className="mt-4">Section 2: integration with Slack</h5>
            <p>
              Our integration with Slack takes your team collaboration to the next level. By connecting Mizzle with Slack, you can create a more
              efficient and productive work environment.
            </p>
            <ul className="list-group list-group-borderless mb-4">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Instant Notifications
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                File Sharing
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="bi me-2" />
                Seamless Communication
              </li>
            </ul>
            <p className="mb-4">
              This content provides an overview of how your SaaS product integrates with Mizzle and Slack, highlighting the key features and benefits
              of these integrations. It encourages visitors to take action and explore these integrations further.
            </p>
            <Link href="" className="btn btn-dark mb-0">
              Get Started
            </Link>
          </Col>
          <Col xs={12} className="mt-6 mt-md-8">
            <h3 className="mb-5 text-center">Related integration</h3>
            <Row className="g-4">
              {integrations.map((tool, idx) => (
                <Col sm={6} lg={4} key={idx}>
                  <IntegrationCard tool={tool} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default IntegrationDetail
