'use client'
import { Card, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { currency } from '@/states/constants'
import { BsArrowRight, BsBriefcase, BsClock, BsGeoAlt, BsSlashCircle } from 'react-icons/bs'
import { JobType } from '../types'
import Link from 'next/link'
import { allJobs } from '../data'

export const JobCard = ({ job }: { job: JobType }) => {
  const { address, category, name, salary, time } = job
  return (
    <Card className="card-body bg-light d-md-flex justify-content-md-between align-items-md-center flex-md-row p-4 mb-3">
      <div className="mb-4 mb-md-0">
        <div className="badge text-bg-dark mb-3">{category}</div>
        <h5 className="mb-0">
          <Link href={`/career/single?title=${name}`} className="stretched-link">
            {name}
          </Link>
        </h5>
        <div className="hstack gap-3 gap-sm-4 flex-wrap mt-3">
          <span>
            <BsGeoAlt className="me-2" />
            {address}
          </span>
          <span>
            <BsClock className="me-2" />
            {time}
          </span>
          <span>
            <BsBriefcase className="me-2" />
            {currency}
            {salary}
          </span>
        </div>
      </div>
      <div>
        <Link href={`/career/single?title=${name}`} className="btn btn-primary mb-0">
          Apply now
          <BsArrowRight className="ms-2" />
        </Link>
      </div>
    </Card>
  )
}

const JobList = () => {
  const jobs = ['All jobs', 'Development', 'HR', 'Marketing', 'Design']
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2 className="mb-3">Open Position</h2>
          <p className="mb-0">
            Our friendly team members are always willing to help you understand your present technology requirements and provide suggestions on your
            future needs.
          </p>
        </div>
        <Row className="g-4 g-lg-6">
          <Col lg={9} className="mx-auto">
            <TabContainer defaultActiveKey={'0'}>
              <Nav className="nav-pills gap-1 nav-pills-light justify-content-center align-items-center mb-3 mb-sm-5">
                <NavItem>
                  <span className="pe-2">Browse by:</span>
                </NavItem>
                {jobs.map((job, idx) => (
                  <NavItem key={idx}>
                    <NavLink eventKey={`${idx}`}>{job}</NavLink>
                  </NavItem>
                ))}
              </Nav>
              <TabContent>
                <TabPane eventKey={'0'} className="fade">
                  {allJobs.map((job, idx) => (
                    <JobCard job={job} key={idx} />
                  ))}
                </TabPane>
                <TabPane eventKey={'1'} className="fade">
                  {allJobs.slice(0, 2).map((job, idx) => (
                    <JobCard job={job} key={idx} />
                  ))}
                </TabPane>
                <TabPane eventKey={'2'} className="fade">
                  {allJobs.slice(2, 4).map((job, idx) => (
                    <JobCard job={job} key={idx} />
                  ))}
                </TabPane>

                <TabPane eventKey={'3'} className="fade">
                  <div className="text-center justify-content-center p-sm-4">
                    <span className="display-5 text-primary">
                      <BsSlashCircle />
                    </span>
                    <h5 className="mb-0 mt-2 mt-sm-4">There are no job openings available for this role.</h5>
                  </div>
                </TabPane>
                <TabPane eventKey={'4'} className="fade">
                  <div className="text-center justify-content-center p-sm-4">
                    <span className="display-5 text-primary">
                      <BsSlashCircle />
                    </span>
                    <h5 className="mb-0 mt-2 mt-sm-4">There are no job openings available for this role.</h5>
                  </div>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default JobList
