import { Card, CardBody, CardHeader } from 'react-bootstrap'
import type { IconType } from 'react-icons'
import { BsPencilSquare, BsPerson } from 'react-icons/bs'
import { FaSignOutAlt } from 'react-icons/fa'

import { ACCOUNT_VERTICAL_MENU_ITEMS } from '@/assets/data/menu-items'
import { useAuthContext } from '@/states/useAuthContext'

import avatar5 from '@/assets/images/avatar/05.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const VerticalNavigationBar = () => {
  const  pathname  = usePathname()

  const { removeSession } = useAuthContext()

  return (
    <Card className="border p-3 w-100">
      <CardHeader className="text-center border-bottom">
        <div className="avatar avatar-xl position-relative mb-2">
          <Image src={avatar5} alt='profile' className="avatar-img rounded-circle border border-2 border-white" />
          <button className="btn btn-sm btn-round btn-dark position-absolute top-50 start-100 translate-middle mt-4 ms-n3" data-bs-toggle="tooltip" data-bs-title="Edit profile">
            <BsPencilSquare size={10} />
          </button>
        </div>
        <h6 className="mb-0">Jacqueline Miller</h6>
        <Link href="mailto:hello@gmail.com" className="text-reset text-primary-hover small">hello@gmail.com</Link>
      </CardHeader>
      <CardBody className="p-0 mt-4">
        <ul className="nav nav-pills-primary-border-start flex-column">

          {(ACCOUNT_VERTICAL_MENU_ITEMS || []).map((item, idx) => {
            const Icon: IconType = item.icon ?? BsPerson
            return (
              <li key={item.key + idx} className="nav-item">
                <Link className={`icons-center w-100 nav-link${pathname === item.url ? ' active' : ''}`} href={item.url ?? ''}>
                  <Icon className="me-2" />
                  {item.label}
                </Link>
              </li>
            )
          })}

          <li className="nav-item">
            <button onClick={removeSession} className="nav-link text-danger icons-center w-100">
              <FaSignOutAlt className="me-2" />
              Sign Out
            </button>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default VerticalNavigationBar