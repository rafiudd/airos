import { Card, CardTitle } from 'react-bootstrap'
import { BsGeoAlt, BsHeadset } from 'react-icons/bs'
import { LocationType } from '../types'
import Link from 'next/link'
import Image from 'next/image'

const LocationCard = ({ location }: { location: LocationType }) => {
  const { address, image, name, number } = location
  return (
    <Card className="card-body border p-4">
      <div className="avatar avatar-lg mb-4">
        <Image className="avatar-img rounded-circle" src={image} alt="avatar" />
      </div>
      <CardTitle as={'h6'} className="mb-3">
        <Link href="">{name}</Link>
      </CardTitle>
      <ul className="list-group list-group-borderless border-0">
        <li className="d-flex mb-3">
          <span>
            <BsGeoAlt className="me-2" />
          </span>
          {address}
        </li>
        <li className="d-flex mb-3 icons-center">
          <BsHeadset className="me-2" />
          Call: {number} (Toll-free)
        </li>
      </ul>
    </Card>
  )
}

export default LocationCard
