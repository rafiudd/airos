import { getActiveClass } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import Link from 'next/link'
import { Fragment } from 'react'
import { Dropdown, DropdownItem, DropdownToggle } from 'react-bootstrap'
import { BsCardText, BsLifePreserver } from 'react-icons/bs'
import { FaAngleDown, FaChevronRight } from 'react-icons/fa6'

type PagesMenuDropdownProps = {
  menuItems: MenuItemType[]
  activeMenuItems: string[]
}

type SubMenuType = {
  item: MenuItemType
  itemClassName?: string
  linkClassName?: string
  activeMenuItems: string[]
}

const MenuItemWithChildren = ({ item, itemClassName, linkClassName, activeMenuItems }: SubMenuType) => {
  return (
    <Dropdown className={itemClassName}>
      <DropdownToggle variant="link" className={linkClassName} data-bs-toggle="dropdown" aria-haspopup="true">
        {item.label}
        <FaChevronRight size={12} />
      </DropdownToggle>
      <div className="dropdown-menu" data-bs-popper="static">
        {(item.children || []).map((child, idx) => (
          <Fragment key={idx + child.key + idx}>
            {child.children ? (
              <MenuItemWithChildren
                item={child}
                activeMenuItems={activeMenuItems}
                itemClassName="dropdown dropend"
                linkClassName={`nav-link dropdown-link d-flex justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, child.key)}`}
              />
            ) : (
              <MenuItem item={child} linkClassName={`dropdown-item${getActiveClass(activeMenuItems, child.key)}`} activeMenuItems={activeMenuItems} />
            )}
          </Fragment>
        ))}
      </div>
    </Dropdown>
  )
}

const MenuItem = ({ item, linkClassName }: SubMenuType) => {
  return (
    <li>
      <DropdownItem as={Link} className={linkClassName} target={item.target} href={item.url ?? ''}>
        {item.label}
        {item.badge && <span className="badge text-bg-primary ms-2">{item.badge}</span>}
      </DropdownItem>
    </li>
  )
}

const PagesMenuDropdown = ({ menuItems, activeMenuItems }: PagesMenuDropdownProps) => {
  return (
    <Dropdown className="nav-item dropdown">
      <DropdownToggle
        href="/store"
        variant="link"
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, 'pages')}`}>
        Store
      </DropdownToggle>
    </Dropdown>
  )
}

export default PagesMenuDropdown
