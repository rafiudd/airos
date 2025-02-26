import Link from 'next/link'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import type { IconType } from 'react-icons'
import { BsLaptop, BsPencilSquare, BsPhone, BsSlashCircle, BsTablet, BsThreeDotsVertical } from 'react-icons/bs'

type LoggedInDeviceCardProps = {
  device: {
    name: string
    type: 'phone' | 'tablet' | 'laptop'
  }
  location: string
  lastActiveAt: string
  isActive?: boolean
}

const getIcon = (device: LoggedInDeviceCardProps['device']['type']): IconType => {
  if (device === 'laptop') return BsLaptop
  else if (device === 'tablet') return BsTablet
  else return BsPhone
}

const LoggedInDeviceCard = ({ device, lastActiveAt, location, isActive }: LoggedInDeviceCardProps) => {
  const Icon = getIcon(device.type)
  return (
    <div className="d-flex border-bottom pb-4 mb-4">
      <span className="fs-5 heading-color">
        <Icon />
      </span>
      <div className="ms-2">
        <p className="heading-color fw-bold mb-0">
          {device.name}
          {isActive && <span className="badge small text-bg-primary ms-1">Active now</span>}
        </p>
        <ul className="nav nav-divider small">
          <li className="nav-item">{location}</li>
          <li className="nav-item">{lastActiveAt}</li>
        </ul>
      </div>
      <Dropdown className="ms-auto" align={'end'}>
        <DropdownToggle as={Link} href="" className="arrow-none text-primary-hover fs-6" data-bs-toggle="dropdown" aria-expanded="false">
          <BsThreeDotsVertical />
        </DropdownToggle>
        <DropdownMenu as={'ul'} className="min-w-auto shadow">
          <li>
            <DropdownItem>
              <BsPencilSquare className="me-2" />
              Edit
            </DropdownItem>
          </li>
          <li>
            <DropdownItem>
              <BsSlashCircle className="me-2" />
              Remove
            </DropdownItem>
          </li>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default LoggedInDeviceCard
