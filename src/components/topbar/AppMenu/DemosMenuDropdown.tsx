import { getActiveClass } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import { splitArray } from '@/utils/array'
import Link from 'next/link'
import { Col, Dropdown, DropdownToggle, Row } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa6'

type DemosMenuDropdownProps = {
  menuItems: MenuItemType[]
  activeMenuItems: string[]
}

const DemosMenuDropdown = ({ menuItems, activeMenuItems }: DemosMenuDropdownProps) => {
  const splitMenuitems = splitArray(menuItems, 7)
  return (
    <Dropdown className="nav-item">
      <DropdownToggle
        href="/"
        variant="link"
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, '/')}`}>
        Beranda
      </DropdownToggle>
    </Dropdown>
  )
}

export default DemosMenuDropdown
