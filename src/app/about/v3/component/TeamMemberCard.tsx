import { Card, CardBody } from 'react-bootstrap'
import { MemberType } from '../types'
import Link from 'next/link'
import Image from 'next/image'

const TeamMemberCard = ({ member }: { member: MemberType }) => {
  const { firstName, lastName, image, role } = member
  return (
    <Card className="card-img-scale bg-transparent overflow-hidden">
      <div className="card-img-scale-wrapper rounded-3">
        <Image src={image} className="img-scale" alt="card image" />
      </div>
      <CardBody className="text-center px-0 pb-0">
        <h6 className="mb-0">
          <Link href="" className="stretched-link">
            {firstName} {lastName}
          </Link>
        </h6>
        <small>{role}</small>
      </CardBody>
    </Card>
  )
}

export default TeamMemberCard
