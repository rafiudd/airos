/* eslint-disable @typescript-eslint/no-unused-vars */
import { getActiveClass } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import { splitArray } from '@/utils/array'
import { Dropdown, DropdownToggle } from 'react-bootstrap'

type DemosMenuDropdownProps = {
  menuItems: MenuItemType[]
  activeMenuItems: string[]
}

const DemosMenuDropdown = ({ menuItems, activeMenuItems }: DemosMenuDropdownProps) => {
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
