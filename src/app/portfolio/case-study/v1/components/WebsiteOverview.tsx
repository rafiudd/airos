import caseStudyImg1 from '@/assets/images/portfolio/case-study-01.jpg'
import { BsBoxArrowUpRight, BsCheckCircle } from 'react-icons/bs'
import { Card, Col, Row } from 'react-bootstrap'
import { projectInfoData } from '../data'
import Link from 'next/link'

const WebsiteOverview = () => {
  return (
    <>
      <Col xs={12} className="mt-6">
        <Card
          className="h-300px h-md-400px h-xl-600px overflow-hidden"
          style={{ background: `url("${caseStudyImg1.src}") no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </Col>

      <Col xs={12} className="mt-6">
        <Row>
          <Col xs={11} lg={5} xl={4} className="mx-auto mt-n8 mt-md-n9">
            <Card className="card-body bg-dark p-sm-5" data-bs-theme="dark">
              <ul className="list-group list-group-borderless">
                {(projectInfoData || []).map((item, idx) => (
                  <li key={idx} className="list-group-item mb-3">
                    <small>{item.title}</small>
                    <p className="heading-color lead mt-1 mb-0">{item.description}</p>
                  </li>
                ))}

                <li className="list-group-item d-grid mb-0">
                  <Link href="" className="btn btn-lg btn-primary mb-0 flex-centered">
                    View project website
                    <BsBoxArrowUpRight className="ms-2" />
                  </Link>
                </li>
              </ul>
            </Card>
          </Col>

          <Col lg={7} className="ms-auto ps-5 mt-6 mt-lg-0">
            <h4 className="mb-3">Overview</h4>
            <p className="lead">
              Ideas are the seeds of innovation. They can originate from personal experiences, observations, or the desire to solve a problem.
            </p>
            <p>
              Once an idea takes root, it requires nurturing and refinement. This stage involves research, brainstorming, and gathering feedback.
              Conducting market analysis, exploring existing solutions, and collaborating with others can help refine the idea further. The goal is to
              gain a deeper understanding of the idea&apos;s feasibility, potential impact, and market viability.
            </p>
            <ul className="list-inline mb-6 icons-center gap-1 flex-wrap">
              <li className="list-inline-item">
                
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="">
                  Branding
                </Link>
              </li>
              <li className="list-inline-item">
                
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="">
                  Packaging
                </Link>
              </li>
              <li className="list-inline-item">
                
                <Link className="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="">
                  UI/UX design
                </Link>
              </li>
            </ul>
            <h4 className="mb-3">The Challenge</h4>
            <p>
              Turning ideas into reality is a transformative process that drives innovation and progress. It begins with recognizing the power and
              potential of an idea. Through cultivation, planning, and strategizing, ideas are refined and shaped into actionable plans. Challenges
              are embraced as opportunities for growth, and perseverance becomes key in overcoming obstacles.
            </p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Maintained Windows Servers
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Supported Windows workstations
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Setup a rotation schedule and set an anti-virus system
              </li>
              <li className="list-group-item icons-center">
                <BsCheckCircle className="text-primary me-2" />
                Designed machines/servers and trained employees
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default WebsiteOverview
