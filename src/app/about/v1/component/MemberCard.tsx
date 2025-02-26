import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import { MemberType } from '../types'
import Image from 'next/image'

const MemberCard = ({ member }: { member: MemberType }) => {
  const { image, name, role } = member
  return (
    <Card className="card-body card-hover-shadow bg-transparent text-center p-4">
      <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
        <Image className="avatar-img rounded-circle" src={image} alt="avatar" />
      </div>
      <h6 className="mb-1">
        <Link href="">{name}</Link>
      </h6>
      <small>{role}</small>
      <ul className="list-inline mb-0 mt-3 flex-centered gap-1">
        <li className="list-inline-item">
          <Link className="btn btn-xs btn-icon btn-light" href="">
            <FaFacebookF className="fa-fw lh-base" />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="btn btn-xs btn-icon btn-light" href="">
            <FaInstagram className="fa-fw lh-base" />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="btn btn-xs btn-icon btn-light" href="">
            <FaTwitter className="fa-fw lh-base" />
          </Link>
        </li>
      </ul>
    </Card>
  )
}

export default MemberCard
