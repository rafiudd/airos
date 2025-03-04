/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dropdown, DropdownToggle } from 'react-bootstrap'
import { getActiveClass } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'


type PortfolioMenuDropdownProps = {
  menuItems: MenuItemType[]
  activeMenuItems: string[]
}

const PortfolioMenuDropdown = ({ menuItems, activeMenuItems }: PortfolioMenuDropdownProps) => {
  return (
    <Dropdown className="nav-item dropdown">
      <DropdownToggle
        href="/brand"
        variant="link"
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, 'portfolio')}`}>
        Brand
      </DropdownToggle>
    </Dropdown>
  )
}

export default PortfolioMenuDropdown
