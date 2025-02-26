import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { MemberType } from '../types'
import Image from 'next/image'
import Link from 'next/link'
import { teamMembers } from '../data'

export const TeamMemberCard = ({ member }: { member: MemberType }) => {
  const { socialMedia, user } = member

  return (
    <Card className="card-img-scale bg-transparent overflow-hidden">
      <div className="position-absolute top-0 end-0 z-index-2 m-3">
        <ul className="list-inline mb-0 mb-2 mb-sm-0 d-flex gap-1">
          {socialMedia.map((item, idx) => {
            const Icon = item.icon
            return (
              <li key={idx} className="list-inline-item">
                
                <Link className={`btn-icon btn-sm flex-centered rounded mb-2 bg-${item.variant}`} href="">
                  <Icon className="fa-fw" />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="card-img-scale-wrapper rounded-3">{user.avatar && <Image src={user.avatar} className="img-scale" alt="card image" />}</div>
      <CardBody className="text-center px-0 pb-0">
        <h6 className="mb-0">
          <Link href="" className="stretched-link">
            {user.firstName} {user.lastName}
          </Link>
        </h6>
        <small>{user.role}</small>
      </CardBody>
    </Card>
  )
}

const TeamMembers = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-sm-6">
          {teamMembers.map((member, idx) => (
            <Col sm={6} md={4} xl={3} key={idx}>
              <TeamMemberCard member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default TeamMembers
