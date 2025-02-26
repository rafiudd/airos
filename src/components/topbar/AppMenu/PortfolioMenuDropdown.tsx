import { Card, CardBody, Col, Dropdown, DropdownToggle, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { getActiveClass } from '@/helpers/menu'
import { FaAngleDown } from 'react-icons/fa6'
import type { MenuItemType } from '@/types/menu'

import portfolioList1Img from '@/assets/images/portfolio/list/01.jpg'
import portfolioList2Img from '@/assets/images/portfolio/list/02.jpg'
import Image from 'next/image'
import Link from 'next/link'

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
